import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | GulfFast KSA Insights`,
    description: post.excerpt.slice(0, 154),
    alternates: {
      canonical: `/blog/${post.slug}`
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getBlogPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="py-10 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: `/blog/${post.slug}` }
          ]}
        />

        <div className="my-8 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-3 text-xs mb-3">
            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-1 rounded font-bold uppercase">
              {post.category}
            </span>
            <span className="text-slate-400">• {post.readTime}</span>
            <span className="text-slate-400">• {post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mt-4 leading-relaxed font-medium">
            {post.excerpt}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">
          
          {/* Main Article Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                {post.content.split('\n\n').map((block, idx) => {
                  if (block.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="text-xl font-bold text-amber-400 pt-4 pb-1 border-b border-slate-800">
                        {block.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (block.startsWith('1. ') || block.startsWith('- ')) {
                    const items = block.split('\n');
                    return (
                      <ul key={idx} className="space-y-2 py-2">
                        {items.map((it, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm bg-slate-950 p-3 rounded-lg border border-slate-800">
                            <span className="text-amber-500 font-bold">✓</span>
                            <span>{it.replace(/^[0-9]+\.\s+|^-\s+/, '')}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={idx}>{block}</p>;
                })}
              </div>

              {/* Author footer */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Published by: <strong>{post.author}</strong></span>
                <span>GulfFast Al Khobar Operations</span>
              </div>
            </div>

            {/* Other Insights */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
              <h3 className="text-base font-bold text-white border-l-4 border-amber-500 pl-3">
                Other Technical Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherPosts.map((op) => (
                  <Link
                    key={op.slug}
                    href={`/blog/${op.slug}`}
                    className="bg-slate-950 p-4 rounded-lg border border-slate-800 hover:border-amber-500/50 transition-colors block group"
                  >
                    <span className="text-[10px] text-amber-400 font-bold uppercase">{op.category}</span>
                    <h4 className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors mt-1 line-clamp-2">
                      {op.title}
                    </h4>
                    <span className="text-[11px] text-slate-400 mt-2 block">Read Article →</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Quote Request */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <QuoteForm serviceType="general" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
