import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getPipelineUnits,
  getPipelineUnitBySlug,
  getPipelineCities
} from '@/lib/pipeline';
import { getEquipmentCategoryBySlug } from '@/lib/equipment';
import { getManpowerCategoryBySlug } from '@/lib/manpower';
import { generateServiceSchema } from '@/lib/seo';
import { CONTACT, telHref } from '@/lib/contact';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryHero from '@/components/CategoryHero';
import FaqAccordion from '@/components/FaqAccordion';
import QuoteForm from '@/components/QuoteForm';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getPipelineUnits().map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const unit = getPipelineUnitBySlug(slug);
  if (!unit) return {};
  return {
    title: unit.title,
    description: unit.description,
    alternates: { canonical: `/pipeline/${unit.slug}` }
  };
}

export default async function PipelineUnitPage({ params }: PageProps) {
  const { slug } = await params;
  const unit = getPipelineUnitBySlug(slug);
  if (!unit) notFound();

  const schema = generateServiceSchema(unit.h1, unit.description, `/pipeline/${unit.slug}`);
  const cities = getPipelineCities();

  const related = unit.relatedSlugs
    .map((s) => getPipelineUnitBySlug(s))
    .filter((u): u is NonNullable<typeof u> => Boolean(u));

  const equipment = unit.relatedEquipmentSlugs
    .map((s) => getEquipmentCategoryBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const manpower = unit.relatedManpowerSlugs
    .map((s) => getManpowerCategoryBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  // "Also searched as" — drop any alias identical to the display name.
  const aliases = unit.aka.filter((a) => a.toLowerCase() !== unit.name.toLowerCase());

  return (
    <div className="py-10 bg-background text-foreground min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Pipeline Division', url: '/pipeline' },
            { name: unit.name, url: `/pipeline/${unit.slug}` }
          ]}
        />

        <CategoryHero
          badgeText="Pipeline Division"
          h1={unit.h1}
          intro={unit.intro}
          ctaLabel="Request a Quote"
          ctaHref="/request-a-quote"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">
          <div className="lg:col-span-7 space-y-8">
            {/* Spec table */}
            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
              <div className="px-5 py-3 bg-primary/5 border-b border-border">
                <h2 className="text-sm font-extrabold text-primary">At a glance</h2>
              </div>
              <dl className="divide-y divide-border">
                {unit.specs.map((spec) => (
                  <div key={spec.label} className="px-5 py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
                    <dt className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      {spec.label}
                    </dt>
                    <dd className="text-sm text-slate-700 sm:col-span-2 leading-relaxed">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Body sections */}
            {unit.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-extrabold text-primary mb-2 border-l-4 border-accent pl-3">
                  {section.heading}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{section.body}</p>
              </section>
            ))}

            {/* City coverage */}
            <section>
              <h2 className="text-xl font-extrabold text-primary mb-3 border-l-4 border-accent pl-3">
                {unit.name} across the Eastern Province
              </h2>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/pipeline/equipment-rental/${city.slug}`}
                    className="bg-white hover:bg-background border border-border text-slate-700 hover:text-primary px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                  >
                    {city.name} →
                  </Link>
                ))}
              </div>
            </section>

            {/* Related pipeline units */}
            {related.length > 0 && (
              <section>
                <h3 className="text-base font-bold text-primary mb-3">
                  Usually mobilised alongside
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/pipeline/${r.slug}`}
                      className="group bg-white border border-border rounded-2xl p-4 shadow-sm hover:border-accent-strong hover:shadow-md transition-all"
                    >
                      <h4 className="text-sm font-extrabold text-primary group-hover:text-accent-strong transition-colors">
                        {r.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {r.specSummary}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Related general equipment */}
            {equipment.length > 0 && (
              <section>
                <h3 className="text-base font-bold text-primary mb-3">
                  From the general rental fleet
                </h3>
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
              </section>
            )}

            {/* Related manpower */}
            {manpower.length > 0 && (
              <section>
                <h3 className="text-base font-bold text-primary mb-3">
                  Trades supplied with this equipment
                </h3>
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
              </section>
            )}

            <FaqAccordion faqs={unit.faqs} title={`FAQ — ${unit.name}`} injectSchema={true} />

            {/* Aliases: genuine search-term help, and honest about why it's there */}
            {aliases.length > 0 && (
              <section className="border-t border-border pt-5">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
                  Also known as
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {aliases.join(' · ')}
                </p>
              </section>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-4">
              <div className="bg-primary text-white rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                  Spread down? Call.
                </p>
                <p className="text-sm text-white/90 leading-relaxed mb-3">
                  Tell us the line size, the location and the date. We will tell you honestly what
                  can move and when.
                </p>
                <a
                  href={telHref(CONTACT.phonePrimary)}
                  className="inline-flex items-center gap-1.5 bg-white text-primary font-bold text-sm px-4 py-2 rounded-xl hover:bg-white/90 transition-colors"
                >
                  {CONTACT.phonePrimary}
                </a>
              </div>
              <QuoteForm serviceType="equipment" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
