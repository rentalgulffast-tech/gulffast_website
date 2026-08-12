import Breadcrumbs from '@/components/Breadcrumbs';
import FaqAccordion from '@/components/FaqAccordion';
import { faqTopics, getAllFaqs } from '@/lib/faq';
import { generateFaqSchema } from '@/lib/seo';

export const metadata = {
  title: 'Frequently Asked Questions (FAQ) | GulfFast Rentals KSA',
  description: 'Real answers on equipment terms, manpower supply, contracts & payment, and compliance & safety for GulfFast rentals and manpower in Saudi Arabia.',
  alternates: {
    canonical: '/faq'
  }
};

export default function FaqPage() {
  const allFaqs = getAllFaqs();
  const faqSchema = generateFaqSchema(allFaqs.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <div className="py-10 bg-[#F0EBE3] text-[#2B2620] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Sitewide FAQ', url: '/faq' }
          ]}
        />

        <div className="my-6 border-b border-[#E2DED4] pb-6">
          <span className="text-[#C0714A] font-bold text-xs uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Sitewide Information &amp; Policy Guidance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 text-sm max-w-2xl mt-2 leading-relaxed">
            {`${allFaqs.length} real questions and answers on equipment terms, manpower supply, contracts & payment, and compliance & safety.`}
          </p>
        </div>

        {/* Topic jump links */}
        <div className="flex flex-wrap gap-2 mb-8">
          {faqTopics.map((topic) => (
            <a
              key={topic.slug}
              href={`#${topic.slug}`}
              className="bg-white border border-[#E2DED4] text-[#0F172A] hover:bg-[#F0EBE3] px-3 py-1.5 rounded-xl text-xs font-bold transition-colors"
            >
              {topic.topic}
            </a>
          ))}
        </div>

        {/* FAQ Accordion Blocks by Topic — schema is injected once above, not per-block */}
        {faqTopics.map((topic) => (
          <div key={topic.slug} id={topic.slug} className="scroll-mt-28">
            <FaqAccordion faqs={topic.faqs} title={topic.topic} injectSchema={false} />
          </div>
        ))}

        {/* Direct Contact Callout */}
        <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 text-center my-10 space-y-4 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#0F172A]">Have a Specific Project Requirement Not Covered Here?</h2>
          <p className="text-slate-600 text-xs max-w-xl mx-auto leading-relaxed">
            Speak directly with our technical sales engineers at our Al Khobar headquarters.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="tel:+966568676710"
              className="px-6 py-2.5 bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
            >
              Call +966 56 867 6710
            </a>
            <a
              href="mailto:sales@gulffast.co"
              className="px-6 py-2.5 bg-[#F0EBE3] hover:bg-[#E2DED4] text-[#0F172A] font-bold text-xs rounded-xl transition-colors border border-[#E2DED4]"
            >
              Email sales@gulffast.co
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
