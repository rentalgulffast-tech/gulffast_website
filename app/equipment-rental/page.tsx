import Metadata from 'next';
import CategoryCard from '@/components/CategoryCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getEquipmentCategories } from '@/lib/data';
import { generateServiceSchema } from '@/lib/seo';

export const metadata = {
  title: 'Heavy Equipment Rental Services in Saudi Arabia | GulfFast',
  description: 'Certified heavy equipment rental across Saudi Arabia. Rent excavators, bulldozers, generators, mobile cranes, compressors, welders, tower lights, and pumps from Al Khobar.',
  alternates: {
    canonical: '/equipment-rental'
  }
};

export default function EquipmentRentalHubPage() {
  const categories = getEquipmentCategories();
  const serviceSchema = generateServiceSchema(
    'Industrial Equipment Rental Services in Saudi Arabia',
    'Certified heavy construction machinery, power generators, mobile cranes, and compressed air equipment rental in Saudi Arabia.',
    '/equipment-rental'
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
            { name: 'Equipment Rental Hub', url: '/equipment-rental' }
          ]}
        />

        <div className="my-8 border-b border-slate-800 pb-8">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
            Industrial Equipment Fleet
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3">
            Heavy Equipment Rental Services in Saudi Arabia
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mt-3 leading-relaxed">
            GulfFast owns and operates a comprehensive machinery fleet engineered for harsh Middle Eastern climates and certified to Saudi Aramco, SABIC, and SEC safety specifications. Operating from our Al Khobar operations yard with 24/7 technical mobilization.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} basePath="/equipment-rental" />
          ))}
        </div>

        {/* Informational Callout */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center my-12 space-y-3">
          <h2 className="text-2xl font-bold text-white">Need Customized Machinery Specifications or Long-Term Fleet Leasing?</h2>
          <p className="text-slate-400 text-xs max-w-2xl mx-auto">
            All equipment includes options for bare-rental or operated &amp; maintained (O&amp;M) leases with Aramco-certified operators and mobile maintenance technicians.
          </p>
          <a
            href="tel:+966568676710"
            className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-lg transition-colors mt-2"
          >
            Call Direct Equipment Desk: +966 56 867 6710
          </a>
        </div>

      </div>
    </div>
  );
}
