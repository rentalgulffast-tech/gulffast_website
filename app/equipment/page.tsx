import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import EquipmentCard from '@/components/EquipmentCard';
import EquipmentExplorer, { EquipmentListEntry } from '@/components/EquipmentExplorer';
import { getEquipmentCategories, getEquipmentTier1Categories } from '@/lib/equipment';
import { equipmentClusters, getClusterForCategory } from '@/lib/equipment-clusters';
import { cities } from '@/lib/cities';
import { generateServiceSchema } from '@/lib/seo';
import { CONTACT, telHref } from '@/lib/contact';

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
    <div className="py-10 bg-background text-foreground min-h-screen">
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

        <div className="my-6 border-b border-border pb-6">
          <span className="text-accent-strong font-bold text-xs uppercase tracking-wider bg-accent-strong/10 px-3 py-1 rounded-full border border-accent-strong/20">
            Industrial Fleet Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mt-2">
            Heavy Equipment Rental Services in Saudi Arabia
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            GulfFast owns and operates a comprehensive machinery fleet engineered for harsh Middle Eastern climates and maintained to the safety specifications applied on Saudi Aramco, SABIC, and SEC sites. Operating from our Al Khobar operations yard with 24/7 technical mobilization.
          </p>
        </div>

        <EquipmentExplorer
          entries={entries}
          clusters={equipmentClusters}
          cities={cities}
          tier1Count={tier1Categories.length}
          totalOwnedUnits={totalOwnedUnits}
        />

        {/* Informational Callout */}
        <div className="bg-white border border-border rounded-2xl p-8 text-center my-10 space-y-3 shadow-sm">
          <h2 className="text-xl font-extrabold text-primary">Need Customized Machinery Specifications or Long-Term Fleet Leasing?</h2>
          <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
            All equipment includes options for bare-rental or operated &amp; maintained (O&amp;M) leases with Aramco-certified operators and mobile maintenance technicians.
          </p>
          <a
            href={telHref(CONTACT.phonePrimary)}
            className="inline-block px-6 py-2.5 bg-primary hover:bg-accent-strong text-white font-bold text-xs rounded-xl transition-colors mt-2 shadow-sm"
          >
            Call Direct Equipment Desk: {CONTACT.phonePrimary}
          </a>
        </div>

        {/* Supplier / Equipment Owner Intake — full registration form lives on /suppliers */}
        <div className="my-10">
          <div className="bg-white border border-border rounded-2xl p-8 text-center space-y-3 shadow-sm">
            <h2 className="text-xl font-extrabold text-primary">Own Equipment? List It With GulfFast</h2>
            <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
              Equipment owners and suppliers across Saudi Arabia can register machinery with our fleet sourcing desk.
              Submissions are private and nothing is published.
            </p>
            <Link
              href="/suppliers"
              className="inline-block px-6 py-2.5 bg-primary hover:bg-accent-strong text-white font-bold text-xs rounded-xl transition-colors mt-2 shadow-sm"
            >
              Register as a Supplier →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
