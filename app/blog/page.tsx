import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getBlogPosts } from '@/lib/data';

export const metadata = {
  title: 'Saudi Industrial & Compliance Insights Blog | GulfFast',
  description: 'Technical articles, Aramco compliance guides, equipment safety standards, and manpower supply regulations in Saudi Arabia.',
  alternates: {
    canonical: '/blog'
  }
};

export default function BlogHubPage() {
  const posts = getBlogPosts();

  return (
    <div className="py-10 bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Insights & Compliance Blog', url: '/blog' }
          ]}
        />

        <div className="my-8 border-b border-border pb-8">
          <span className="text-accent-strong font-bold text-xs uppercase tracking-widest bg-accent-strong/10 px-3 py-1 rounded-full border border-accent-strong/20">
            Technical Knowledge &amp; Regulatory Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-primary mt-3">
            Saudi Industrial &amp; Safety Insights
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mt-3 leading-relaxed">
            Expert articles covering Saudi Aramco compliance standards (GI 6.012, GI 7.027, GI 8.001), TPI testing requirements, generator de-rating calculations, and manpower supply regulations across KSA.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white border border-border rounded-2xl p-6 hover:border-accent/50 transition-all flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-accent-strong/10 text-accent-strong border border-accent-strong/20 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-primary group-hover:text-accent-strong transition-colors mb-3 leading-snug">
                  {post.title}
                </h2>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-accent-strong font-bold hover:text-amber-700 group-hover:translate-x-0.5 transition-transform"
                >
                  Read Technical Guide →
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
