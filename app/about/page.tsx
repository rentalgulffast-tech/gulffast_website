import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import WhyChooseUsChecklist from '@/components/WhyChooseUsChecklist';
import CertificationsBadges from '@/components/CertificationsBadges';

export const metadata = {
  title: 'About GulfFast | Direct Industrial Equipment & Manpower Supplier KSA',
  description: 'Learn about Arabian Gulf Fast Contracting Co. (GulfFast), established in 1999 in Al Khobar. Direct equipment owner and manpower supplier, including Aramco-approved and TUV-certified trades.',
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  return (
    <div className="py-10 bg-white text-[#12233B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'About GulfFast', url: '/about' }
          ]}
        />

        <div className="my-6 border-b border-[#D7E6F5] pb-6">
          <span className="text-[#2B6CB0] font-bold text-xs uppercase tracking-wider bg-[#EAF4FC] px-3 py-1 rounded-full border border-[#D7E6F5]">
            Established in KSA Since 1999
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12233B] mt-2">
            Arabian Gulf Fast Contracting Co. (GulfFast)
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            Headquartered in Al Khobar, Saudi Arabia, GulfFast is a premier direct owner of heavy construction machinery, transportation fleets, and certified technical manpower for major industrial and infrastructure developments.
          </p>
        </div>

        {/* Corporate Track Record & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-white border border-[#D7E6F5] rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-black text-[#12233B] mb-1 font-mono">25+ Years</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-[#2B6CB0]">Saudi Track Record</p>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
              Founded in 1999 in Al Khobar, supporting Eastern Province turnarounds and Kingdom-wide infrastructure.
            </p>
          </div>

          <div className="bg-white border border-[#D7E6F5] rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-black text-[#12233B] mb-1 font-mono">100% Direct</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-[#2B6CB0]">Fleet Ownership</p>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
              Zero sub-rental markups. All equipment and trade workforce deployed directly from GulfFast yards.
            </p>
          </div>

          <div className="bg-white border border-[#D7E6F5] rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-black text-[#12233B] mb-1 font-mono">85 &amp; 22</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-[#2B6CB0]">Category Depth</p>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
              Equipment and manpower categories, backed by real fleet and workforce data — not a generic catalog.
            </p>
          </div>
        </div>

        {/* Registered Saudi entity — CR/VAT/ISO figures removed pending real values; see request-a-quote for documentation. */}

        {/* Why Choose GulfFast */}
        <div className="my-8">
          <h2 className="text-xl font-extrabold text-[#12233B] mb-4 border-l-4 border-[#2B6CB0] pl-3">
            Why Choose GulfFast
          </h2>
          <WhyChooseUsChecklist />
        </div>

        {/* Certifications & Compliance */}
        <div className="my-8">
          <h2 className="text-xl font-extrabold text-[#12233B] mb-4 border-l-4 border-[#2B6CB0] pl-3">
            Certifications &amp; Compliance
          </h2>
          <CertificationsBadges />
        </div>

        {/* Direct Contact Callout */}
        <div className="bg-[#FFFFFF] text-[#12233B] border border-[#D7E6F5] rounded-2xl p-8 text-center my-10 space-y-4 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#12233B]">Ready to Mobilize Fleet or Technical Crews?</h2>
          <p className="text-slate-600 text-xs max-w-xl mx-auto leading-relaxed">
            Contact our project sales desk in Al Khobar for competitive rental schedules and technical proposals.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/request-a-quote"
              className="px-6 py-2.5 bg-[#2B6CB0] hover:bg-[#1D6FB8] text-white font-bold text-xs rounded-xl transition-colors"
            >
              Request a Quote →
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-white hover:bg-[#EAF4FC] text-[#12233B] font-bold text-xs rounded-xl transition-colors border border-[#D7E6F5]"
            >
              View Office Address
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
