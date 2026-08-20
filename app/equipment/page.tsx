import Breadcrumbs from '@/components/Breadcrumbs';
import EquipmentCard from '@/components/EquipmentCard';
import EquipmentExplorer, { EquipmentListEntry } from '@/components/EquipmentExplorer';
import { getEquipmentCategories, getEquipmentTier1Categories } from '@/lib/equipment';
import { equipmentClusters, getClusterForCategory } from '@/lib/equipment-clusters';
import { cities } from '@/lib/cities';
import { generateServiceSchema } from '@/lib/seo';

export const metadata = {
  title: 'Heavy Equipment Rental Services in Saudi Arabia | GulfFast',
  description: 'Certified heavy equipment rental across Saudi Arabia. Rent excavators, bulldozers, generators, mobile cranes, compressors, welders, tower lights, trucks, buses, and pumps from Al Khobar.',
  alternates: {
    canonical: '/equipment'
  }
};

export default function EquipmentHubPage() {
  const allCategories = getEquipmentCategories();
  const tier1Categories = getEquipmentTier1Categories();
  const totalOwnedUnits = allCategories.reduce((sum, category) => sum + category.ownedFleetCount, 0);

  const entries: EquipmentListEntry[] = allCategories.map((category) => {
    const cluster = getClusterForCategory(category);
    const cityCount = category.landingKeywords.length > 0 ? cities.length : 0;

    return {
      item: {
        name: category.name,
        slug: category.slug,
        tier: category.tier,
        ownedCount: category.ownedFleetCount,
        cityCount,
        clusterName: cluster.name,
        clusterSlug: cluster.slug
      },
      card: (
        <EquipmentCard
          name={category.name}
          slug={category.slug}
          cluster={cluster.name}
          specSummary={category.specSummary}
          cityCount={cityCount}
          ownedCount={category.ownedFleetCount}
        />
      )
    };
  });

  const serviceSchema = generateServiceSchema(
    'Industrial Equipment Rental Services in Saudi Arabia',
    'Certified heavy construction machinery, power generators, mobile cranes, transport trucks, and compressed air equipment rental in Saudi Arabia.',
    '/equipment'
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
            { name: 'Equipment', url: '/equipment' }
          ]}
        />

        <div className="my-6 border-b border-[#E2DED4] pb-6">
          <span className="text-[#C0714A] font-bold text-xs uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Industrial Fleet Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
            Heavy Equipment Rental Services in Saudi Arabia
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            GulfFast owns and operates a comprehensive machinery fleet engineered for harsh Middle Eastern climates and certified to Saudi Aramco, SABIC, and SEC safety specifications. Operating from our Al Khobar operations yard with 24/7 technical mobilization.
          </p>
        </div>

        <EquipmentExplorer
          entries={entries}
          clusters={equipmentClusters}
          tier1Count={tier1Categories.length}
          totalOwnedUnits={totalOwnedUnits}
        />

        {/* Informational Callout */}
        <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 text-center my-10 space-y-3 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#0F172A]">Need Customized Machinery Specifications or Long-Term Fleet Leasing?</h2>
          <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
            All equipment includes options for bare-rental or operated &amp; maintained (O&amp;M) leases with Aramco-certified operators and mobile maintenance technicians.
          </p>
          <a
            href="tel:+966568676710"
            className="inline-block px-6 py-2.5 bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold text-xs rounded-xl transition-colors mt-2 shadow-sm"
          >
            Call Direct Equipment Desk: +966 56 867 6710
          </a>
        </div>

      </div>
    </div>
  );
}
