import { notFound } from 'next/navigation';
import { getEquipmentLandingPages, getEquipmentLandingPageBySlug } from '@/lib/equipment';
import { cities } from '@/lib/cities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryHero from '@/components/CategoryHero';
import OwnedFleetBadge from '@/components/OwnedFleetBadge';
import QuoteForm from '@/components/QuoteForm';
import { generateServiceSchema } from '@/lib/seo';

interface PageProps {
  params: Promise<{ category: string; city: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const landingPages = getEquipmentLandingPages();
  return landingPages.flatMap((page) =>
    cities.map((city) => ({ category: page.keywordSlug, city: city.slug }))
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { category: keywordSlug, city: citySlug } = await params;
  const landingPage = getEquipmentLandingPageBySlug(keywordSlug);
  const city = cities.find((c) => c.slug === citySlug);
  if (!landingPage || !city) return {};

  return {
    title: `${landingPage.keyword} in ${city.name} | GulfFast`,
    description: `${landingPage.keyword} in ${city.name}, Saudi Arabia. Direct supply from GulfFast's Al Khobar operations hub, Aramco and SABIC compliant, 24/7 mobilization.`,
    alternates: {
      canonical: `/equipment/${landingPage.keywordSlug}/${city.slug}`
    }
  };
}

export default async function EquipmentCityPage({ params }: PageProps) {
  const { category: keywordSlug, city: citySlug } = await params;
  const landingPage = getEquipmentLandingPageBySlug(keywordSlug);
  const city = cities.find((c) => c.slug === citySlug);

  if (!landingPage || !city) {
    notFound();
  }

  const { category, keyword } = landingPage;

  const serviceSchema = generateServiceSchema(
    `${keyword} in ${city.name}`,
    `${keyword} in ${city.name}, Saudi Arabia, direct from GulfFast.`,
    `/equipment/${keywordSlug}/${city.slug}`
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
            { name: 'Equipment', url: '/equipment' },
            { name: category.name, url: `/equipment/${category.slug}` },
            { name: `${keyword} in ${city.name}`, url: `/equipment/${keywordSlug}/${city.slug}` }
          ]}
        />

        <CategoryHero
          badgeText={`Verified ${city.name} Direct Equipment Supply`}
          h1={`${keyword} in ${city.name}`}
          intro={`GulfFast dispatches ${keyword.toLowerCase()} to job sites in and around ${city.name} from our Al Khobar operations hub, with Aramco and SABIC compliant mobilization.`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">

          <div className="lg:col-span-7 space-y-8">
            <OwnedFleetBadge categoryName={category.name} ownedFleetCount={category.ownedFleetCount} />
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <QuoteForm defaultCategory={keyword} serviceType="equipment" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
