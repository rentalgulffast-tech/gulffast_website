import Link from 'next/link';
import type { Metadata } from 'next';
import {
  getPipelineGroupsWithUnits,
  getPipelineCities,
  pipelineCrossLinks
} from '@/lib/pipeline';
import { getEquipmentCategoryBySlug } from '@/lib/equipment';
import { generateServiceSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryHero from '@/components/CategoryHero';
import FaqAccordion from '@/components/FaqAccordion';
import QuoteForm from '@/components/QuoteForm';

const PAGE_DESCRIPTION =
  'Pipeline construction equipment rental in the Eastern Province of Saudi Arabia. Side booms, internal line-up clamps, pipe bending machines, paywelders, cold cutting machines and hydrostatic test pumps, owned and dispatched from Al Khobar.';

export const metadata: Metadata = {
  title: 'Pipeline Construction Equipment Rental | Eastern Province Saudi Arabia | GulfFast',
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/pipeline' }
};

const HUB_FAQS = [
  {
    question: 'Do you own this pipeline equipment or broker it?',
    answer:
      'We own it. Side booms, internal line-up clamps, bending machines, paywelders, roller cradles, boom trucks and the hydraulic low beds that move them are in our own fleet, dispatched from our Al Khobar yard. That matters most on the items — side booms above all — that are close to impossible to source at short notice in the Kingdom, because the machines that exist are usually committed to a project for its whole duration.'
  },
  {
    question: 'Can you supply a complete spread rather than individual machines?',
    answer:
      'Yes, and that is the normal enquiry. Send us the line size, wall thickness, length, terrain and programme and we will quote the equipment set against the spread rather than pricing machines one at a time. Crews come from our manpower division on the same commercial registration, so equipment and people sit on one contract and one invoice.'
  },
  {
    question: 'Which areas do you cover for pipeline work?',
    answer:
      'The Eastern Province is our core coverage: Jubail, Ras Tanura, Abqaiq, Dhahran, Dammam and Al Khobar, all served from our Al Khobar yard. Yanbu is covered by planned cross-country mobilisation rather than short notice.'
  },
  {
    question: 'Do you work with EPC contractors and their subcontractors?',
    answer:
      'Yes. Most of our pipeline work comes through EPC contractors and their subcontractors rather than directly from the end operator. We supply to those contractors; we do not represent ourselves as holding the operator\'s own vendor approvals.'
  },
  {
    question: 'Can you supply for a short tie-in rather than a full spread?',
    answer:
      'Yes. Tie-ins, replacement sections and shutdown pipework in Jubail and at Ras Tanura are routine work, and items like internal line-up clamps, cold cutting machines and demagnetizers are hired for that duration at short-term rates.'
  },
  {
    question: 'How quickly can equipment reach site?',
    answer:
      'Al Khobar, Dammam and Dhahran are inside thirty minutes of our yard. Jubail, Ras Tanura and Abqaiq are roughly ninety. Because we own the hydraulic low beds, transport is part of the commitment rather than a separate booking with its own lead time. Abnormal loads such as a 90 t side boom need permit lead time, and we will tell you honestly what that does to your date.'
  }
];

export default function PipelineHubPage() {
  const groups = getPipelineGroupsWithUnits();
  const cities = getPipelineCities();
  const unitCount = groups.reduce((sum, g) => sum + g.units.length, 0);

  const serviceSchema = generateServiceSchema(
    'Pipeline Construction Equipment Rental',
    PAGE_DESCRIPTION,
    '/pipeline'
  );
  // Breadcrumb JSON-LD is emitted by <Breadcrumbs /> itself — do not add it twice.

  return (
    <div className="py-10 bg-background text-foreground min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Pipeline Division', url: '/pipeline' }
          ]}
        />

        <CategoryHero
          badgeText="Pipeline Division"
          h1="Pipeline Construction Equipment Rental — Eastern Province"
          intro="Side booms, internal line-up clamps, pipe bending machines, paywelders, cold cutting machines and hydrostatic test pumps. This is spread equipment, owned outright and dispatched from our Al Khobar yard to Jubail, Ras Tanura, Abqaiq, Dhahran and Dammam — not a general rental catalogue with pipeline words added to it."
          ctaLabel="Quote a Spread"
          ctaHref="/request-a-quote"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">
          <div className="lg:col-span-8 space-y-10">
            {/* Positioning statement */}
            <section className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-primary mb-3 border-l-4 border-accent pl-3">
                Why a separate pipeline fleet
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                A pipeline spread is not a construction site with pipe on it. The equipment is
                specific, the sequence is fixed, and the machines have no alternative use — a mobile
                crane cannot travel the right of way alongside the ditch with a load on the hook, and
                an external clamp cannot hold root gap on large-diameter thin wall the way an
                internal one does.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Most rental yards in the Eastern Province do not hold this equipment at all. We do,
                across {unitCount} distinct unit types covering lay and lift, welding and joining,
                bending and cutting, testing and commissioning, and the transport that moves the
                spread as it advances.
              </p>
            </section>

            {/* Groups */}
            {groups.map((group) => (
              <section key={group.slug}>
                <h2 className="text-xl font-extrabold text-primary mb-1 border-l-4 border-accent pl-3">
                  {group.name}
                </h2>
                <p className="text-xs text-slate-500 mb-4 pl-4">{group.blurb}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.units.map((unit) => (
                    <Link
                      key={unit.slug}
                      href={`/pipeline/${unit.slug}`}
                      className="group bg-white border border-border rounded-2xl p-4 shadow-sm hover:border-accent-strong hover:shadow-md transition-all"
                    >
                      <h3 className="text-sm font-extrabold text-primary group-hover:text-accent-strong transition-colors">
                        {unit.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {unit.specSummary}
                      </p>
                      <span className="inline-block mt-3 text-[11px] font-bold text-accent-strong">
                        View details →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}

            {/* Cross-links to existing equipment pages */}
            <section>
              <h2 className="text-xl font-extrabold text-primary mb-1 border-l-4 border-accent pl-3">
                Also supplied on every spread
              </h2>
              <p className="text-xs text-slate-500 mb-4 pl-4">
                From our general rental fleet, on the same contract.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pipelineCrossLinks.map((link) => {
                  const category = getEquipmentCategoryBySlug(link.equipmentSlug);
                  if (!category) return null;
                  return (
                    <Link
                      key={link.equipmentSlug}
                      href={`/equipment/${link.equipmentSlug}`}
                      className="group bg-white border border-border rounded-2xl p-4 shadow-sm hover:border-accent-strong hover:shadow-md transition-all"
                    >
                      <h3 className="text-sm font-extrabold text-primary group-hover:text-accent-strong transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {link.pipelineContext}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Cities */}
            <section>
              <h2 className="text-xl font-extrabold text-primary mb-1 border-l-4 border-accent pl-3">
                Where we mobilise
              </h2>
              <p className="text-xs text-slate-500 mb-4 pl-4">
                Dispatched from Al Khobar. Eastern Province first.
              </p>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/pipeline/equipment-rental/${city.slug}`}
                    className="bg-white hover:bg-background border border-border text-slate-700 hover:text-primary px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                  >
                    Pipeline equipment in {city.name} →
                  </Link>
                ))}
              </div>
            </section>

            {/* Manpower tie-in */}
            <section className="bg-primary/5 border border-primary/15 rounded-2xl p-6">
              <h2 className="text-base font-extrabold text-primary mb-2">
                Equipment and crews on one commercial registration
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Pipeline welders, pipe fitters, riggers, QA/QC inspectors, heavy equipment operators
                and safety officers are supplied from our own manpower division. On pipeline work
                certification currency is usually the binding constraint rather than headcount, so
                raise the qualification standard your client requires at enquiry stage, not at
                mobilisation.
              </p>
              <Link
                href="/manpower"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-strong hover:underline"
              >
                See manpower categories →
              </Link>
            </section>

            <FaqAccordion faqs={HUB_FAQS} title="Pipeline Division — FAQ" injectSchema={true} />
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <QuoteForm serviceType="general" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
