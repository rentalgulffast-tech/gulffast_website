import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getSolutions, getSolutionBySlug } from '@/lib/solutions';
import { getEquipmentCategoryBySlug } from '@/lib/equipment';
import { getManpowerCategoryBySlug } from '@/lib/manpower';
import { generateServiceSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryHero from '@/components/CategoryHero';
import FaqAccordion from '@/components/FaqAccordion';
import QuoteForm from '@/components/QuoteForm';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getSolutions().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.description,
    alternates: { canonical: `/solutions/${solution.slug}` }
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const schema = generateServiceSchema(solution.h1, solution.description, `/solutions/${solution.slug}`);
  const equipment = solution.relatedEquipment
    .map((s) => getEquipmentCategoryBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const manpower = solution.relatedManpower
    .map((s) => getManpowerCategoryBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <div className="py-10 bg-background text-foreground min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: solution.badge, url: `/solutions/${solution.slug}` }
          ]}
        />

        <CategoryHero
          badgeText={solution.badge}
          h1={solution.h1}
          intro={solution.intro}
          ctaLabel="Request a Quote"
          ctaHref="/request-a-quote"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">
          <div className="lg:col-span-7 space-y-8">
            {solution.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-extrabold text-primary mb-2 border-l-4 border-accent pl-3">
                  {section.heading}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{section.body}</p>
              </section>
            ))}

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <h2 className="text-base font-extrabold text-primary mb-4">{solution.checklist.heading}</h2>
              <ul className="space-y-2.5">
                {solution.checklist.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {equipment.length > 0 && (
              <div>
                <h3 className="text-base font-bold text-primary mb-3">Equipment commonly supplied for this work</h3>
                <div className="flex flex-wrap gap-2">
                  {equipment.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/equipment/${cat.slug}`}
                      className="bg-white hover:bg-background border border-border text-slate-700 hover:text-primary px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                    >
                      {cat.name} →
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {manpower.length > 0 && (
              <div>
                <h3 className="text-base font-bold text-primary mb-3">Trades commonly supplied for this work</h3>
                <div className="flex flex-wrap gap-2">
                  {manpower.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/manpower/${cat.slug}`}
                      className="bg-white hover:bg-background border border-border text-slate-700 hover:text-primary px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                    >
                      {cat.name} →
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <FaqAccordion faqs={solution.faqs} title={`FAQ — ${solution.badge}`} injectSchema={false} />
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <QuoteForm serviceType="general" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
