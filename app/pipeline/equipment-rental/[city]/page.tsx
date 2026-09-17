import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getPipelineCities,
  getPipelineCityBySlug,
  getPipelineGroupsWithUnits
} from '@/lib/pipeline';
import { generateServiceSchema } from '@/lib/seo';
import { CONTACT, telHref } from '@/lib/contact';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryHero from '@/components/CategoryHero';
import FaqAccordion from '@/components/FaqAccordion';
import QuoteForm from '@/components/QuoteForm';

interface PageProps {
  params: Promise<{ city: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getPipelineCities().map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getPipelineCityBySlug(citySlug);
  if (!city) return {};

  return {
    title: `Pipeline Equipment Rental in ${city.name} | Side Booms, Clamps, Bending | GulfFast`,
    description: `Pipeline construction equipment rental in ${city.name}, Saudi Arabia. Side booms, internal line-up clamps, pipe bending machines, paywelders, cold cutting and hydrostatic test pumps, dispatched from our Al Khobar yard.`,
    alternates: { canonical: `/pipeline/equipment-rental/${city.slug}` }
  };
}

export default async function PipelineCityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getPipelineCityBySlug(citySlug);
  if (!city) notFound();

  const groups = getPipelineGroupsWithUnits();
  const otherCities = getPipelineCities().filter((c) => c.slug !== city.slug);

  const h1 = `Pipeline Equipment Rental in ${city.name}`;
  const description = `Pipeline construction equipment rental in ${city.name}, Saudi Arabia — side booms, internal line-up clamps, pipe bending machines, paywelders, cold cutting machines and hydrostatic test pumps.`;

  const schema = generateServiceSchema(h1, description, `/pipeline/equipment-rental/${city.slug}`);

  const faqs = [
    {
      question: `How quickly can pipeline equipment reach ${city.name}?`,
      answer: `${city.name} is ${city.driveTime}. Because we own the hydraulic low beds that move side booms and bending machines, transport is part of the commitment rather than a separate booking with its own lead time. Abnormal loads such as a 90 t side boom require route permits, and we will tell you what that lead time does to your date rather than discovering it on the day.`
    },
    {
      question: `Do you hold this equipment yourselves or source it for ${city.name} jobs?`,
      answer:
        'We own it. Side booms at 40 t, 60 t and 90 t, internal line-up clamps from 8" to 60", bending machines from 6" to 60", Vietz ArcoTrac paywelders, roller cradles from 4" to 60", boom trucks at 5 t, 10 t and 15 t, and the low beds that move them are all in our own fleet at Al Khobar.'
    },
    {
      question: `Can you supply pipeline crews in ${city.name} as well as equipment?`,
      answer: `Yes. Pipeline welders, pipe fitters, riggers, QA/QC inspectors, heavy equipment operators and safety officers come from our own manpower division on the same commercial registration, so the equipment and the crew sit on one contract and one invoice. Certification currency is usually the binding constraint on pipeline work, so raise the standard your client requires at enquiry stage.`
    },
    {
      question: `Do you take short tie-in work in ${city.name}, or only full spreads?`,
      answer:
        'Both. Tie-ins, replacement sections and shutdown pipework are routine, and items such as internal line-up clamps, cold cutting machines and demagnetizers are hired for that duration at short-term rates. A full spread is quoted as an equipment set against your programme rather than machine by machine.'
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
            { name: city.name, url: `/pipeline/equipment-rental/${city.slug}` }
          ]}
        />

        <CategoryHero
          badgeText={`Pipeline Division · ${city.name}`}
          h1={h1}
          intro={`${city.context} We dispatch pipeline spread equipment to ${city.name} from our own yard in Al Khobar — ${city.driveTime}.`}
          ctaLabel="Request a Quote"
          ctaHref="/request-a-quote"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">
          <div className="lg:col-span-8 space-y-9">
            <section>
              <h2 className="text-xl font-extrabold text-primary mb-3 border-l-4 border-accent pl-3">
                What we supply into {city.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The full pipeline spread, not a general rental catalogue. Every item below is in our
                own fleet and loaded at Al Khobar. Click any of them for capacities, sizing guidance
                and the questions worth answering before you commit to a machine.
              </p>
            </section>

            {groups.map((group) => (
              <section key={group.slug}>
                <h3 className="text-base font-extrabold text-primary mb-1">{group.name}</h3>
                <p className="text-xs text-slate-500 mb-3">{group.blurb}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.units.map((unit) => (
                    <Link
                      key={unit.slug}
                      href={`/pipeline/${unit.slug}`}
                      className="group bg-white border border-border rounded-2xl p-4 shadow-sm hover:border-accent-strong hover:shadow-md transition-all"
                    >
                      <h4 className="text-sm font-extrabold text-primary group-hover:text-accent-strong transition-colors">
                        {unit.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {unit.specSummary}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}

            <section className="bg-primary/5 border border-primary/15 rounded-2xl p-6">
              <h2 className="text-base font-extrabold text-primary mb-2">
                Mobilisation to {city.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {city.driveTime.charAt(0).toUpperCase() + city.driveTime.slice(1)}. We own the
                hydraulic low beds, so equipment mobilisation is not dependent on a third-party
                haulier&apos;s schedule — which is the usual reason a promised date slips by two days.
              </p>
            </section>

            <FaqAccordion
              faqs={faqs}
              title={`Pipeline equipment in ${city.name} — FAQ`}
              injectSchema={true}
            />

            <section>
              <h3 className="text-base font-bold text-primary mb-3">
                Pipeline coverage elsewhere in the Eastern Province
              </h3>
              <div className="flex flex-wrap gap-2">
                {otherCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/pipeline/equipment-rental/${c.slug}`}
                    className="bg-white hover:bg-background border border-border text-slate-700 hover:text-primary px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                  >
                    {c.name} →
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">
              <div className="bg-primary text-white rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                  Working in {city.name}?
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
