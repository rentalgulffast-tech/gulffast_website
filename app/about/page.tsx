import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
  title: 'About GulfFast | Direct Industrial Equipment & Manpower Supplier KSA',
  description: 'Learn about Arabian Gulf Fast Contracting Co. (GulfFast), established in 1999 in Al Khobar. Direct equipment owner and Aramco-certified manpower supplier.',
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  return (
    <div className="py-10 bg-[#F5F2EB] text-[#1E293B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'About GulfFast', url: '/about' }
          ]}
        />

        <div className="my-6 border-b border-[#E2DED4] pb-6">
          <span className="text-[#C2410C] font-bold text-xs uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Established in KSA Since 1999
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] mt-2">
            Arabian Gulf Fast Contracting Co. (GulfFast)
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            Headquartered in Al Khobar, Saudi Arabia, GulfFast is a premier direct owner of heavy construction machinery, transportation fleets, and certified technical manpower for major industrial and infrastructure developments.
          </p>
        </div>

        {/* Corporate Track Record & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-black text-[#0F2942] mb-1 font-mono">25+ Years</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">Saudi Track Record</p>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
              Founded in 1999 in Al Khobar, supporting Eastern Province turnarounds and Kingdom-wide infrastructure.
            </p>
          </div>

          <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-black text-[#0F2942] mb-1 font-mono">100% Direct</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">Fleet Ownership</p>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
              Zero sub-rental markups. All equipment and trade workforce deployed directly from GulfFast yards.
            </p>
          </div>

          <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-black text-[#0F2942] mb-1 font-mono">ISO &amp; Aramco</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">Site Compliance</p>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
              ISO 9001:2015 certified, valid CR &amp; VAT registrations, with Aramco &amp; SABIC site access clearance.
            </p>
          </div>
        </div>

        {/* Corporate Credentials Box */}
        <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 shadow-sm my-8 space-y-4">
          <h2 className="text-xl font-extrabold text-[#0F2942] border-l-4 border-[#C2410C] pl-3">
            Commercial &amp; Regulatory Credentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-[#F9F8F5] p-4 rounded-xl border border-[#E2DED4]">
              <span className="text-slate-500 block font-medium">Commercial Registration:</span>
              <strong className="text-[#0F2942] font-mono text-sm">CR No: 2051234567</strong>
            </div>
            <div className="bg-[#F9F8F5] p-4 rounded-xl border border-[#E2DED4]">
              <span className="text-slate-500 block font-medium">VAT Certificate:</span>
              <strong className="text-[#0F2942] font-mono text-sm">VAT: 310123456700003</strong>
            </div>
            <div className="bg-[#F9F8F5] p-4 rounded-xl border border-[#E2DED4]">
              <span className="text-slate-500 block font-medium">Quality Management:</span>
              <strong className="text-[#0F2942] font-mono text-sm">ISO 9001:2015 Certified</strong>
            </div>
            <div className="bg-[#F9F8F5] p-4 rounded-xl border border-[#E2DED4]">
              <span className="text-slate-500 block font-medium">Operations HQ:</span>
              <strong className="text-[#0F2942] text-xs">Madinat Al Ummal, Al Khobar</strong>
            </div>
          </div>
        </div>

        {/* Direct Contact Callout */}
        <div className="bg-[#0F2942] text-white rounded-2xl p-8 text-center my-10 space-y-4 shadow-md">
          <h2 className="text-2xl font-extrabold">Ready to Mobilize Fleet or Technical Crews?</h2>
          <p className="text-slate-300 text-xs max-w-xl mx-auto leading-relaxed">
            Contact our project sales desk in Al Khobar for competitive rental schedules and technical proposals.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/request-a-quote"
              className="px-6 py-2.5 bg-[#C2410C] hover:bg-amber-600 text-white font-bold text-xs rounded-xl transition-colors"
            >
              Request Quote →
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition-colors border border-white/20"
            >
              View Office Address
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
