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
    <div className="py-10 bg-slate-50 text-slate-900 min-h-screen">
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

        <div className="my-6 border-b border-slate-200 pb-6">
          <span className="text-amber-700 font-bold text-xs uppercase tracking-wider bg-amber-50 px-3 py-1 rounded border border-amber-200">
            Workforce Supply Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Certified Manpower Supply Services in Saudi Arabia
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            GulfFast directly supplies SAG-licensed, Saudi Aramco approved, and TUV certified technical personnel for short-term refinery turnarounds and long-term EPC construction projects across Saudi Arabia.
          </p>
        </div>

        {/* Category Hub with Sidebar Filter */}
        <CategoryHubWithSidebar
          title="Certified Manpower Trades"
          subtitle="Filter 6G welders, riggers, operators, safety officers, and technical personnel."
          badgeText="Aramco & TUV Certified"
          categories={jobTitles}
          basePath="/manpower-supply"
        />

        {/* Callout */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 text-center my-10 space-y-3 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Require On-Site WQT Coupon Testing or Rapid Shutdown Mobilization?</h2>
          <p className="text-slate-600 text-xs max-w-2xl mx-auto">
            We provide complete manpower logistics including Iqamas, Aramco gate passes, camp housing, site transport, and medical insurance.
          </p>
          <a
            href="tel:+966568676710"
            className="inline-block px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-md transition-colors mt-2"
          >
            Call Manpower Desk: +966 56 867 6710
          </a>
        </div>

      </div>
    </div>
  );
}
