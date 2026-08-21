import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getEquipmentLandingPages,
  getEquipmentLandingPageBySlug,
  getRelatedEquipmentCategories,
  getEquipmentCategoryFaqs
} from '@/lib/equipment';
import { cities } from '@/lib/cities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryHero from '@/components/CategoryHero';
import OwnedFleetBadge from '@/components/OwnedFleetBadge';
import FaqAccordion from '@/components/FaqAccordion';
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
  const relatedCategories = getRelatedEquipmentCategories(category, 4);
  const categoryFaqs = getEquipmentCategoryFaqs(category);

  const serviceSchema = generateServiceSchema(
    `${keyword} in ${city.name}`,
    `${keyword} in ${city.name}, Saudi Arabia, direct from GulfFast.`,
    `/equipment/${keywordSlug}/${city.slug}`
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
            { name: 'Equipment', url: '/equipment' },
            { name: category.name, url: `/equipment/${category.slug}` },
            { name: `${keyword} in ${city.name}`, url: `/equipment/${keywordSlug}/${city.slug}` }
          ]}
        />

        <CategoryHero
          badgeText={`Verified ${city.name} Direct Equipment Supply`}
          h1={`${keyword} in ${city.name}`}
          intro={`GulfFast dispatches ${keyword.toLowerCase()} to job sites in and around ${city.name} from our Al Khobar operations hub, with Aramco and SABIC compliant mobilization.`}
          ctaLabel="Request a Quote"
          ctaHref="/request-a-quote?need=equipment"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">

          <div className="lg:col-span-7 space-y-8">
            <OwnedFleetBadge categoryName={category.name} ownedFleetCount={category.ownedFleetCount} />

            {/* Local coverage confirmation */}
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-primary mb-2 border-l-4 border-accent pl-3">
                Local Coverage Confirmation
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {`GulfFast serves ${category.name.toLowerCase()} rental in ${city.name} and surrounding areas, dispatched directly from our Al Khobar operations hub.`}
              </p>
            </div>

            {/* Related categories */}
            <div className="pt-2">
              <h3 className="text-base font-bold text-primary mb-3">Related Equipment Categories</h3>
              <div className="flex flex-wrap gap-2">
                {relatedCategories.map((relCat) => (
                  <Link
                    key={relCat.slug}
                    href={`/equipment/${relCat.slug}`}
                    className="bg-white hover:bg-background border border-border text-slate-700 hover:text-primary px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                  >
                    {relCat.name} →
                  </Link>
                ))}
              </div>
            </div>

            {/* City-flavored FAQ snippet */}
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <FaqAccordion faqs={categoryFaqs} title={`FAQ — ${keyword} in ${city.name}`} injectSchema={false} />
              <Link href="/faq" className="inline-block text-xs font-bold text-accent-strong hover:underline">
                View Full FAQ →
              </Link>
            </div>
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
