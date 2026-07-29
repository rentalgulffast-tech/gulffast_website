import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getVehicleCategories, getVehicleCategoryBySlug, getBlogPostBySlug } from '@/lib/data';
import AeoAnswerBlock from '@/components/AeoAnswerBlock';
import FaqAccordion from '@/components/FaqAccordion';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import { generateServiceSchema } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getVehicleCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = getVehicleCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: `${category.h1} | GulfFast Direct Supplier`,
    description: category.shortSummary.slice(0, 154),
    alternates: {
      canonical: `/vehicle-rental/${category.slug}`
    }
  };
}

export default async function VehicleCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getVehicleCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const allCategories = getVehicleCategories();
  const relatedCategories = allCategories.filter((cat) =>
    category.relatedSlugs.includes(cat.slug)
  );

  const relatedBlogPosts = category.blogPostSlugs
    .map((bSlug) => getBlogPostBySlug(bSlug))
    .filter(Boolean);

  const serviceSchema = generateServiceSchema(
    category.h1,
    category.shortSummary,
    `/vehicle-rental/${category.slug}`
  );

  return (
    <div className="py-10 bg-[#F0EBE3] text-[#2B2620] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb navigation */}
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Vehicle Rental', url: '/vehicle-rental' },
            { name: category.title, url: `/vehicle-rental/${category.slug}` }
          ]}
        />

        {/* Header Block with Exact Keyword H1 */}
        <div className="my-6 border-b border-[#E2DED4] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FFEDD5] text-[#C0714A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Verified KSA Transport Fleet</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            {category.h1}
          </h1>
        </div>

        {/* AEO 2-Sentence Self-Contained Answer Engine Block */}
        <AeoAnswerBlock summary={category.shortSummary} categoryName={category.title} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Description */}
            <div className="prose prose-slate max-w-none space-y-4 text-slate-700 text-sm leading-relaxed font-normal">
              {category.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Technical Specifications Matrix */}
            <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-[#0F172A] mb-4 border-l-4 border-[#C0714A] pl-3">
                Technical Specifications &amp; Fleet Capability
              </h2>
              <div className="divide-y divide-[#E2DED4]">
                {category.specs.map((spec, i) => (
                  <div key={i} className="py-3 flex flex-col sm:flex-row justify-between sm:items-center text-xs gap-1">
                    <span className="font-semibold text-slate-600">{spec.name}:</span>
                    <span className="font-bold text-[#0F172A] sm:text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications List */}
            {category.applications && (
              <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-extrabold text-[#0F172A] mb-4 border-l-4 border-[#C0714A] pl-3">
                  Typical Transport Applications in KSA
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  {category.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-[#F9F8F5] p-3 rounded-xl border border-[#E2DED4]">
                      <span className="text-[#C0714A] font-bold">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* City Coverage Badges */}
            <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-[#0F172A] mb-3 border-l-4 border-[#C0714A] pl-3">
                Cities &amp; Regional Coverage
              </h2>
              <p className="text-xs text-slate-600 mb-4">
                GulfFast dispatches {category.title.toLowerCase()} rentals from our Al Khobar operations hub to job sites across Saudi Arabia:
              </p>
              <div className="flex flex-wrap gap-2">
                {category.cityCoverage.map((city) => (
                  <span key={city} className="bg-[#F0EBE3] border border-[#E2DED4] text-[#0F172A] font-bold px-3 py-1.5 rounded-xl text-xs">
                    📍 {city}
                  </span>
                ))}
              </div>
            </div>

            {/* FAQ Accordion Block with Schema */}
            <FaqAccordion faqs={category.faq} title={`FAQ — ${category.title} Rental`} />

            {/* Related Blog Posts */}
            {relatedBlogPosts.length > 0 && (
              <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 space-y-4 shadow-sm">
                <h3 className="text-lg font-bold text-[#0F172A] border-l-4 border-[#C0714A] pl-3">
                  Related Transport Insights &amp; Articles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedBlogPosts.map((post) => (
                    post && (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="bg-[#F9F8F5] p-4 rounded-xl border border-[#E2DED4] hover:border-[#0F172A] transition-colors block group"
                      >
                        <span className="text-[10px] text-[#C0714A] font-bold uppercase">{post.category}</span>
                        <h4 className="text-xs font-bold text-[#0F172A] group-hover:text-[#C0714A] transition-colors mt-1 line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-[11px] text-slate-500 mt-2 block">Read Guide →</span>
                      </Link>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Related Categories Cross-Linking */}
            {relatedCategories.length > 0 && (
              <div className="pt-4 border-t border-[#E2DED4]">
                <h3 className="text-base font-bold text-[#0F172A] mb-3">Related Vehicle Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {relatedCategories.map((relCat) => (
                    <Link
                      key={relCat.slug}
                      href={`/vehicle-rental/${relCat.slug}`}
                      className="bg-white hover:bg-[#F0EBE3] border border-[#E2DED4] text-slate-700 hover:text-[#0F172A] px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                    >
                      {relCat.title} →
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <QuoteForm defaultCategory={category.title} serviceType="vehicle" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
