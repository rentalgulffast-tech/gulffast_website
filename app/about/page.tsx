import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import WhyChooseUsChecklist from '@/components/WhyChooseUsChecklist';
import CertificationsBadges from '@/components/CertificationsBadges';
import { BRAND_LEGAL_NAME } from '@/lib/brand';

export const metadata = {
  title: 'About GulfFast | Direct Industrial Equipment & Manpower Supplier KSA',
  description: `Learn about ${BRAND_LEGAL_NAME} (GulfFast), established in 1999 in Al Khobar. Direct equipment owner and Aramco-certified manpower supplier.`,
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  return (
    <div className="py-10 bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'About GulfFast', url: '/about' }
          ]}
        />

        <div className="my-6 border-b border-border pb-6">
          <span className="text-accent-strong font-bold text-xs uppercase tracking-wider bg-accent-strong/10 px-3 py-1 rounded-full border border-accent-strong/20">
            Established in KSA Since 1999
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mt-2">
            {BRAND_LEGAL_NAME} (GulfFast)
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            Headquartered in Al Khobar, Saudi Arabia, GulfFast is a premier direct owner of heavy construction machinery, transportation fleets, and certified technical manpower for major industrial and infrastructure developments.
          </p>
        </div>

        {/* Corporate Track Record & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-black text-primary mb-1 font-mono">25+ Years</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-accent-strong">Saudi Track Record</p>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
              Founded in 1999 in Al Khobar, supporting Eastern Province turnarounds and Kingdom-wide infrastructure.
            </p>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-black text-primary mb-1 font-mono">100% Direct</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-accent-strong">Fleet Ownership</p>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
              Zero sub-rental markups. All equipment and trade workforce deployed directly from GulfFast yards.
            </p>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-black text-primary mb-1 font-mono">ISO &amp; Aramco</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-accent-strong">Site Compliance</p>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
              ISO 9001:2015 certified, valid CR &amp; VAT registrations, with Aramco &amp; SABIC site access clearance.
            </p>
          </div>
        </div>

        {/* Corporate Credentials Box */}
        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm my-8 space-y-4">
          <h2 className="text-xl font-extrabold text-primary border-l-4 border-accent pl-3">
            Commercial &amp; Regulatory Credentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-tint p-4 rounded-xl border border-border">
              <span className="text-slate-500 block font-medium">Commercial Registration:</span>
              <strong className="text-primary font-mono text-sm">CR No: 2051256547</strong>
            </div>
            <div className="bg-tint p-4 rounded-xl border border-border">
              <span className="text-slate-500 block font-medium">VAT Certificate:</span>
              <strong className="text-primary font-mono text-sm">VAT: 311441936900003</strong>
            </div>
            <div className="bg-tint p-4 rounded-xl border border-border">
              <span className="text-slate-500 block font-medium">Quality Management:</span>
              <strong className="text-primary font-mono text-sm">ISO 9001:2015 Certified</strong>
            </div>
            <div className="bg-tint p-4 rounded-xl border border-border">
              <span className="text-slate-500 block font-medium">Operations HQ:</span>
              <strong className="text-primary text-xs">Madinat Al Ummal, Al Khobar</strong>
            </div>
          </div>
        </div>

        {/* Why Choose GulfFast */}
        <div className="my-8">
          <h2 className="text-xl font-extrabold text-primary mb-4 border-l-4 border-accent pl-3">
            Why Choose GulfFast
          </h2>
          <WhyChooseUsChecklist />
        </div>

        {/* Certifications & Compliance */}
        <div className="my-8">
          <h2 className="text-xl font-extrabold text-primary mb-4 border-l-4 border-accent pl-3">
            Certifications &amp; Compliance
          </h2>
          <CertificationsBadges />
        </div>

        {/* Direct Contact Callout */}
        <div className="bg-card-background text-foreground border border-border rounded-2xl p-8 text-center my-10 space-y-4 shadow-sm">
          <h2 className="text-2xl font-extrabold text-primary">Ready to Mobilize Fleet or Technical Crews?</h2>
          <p className="text-slate-600 text-xs max-w-xl mx-auto leading-relaxed">
            Contact our project sales desk in Al Khobar for competitive rental schedules and technical proposals.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/request-a-quote"
              className="px-6 py-2.5 bg-accent-strong hover:bg-amber-700 text-white font-bold text-xs rounded-xl transition-colors"
            >
              Request a Quote →
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-white hover:bg-background text-primary font-bold text-xs rounded-xl transition-colors border border-border"
            >
              View Office Address
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
