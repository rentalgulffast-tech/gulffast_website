import { notFound } from 'next/navigation';
import {
  getManpowerCategories,
  getManpowerCategoryBySlug,
  getManpowerLandingPages,
  categoryHasCertification
} from '@/lib/manpower';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryHero from '@/components/CategoryHero';
import JobTitleGrid from '@/components/JobTitleGrid';
import CityServiceGrid from '@/components/CityServiceGrid';
import QuoteForm from '@/components/QuoteForm';
import { cities } from '@/lib/cities';
import { generateServiceSchema } from '@/lib/seo';

interface PageProps {
  params: Promise<{ category: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const categories = getManpowerCategories();
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getManpowerCategoryBySlug(categorySlug);
  if (!category) return {};

  return {
    title: `${category.name} Supply in Saudi Arabia | GulfFast`,
    description: `Direct-supply ${category.name.toLowerCase()} manpower across Saudi Arabia from GulfFast's Al Khobar operations hub. Aramco and TUV certified, direct mobilization.`,
    alternates: {
      canonical: `/manpower/${category.slug}`
    }
  };
}

export default async function ManpowerCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getManpowerCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const keywordFamilies = getManpowerLandingPages().filter(
    (page) => page.category.slug === category.slug
  );
  const cert = categoryHasCertification(category);

  const serviceSchema = generateServiceSchema(
    `${category.name} Supply in Saudi Arabia`,
    `Direct-supply ${category.name.toLowerCase()} manpower across Saudi Arabia from GulfFast.`,
    `/manpower/${category.slug}`
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
            { name: 'Manpower', url: '/manpower' },
            { name: category.name, url: `/manpower/${category.slug}` }
          ]}
        />

        <CategoryHero
          badgeText="Verified KSA Certified Manpower Supply"
          h1={`${category.name} Supply in Saudi Arabia`}
          intro={`GulfFast supplies ${category.name.toLowerCase()} crews across Saudi Arabia, direct from our Al Khobar operations hub, with Aramco and TUV certification and Iqama-verified mobilization.`}
          ctaLabel="Request Manpower"
          ctaHref="/request-a-quote?need=manpower"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">

          <div className="lg:col-span-7 space-y-8">
            {(cert.aramco || cert.tuv) && (
              <div className="flex flex-wrap gap-2">
                {cert.aramco && (
                  <span className="inline-flex items-center gap-1.5 bg-[#F0EBE3] border border-[#E2DED4] text-[#0F172A] text-xs font-bold px-3 py-1.5 rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Includes Aramco-Approved Job Titles
                  </span>
                )}
                {cert.tuv && (
                  <span className="inline-flex items-center gap-1.5 bg-[#F0EBE3] border border-[#E2DED4] text-[#0F172A] text-xs font-bold px-3 py-1.5 rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Includes TUV-Certified Job Titles
                  </span>
                )}
              </div>
            )}

            <JobTitleGrid jobTitles={category.jobTitles} />

            {keywordFamilies.length > 0 ? (
              keywordFamilies.map((page) => (
                <CityServiceGrid
                  key={page.keywordSlug}
                  cities={cities}
                  basePath={`/manpower/${page.keywordSlug}`}
                  label={page.keyword}
                />
              ))
            ) : (
              <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-extrabold text-[#0F172A] mb-2 border-l-4 border-[#C0714A] pl-3">
                  Nationwide Coverage
                </h2>
                <p className="text-xs text-slate-600">
                  {`${category.name} crews are available nationwide across Saudi Arabia through our direct supply network.`}
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <QuoteForm defaultCategory={category.name} serviceType="manpower" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
