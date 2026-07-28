'use client';

import { useState } from 'react';
import { generateFaqSchema } from '@/lib/seo';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  injectSchema?: boolean;
}

export default function FaqAccordion({ faqs, title = 'Frequently Asked Questions', injectSchema = true }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = injectSchema ? generateFaqSchema(faqs) : null;

  return (
    <div className="my-10">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {title && (
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-6 border-l-4 border-amber-500 pl-3">
          {title}
        </h2>
      )}

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 text-left font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between gap-4 text-sm sm:text-base hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className={`w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 transition-transform ${isOpen ? 'rotate-180 bg-amber-500/20 text-amber-500' : ''}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
