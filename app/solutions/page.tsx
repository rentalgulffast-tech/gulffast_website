import Link from 'next/link';
import { getSolutions } from '@/lib/solutions';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryHero from '@/components/CategoryHero';

export const metadata = {
  title: 'Project Solutions — Shutdown, Turnaround & Plant Support | GulfFast',
  description:
    'Equipment and manpower solutions for shutdowns, turnarounds, plant maintenance and project support across the Eastern Province of Saudi Arabia.',
  alternates: { canonical: '/solutions' }
};

export default function SolutionsPage() {
  const solutions = getSolutions();
  const services = solutions.filter((s) => s.kind === 'service');
  const audiences = solutions.filter((s) => s.kind === 'audience');

  return (
    <div className="py-10 bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Solutions', url: '/solutions' }]} />

        <CategoryHero
          badgeText="Eastern Province Project Support"
          h1="Project Solutions — Equipment and Manpower Together"
          intro="Shutdowns, turnarounds, plant maintenance and project support across the Eastern Province, supplied as a single package from our Al Khobar operations hub."
          ctaLabel="Request a Quote"
          ctaHref="/request-a-quote"
        />

        <div className="bg-primary-deep text-white rounded-2xl p-6 sm:p-8 my-8 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
          <div>
            <p className="text-accent text-[11px] font-bold uppercase tracking-[0.16em]">Short notice</p>
            <h2 className="text-xl font-extrabold mt-1">Need equipment or crews urgently?</h2>
            <p className="text-white/70 text-xs mt-1.5 max-w-xl leading-relaxed">
              Breakdown, unplanned shutdown or a crew that did not turn up — tell us what you need and we will
              tell you honestly what can move.
            </p>
          </div>
          <Link
            href="/urgent"
            className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent-strong hover:bg-accent text-white font-bold text-sm transition-colors"
          >
            Urgent requirements →
          </Link>
        </div>

        <section className="my-10">
          <h2 className="text-xl font-extrabold text-primary mb-4 border-l-4 border-accent pl-3">
            What we support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="bg-card-background border border-border rounded-2xl p-6 shadow-sm hover:border-primary/30 hover:shadow-md transition-all"
              >
                <p className="text-[11px] font-bold uppercase tracking-wider text-accent-strong">{s.badge}</p>
                <h3 className="font-extrabold text-primary text-base mt-1.5 leading-snug">{s.h1}</h3>
                <p className="text-xs text-muted leading-relaxed mt-2">{s.description}</p>
                <span className="inline-block mt-3 text-xs font-bold text-accent-strong">Read more →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-xl font-extrabold text-primary mb-4 border-l-4 border-accent pl-3">
            Who we supply
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {audiences.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="bg-card-background border border-border rounded-2xl p-6 shadow-sm hover:border-primary/30 hover:shadow-md transition-all"
              >
                <p className="text-[11px] font-bold uppercase tracking-wider text-accent-strong">{s.badge}</p>
                <h3 className="font-extrabold text-primary text-base mt-1.5 leading-snug">{s.h1}</h3>
                <p className="text-xs text-muted leading-relaxed mt-2">{s.description}</p>
                <span className="inline-block mt-3 text-xs font-bold text-accent-strong">Read more →</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
