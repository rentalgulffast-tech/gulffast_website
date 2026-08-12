import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getEquipmentCategories,
  getEquipmentCategoryBySlug,
  getEquipmentLandingPages,
  getRelatedEquipmentCategories,
  getEquipmentCategoryFaqs
} from '@/lib/equipment';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryHero from '@/components/CategoryHero';
import OwnedFleetBadge from '@/components/OwnedFleetBadge';
import CityServiceGrid from '@/components/CityServiceGrid';
import FaqAccordion from '@/components/FaqAccordion';
import QuoteForm from '@/components/QuoteForm';
import { cities } from '@/lib/cities';
import { generateServiceSchema } from '@/lib/seo';

interface PageProps {
  params: Promise<{ category: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const categories = getEquipmentCategories();
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getEquipmentCategoryBySlug(categorySlug);
  if (!category) return {};

  return {
    title: `${category.name} Rental in Saudi Arabia | GulfFast`,
    description: `Direct-supply ${category.name.toLowerCase()} rental across Saudi Arabia from GulfFast's Al Khobar operations hub. Aramco and SABIC compliant, 24/7 mobilization.`,
    alternates: {
      canonical: `/equipment/${category.slug}`
    }
  };
}

export default async function EquipmentCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getEquipmentCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const keywordFamilies = getEquipmentLandingPages().filter(
    (page) => page.category.slug === category.slug
  );
  const relatedCategories = getRelatedEquipmentCategories(category, 4);
  const categoryFaqs = getEquipmentCategoryFaqs(category);

  const serviceSchema = generateServiceSchema(
    `${category.name} Rental in Saudi Arabia`,
    `Direct-supply ${category.name.toLowerCase()} rental across Saudi Arabia from GulfFast.`,
    `/equipment/${category.slug}`
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
            { name: category.name, url: `/equipment/${category.slug}` }
          ]}
        />

        <CategoryHero
          badgeText="Verified KSA Direct Equipment Supply"
          h1={`${category.name} Rental in Saudi Arabia`}
          intro={`GulfFast supplies ${category.name.toLowerCase()} for rental across Saudi Arabia, direct from our Al Khobar operations hub, with Aramco and SABIC compliant mobilization.`}
          ctaLabel="Request a Quote"
          ctaHref="/request-a-quote?need=equipment"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">

          <div className="lg:col-span-7 space-y-8">
            <OwnedFleetBadge categoryName={category.name} ownedFleetCount={category.ownedFleetCount} />

            {/* Dry-hire / wet-hire availability */}
            <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-[#0F172A] mb-2 border-l-4 border-[#C0714A] pl-3">
                Dry-Hire &amp; Wet-Hire Availability
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {`Both available — ask for details when requesting a quote. ${category.name} can be supplied as bare-rental (dry-hire) or fully operated & maintained (wet-hire) with a certified operator, depending on your project's needs.`}
              </p>
            </div>

            {keywordFamilies.length > 0 ? (
              keywordFamilies.map((page) => (
                <CityServiceGrid
                  key={page.keywordSlug}
                  cities={cities}
                  basePath={`/equipment/${page.keywordSlug}`}
                  label={page.keyword}
                />
              ))
            ) : (
              <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-extrabold text-[#0F172A] mb-2 border-l-4 border-[#C0714A] pl-3">
                  Nationwide Coverage
                </h2>
                <p className="text-xs text-slate-600">
                  {`${category.name} is available for rental nationwide across Saudi Arabia through our direct supply network.`}
                </p>
              </div>
            )}

            {/* Related categories */}
            <div className="pt-2">
              <h3 className="text-base font-bold text-[#0F172A] mb-3">Related Equipment Categories</h3>
              <div className="flex flex-wrap gap-2">
                {relatedCategories.map((relCat) => (
                  <Link
                    key={relCat.slug}
                    href={`/equipment/${relCat.slug}`}
                    className="bg-white hover:bg-[#F0EBE3] border border-[#E2DED4] text-slate-700 hover:text-[#0F172A] px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                  >
                    {relCat.name} →
                  </Link>
                ))}
              </div>
            </div>

            {/* Category-specific FAQ snippet */}
            <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 shadow-sm">
              <FaqAccordion faqs={categoryFaqs} title={`FAQ — ${category.name}`} injectSchema={false} />
              <Link href="/faq" className="inline-block text-xs font-bold text-[#C0714A] hover:underline">
                View Full FAQ →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <QuoteForm defaultCategory={category.name} serviceType="equipment" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
