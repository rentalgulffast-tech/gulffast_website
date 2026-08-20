import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getManpowerLandingPages,
  getManpowerLandingPageBySlug,
  getRelatedManpowerCategories,
  getManpowerCategoryFaqs,
  categoryHasCertification
} from '@/lib/manpower';
import { cities } from '@/lib/cities';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryHero from '@/components/CategoryHero';
import JobTitleGrid from '@/components/JobTitleGrid';
import FaqAccordion from '@/components/FaqAccordion';
import QuoteForm from '@/components/QuoteForm';
import { generateServiceSchema } from '@/lib/seo';

interface PageProps {
  params: Promise<{ category: string; city: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const landingPages = getManpowerLandingPages();
  return landingPages.flatMap((page) =>
    cities.map((city) => ({ category: page.keywordSlug, city: city.slug }))
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { category: keywordSlug, city: citySlug } = await params;
  const landingPage = getManpowerLandingPageBySlug(keywordSlug);
  const city = cities.find((c) => c.slug === citySlug);
  if (!landingPage || !city) return {};

  return {
    title: `${landingPage.keyword} in ${city.name} | GulfFast`,
    description: `${landingPage.keyword} in ${city.name}, Saudi Arabia. Direct supply from GulfFast's Al Khobar operations hub, Iqama-verified mobilization.`,
    alternates: {
      canonical: `/manpower/${landingPage.keywordSlug}/${city.slug}`
    }
  };
}

export default async function ManpowerCityPage({ params }: PageProps) {
  const { category: keywordSlug, city: citySlug } = await params;
  const landingPage = getManpowerLandingPageBySlug(keywordSlug);
  const city = cities.find((c) => c.slug === citySlug);

  if (!landingPage || !city) {
    notFound();
  }

  const { category, keyword } = landingPage;
  const relatedCategories = getRelatedManpowerCategories(category, 4);
  const categoryFaqs = getManpowerCategoryFaqs(category);
  const cert = categoryHasCertification(category);
  const certPhrase = cert.aramco && cert.tuv
    ? ', including Aramco-approved and TUV-certified job titles,'
    : cert.aramco
    ? ', including Aramco-approved job titles,'
    : cert.tuv
    ? ', including TUV-certified job titles,'
    : '';

  const serviceSchema = generateServiceSchema(
    `${keyword} in ${city.name}`,
    `${keyword} in ${city.name}, Saudi Arabia, direct from GulfFast.`,
    `/manpower/${keywordSlug}/${city.slug}`
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
            { name: 'Manpower', url: '/manpower' },
            { name: category.name, url: `/manpower/${category.slug}` },
            { name: `${keyword} in ${city.name}`, url: `/manpower/${keywordSlug}/${city.slug}` }
          ]}
        />

        <CategoryHero
          badgeText={`Verified ${city.name} Certified Manpower Supply`}
          h1={`${keyword} in ${city.name}`}
          intro={`GulfFast mobilizes ${keyword.toLowerCase()} crews to job sites in and around ${city.name} from our Al Khobar operations hub${certPhrase}.`}
          ctaLabel="Request Manpower"
          ctaHref="/request-a-quote?need=manpower"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">

          <div className="lg:col-span-7 space-y-8">
            {/* Local coverage confirmation */}
            <div className="bg-white border border-[#D7E6F5] rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-[#12233B] mb-2 border-l-4 border-[#2B6CB0] pl-3">
                Local Coverage Confirmation
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {`GulfFast serves ${category.name.toLowerCase()} manpower supply in ${city.name} and surrounding areas, mobilized directly from our Al Khobar operations hub.`}
              </p>
            </div>

            <JobTitleGrid jobTitles={category.jobTitles} />

            {/* Related categories */}
            <div className="pt-2">
              <h3 className="text-base font-bold text-[#12233B] mb-3">Related Manpower Categories</h3>
              <div className="flex flex-wrap gap-2">
                {relatedCategories.map((relCat) => (
                  <Link
                    key={relCat.slug}
                    href={`/manpower/${relCat.slug}`}
                    className="bg-white hover:bg-[#EAF4FC] border border-[#D7E6F5] text-slate-700 hover:text-[#2B6CB0] px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                  >
                    {relCat.name} →
                  </Link>
                ))}
              </div>
            </div>

            {/* City-flavored FAQ snippet */}
            <div className="bg-white border border-[#D7E6F5] rounded-2xl p-6 shadow-sm">
              <FaqAccordion faqs={categoryFaqs} title={`FAQ — ${keyword} in ${city.name}`} injectSchema={false} />
              <Link href="/faq" className="inline-block text-xs font-bold text-[#2B6CB0] hover:underline">
                View Full FAQ →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <QuoteForm defaultCategory={keyword} serviceType="manpower" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
