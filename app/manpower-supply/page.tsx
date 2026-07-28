import CategoryCard from '@/components/CategoryCard';
import Breadcrumbs from '@/components/Breadcrumbs';
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
    <div className="py-10 bg-slate-950 text-white min-h-screen">
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

        <div className="my-8 border-b border-slate-800 pb-8">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
            Certified Industrial Workforce Supply
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3">
            Skilled Manpower Supply Services in Saudi Arabia
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mt-3 leading-relaxed">
            GulfFast directly supplies SAG-licensed, Saudi Aramco approved, and TUV certified technical personnel for short-term refinery turnarounds and long-term EPC construction projects across Saudi Arabia.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {jobTitles.map((trade) => (
            <CategoryCard key={trade.id} category={trade} basePath="/manpower-supply" />
          ))}
        </div>

        {/* Callout */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center my-12 space-y-3">
          <h2 className="text-2xl font-bold text-white">Require On-Site WQT Coupon Testing or Rapid Shutdown Mobilization?</h2>
          <p className="text-slate-400 text-xs max-w-2xl mx-auto">
            We provide complete manpower logistics including Iqamas, Aramco gate passes, camp housing, site transport, and medical insurance.
          </p>
          <a
            href="tel:+966568676710"
            className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-lg transition-colors mt-2"
          >
            Call Manpower Desk: +966 56 867 6710
          </a>
        </div>

      </div>
    </div>
  );
}
