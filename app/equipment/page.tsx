import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryCard from '@/components/CategoryCard';
import { getEquipmentTier1Categories, getEquipmentCategoriesByCluster } from '@/lib/equipment';
import { slugify } from '@/lib/slug';
import { generateServiceSchema } from '@/lib/seo';

export const metadata = {
  title: 'Heavy Equipment Rental Services in Saudi Arabia | GulfFast',
  description: 'Certified heavy equipment rental across Saudi Arabia. Rent excavators, bulldozers, generators, mobile cranes, compressors, welders, tower lights, trucks, buses, and pumps from Al Khobar.',
  alternates: {
    canonical: '/equipment'
  }
};

export default function EquipmentHubPage() {
  const featuredCategories = getEquipmentTier1Categories();
  const clusters = getEquipmentCategoriesByCluster();
  const serviceSchema = generateServiceSchema(
    'Industrial Equipment Rental Services in Saudi Arabia',
    'Certified heavy construction machinery, power generators, mobile cranes, transport trucks, and compressed air equipment rental in Saudi Arabia.',
    '/equipment'
  );

  return (
    <div className="py-10 bg-white text-[#12233B] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Equipment', url: '/equipment' }
          ]}
        />

        <div className="my-6 border-b border-[#D7E6F5] pb-6">
          <span className="text-[#2B6CB0] font-bold text-xs uppercase tracking-wider bg-[#EAF4FC] px-3 py-1 rounded-full border border-[#D7E6F5]">
            Industrial Fleet Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12233B] mt-2">
            Heavy Equipment Rental Services in Saudi Arabia
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            GulfFast owns and operates a comprehensive machinery fleet engineered for harsh Middle Eastern climates. Operating from our Al Khobar operations yard with 24/7 technical mobilization.
          </p>
        </div>

        {/* Featured Tier 1 categories */}
        <section className="my-10">
          <h2 className="text-xl font-extrabold text-[#12233B] mb-5 border-l-4 border-[#2B6CB0] pl-3">
            Featured Equipment Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <CategoryCard
                key={category.slug}
                name={category.name}
                slug={category.slug}
                tier={category.tier}
                basePath="/equipment"
              />
            ))}
          </div>
        </section>

        {/* All categories, grouped by cluster */}
        <section className="my-10">
          <h2 className="text-xl font-extrabold text-[#12233B] mb-5 border-l-4 border-[#2B6CB0] pl-3">
            All Equipment Categories by Type
          </h2>

          {/* Cluster jump links */}
          <div className="flex flex-wrap gap-2 mb-6">
            {clusters.map((cluster) => (
              <a
                key={cluster.name}
                href={`#${slugify(cluster.name)}`}
                className="bg-white border border-[#D7E6F5] text-[#12233B] hover:bg-[#EAF4FC] px-3 py-1.5 rounded-xl text-xs font-bold transition-colors"
              >
                {cluster.name} ({cluster.categories.length})
              </a>
            ))}
          </div>

          <div className="space-y-6">
            {clusters.map((cluster) => (
              <div key={cluster.name} id={slugify(cluster.name)} className="bg-white border border-[#D7E6F5] rounded-2xl p-6 shadow-sm scroll-mt-28">
                <h3 className="text-sm font-extrabold text-[#12233B] uppercase tracking-wider mb-4 pb-3 border-b border-[#D7E6F5]">
                  {cluster.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
                  {cluster.categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/equipment/${category.slug}`}
                      className="text-slate-700 hover:text-[#2B6CB0] font-semibold transition-colors py-1"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* In-House Maintenance Capability */}
        <section className="my-10">
          <h2 className="text-xl font-extrabold text-[#12233B] mb-5 border-l-4 border-[#2B6CB0] pl-3">
            Maintenance on Our Owned Fleet
          </h2>
          <div className="bg-white border border-[#D7E6F5] rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-slate-600 leading-relaxed">
              GulfFast performs preventive maintenance on all owned-fleet units — the specific machines listed with make, model, and year on each equipment category page, not a generic stock photo catalog. Maintenance keeps units in working, dispatch-ready condition between rentals. For equipment sourced through our partner network, maintenance responsibility sits with the supplying partner as set out in the applicable agreement.
            </p>
          </div>
        </section>

        {/* Informational Callout */}
        <div className="bg-white border border-[#D7E6F5] rounded-2xl p-8 text-center my-10 space-y-3 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#12233B]">Need Customized Machinery Specifications or Long-Term Fleet Leasing?</h2>
          <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
            All equipment includes options for bare-rental or operated &amp; maintained (O&amp;M) leases with certified operators and mobile maintenance technicians.
          </p>
          <a
            href="tel:+966568676710"
            className="inline-block px-6 py-2.5 bg-[#2B6CB0] hover:bg-[#1D6FB8] text-white font-bold text-xs rounded-xl transition-colors mt-2 shadow-sm"
          >
            Call Direct Equipment Desk: +966 56 867 6710
          </a>
        </div>

      </div>
    </div>
  );
}
