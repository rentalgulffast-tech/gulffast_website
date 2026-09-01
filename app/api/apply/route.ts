import { NextRequest, NextResponse, after } from 'next/server';
import { Resend } from 'resend';
import { CONTACT } from '@/lib/contact';
import { logToSheet } from '@/lib/sheet-log';
import { isRateLimited } from '@/lib/rate-limit';
import { manpowerCategories } from '@/lib/manpower-categories';

export const runtime = 'nodejs';

const MAX_TEXT_LENGTH = 2000;
const MAX_CV_BYTES = 3 * 1024 * 1024; // 3MB
const PDF_MAGIC = '%PDF-';
const GENERIC_SEND_FAILURE = `We could not submit your application right now. Please call ${CONTACT.phonePrimary} or email ${CONTACT.email} directly.`;

const VALID_CATEGORIES = new Set(manpowerCategories.map((category) => category.name));

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function field(value: FormDataEntryValue | null, maxLength = MAX_TEXT_LENGTH): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function isValidEmail(value: string): boolean {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string): boolean {
  return /^[+\d][\d\s-]{6,19}$/.test(value.trim());
}

interface Candidate {
  fullName: string;
  jobCategory: string;
  nationality: string;
  yearsExperience: number;
  currentLocation: string;
  phone: string;
  email: string;
  skills: string;
  certifications: string;
  preferredSalary: string;
}

export async function POST(request: NextRequest) {
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please wait a few minutes and try again.' },
      { status: 429 }
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: a real applicant never fills this. Silently accept and discard.
  if (field(form.get('website'), 200) !== '') {
    return NextResponse.json({ ok: true });
  }

  const yearsRaw = field(form.get('yearsExperience'), 20);
  const years = Number(yearsRaw);

  const candidate: Candidate = {
    fullName: field(form.get('fullName'), 200),
    jobCategory: field(form.get('jobCategory'), 200),
    nationality: field(form.get('nationality'), 100),
    yearsExperience: years,
    currentLocation: field(form.get('currentLocation'), 200),
    phone: field(form.get('phone'), 40),
    email: field(form.get('email'), 254),
    skills: field(form.get('skills')),
    certifications: field(form.get('certifications')),
    preferredSalary: field(form.get('preferredSalary'), 200)
  };

  const invalid =
    !candidate.fullName ||
    !VALID_CATEGORIES.has(candidate.jobCategory) ||
    !candidate.nationality ||
    !candidate.currentLocation ||
    !isValidPhone(candidate.phone) ||
    !isValidEmail(candidate.email) ||
    yearsRaw === '' ||
    !Number.isFinite(years) ||
    years < 0 ||
    years > 70;

  if (invalid) {
    return NextResponse.json(
      { ok: false, error: 'Please fill in all required fields correctly and try again.' },
      { status: 400 }
    );
  }

  const cv = form.get('cv');
  if (!(cv instanceof File) || cv.size === 0) {
    return NextResponse.json(
      { ok: false, error: 'Please attach your CV as a PDF file.' },
      { status: 400 }
    );
  }
  if (cv.size > MAX_CV_BYTES) {
    return NextResponse.json(
      { ok: false, error: 'Your CV must be 3MB or smaller.' },
      { status: 400 }
    );
  }

  const cvBuffer = Buffer.from(await cv.arrayBuffer());

  // Re-check size against the actual bytes, not just the declared size.
  if (cvBuffer.length > MAX_CV_BYTES) {
    return NextResponse.json(
      { ok: false, error: 'Your CV must be 3MB or smaller.' },
      { status: 400 }
    );
  }

  // Verify it is genuinely a PDF by its magic bytes, not the filename.
  if (cvBuffer.subarray(0, 5).toString('latin1') !== PDF_MAGIC) {
    return NextResponse.json(
      { ok: false, error: 'Your CV must be a valid PDF file.' },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured.');
    return NextResponse.json({ ok: false, error: GENERIC_SEND_FAILURE }, { status: 500 });
  }

  const safeName = candidate.fullName.replace(/[^\p{L}\p{N} .,'-]/gu, '').trim().slice(0, 80) || 'Candidate';
  const subject = `New Job Application — ${candidate.jobCategory} — ${safeName}`;
  const text = [
    `Job category: ${candidate.jobCategory}`,
    `Full name: ${candidate.fullName}`,
    `Nationality: ${candidate.nationality}`,
    `Years of experience: ${candidate.yearsExperience}`,
    `Current location: ${candidate.currentLocation}`,
    `Phone: ${candidate.phone}`,
    `Email: ${candidate.email}`,
    `Preferred salary: ${candidate.preferredSalary || '-'}`,
    '',
    `Skills: ${candidate.skills || '-'}`,
    `Certifications: ${candidate.certifications || '-'}`
  ].join('\n');

  const fromAddress = process.env.RESEND_FROM_EMAIL || 'GulfFast Website <onboarding@resend.dev>';

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: CONTACT.email,
      subject,
      text,
      replyTo: candidate.email,
      attachments: [
        {
          filename: `CV - ${safeName}.pdf`,
          content: cvBuffer,
          contentType: 'application/pdf'
        }
      ]
    });

    if (error) {
      console.error('Resend rejected the application email.');
      return NextResponse.json({ ok: false, error: GENERIC_SEND_FAILURE }, { status: 502 });
    }
  } catch {
    console.error('Failed to send the application email.');
    return NextResponse.json({ ok: false, error: GENERIC_SEND_FAILURE }, { status: 502 });
  }

  // Mirror into the Google Sheet after the response is sent, so the visitor
  // never waits on it and a sheet outage cannot affect the submission.
  after(async () => {
    await logToSheet({
      type: 'candidate',
      record: {
        fullName: candidate.fullName,
        jobCategory: candidate.jobCategory,
        nationality: candidate.nationality,
        yearsExperience: candidate.yearsExperience,
        currentLocation: candidate.currentLocation,
        phone: candidate.phone,
        email: candidate.email,
        skills: candidate.skills,
        certifications: candidate.certifications,
        preferredSalary: candidate.preferredSalary
      },
      cvBase64: cvBuffer.toString('base64')
    });
  });

  return NextResponse.json({ ok: true });
}
