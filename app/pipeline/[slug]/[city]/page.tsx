import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getPipelineUnitBySlug,
  getPipelineCityBySlug,
  getPipelineCities,
  getPipelineUnits,
  getPipelineUnitCityPairs,
  getGroupCityAngle,
  pipelineGroups
} from '@/lib/pipeline';
import { getManpowerCategoryBySlug } from '@/lib/manpower';
import { generateServiceSchema } from '@/lib/seo';
import { CONTACT, telHref } from '@/lib/contact';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryHero from '@/components/CategoryHero';
import FaqAccordion from '@/components/FaqAccordion';
import QuoteForm from '@/components/QuoteForm';

interface PageProps {
  params: Promise<{ slug: string; city: string }>;
}

/**
 * driveTime reads "roughly 90 minutes from our Al Khobar yard", which is right on
 * its own but says "Al Khobar yard" twice in a sentence that already names the yard.
 * Trim the trailing clause for those sentences only.
 */
function shortDriveTime(driveTime: string): string {
  return driveTime.replace(/\s*from our own yard$|\s*from our Al Khobar yard$/, '');
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getPipelineUnitCityPairs();
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, city: citySlug } = await params;
  const unit = getPipelineUnitBySlug(slug);
  const city = getPipelineCityBySlug(citySlug);
  if (!unit || !city) return {};

  return {
    title: `${unit.name} Rental in ${city.name} | GulfFast Pipeline Division`,
    description: `${unit.name} for hire in ${city.name}, Saudi Arabia — ${unit.specSummary}. Owned fleet, dispatched from our Al Khobar yard, ${city.driveTime}.`,
    alternates: { canonical: `/pipeline/${unit.slug}/${city.slug}` }
  };
}

export default async function PipelineUnitCityPage({ params }: PageProps) {
  const { slug, city: citySlug } = await params;
  const unit = getPipelineUnitBySlug(slug);
  const city = getPipelineCityBySlug(citySlug);
  if (!unit || !city) notFound();

  const group = pipelineGroups.find((g) => g.slug === unit.group);
  const angle = getGroupCityAngle(unit.group, city.slug);

  const h1 = `${unit.name} Rental in ${city.name}`;
  const description = `${unit.name} for hire in ${city.name}, Saudi Arabia. ${unit.specSummary}.`;
  const schema = generateServiceSchema(h1, description, `/pipeline/${unit.slug}/${city.slug}`);

  const otherCities = getPipelineCities().filter((c) => c.slug !== city.slug);
  const otherUnits = getPipelineUnits().filter((u) => u.slug !== unit.slug);

  const manpower = unit.relatedManpowerSlugs
    .map((s) => getManpowerCategoryBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  // City-specific FAQs. Each answer is built from facts that only apply to this
  // combination, not a template with the city name dropped in.
  const faqs = [
    {
      question: `How quickly can a ${unit.name.toLowerCase()} reach ${city.name}?`,
      answer: `${city.driveTime.charAt(0).toUpperCase() + city.driveTime.slice(1)}. We own the hydraulic low beds that move our equipment, so transport is part of the commitment rather than a dependency on a third-party haulier. ${city.urgency}`
    },
    {
      question: `What kind of pipeline work is a ${unit.name.toLowerCase()} used for in ${city.name}?`,
      answer: `${city.workTypes}${angle ? ' ' + angle : ''}`
    },
    {
      question: `Do you own the ${unit.name.toLowerCase()}s you supply to ${city.name}?`,
      answer: `Yes. ${unit.specSummary.charAt(0).toUpperCase() + unit.specSummary.slice(1)} — held in our own fleet at Al Khobar, not brokered from another yard. That is what lets us give you a date and keep it.`
    },
    {
      question: `Can you supply crews with the equipment in ${city.name}?`,
      answer:
        'Yes. Pipeline welders, pipe fitters, riggers, QA/QC inspectors, heavy equipment operators and safety officers come from our own manpower division on the same commercial registration, so the equipment and the crew are on one contract and one invoice. On pipeline work certification currency is usually the binding constraint, so tell us the standard your client requires at enquiry stage.'
    }
  ];

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
            { name: unit.name, url: `/pipeline/${unit.slug}` },
            { name: city.name, url: `/pipeline/${unit.slug}/${city.slug}` }
          ]}
        />

        <CategoryHero
          badgeText={`${group?.name ?? 'Pipeline Division'} · ${city.name}`}
          h1={h1}
          intro={`${unit.specSummary.charAt(0).toUpperCase() + unit.specSummary.slice(1)}. Dispatched to ${city.name} from our own yard in Al Khobar — ${shortDriveTime(city.driveTime)}.`}
          ctaLabel="Request a Quote"
          ctaHref="/request-a-quote"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">
          <div className="lg:col-span-7 space-y-8">
            {/* The city-specific angle — the reason this page exists separately */}
            {angle && (
              <section className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-extrabold text-primary mb-2 border-l-4 border-accent pl-3">
                  {group?.name} work in {city.name}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{angle}</p>
              </section>
            )}

            <section>
              <h2 className="text-xl font-extrabold text-primary mb-2 border-l-4 border-accent pl-3">
                Pipeline work in {city.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">{city.context}</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">{city.workTypes}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{city.urgency}</p>
            </section>

            {/* Spec table */}
            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
              <div className="px-5 py-3 bg-primary/5 border-b border-border">
                <h2 className="text-sm font-extrabold text-primary">
                  {unit.name} — at a glance
                </h2>
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

            {/* One section of the unit's own detail, then send them to the full page */}
            {unit.sections[0] && (
              <section>
                <h2 className="text-xl font-extrabold text-primary mb-2 border-l-4 border-accent pl-3">
                  {unit.sections[0].heading}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{unit.sections[0].body}</p>
              </section>
            )}

            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5">
              <p className="text-sm text-slate-600 leading-relaxed">
                Full specifications, sizing guidance and the questions worth settling before you
                commit to a machine are on the main{' '}
                <Link
                  href={`/pipeline/${unit.slug}`}
                  className="font-bold text-accent-strong hover:underline"
                >
                  {unit.name} page
                </Link>
                . For everything we mobilise into {city.name}, see{' '}
                <Link
                  href={`/pipeline/equipment-rental/${city.slug}`}
                  className="font-bold text-accent-strong hover:underline"
                >
                  pipeline equipment in {city.name}
                </Link>
                .
              </p>
            </div>

            <FaqAccordion
              faqs={faqs}
              title={`${unit.name} in ${city.name} — FAQ`}
              injectSchema={true}
            />

            {/* Same unit, other cities */}
            <section>
              <h3 className="text-base font-bold text-primary mb-3">
                {unit.name} elsewhere in our coverage
              </h3>
              <div className="flex flex-wrap gap-2">
                {otherCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/pipeline/${unit.slug}/${c.slug}`}
                    className="bg-white hover:bg-background border border-border text-slate-700 hover:text-primary px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                  >
                    {unit.name} in {c.name} →
                  </Link>
                ))}
              </div>
            </section>

            {/* Same city, other units */}
            <section>
              <h3 className="text-base font-bold text-primary mb-3">
                Other pipeline equipment in {city.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {otherUnits.map((u) => (
                  <Link
                    key={u.slug}
                    href={`/pipeline/${u.slug}/${city.slug}`}
                    className="bg-white hover:bg-background border border-border text-slate-700 hover:text-primary px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                  >
                    {u.name} →
                  </Link>
                ))}
              </div>
            </section>

            {manpower.length > 0 && (
              <section>
                <h3 className="text-base font-bold text-primary mb-3">
                  Trades supplied with this equipment in {city.name}
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
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-4">
              <div className="bg-primary text-white rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                  {unit.name} in {city.name}
                </p>
                <p className="text-sm text-white/90 leading-relaxed mb-3">
                  Tell us the line size, the scope and the date. We will tell you honestly what can
                  move and when.
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
