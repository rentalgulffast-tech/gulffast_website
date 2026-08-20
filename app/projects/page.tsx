import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
  title: 'Project Case Studies | GulfFast KSA',
  description: 'Named project case studies for GulfFast equipment rental and certified manpower supply deployments across Saudi Arabia are coming soon.',
  alternates: {
    canonical: '/projects'
  }
};

export default function ProjectsPage() {
  return (
    <div className="py-10 bg-white text-[#12233B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Projects Showcase', url: '/projects' }
          ]}
        />

        <div className="my-6 border-b border-[#D7E6F5] pb-6">
          <span className="text-[#2B6CB0] font-bold text-xs uppercase tracking-wider bg-[#EAF4FC] px-3 py-1 rounded-full border border-[#D7E6F5]">
            Industrial Project Showcase
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12233B] mt-2">
            Project Case Studies
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            We're building out named, verifiable case studies of GulfFast equipment and manpower deployments across Saudi Arabia.
          </p>
        </div>

        <div className="bg-white border border-[#D7E6F5] rounded-2xl p-12 text-center shadow-sm my-8">
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Named project case studies coming soon.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Link
              href="/request-a-quote"
              className="px-6 py-2.5 bg-[#2B6CB0] hover:bg-[#1D6FB8] text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
            >
              Request a Quote →
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-white hover:bg-[#EAF4FC] text-[#12233B] font-bold text-xs rounded-xl transition-colors border border-[#D7E6F5]"
            >
              Ask About Past Projects
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
