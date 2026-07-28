import CategoryCard from '@/components/CategoryCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getVehicleCategories } from '@/lib/data';
import { generateServiceSchema } from '@/lib/seo';

export const metadata = {
  title: 'Heavy Vehicle & Fleet Rental Services in Saudi Arabia | GulfFast',
  description: 'Heavy transport trucks, 40ft/50ft flatbed trailers, 100T lowbeds, fuel/water tankers, crew AC buses, and 4x4 double cabin pickups across Saudi Arabia.',
  alternates: {
    canonical: '/vehicle-rental'
  }
};

export default function VehicleRentalHubPage() {
  const categories = getVehicleCategories();
  const serviceSchema = generateServiceSchema(
    'Heavy Vehicle & Fleet Rental Services in Saudi Arabia',
    'Heavy transport trucks, flatbed trailers, lowbeds, fuel/water tankers, crew buses, and pickup trucks rental in Saudi Arabia.',
    '/vehicle-rental'
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
            { name: 'Vehicle Rental Hub', url: '/vehicle-rental' }
          ]}
        />

        <div className="my-8 border-b border-slate-800 pb-8">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
            Transport &amp; Heavy Vehicle Logistics
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3">
            Heavy Vehicle &amp; Transport Rental in Saudi Arabia
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mt-3 leading-relaxed">
            GulfFast operates a modern heavy logistics transport fleet fitted with IVMS GPS tracking, speed governors, and site access clearance for Saudi Aramco, SABIC, SEC, and major construction projects in KSA.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} basePath="/vehicle-rental" />
          ))}
        </div>

        {/* Callout */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center my-12 space-y-3">
          <h2 className="text-2xl font-bold text-white">Require Over-Dimensional Highway Heavy Haulage Permits?</h2>
          <p className="text-slate-400 text-xs max-w-2xl mx-auto">
            Our logistics desk handles Ministry of Transport overload permits, police escort planning, and site gate passes for heavy machinery transport.
          </p>
          <a
            href="tel:+966568676710"
            className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-lg transition-colors mt-2"
          >
            Call Transport Desk: +966 56 867 6710
          </a>
        </div>

      </div>
    </div>
  );
}
