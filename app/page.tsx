import Image from 'next/image';
import Link from 'next/link';
import Pill from '@/components/Pill';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import EquipmentCard from '@/components/EquipmentCard';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import WhyChooseUsChecklist from '@/components/WhyChooseUsChecklist';
import CertificationsBadges from '@/components/CertificationsBadges';
import { getEquipmentCategoryBySlug } from '@/lib/equipment';
import { getManpowerTier1Categories } from '@/lib/manpower';
import { getClusterForCategory, equipmentClusters } from '@/lib/equipment-clusters';
import { cities } from '@/lib/cities';
import { getSiteStats } from '@/lib/site-stats';
import { industries } from '@/lib/industries';
import { getAllFaqs, getFeaturedFaqs } from '@/lib/faq';
import { getCertificationSignals } from '@/lib/certifications';

const FEATURED_EQUIPMENT_SLUGS = ['excavators', 'cranes', 'forklifts'];
const FEATURED_MANPOWER_SLUGS = ['welding-and-fabrication', 'rigging-and-scaffolding', 'electrical-and-instrumentation', 'heavy-equipment-operators'];

export default function HomePage() {
  const stats = getSiteStats();
  const manpowerTier1 = getManpowerTier1Categories();
  const featuredManpower = FEATURED_MANPOWER_SLUGS
    .map((slug) => manpowerTier1.find((cat) => cat.slug === slug))
    .filter((cat): cat is NonNullable<typeof cat> => Boolean(cat));

  const featuredEquipment = FEATURED_EQUIPMENT_SLUGS
    .map((slug) => getEquipmentCategoryBySlug(slug))
    .filter((cat): cat is NonNullable<typeof cat> => Boolean(cat))
    .map((category) => {
      const cluster = getClusterForCategory(category);
      return {
        category,
        cluster,
        cityCount: category.landingKeywords.length > 0 ? cities.length : 0
      };
    });

  const marqueeClusters = [...equipmentClusters, ...equipmentClusters];
  const featuredFaqs = getFeaturedFaqs(4);
  const allFaqsCount = getAllFaqs().length;
  const certificationSignals = getCertificationSignals();

  return (
    <div className="bg-background text-foreground">

      {/* Hero */}
      <section className="relative overflow-hidden bg-background py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(232,135,26,0.11), transparent 68%)' }}
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <Reveal as="span" className="block text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent-ink">
              Equipment &amp; Manpower Supply · Saudi Arabia
            </Reveal>
            <Reveal delay={1}>
              <h1 className="my-4 text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-primary sm:text-[56px]">
                Heavy equipment and certified manpower, <span className="text-accent-strong">site-ready</span> on arrival.
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mb-8 max-w-[52ch] text-base text-muted sm:text-[17px]">
                Earthmoving, lifting, power and site-support fleets — plus Aramco and TUV certified trade
                crews — dispatched across the Eastern Province, Riyadh and the Western Region from our Al
                Khobar and Jubail yards.
              </p>
            </Reveal>
            <Reveal delay={3} className="flex flex-wrap gap-3.5">
              <Pill href="/request-a-quote">Request a Quote</Pill>
              <Pill href="/equipment" variant="ghost">
                Browse {stats.equipmentCategoryCount} Categories
              </Pill>
            </Reveal>
          </div>

          <Reveal delay={2} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] shadow-[0_20px_44px_-18px_rgba(20,34,74,0.28)]">
              <Image
                src="/images/hero-equipment.jpg"
                alt="GulfFast heavy equipment fleet mobilized on a Saudi Arabia job site"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="float-chip absolute -left-6 bottom-11 rounded-xl bg-card-background px-4.5 py-3.5 shadow-[0_14px_32px_-12px_rgba(20,34,74,0.3)]">
              <b className="font-display block text-lg font-bold leading-tight text-primary">{stats.ownedFleetUnitsCount}</b>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.09em] text-faint">Owned units</span>
            </div>
            <div className="float-chip absolute -right-5 top-9 rounded-xl bg-card-background px-4.5 py-3.5 shadow-[0_14px_32px_-12px_rgba(20,34,74,0.3)]" style={{ animationDelay: '-2.1s' }}>
              <b className="font-display block text-lg font-bold leading-tight text-primary">{stats.cityCount}</b>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.09em] text-faint">Cities served</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-primary py-13 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-4 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
          <Reveal>
            <b className="font-display block text-4xl font-bold tracking-[-0.03em]">
              <CountUp target={stats.equipmentCategoryCount} />
            </b>
            <span className="mt-2 block text-[11.5px] font-semibold uppercase tracking-[0.15em] text-white/60">Categories</span>
          </Reveal>
          <Reveal delay={1}>
            <b className="font-display block text-4xl font-bold tracking-[-0.03em]">
              <CountUp target={stats.ownedFleetUnitsCount} />
            </b>
            <span className="mt-2 block text-[11.5px] font-semibold uppercase tracking-[0.15em] text-white/60">Owned units</span>
          </Reveal>
          <Reveal delay={2}>
            <b className="font-display block text-4xl font-bold tracking-[-0.03em]">
              <CountUp target={stats.cityCount} />
            </b>
            <span className="mt-2 block text-[11.5px] font-semibold uppercase tracking-[0.15em] text-white/60">Cities served</span>
          </Reveal>
          <Reveal delay={3}>
            <b className="font-display block text-4xl font-bold tracking-[-0.03em]">
              <CountUp target={stats.manpowerCategoryCount} />
            </b>
            <span className="mt-2 block text-[11.5px] font-semibold uppercase tracking-[0.15em] text-white/60">Manpower trades</span>
          </Reveal>
        </div>
      </section>

      {/* Category marquee */}
      <div className="overflow-hidden border-y border-border bg-card-background py-6" style={{ maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)' }}>
        <div className="marquee-track flex w-max gap-16">
          {marqueeClusters.map((cluster, i) => (
            <span key={`${cluster.slug}-${i}`} className="font-display whitespace-nowrap text-lg font-semibold tracking-[0.02em] text-border">
              {cluster.name}
            </span>
          ))}
        </div>
      </div>

      {/* Equipment section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
            <span className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent-ink">Our Fleet</span>
            <h2 className="my-3.5 text-3xl font-bold leading-[1.16] tracking-[-0.028em] text-primary sm:text-[40px]">
              Equipment for every stage of the job
            </h2>
            <p className="text-[16.5px] text-muted">
              {`${stats.equipmentCategoryCount} categories across ${stats.equipmentClusterCount} clusters — with ${stats.ownedFleetUnitsCount} units owned outright and dispatched by our own crews.`}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEquipment.map(({ category, cluster, cityCount }, i) => (
              <Reveal key={category.slug} delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
                <EquipmentCard
                  name={category.name}
                  slug={category.slug}
                  cluster={cluster.name}
                  specSummary={category.specSummary}
                  cityCount={cityCount}
                  ownedCount={category.ownedFleetCount}
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Pill href="/equipment" variant="ghost">
              View All {stats.equipmentCategoryCount} Categories
            </Pill>
          </Reveal>
        </div>
      </section>

      {/* Manpower section */}
      <section className="bg-card-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] shadow-[0_20px_44px_-18px_rgba(20,34,74,0.28)]">
              <Image
                src="/images/manpower-welder.jpg"
                alt="GulfFast certified welder mobilized on a Saudi Arabia industrial site"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={1} className="order-1 lg:order-2">
            <span className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent-ink">Our Manpower</span>
            <h2 className="my-3.5 text-3xl font-bold leading-[1.16] tracking-[-0.028em] text-primary sm:text-[40px]">
              Certified trade crews, ready to mobilize
            </h2>
            <p className="mb-7 text-[16.5px] text-muted">
              {`${stats.manpowerCategoryCount} trade categories, ${stats.jobTitleCount}+ job titles — GulfFast directly recruits and sponsors its workforce, dispatched to all ${stats.cityCount} of our covered cities.`}
            </p>
            <div className="mb-8 flex flex-wrap gap-2.5">
              {featuredManpower.map((category) => (
                <Link
                  key={category.slug}
                  href={`/manpower/${category.slug}`}
                  className="rounded-full border border-border bg-background px-4 py-2 text-[13px] font-semibold text-primary transition-colors hover:border-primary"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <Pill href="/manpower">View All {stats.manpowerCategoryCount} Manpower Categories</Pill>
          </Reveal>
        </div>
      </section>

      {/* Why Choose GulfFast */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
            <span className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent-ink">Why GulfFast</span>
            <h2 className="my-3.5 text-3xl font-bold leading-[1.16] tracking-[-0.028em] text-primary sm:text-[40px]">
              Why Choose GulfFast
            </h2>
          </Reveal>
          <Reveal>
            <WhyChooseUsChecklist />
          </Reveal>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-card-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
            <span className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent-ink">Sectors We Serve</span>
            <h2 className="my-3.5 text-3xl font-bold leading-[1.16] tracking-[-0.028em] text-primary sm:text-[40px]">
              Industries We Serve
            </h2>
            <p className="text-[16.5px] text-muted">
              GulfFast delivers direct equipment rental and certified manpower supply tailored to the technical standards of Saudi Arabia&apos;s primary economic sectors.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group block rounded-2xl bg-card-background p-6 shadow-[0_2px_10px_-4px_rgba(20,34,74,0.1)] card-hover-lift"
                >
                  <h3 className="mb-1 text-sm font-bold text-primary transition-colors group-hover:text-accent-strong">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-faint">{industry.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Case Studies */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
            <span className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent-ink">Track Record</span>
            <h2 className="my-3.5 text-3xl font-bold leading-[1.16] tracking-[-0.028em] text-primary sm:text-[40px]">
              Project Case Studies
            </h2>
          </Reveal>
          <Reveal className="rounded-2xl bg-card-background p-10 text-center shadow-[0_2px_10px_-4px_rgba(20,34,74,0.1)]">
            <p className="text-sm text-muted">
              Named project case studies coming soon.
            </p>
            <Link href="/projects" className="mt-3 inline-block text-xs font-bold text-accent-strong hover:underline">
              View Project Showcase →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Where We Work */}
      <section className="bg-card-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <ServiceAreaMap />
          </Reveal>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
            <span className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent-ink">Compliance</span>
            <h2 className="my-3.5 text-3xl font-bold leading-[1.16] tracking-[-0.028em] text-primary sm:text-[40px]">
              Certifications &amp; Compliance
            </h2>
            <p className="text-[16.5px] text-muted">
              {`${certificationSignals.length} certification signals, verified directly from job titles in our workforce data.`}
            </p>
          </Reveal>
          <Reveal>
            <CertificationsBadges />
          </Reveal>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="bg-card-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
            <span className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-accent-ink">Common Questions</span>
            <h2 className="my-3.5 text-3xl font-bold leading-[1.16] tracking-[-0.028em] text-primary sm:text-[40px]">
              Frequently Asked Questions
            </h2>
            <p className="text-[16.5px] text-muted">
              {`${allFaqsCount} real questions and answers on equipment terms, manpower supply, contracts & payment, and compliance & safety.`}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            {featuredFaqs.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
                <div className="rounded-2xl bg-card-background p-6 shadow-[0_2px_10px_-4px_rgba(20,34,74,0.1)]">
                  <h3 className="mb-1.5 text-sm font-bold text-primary">{faq.question}</h3>
                  <p className="line-clamp-3 text-xs leading-relaxed text-muted">{faq.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Pill href="/faq" variant="ghost">
              View Full FAQ
            </Pill>
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal
            className="relative flex flex-col items-start gap-8 overflow-hidden rounded-[22px] bg-primary-deep p-9 text-white sm:flex-row sm:items-center sm:p-14"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -right-24 h-[340px] w-[340px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(232,135,26,0.22), transparent 70%)' }}
            />
            <div className="relative z-10">
              <h2 className="mb-2.5 text-2xl font-bold leading-tight tracking-[-0.026em] text-white sm:text-[34px]">
                Need a machine or a crew on site this week?
              </h2>
              <p className="max-w-[46ch] text-white/60">
                Send us the spec and the site. We confirm availability, rate and mobilisation directly from our Al Khobar operations hub.
              </p>
            </div>
            <Pill href="/request-a-quote" className="relative z-10 shrink-0 sm:ml-auto">
              Request a Quote
            </Pill>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
