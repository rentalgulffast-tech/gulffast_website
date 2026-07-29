import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
  title: 'Project Case Studies & Deployment Showcase | GulfFast KSA',
  description: 'Case study showcase for GulfFast equipment rental, heavy transport, and certified manpower supply deployments across Saudi Arabia industrial projects.',
  alternates: {
    canonical: '/projects'
  }
};

export default function ProjectsPage() {
  const caseStudies = [
    {
      id: 'jubail-refinery-turnaround',
      title: 'Petrochemical Plant Shutdown & Maintenance Power Package',
      location: 'Jubail Industrial City, Eastern Province',
      sector: 'Oil, Gas & Petrochemicals',
      summary: 'Turnkey temporary power generation and certified manpower mobilization during a 45-day refinery turnaround.',
      highlights: [
        'Deployed 12 x 500 kVA Cummins silent diesel generators with 10,000L fuel tanks',
        'Supplied 45 x Aramco-certified 6G welders and 30 x TUV scaffolders',
        'Maintained 100% power uptime throughout 24/7 turnaround shift schedule'
      ],
      clientNotice: '[Client reference details provided upon pre-qualification]'
    },
    {
      id: 'cross-country-pipeline-haulage',
      title: 'Gas Pipeline Extension Heavy Haulage & Earthmoving',
      location: 'Udhailiyah to Ras Tanura Corridor',
      sector: 'Oil & Gas Pipeline',
      summary: 'Heavy machinery fleet deployment for trenching, pipe transport, and welding lead power support.',
      highlights: [
        'Provided 8 x 30-Ton hydraulic excavators with rock bucket attachments',
        'Mobilized 15 x 6x4 heavy tractor trucks with 50ft flatbed trailers for line pipe transit',
        'Deployed 10 x multi-process diesel welder generators with certified operators'
      ],
      clientNotice: '[Client reference details provided upon pre-qualification]'
    },
    {
      id: 'neom-infrastructure-fleet',
      title: 'Mega Infrastructure Heavy Equipment & Fleet Logistics',
      location: 'NEOM Development Region, Tabuk Province',
      sector: 'Infrastructure & Earthworks',
      summary: 'Long-term monthly machinery and workforce transport lease for site grading and base layer compaction.',
      highlights: [
        'Supplied CAT D8 Bulldozers, 140K Motor Graders, and 20T Vibratory Rollers',
        'Operated 5 x 50-seat crew AC buses for daily worker transport between housing camp and site',
        '24/7 mobile mechanic support trailer stationed on site for zero maintenance delay'
      ],
      clientNotice: '[Client reference details provided upon pre-qualification]'
    }
  ];

  return (
    <div className="py-10 bg-[#F0EBE3] text-[#2B2620] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Projects Showcase', url: '/projects' }
          ]}
        />

        <div className="my-6 border-b border-[#E2DED4] pb-6">
          <span className="text-[#C0714A] font-bold text-xs uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Industrial Project Showcase
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
            Case Studies &amp; Site Mobilization Showcase
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            Illustrative technical case studies demonstrating GulfFast equipment, transport, and certified manpower deployment across major industrial sites in Saudi Arabia.
          </p>
        </div>

        {/* Client Confidentiality Alert */}
        <div className="bg-white border border-[#E2DED4] rounded-2xl p-5 mb-8 flex items-start gap-4 text-xs text-slate-700 shadow-sm">
          <span className="w-8 h-8 rounded-xl bg-[#FFF7ED] text-[#C0714A] flex items-center justify-center font-bold text-base shrink-0 border border-[#FFEDD5]">ℹ️</span>
          <div>
            <strong className="text-[#0F172A] block mb-1">Direct Supplier Confidentiality Notice</strong>
            <span>
              Per GulfFast strict client NDA policies, specific main contractor and oil major project titles are represented via structured technical templates. Full verifiable reference lists are provided directly to pre-qualified procurement teams upon request.
            </span>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-6 my-8">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white border border-[#E2DED4] rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2DED4] pb-4">
                <div>
                  <span className="text-xs text-[#C0714A] font-bold uppercase tracking-wider">{cs.sector}</span>
                  <h2 className="text-2xl font-extrabold text-[#0F172A] mt-1">{cs.title}</h2>
                </div>
                <div className="text-xs text-[#0F172A] bg-[#F0EBE3] px-3 py-1.5 rounded-xl border border-[#E2DED4] shrink-0 font-bold">
                  📍 {cs.location}
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {cs.summary}
              </p>

              <div className="bg-[#F9F8F5] rounded-xl p-5 border border-[#E2DED4] space-y-3">
                <h3 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Deployment Highlights:</h3>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  {cs.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#C0714A] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 text-xs">
                <span className="text-slate-500 font-mono italic">{cs.clientNotice}</span>
                <Link
                  href="/request-a-quote"
                  className="px-5 py-2.5 bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold rounded-xl transition-colors inline-block text-center shadow-sm"
                >
                  Request Similar Project Package →
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
