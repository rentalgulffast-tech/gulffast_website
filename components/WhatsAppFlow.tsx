'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { getEquipmentTier1Categories } from '@/lib/equipment';
import { getManpowerTier1Categories } from '@/lib/manpower';
import { cities } from '@/lib/cities';
import { CONTACT } from '@/lib/contact';
import { trackEvent } from '@/lib/analytics';

/**
 * Guided WhatsApp enquiry — three taps, then WhatsApp.
 *
 * Intercepts every wa.me link on the site with one delegated listener, asks the
 * three things that decide who picks the enquiry up, and hands WhatsApp a
 * finished message. No WhatsApp Business API, no monthly cost, and the sales
 * person's phone behaves exactly as before.
 *
 * WHY IT IS THIS SHORT (reduced from 8 steps to 3, 28 Sep 2026)
 * -------------------------------------------------------------
 * The flow used to open by asking name, company and email, then went on to
 * quantity, timing and free-text notes before a review screen. Two problems:
 *
 *  1. It asked for identity BEFORE the person had said what they wanted, which
 *     is the classic place people abandon a form.
 *  2. It was asking for identity WhatsApp is about to hand over anyway — the
 *     moment they send, you have their phone number and profile name.
 *
 * Quantity, timing and any detail are better asked in the chat itself. It is a
 * conversation, not a form, and the sales person can ask in one line.
 *
 * Do not add steps back without a reason stronger than "it would be nice to
 * know". Every extra tap costs completions.
 *
 * There is always an escape hatch — nobody is forced through the questions.
 */

type Need = 'equipment' | 'manpower' | 'other';
type StepId = 'need' | 'category' | 'city';

export default function WhatsAppFlow() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const [need, setNeed] = useState<Need | null>(null);
  const [category, setCategory] = useState('');

  const equipment = getEquipmentTier1Categories();
  const manpower = getManpowerTier1Categories();

  // "Something else" has no category to pick, so it is one step shorter.
  const steps: StepId[] = useMemo(
    () => (need === 'other' ? ['need', 'city'] : ['need', 'category', 'city']),
    [need]
  );

  const step = steps[Math.min(index, steps.length - 1)];

  const close = useCallback(() => {
    setOpen(false);
    setIndex(0);
    setNeed(null);
    setCategory('');
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

  /**
   * Built from the answers so far. `chosenCity` is passed in rather than read
   * from state because the city tap sends immediately — a setState in the same
   * event handler would not have flushed yet.
   */
  const message = (chosenNeed: Need, chosenCategory: string, chosenCity: string) => {
    const heading =
      chosenNeed === 'equipment' ? 'EQUIPMENT RENTAL'
        : chosenNeed === 'manpower' ? 'MANPOWER SUPPLY'
          : 'AN ENQUIRY';
    return [
      `Hello GulfFast — I need ${heading}.`,
      '',
      chosenNeed === 'other'
        ? null
        : `${chosenNeed === 'manpower' ? 'Trade' : 'Category'}: ${chosenCategory}`,
      `Location: ${chosenCity}`,
      '',
      'Sent from rental.gulffast.co'
    ]
      // NOT filter(Boolean) — '' is falsy and the blank lines are intentional.
      .filter((line) => line !== null)
      .join('\n');
  };

  const sendTo = (
    text: string,
    structured: boolean,
    detail: { need: Need | null; category: string; city: string }
  ) => {
    // Parameter names must stay as-is: GTM reads form/need/category/city from
    // the dataLayer via the DLV - * variables.
    trackEvent('generate_lead', {
      form: 'whatsapp_flow',
      need: detail.need ?? 'unspecified',
      category: detail.category || 'unspecified',
      city: detail.city || 'unspecified',
      structured: structured ? 'yes' : 'no'
    });
    window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    close();
  };

  if (!open) return null;

  const back = () => setIndex((i) => Math.max(0, i - 1));

  const pickOption = (value: string) => {
    if (step === 'need') {
      const n: Need = value === 'Equipment rental' ? 'equipment' : value === 'Manpower supply' ? 'manpower' : 'other';
      setNeed(n);
      setIndex((i) => i + 1);
      return;
    }

    if (step === 'category') {
      setCategory(value);
      setIndex((i) => i + 1);
      return;
    }

    // City is the last step — send straight to WhatsApp rather than showing a
    // review screen. The message is still editable in WhatsApp before sending.
    if (step === 'city') {
      const chosenNeed = need ?? 'other';
      sendTo(message(chosenNeed, category, value), true, {
        need: chosenNeed,
        category,
        city: value
      });
    }
  };

  const OPTIONS: Record<StepId, string[]> = {
    need: ['Equipment rental', 'Manpower supply', 'Something else'],
    category: [...(need === 'manpower' ? manpower : equipment).map((c) => c.name), 'Other / not listed'],
    city: [...cities.map((c) => c.name), 'Other site in KSA']
  };

  const TITLES: Record<StepId, string> = {
    need: 'What do you need?',
    category: need === 'manpower' ? 'Which trade?' : 'Which equipment?',
    city: 'Which location?'
  };

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
            {step === 'city' && (
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Last question — this opens WhatsApp with your enquiry ready to send.
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

          <div className="grid grid-cols-1 gap-2">
            {OPTIONS[step].map((option) => (
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
        </div>

        <div className="p-5 pt-0">
          <div className="flex items-center justify-between gap-3">
            {index > 0 ? (
              <button type="button" onClick={back} className="text-xs font-semibold text-muted hover:text-primary">
                ← Back
              </button>
            ) : <span />}
            <button
              type="button"
              onClick={() =>
                sendTo('Hello GulfFast, I would like to make an enquiry.', false, {
                  need,
                  category,
                  city: ''
                })
              }
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
