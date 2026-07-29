import Breadcrumbs from '@/components/Breadcrumbs';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'Frequently Asked Questions (FAQ) | GulfFast Rentals KSA',
  description: 'Comprehensive FAQ covering equipment rental terms, mobilization lead times, manpower Aramco certifications, payment terms, and KSA coverage.',
  alternates: {
    canonical: '/faq'
  }
};

export default function FaqPage() {
  const sitewideFaqs = [
    {
      question: 'Is GulfFast a direct supplier or a third-party equipment broker?',
      answer: 'GulfFast is a direct equipment owner and direct manpower supplier (parent company GulfFast Trading, established 1999 in Al Khobar). All machinery and personnel are deployed directly from our yards without third-party broker markups.'
    },
    {
      question: 'Where is GulfFast headquartered in Saudi Arabia?',
      answer: 'Our headquarters and primary operations hub is located at Building No.6623, Prince Abdulmohsin Ibn Abdulaziz Street, Madinat Al Ummal District, Al Khobar, KSA (34442). We dispatch fleets across Eastern Province, Riyadh, Western Province, and mega-projects like NEOM.'
    },
    {
      question: 'Are all equipment rentals inspected for Saudi Aramco and SABIC site gate passes?',
      answer: 'Yes. All machinery in our fleet carries valid Third-Party Inspection (TPI) stickers and meets Saudi Aramco safety manuals (GI 6.012, GI 7.027, GI 8.001), including spark arrestors, emergency cutoffs, and beacon lights.'
    },
    {
      question: 'What manpower certifications does GulfFast provide for oil & gas projects?',
      answer: 'We supply Aramco-approved 6G pipe welders (WQT card holders), TUV certified Riggers (Levels 1, 2, 3), Scaffolding Supervisors (GI 8.001 green-tag qualified), Heavy Equipment Operators, and NEBOSH/OSHA certified Safety Officers with Work Permit Receiver (WPR) cards.'
    },
    {
      question: 'What rental contract durations are available?',
      answer: 'We offer flexible rental terms ranging from daily emergency dispatches to monthly, annual, and multi-year project fleet leases, available as bare equipment or fully operated & maintained (O&M) packages.'
    },
    {
      question: 'How fast can equipment or manpower be mobilized to Dammam, Jubail, or Yanbu?',
      answer: 'Standard mobilization within Eastern Province (Al Khobar, Dammam, Jubail, Ras Tanura) is 24 to 48 hours following contract signing and gate pass issuance. Emergency backup dispatches can be arranged within hours.'
    },
    {
      question: 'Does GulfFast arrange transport and lowbed haulage for machinery?',
      answer: 'Yes, we own 6x4 tractor trucks and multi-axle 50T-100T lowbed trailers, handling complete mobilization logistics including Ministry of Transport highway overload permits.'
    }
  ];

  return (
    <div className="py-10 bg-[#F5F2EB] text-[#1E293B] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Sitewide FAQ', url: '/faq' }
          ]}
        />

        <div className="my-6 border-b border-[#E2DED4] pb-6">
          <span className="text-[#C2410C] font-bold text-xs uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Sitewide Information &amp; Policy Guidance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] mt-2">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 text-sm max-w-2xl mt-2 leading-relaxed">
            Find answers to common questions about GulfFast equipment rental terms, Aramco gate pass eligibility, manpower certifications, mobilization lead times, and payment terms in Saudi Arabia.
          </p>
        </div>

        {/* FAQ Accordion Component */}
        <FaqAccordion faqs={sitewideFaqs} title="General Service &amp; Operations FAQ" />

        {/* Direct Contact Callout */}
        <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 text-center my-10 space-y-4 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#0F2942]">Have a Specific Project Requirement Not Covered Here?</h2>
          <p className="text-slate-600 text-xs max-w-xl mx-auto leading-relaxed">
            Speak directly with our technical sales engineers at our Al Khobar headquarters.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="tel:+966568676710"
              className="px-6 py-2.5 bg-[#0F2942] hover:bg-[#C2410C] text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
            >
              Call +966 56 867 6710
            </a>
            <a
              href="mailto:sales@gulffast.co"
              className="px-6 py-2.5 bg-[#F5F2EB] hover:bg-[#E2DED4] text-[#0F2942] font-bold text-xs rounded-xl transition-colors border border-[#E2DED4]"
            >
              Email sales@gulffast.co
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
