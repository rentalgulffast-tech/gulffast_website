import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { industries } from '@/lib/industries';

export const metadata = {
  title: 'Industries Served | Oil & Gas, Construction, Infrastructure | GulfFast KSA',
  description: 'GulfFast provides equipment rental and certified manpower for Oil & Gas, Petrochemical, Construction, Power & Utilities, Marine & Ports, Infrastructure, and Water sectors in KSA.',
  alternates: {
    canonical: '/industries'
  }
};

export default function IndustriesPage() {
  return (
    <div className="py-10 bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Industries Served', url: '/industries' }
          ]}
        />

        <div className="my-6 border-b border-border pb-6">
          <span className="text-accent-strong font-bold text-xs uppercase tracking-wider bg-accent-strong/10 px-3 py-1 rounded-full border border-accent-strong/20">
            Industrial Sectors &amp; Field Expertise
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mt-2">
            Industries Served in Saudi Arabia
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            GulfFast delivers direct equipment rental and certified manpower supply tailored to the technical standards of Saudi Arabia&apos;s primary economic sectors.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="space-y-8 my-8">
          {industries.map((industry, idx) => (
            <div key={industry.slug} className="bg-white border border-border rounded-2xl p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-accent-strong font-bold text-xs uppercase tracking-wider">
                  {String(idx + 1).padStart(2, '0')}. Sector Focus
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
                  {industry.name}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs pt-2">
                  {industry.highlights.map((highlight) => (
                    <span key={highlight} className="bg-background px-3 py-1 rounded-xl border border-border text-primary font-bold">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 bg-tint p-6 rounded-xl border border-border text-center space-y-3">
                <h3 className="text-base font-bold text-primary">{industry.tagline}</h3>
                <Link href={`/industries/${industry.slug}`} className="block w-full py-2.5 bg-primary hover:bg-accent-strong text-white font-bold text-xs rounded-xl transition-colors shadow-sm">
                  View {industry.name} Solutions →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
