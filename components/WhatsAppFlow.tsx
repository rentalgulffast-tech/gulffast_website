'use client';

import { useCallback, useEffect, useState } from 'react';
import { CONTACT } from '@/lib/contact';
import { trackEvent } from '@/lib/analytics';

/**
 * Guided WhatsApp enquiry — one question, then WhatsApp.
 *
 * Intercepts every wa.me link on the site with one delegated listener, asks the
 * single question that decides who picks the enquiry up, and hands WhatsApp a
 * message the customer finishes in their own words.
 *
 * HISTORY — why this keeps getting shorter
 * ----------------------------------------
 *   v1  8 steps: contact (name/company/email) → need → category → city →
 *       quantity → timing → notes → review.
 *   v2  3 steps: need → category → city. The contact step was asking for
 *       identity WhatsApp hands over anyway, before the person had said what
 *       they wanted — the classic place people abandon a form.
 *   v3  1 step (this): need only. Everything else is faster to ask in the chat
 *       than to tap through a list, and the customer is already writing.
 *
 * The message ends with an open "My requirement:" line so the cursor lands
 * where they should type. WhatsApp places the caret at the end of a prefilled
 * message, so this is an invitation rather than an instruction.
 *
 * Do not add steps back without evidence that the missing field actually costs
 * the sales team time. Every tap costs completions.
 */

type Need = 'equipment' | 'manpower' | 'other';

const CHOICES: { label: string; need: Need; heading: string }[] = [
  { label: 'Equipment rental', need: 'equipment', heading: 'EQUIPMENT RENTAL' },
  { label: 'Manpower supply', need: 'manpower', heading: 'MANPOWER SUPPLY' },
  { label: 'Something else', need: 'other', heading: 'to make an enquiry' }
];

export default function WhatsAppFlow() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

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

  const send = (choice: { need: Need; heading: string } | null) => {
    const text = choice
      ? [
          `Hello GulfFast — I need ${choice.heading}.`,
          '',
          'My requirement: '
        ].join('\n')
      : 'Hello GulfFast, I would like to make an enquiry.';

    // Parameter names must stay as-is: GTM reads form/need/category/city from
    // the dataLayer via the DLV - * variables. Category and city are no longer
    // collected here, so they report as 'unspecified' rather than disappearing —
    // a missing parameter would break the GA4 tag's event parameter rows.
    trackEvent('generate_lead', {
      form: 'whatsapp_flow',
      need: choice?.need ?? 'unspecified',
      category: 'unspecified',
      city: 'unspecified',
      structured: choice ? 'yes' : 'no'
    });

    window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    close();
  };

  if (!open) return null;

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
            <h2 className="text-lg font-extrabold text-primary mt-0.5 leading-snug">What do you need?</h2>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              This opens WhatsApp — tell us the details there and we will reply.
            </p>
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

        <div className="p-5">
          <div className="grid grid-cols-1 gap-2">
            {CHOICES.map((choice) => (
              <button
                key={choice.need}
                type="button"
                onClick={() => send(choice)}
                className="text-left px-4 py-3 rounded-xl border border-border bg-background hover:border-primary/40 hover:bg-tint text-sm font-semibold text-foreground transition-colors"
              >
                {choice.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 pt-0 flex justify-end">
          <button
            type="button"
            onClick={() => send(null)}
            className="text-xs font-semibold text-accent-strong hover:text-accent-ink"
          >
            Skip the question, just chat →
          </button>
        </div>
      </div>
    </div>
  );
}
