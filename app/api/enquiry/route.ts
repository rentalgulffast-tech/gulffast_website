import { NextRequest, NextResponse, after } from 'next/server';
import { Resend } from 'resend';
import { CONTACT } from '@/lib/contact';
import { logToSheet } from '@/lib/sheet-log';
import { isRateLimited } from '@/lib/rate-limit';

export const runtime = 'nodejs';

const MAX_TEXT_LENGTH = 2000;
const GENERIC_SEND_FAILURE = `We could not send your request right now. Please call ${CONTACT.phonePrimary} or email ${CONTACT.email} directly.`;

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function isNonEmptyString(value: unknown, maxLength = MAX_TEXT_LENGTH): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength;
}

function isValidEmail(value: unknown): value is string {
  return typeof value === 'string' && value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: unknown): value is string {
  return typeof value === 'string' && /^[+\d][\d\s-]{6,19}$/.test(value.trim());
}

interface QuoteEnquiry {
  formType: 'quote';
  need?: string;
  equipmentCategory?: string;
  manpowerCategory?: string;
  city: string;
  duration: string;
  quantity?: string;
  fullName: string;
  companyName: string;
  phone: string;
  email?: string;
}

interface SupplierEnquiry {
  formType: 'supplier';
  company: string;
  contactName: string;
  phone: string;
  email?: string;
  category: string;
  brandModel?: string;
  city: string;
  details?: string;
}

type Enquiry = QuoteEnquiry | SupplierEnquiry;

function validateQuote(body: Record<string, unknown>): QuoteEnquiry | null {
  if (!isNonEmptyString(body.fullName, 200)) return null;
  if (!isNonEmptyString(body.companyName, 200)) return null;
  if (!isValidPhone(body.phone)) return null;
  if (!isNonEmptyString(body.city, 100)) return null;
  if (!isNonEmptyString(body.duration, 100)) return null;
  const equipmentCategory = isNonEmptyString(body.equipmentCategory, 200) ? body.equipmentCategory : undefined;
  const manpowerCategory = isNonEmptyString(body.manpowerCategory, 200) ? body.manpowerCategory : undefined;
  if (!equipmentCategory && !manpowerCategory) return null;
  if (body.email !== undefined && body.email !== '' && !isValidEmail(body.email)) return null;

  return {
    formType: 'quote',
    need: isNonEmptyString(body.need, 20) ? body.need : undefined,
    equipmentCategory,
    manpowerCategory,
    city: body.city,
    duration: body.duration,
    quantity: isNonEmptyString(body.quantity, 200) ? body.quantity : undefined,
    fullName: body.fullName,
    companyName: body.companyName,
    phone: body.phone.trim(),
    email: isValidEmail(body.email) ? body.email : undefined
  };
}

function validateSupplier(body: Record<string, unknown>): SupplierEnquiry | null {
  if (!isNonEmptyString(body.company, 200)) return null;
  if (!isNonEmptyString(body.contactName, 200)) return null;
  if (!isValidPhone(body.phone)) return null;
  if (!isNonEmptyString(body.category, 200)) return null;
  if (!isNonEmptyString(body.city, 100)) return null;
  if (body.email !== undefined && body.email !== '' && !isValidEmail(body.email)) return null;

  return {
    formType: 'supplier',
    company: body.company,
    contactName: body.contactName,
    phone: body.phone.trim(),
    email: isValidEmail(body.email) ? body.email : undefined,
    category: body.category,
    brandModel: isNonEmptyString(body.brandModel, 200) ? body.brandModel : undefined,
    city: body.city,
    details: isNonEmptyString(body.details, MAX_TEXT_LENGTH) ? body.details : undefined
  };
}

function buildEmail(enquiry: Enquiry): { subject: string; text: string } {
  if (enquiry.formType === 'quote') {
    const item = [enquiry.equipmentCategory, enquiry.manpowerCategory].filter(Boolean).join(' / ') || 'General enquiry';
    return {
      subject: `New Quote Request — ${item} — ${enquiry.city}`,
      text: [
        `Need: ${enquiry.need ?? '-'}`,
        `Equipment category: ${enquiry.equipmentCategory ?? '-'}`,
        `Manpower category: ${enquiry.manpowerCategory ?? '-'}`,
        `City / site location: ${enquiry.city}`,
        `Duration / urgency: ${enquiry.duration}`,
        `Quantity: ${enquiry.quantity ?? '-'}`,
        '',
        `Full name: ${enquiry.fullName}`,
        `Company: ${enquiry.companyName}`,
        `Phone: ${enquiry.phone}`,
        `Email: ${enquiry.email ?? '-'}`
      ].join('\n')
    };
  }

  return {
    subject: `New Supplier Equipment Intake — ${enquiry.company}`,
    text: [
      `Company: ${enquiry.company}`,
      `Contact name: ${enquiry.contactName}`,
      `Phone: ${enquiry.phone}`,
      `Email: ${enquiry.email ?? '-'}`,
      `Equipment category: ${enquiry.category}`,
      `Brand / model: ${enquiry.brandModel ?? '-'}`,
      `City: ${enquiry.city}`,
      '',
      `Details: ${enquiry.details ?? '-'}`
    ].join('\n')
  };
}

export async function POST(request: NextRequest) {
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please wait a few minutes and try again.' },
      { status: 429 }
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  if (typeof raw !== 'object' || raw === null) {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const body = raw as Record<string, unknown>;
  const enquiry: Enquiry | null =
    body.formType === 'supplier'
      ? validateSupplier(body)
      : body.formType === 'quote'
        ? validateQuote(body)
        : null;

  if (!enquiry) {
    return NextResponse.json(
      { ok: false, error: 'Please fill in all required fields correctly and try again.' },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured.');
    return NextResponse.json({ ok: false, error: GENERIC_SEND_FAILURE }, { status: 500 });
  }

  const { subject, text } = buildEmail(enquiry);
  const fromAddress = process.env.RESEND_FROM_EMAIL || 'GulfFast Website <onboarding@resend.dev>';

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: CONTACT.email,
      subject,
      text,
      replyTo: enquiry.email
    });

    if (error) {
      console.error('Resend send error:', error);
      return NextResponse.json({ ok: false, error: GENERIC_SEND_FAILURE }, { status: 502 });
    }
  } catch (error) {
    console.error('Failed to send enquiry email:', error);
    return NextResponse.json({ ok: false, error: GENERIC_SEND_FAILURE }, { status: 502 });
  }

  after(async () => {
    await logToSheet(
      enquiry.formType === 'supplier'
        ? {
            type: 'supplier',
            record: {
              company: enquiry.company,
              contactName: enquiry.contactName,
              phone: enquiry.phone,
              email: enquiry.email,
              category: enquiry.category,
              brandModel: enquiry.brandModel,
              city: enquiry.city,
              details: enquiry.details
            }
          }
        : {
            type: 'quote',
            record: {
              fullName: enquiry.fullName,
              companyName: enquiry.companyName,
              phone: enquiry.phone,
              email: enquiry.email,
              need: enquiry.need,
              equipmentCategory: enquiry.equipmentCategory,
              manpowerCategory: enquiry.manpowerCategory,
              city: enquiry.city,
              duration: enquiry.duration,
              quantity: enquiry.quantity
            }
          }
    );
  });

  return NextResponse.json({ ok: true });
}
