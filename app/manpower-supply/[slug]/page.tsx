import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getJobTitles, getJobTitleBySlug, getBlogPostBySlug } from '@/lib/data';
import AeoAnswerBlock from '@/components/AeoAnswerBlock';
import FaqAccordion from '@/components/FaqAccordion';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import { generateServiceSchema } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const jobTitles = getJobTitles();
  return jobTitles.map((trade) => ({ slug: trade.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const trade = getJobTitleBySlug(slug);
  if (!trade) return {};

  return {
    title: `${trade.h1} | GulfFast Direct Supplier`,
    description: trade.shortSummary.slice(0, 154),
    alternates: {
      canonical: `/manpower-supply/${trade.slug}`
    }
  };
}

export default async function TradePage({ params }: PageProps) {
  const { slug } = await params;
  const trade = getJobTitleBySlug(slug);

  if (!trade) {
    notFound();
  }

  const allTrades = getJobTitles();
  const relatedTrades = allTrades.filter((t) =>
    trade.relatedSlugs.includes(t.slug)
  );

  const relatedBlogPosts = trade.blogPostSlugs
    .map((bSlug) => getBlogPostBySlug(bSlug))
    .filter(Boolean);

  const serviceSchema = generateServiceSchema(
    trade.h1,
    trade.shortSummary,
    `/manpower-supply/${trade.slug}`
  );

  return (
    <div className="py-10 bg-slate-50 text-slate-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Manpower Supply', url: '/manpower-supply' },
            { name: trade.title, url: `/manpower-supply/${trade.slug}` }
          ]}
        />

        <div className="my-6 border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Verified KSA Certified Manpower Supply</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {trade.h1}
          </h1>
        </div>

        {/* AEO 2-Sentence Answer Block */}
        <AeoAnswerBlock summary={trade.shortSummary} categoryName={trade.title} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">
          
          <div className="lg:col-span-7 space-y-8">
            
            {/* Description */}
            <div className="prose prose-slate max-w-none space-y-4 text-slate-700 text-sm leading-relaxed">
              {trade.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Certifications List */}
            {trade.certifications && (
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-amber-600 pl-3">
                  Mandatory Qualifications &amp; Site Certifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  {trade.certifications.map((cert, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-md border border-slate-200 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-900"></span>
                      <span className="font-semibold">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Trade Experience Level */}
            {trade.experienceLevels && (
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-2 border-l-4 border-amber-600 pl-3">
                  Experience &amp; Industry Standards
                </h2>
                <p className="text-xs text-slate-700 font-medium">
                  {trade.experienceLevels}
                </p>
              </div>
            )}

            {/* City Coverage Badges */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-3 border-l-4 border-amber-600 pl-3">
                Workforce Deployment Cities
              </h2>
              <p className="text-xs text-slate-600 mb-4">
                GulfFast mobilizes {trade.title.toLowerCase()} crews to job sites across Saudi Arabia:
              </p>
              <div className="flex flex-wrap gap-2">
                {trade.cityCoverage.map((city) => (
                  <span key={city} className="bg-slate-50 border border-slate-200 text-blue-900 font-bold px-3 py-1.5 rounded-md text-xs">
                    📍 {city}
                  </span>
                ))}
              </div>
            </div>

            {/* FAQ Accordion Block with Schema */}
            <FaqAccordion faqs={trade.faq} title={`FAQ — ${trade.title} Supply`} />

            {/* Related Blog Posts */}
            {relatedBlogPosts.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-600 pl-3">
                  Related Manpower &amp; Compliance Insights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedBlogPosts.map((post) => (
                    post && (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="bg-slate-50 p-4 rounded-md border border-slate-200 hover:border-slate-400 transition-colors block group"
                      >
                        <span className="text-[10px] text-amber-700 font-bold uppercase">{post.category}</span>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-900 transition-colors mt-1 line-clamp-2">
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
            {relatedTrades.length > 0 && (
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-base font-bold text-slate-900 mb-3">Related Certified Manpower Trades</h3>
                <div className="flex flex-wrap gap-2">
                  {relatedTrades.map((relTrade) => (
                    <Link
                      key={relTrade.slug}
                      href={`/manpower-supply/${relTrade.slug}`}
                      className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-900 px-3 py-1.5 rounded-md text-xs font-medium transition-colors shadow-sm"
                    >
                      {relTrade.title} →
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <QuoteForm defaultCategory={trade.title} serviceType="manpower" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
