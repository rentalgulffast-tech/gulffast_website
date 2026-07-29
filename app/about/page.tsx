import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
  title: 'About GulfFast Rentals & Manpower | Direct KSA Supplier Est. 1999',
  description: 'Learn about Arabian Gulf Fast Contracting Co. (GulfFast), leading direct equipment rental, vehicle fleet, and certified manpower supplier headquartered in Al Khobar, Saudi Arabia since 1999.',
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  return (
    <div className="py-10 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'About GulfFast', url: '/about' }
          ]}
        />

        {/* Corporate Header */}
        <div className="my-6 border-b border-slate-200 pb-6">
          <span className="text-blue-900 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded border border-blue-200">
            Corporate Profile &amp; Governance
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
            Arabian Gulf Fast Contracting Co.
          </h1>
          <p className="text-slate-600 text-base max-w-3xl mt-3 leading-relaxed">
            Headquartered in Al Khobar, Saudi Arabia since 1999, GulfFast is a premier direct equipment rental owner, heavy transport fleet operator, and certified technical manpower provider for energy, industrial, and infrastructure contractors across KSA.
          </p>
        </div>

        {/* Executive Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-2">
            <div className="text-3xl font-extrabold text-blue-900 font-mono">1999</div>
            <h3 className="font-bold text-slate-900 text-base">25+ Years KSA Heritage</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Established in Al Khobar, serving top-tier EPC contractors, Saudi Aramco projects, SABIC plants, and SEC infrastructure across Saudi Arabia.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-2">
            <div className="text-3xl font-extrabold text-blue-900 font-mono">100%</div>
            <h3 className="font-bold text-slate-900 text-base">Direct Equipment &amp; Crew Owner</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              We own 100% of our machinery fleet and employ certified technicians directly — eliminating broker markups and ensuring guaranteed availability.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-2">
            <div className="text-3xl font-extrabold text-blue-900 font-mono">ISO &amp; SAG</div>
            <h3 className="font-bold text-slate-900 text-base">Aramco &amp; SABIC Compliant</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Fully compliant with Saudi Aramco GI safety standards, TUV third-party certifications, SAG commercial licensing, and SAGIA regulations.
            </p>
          </div>
        </div>

        {/* Company History & Mission Section */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 my-10 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Corporate History &amp; Vision</h2>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Founded in 1999 in the Eastern Province of Saudi Arabia, Arabian Gulf Fast Contracting Co. (GulfFast) expanded from a regional industrial equipment vendor into a comprehensive multi-disciplinary contractor partner. Our operations encompass heavy machinery rentals, specialized logistics transportation, and skilled workforce supply.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              Over the last two decades, GulfFast has successfully supported major oil refinery turnarounds in Jubail and Ras Tanura, cross-country gas pipeline projects, power generation station erections in Riyadh and Yanbu, and ongoing mega-developments such as NEOM and the Red Sea Project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                To deliver uncompromised industrial equipment reliability and highly skilled, safety-certified workforce deployment that empowers our EPC and contracting partners to complete critical Saudi Arabian energy and infrastructure projects on schedule and within budget.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Quality &amp; HSE Standards</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Safety is our core operational principle. All equipment undergoes rigorous preventive maintenance and Third-Party Inspection (TPI). All personnel carry valid Iqamas, Aramco vendor gate passes, and TUV / WQT certifications.
              </p>
            </div>
          </div>
        </div>

        {/* Operational Footprint */}
        <div className="bg-slate-900 text-white rounded-lg p-8 my-10">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">
              KSA Operational Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
              Strategic Headquarters in Al Khobar with Nationwide Coverage
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Our central office and primary heavy equipment maintenance hub in Al Khobar is supported by regional staging yards in Jubail Industrial City, Dammam, Riyadh, and Yanbu. This footprint ensures 24/7 technical mobilization to any jobsite in KSA.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/request-a-quote"
                className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-md transition-colors"
              >
                Request Corporate Proposal →
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-md border border-slate-700 transition-colors"
              >
                Contact Head Office
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
