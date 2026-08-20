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
    <div className="py-10 bg-white text-[#12233B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: `/blog/${post.slug}` }
          ]}
        />

        <div className="my-8 border-b border-[#D7E6F5] pb-8">
          <div className="flex items-center gap-3 text-xs mb-3">
            <span className="bg-[#EAF4FC] text-[#2B6CB0] border border-[#D7E6F5] px-2.5 py-1 rounded-full font-bold uppercase">
              {post.category}
            </span>
            <span className="text-slate-500">• {post.readTime}</span>
            <span className="text-slate-500">• {post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#12233B] tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mt-4 leading-relaxed font-medium">
            {post.excerpt}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">
          
          {/* Main Article Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white border border-[#D7E6F5] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                {post.content.split('\n\n').map((block, idx) => {
                  if (block.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="text-xl font-bold text-[#12233B] pt-4 pb-1 border-b border-[#D7E6F5]">
                        {block.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (block.startsWith('1. ') || block.startsWith('- ')) {
                    const items = block.split('\n');
                    return (
                      <ul key={idx} className="space-y-2 py-2">
                        {items.map((it, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm bg-[#EAF4FC] p-3 rounded-xl border border-[#D7E6F5]">
                            <span className="text-[#2B6CB0] font-bold">✓</span>
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
              <div className="mt-8 pt-6 border-t border-[#D7E6F5] flex items-center justify-between text-xs text-slate-500">
                <span>Published by: <strong>{post.author}</strong></span>
                <span>GulfFast Al Khobar Operations</span>
              </div>
            </div>

            {/* Other Insights */}
            <div className="bg-white border border-[#D7E6F5] rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-[#12233B] border-l-4 border-[#2B6CB0] pl-3">
                Other Technical Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherPosts.map((op) => (
                  <Link
                    key={op.slug}
                    href={`/blog/${op.slug}`}
                    className="bg-[#EAF4FC] p-4 rounded-xl border border-[#D7E6F5] hover:border-[#2B6CB0]/50 transition-colors block group"
                  >
                    <span className="text-[10px] text-[#2B6CB0] font-bold uppercase">{op.category}</span>
                    <h4 className="text-xs font-bold text-[#12233B] group-hover:text-[#2B6CB0] transition-colors mt-1 line-clamp-2">
                      {op.title}
                    </h4>
                    <span className="text-[11px] text-slate-500 mt-2 block">Read Article →</span>
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
