import { notFound } from 'next/navigation';
import Link from 'next/link';
import { industries } from '@/lib/industries';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateServiceSchema } from '@/lib/seo';

interface PageProps {
  params: Promise<{ industry: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return industries.map((industry) => ({ industry: industry.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { industry: industrySlug } = await params;
  const industry = industries.find((i) => i.slug === industrySlug);
  if (!industry) return {};

  return {
    title: `${industry.name} Industry Solutions in Saudi Arabia | GulfFast`,
    description: industry.description.slice(0, 154),
    alternates: {
      canonical: `/industries/${industry.slug}`
    }
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { industry: industrySlug } = await params;
  const industry = industries.find((i) => i.slug === industrySlug);

  if (!industry) {
    notFound();
  }

  const serviceSchema = generateServiceSchema(
    `${industry.name} Industry Solutions in Saudi Arabia`,
    industry.description,
    `/industries/${industry.slug}`
  );

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
            { name: 'Industries', url: '/industries' },
            { name: industry.name, url: `/industries/${industry.slug}` }
          ]}
        />

        <div className="my-6 border-b border-border pb-6">
          <span className="text-accent-strong font-bold text-xs uppercase tracking-wider bg-accent-strong/10 px-3 py-1 rounded-full border border-accent-strong/20">
            Industrial Sector Focus
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mt-2">
            {industry.name} Industry Solutions in Saudi Arabia
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            {industry.tagline}
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-8">
          <div className="lg:col-span-8 space-y-3">
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
            <h3 className="text-base font-bold text-primary">Need {industry.name} Project Support?</h3>
            <p className="text-xs text-slate-600">Our Al Khobar desk manages gate pass issuance and third-party inspection certificates.</p>
            <Link href="/request-a-quote" className="block w-full py-2.5 bg-primary hover:bg-accent-strong text-white font-bold text-xs rounded-xl transition-colors shadow-sm">
              Request {industry.name} Quote →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          <Link
            href="/equipment"
            className="bg-white border border-border rounded-2xl p-6 hover:border-primary transition-colors shadow-sm block"
          >
            <h3 className="font-bold text-primary text-sm mb-1">Browse Equipment Categories →</h3>
            <p className="text-xs text-slate-500">Excavators, cranes, generators, trucks, and more.</p>
          </Link>
          <Link
            href="/manpower"
            className="bg-white border border-border rounded-2xl p-6 hover:border-primary transition-colors shadow-sm block"
          >
            <h3 className="font-bold text-primary text-sm mb-1">Browse Manpower Categories →</h3>
            <p className="text-xs text-slate-500">Welders, riggers, operators, and safety officers.</p>
          </Link>
        </div>

      </div>
    </div>
  );
}
