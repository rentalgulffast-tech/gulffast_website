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
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-6 border-l-4 border-[#C0714A] pl-3">
          {title}
        </h2>
      )}

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-[#E2DED4] rounded-xl overflow-hidden bg-white shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 text-left font-bold text-[#0F172A] flex items-center justify-between gap-4 text-sm sm:text-base hover:text-[#C0714A] transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 transition-transform ${isOpen ? 'rotate-180 bg-[#FFF7ED] text-[#C0714A]' : ''}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-[#E2DED4]">
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
