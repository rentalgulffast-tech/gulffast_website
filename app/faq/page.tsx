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
    <div className="py-10 bg-slate-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Sitewide FAQ', url: '/faq' }
          ]}
        />

        <div className="my-8 border-b border-slate-800 pb-8">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
            Sitewide Information &amp; Policy Guidance
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Find answers to common questions about GulfFast equipment rental terms, Aramco gate pass eligibility, manpower certifications, mobilization lead times, and payment terms in Saudi Arabia.
          </p>
        </div>

        {/* FAQ Accordion Component */}
        <FaqAccordion faqs={sitewideFaqs} title="General Service &amp; Operations FAQ" />

        {/* Direct Contact Callout */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center my-12 space-y-4">
          <h2 className="text-xl font-bold text-white">Have a Specific Project Requirement Not Covered Here?</h2>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            Speak directly with our technical sales engineers at our Al Khobar headquarters.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="tel:+966568676710"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg transition-colors"
            >
              Call +966 56 867 6710
            </a>
            <a
              href="mailto:sales@gulffast.co"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs rounded-lg transition-colors border border-slate-700"
            >
              Email sales@gulffast.co
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
