'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getEquipmentTier1Categories } from '@/lib/equipment';
import { getManpowerTier1Categories } from '@/lib/manpower';
import { cities } from '@/lib/cities';
import { CONTACT } from '@/lib/contact';
import { trackEvent } from '@/lib/analytics';

/**
 * Guided WhatsApp enquiry.
 *
 * Intercepts every wa.me link on the site with one delegated listener, collects
 * who is asking and what they need, then hands WhatsApp a finished message.
 * No WhatsApp Business API, no monthly cost, and the sales person's phone
 * behaves exactly as before.
 *
 * There is always an escape hatch — nobody is forced through the questions.
 */

type Need = 'equipment' | 'manpower' | 'other';
type StepId = 'contact' | 'need' | 'category' | 'city' | 'quantity' | 'timing' | 'notes' | 'review';

const TIMING = ['Immediately / emergency', 'Within 1 week', 'Within 1 month', 'Long-term contract'];

const INPUT =
  'w-full px-3.5 py-2.5 rounded-xl bg-background border border-border text-foreground text-base ' +
  'focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary';

export default function WhatsAppFlow() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [need, setNeed] = useState<Need | null>(null);
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [quantity, setQuantity] = useState('');
  const [timing, setTiming] = useState('');
  const [notes, setNotes] = useState('');

  const firstFieldRef = useRef<HTMLInputElement>(null);

  const equipment = getEquipmentTier1Categories();
  const manpower = getManpowerTier1Categories();

  const steps: StepId[] = useMemo(
    () =>
      need === 'other'
        ? ['contact', 'need', 'city', 'timing', 'notes', 'review']
        : ['contact', 'need', 'category', 'city', 'quantity', 'timing', 'notes', 'review'],
    [need]
  );

  const step = steps[Math.min(index, steps.length - 1)];

  const close = useCallback(() => {
    setOpen(false);
    setIndex(0);
    setName(''); setCompany(''); setEmail('');
    setNeed(null); setCategory(''); setCity(''); setQuantity(''); setTiming(''); setNotes('');
  }, []);

  // Intercept every WhatsApp link on the site, including any added later.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.button !== 0) return;
      const link = (event.target as HTMLElement | null)?.closest?.('a');
      if (!link || !(link.getAttribute('href') || '').includes('wa.me')) return;
      event.preventDefault();
      trackEvent('whatsapp_flow_open', { page_path: window.location.pathname });
      setOpen(true);
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  useEffect(() => {
    if (open) firstFieldRef.current?.focus();
  }, [open, step]);

  const message = () => {
    const heading =
      need === 'equipment' ? 'EQUIPMENT RENTAL' : need === 'manpower' ? 'MANPOWER SUPPLY' : 'AN ENQUIRY';
    return [
      `Hello GulfFast — I need ${heading}.`,
      '',
      `Name: ${name}`,
      `Company: ${company}`,
      email ? `Email: ${email}` : null,
      '',
      need === 'other' ? null : `${need === 'manpower' ? 'Trade' : 'Category'}: ${category}`,
      `Location: ${city}`,
      need === 'other' ? null : `Quantity: ${quantity}`,
      `Needed: ${timing}`,
      notes ? '' : null,
      notes ? `Details: ${notes}` : null,
      '',
      'Sent from rental.gulffast.co'
    ]
      .filter((line) => line !== null)
      .join('\n');
  };

  const sendTo = (text: string, structured: boolean) => {
    trackEvent('generate_lead', {
      form: 'whatsapp_flow',
      need: need ?? 'unspecified',
      category: category || 'unspecified',
      city: city || 'unspecified',
      structured: structured ? 'yes' : 'no'
    });
    window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    close();
  };

  if (!open) return null;

  const next = () => setIndex((i) => i + 1);
  const back = () => setIndex((i) => Math.max(0, i - 1));

  const pickOption = (value: string) => {
    if (step === 'need') {
      const n: Need = value === 'Equipment rental' ? 'equipment' : value === 'Manpower supply' ? 'manpower' : 'other';
      setNeed(n);
    } else if (step === 'category') setCategory(value);
    else if (step === 'city') setCity(value);
    else if (step === 'timing') setTiming(value);
    next();
  };

  const OPTIONS: Partial<Record<StepId, string[]>> = {
    need: ['Equipment rental', 'Manpower supply', 'Something else'],
    category: [...(need === 'manpower' ? manpower : equipment).map((c) => c.name), 'Other / not listed'],
    city: [...cities.map((c) => c.name), 'Other site in KSA'],
    timing: TIMING
  };

  const TITLES: Record<StepId, string> = {
    contact: 'Who are we speaking with?',
    need: 'What do you need?',
    category: need === 'manpower' ? 'Which trade?' : 'Which equipment?',
    city: 'Which location?',
    quantity: need === 'manpower' ? 'How many people?' : 'How many units?',
    timing: 'When do you need it?',
    notes: 'Anything else we should know?',
    review: 'Ready to send'
  };

  const contactReady = name.trim().length > 1 && company.trim().length > 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-primary-deep/60 backdrop-blur-sm sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="WhatsApp enquiry"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="bg-card-background w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[90vh] flex flex-col">

        <div className="flex items-start justify-between gap-3 p-5 border-b border-border">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-ink">WhatsApp enquiry</p>
            <h2 className="text-lg font-extrabold text-primary mt-0.5 leading-snug">{TITLES[step]}</h2>
            {step === 'contact' && (
              <p className="text-xs text-muted mt-1 leading-relaxed">
                So our team can prepare your quotation before replying.
              </p>
            )}
            {step === 'notes' && (
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Specifications, site conditions, certification requirements — optional.
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="shrink-0 p-1.5 rounded-lg text-muted hover:text-primary hover:bg-tint"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 overflow-y-auto">
          <div className="flex gap-1.5 mb-4" aria-hidden="true">
            {steps.map((s, i) => (
              <span key={s} className={`h-1 flex-1 rounded-full ${i <= index ? 'bg-accent-strong' : 'bg-border'}`} />
            ))}
          </div>

          {step === 'contact' && (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-primary mb-1">Your name *</label>
                <input ref={firstFieldRef} type="text" value={name} onChange={(e) => setName(e.target.value)} className={INPUT} />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary mb-1">Company *</label>
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className={INPUT} />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary mb-1">Email (optional)</label>
                <input type="email" inputMode="email" placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className={INPUT} />
              </div>
            </div>
          )}

          {OPTIONS[step] && (
            <div className="grid grid-cols-1 gap-2">
              {OPTIONS[step]!.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => pickOption(option)}
                  className="text-left px-4 py-3 rounded-xl border border-border bg-background hover:border-primary/40 hover:bg-tint text-sm font-semibold text-foreground transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {step === 'quantity' && (
            <input
              ref={firstFieldRef}
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && quantity.trim()) next(); }}
              placeholder={need === 'manpower' ? 'e.g. 12 scaffolders' : 'e.g. 3 units, 20 ton'}
              className={INPUT}
            />
          )}

          {step === 'notes' && (
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Type here…"
              className={`${INPUT} resize-none`}
            />
          )}

          {step === 'review' && (
            <div className="space-y-3">
              <p className="text-xs text-muted leading-relaxed">
                This opens WhatsApp with your enquiry already written. You can edit it before sending.
              </p>
              <div className="bg-background border border-border rounded-xl p-4 text-xs text-foreground leading-relaxed whitespace-pre-line">
                {message()}
              </div>
            </div>
          )}
        </div>

        <div className="p-5 pt-0 space-y-2">
          {step === 'contact' && (
            <button
              type="button"
              disabled={!contactReady}
              onClick={next}
              className="w-full px-5 py-3 rounded-xl bg-primary hover:bg-accent-strong disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors"
            >
              Continue
            </button>
          )}

          {step === 'quantity' && (
            <button
              type="button"
              disabled={!quantity.trim()}
              onClick={next}
              className="w-full px-5 py-3 rounded-xl bg-primary hover:bg-accent-strong disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors"
            >
              Continue
            </button>
          )}

          {step === 'notes' && (
            <button
              type="button"
              onClick={next}
              className="w-full px-5 py-3 rounded-xl bg-primary hover:bg-accent-strong text-white font-bold text-sm transition-colors"
            >
              {notes.trim() ? 'Continue' : 'Skip this'}
            </button>
          )}

          {step === 'review' && (
            <button
              type="button"
              onClick={() => sendTo(message(), true)}
              className="w-full px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm transition-colors"
            >
              Open WhatsApp
            </button>
          )}

          <div className="flex items-center justify-between gap-3">
            {index > 0 ? (
              <button type="button" onClick={back} className="text-xs font-semibold text-muted hover:text-primary">
                ← Back
              </button>
            ) : <span />}
            <button
              type="button"
              onClick={() => sendTo('Hello GulfFast, I would like to make an enquiry.', false)}
              className="text-xs font-semibold text-accent-strong hover:text-accent-ink"
            >
              Skip the questions, just chat →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
