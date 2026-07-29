import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryHubWithSidebar from '@/components/CategoryHubWithSidebar';
import { getJobTitles } from '@/lib/data';
import { generateServiceSchema } from '@/lib/seo';

export const metadata = {
  title: 'Certified Manpower Supply Services in Saudi Arabia | GulfFast',
  description: 'Aramco & TUV certified manpower supply in Saudi Arabia. Rent 6G welders, pipefitters, TUV riggers, equipment operators, electricians, scaffolders, fitters, and safety officers.',
  alternates: {
    canonical: '/manpower-supply'
  }
};

export default function ManpowerSupplyHubPage() {
  const jobTitles = getJobTitles();
  const serviceSchema = generateServiceSchema(
    'Certified Manpower Supply Services in Saudi Arabia',
    'Aramco and TUV certified industrial manpower supply services across Saudi Arabia.',
    '/manpower-supply'
  );

  return (
    <div className="py-10 bg-[#F0EBE3] text-[#2B2620] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Manpower Supply Hub', url: '/manpower-supply' }
          ]}
        />

        <div className="my-6 border-b border-[#E2DED4] pb-6">
          <span className="text-[#C0714A] font-bold text-xs uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Certified Trade Workforce Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
            Aramco &amp; TUV Certified Manpower Supply in Saudi Arabia
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            GulfFast provides direct supply of certified 6G pipe welders, TUV riggers (Levels 1-3), Aramco heavy equipment operators, scaffolders, and NEBOSH safety officers with valid Iqamas and gate pass clearance.
          </p>
        </div>

        {/* Interactive Hub with Sidebar Filter */}
        <CategoryHubWithSidebar
          title="Certified Technical Manpower Trades"
          subtitle="Filter certified trade workforce by KSA city, certification, and project scope."
          badgeText="Aramco WQT & TUV Certified"
          categories={jobTitles}
          basePath="/manpower-supply"
        />

        {/* Informational Callout */}
        <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 text-center my-10 space-y-3 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#0F172A]">Need Turnkey Trade Crew Mobilization with Camp &amp; Transport?</h2>
          <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
            GulfFast handles full mobilization including Iqama verification, Aramco/SABIC gate passes, trade coupon testing, food, housing camps, and site transport.
          </p>
          <a
            href="tel:+966568676710"
            className="inline-block px-6 py-2.5 bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold text-xs rounded-xl transition-colors mt-2 shadow-sm"
          >
            Call Direct Workforce Desk: +966 56 867 6710
          </a>
        </div>

      </div>
    </div>
  );
}
