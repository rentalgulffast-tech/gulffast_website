import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
  title: 'Industries Served | Oil & Gas, EPC, Infrastructure | GulfFast KSA',
  description: 'GulfFast provides equipment rental, heavy transport, and certified manpower for Oil & Gas, Commercial Construction, Mega Infrastructure, and EPC Industrial projects in KSA.',
  alternates: {
    canonical: '/industries'
  }
};

export default function IndustriesPage() {
  return (
    <div className="py-10 bg-[#F0EBE3] text-[#1E293B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Industries Served', url: '/industries' }
          ]}
        />

        <div className="my-6 border-b border-[#E2DED4] pb-6">
          <span className="text-[#C0714A] font-bold text-xs uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Industrial Sectors &amp; Field Expertise
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
            Industries Served in Saudi Arabia
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            GulfFast delivers direct equipment rental, heavy transport, and certified manpower supply tailored to the technical standards of Saudi Arabia&apos;s primary economic sectors.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="space-y-8 my-8">
          
          {/* Sector 1: Oil & Gas */}
          <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[#C0714A] font-bold text-xs uppercase tracking-wider">
                01. Sector Focus
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Oil, Gas &amp; Petrochemical Refineries
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Refineries, gas processing plants, and cross-country pipelines demand stringent safety compliance. GulfFast provides Aramco-approved machinery, TPI inspected diesel generators, 6G alloy welders, and certified Rigger Level 1 supervisors qualified under Saudi Aramco GI 6.012, GI 7.027, and GI 8.001.
              </p>
              <div className="flex flex-wrap gap-2 text-xs pt-2">
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">Aramco WQT Welders</span>
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">High-Pressure Compressors</span>
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">6-Pack Welding Racks</span>
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">IVMS Heavy Trucks</span>
              </div>
            </div>
            <div className="lg:col-span-4 bg-[#F9F8F5] p-6 rounded-xl border border-[#E2DED4] text-center space-y-3">
              <h3 className="text-base font-bold text-[#0F172A]">Need Oilfield Compliance Support?</h3>
              <p className="text-xs text-slate-600">Our Al Khobar desk manages gate pass issuance and third-party inspection certificates.</p>
              <Link href="/request-a-quote" className="block w-full py-2.5 bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold text-xs rounded-xl transition-colors shadow-sm">
                Request Oilfield Quote →
              </Link>
            </div>
          </div>

          {/* Sector 2: Commercial Construction */}
          <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[#C0714A] font-bold text-xs uppercase tracking-wider">
                02. Sector Focus
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Commercial &amp; Residential Construction
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                For commercial high-rises, residential compounds, and mixed-use developments in Riyadh, Dammam, and Jeddah, GulfFast supplies heavy excavators, mobile lighting towers, crew transport buses, and certified scaffolding falsework.
              </p>
              <div className="flex flex-wrap gap-2 text-xs pt-2">
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">Earthmoving Excavators</span>
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">50-Seat Crew Buses</span>
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">Cuplock Scaffolding</span>
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">Tower Light Fleets</span>
              </div>
            </div>
            <div className="lg:col-span-4 bg-[#F9F8F5] p-6 rounded-xl border border-[#E2DED4] text-center space-y-3">
              <h3 className="text-base font-bold text-[#0F172A]">Building Site Fleet Leasing</h3>
              <p className="text-xs text-slate-600">Monthly and annual bare-lease or fully operated equipment contracts.</p>
              <Link href="/request-a-quote" className="block w-full py-2.5 bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold text-xs rounded-xl transition-colors shadow-sm">
                Request Construction Quote →
              </Link>
            </div>
          </div>

          {/* Sector 3: Infrastructure */}
          <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[#C0714A] font-bold text-xs uppercase tracking-wider">
                03. Sector Focus
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Mega Infrastructure &amp; Giga Projects
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                KSA mega-projects—including NEOM, Red Sea, Qiddiya, and regional highway expansions—require massive earthmoving and heavy haulage capacity. GulfFast supplies 100-ton lowbed trailers, heavy bulldozers, high-output dewatering pumps, and off-grid generator power modules.
              </p>
              <div className="flex flex-wrap gap-2 text-xs pt-2">
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">100T Lowbed Haulers</span>
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">D8/D10 Heavy Dozers</span>
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">Off-Grid Power Modules</span>
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">Dewatering Pumps</span>
              </div>
            </div>
            <div className="lg:col-span-4 bg-[#F9F8F5] p-6 rounded-xl border border-[#E2DED4] text-center space-y-3">
              <h3 className="text-base font-bold text-[#0F172A]">NEOM &amp; Giga Project Supply</h3>
              <p className="text-xs text-slate-600">Direct logistics and equipment dispatch from our Al Khobar operations hub.</p>
              <Link href="/request-a-quote" className="block w-full py-2.5 bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold text-xs rounded-xl transition-colors shadow-sm">
                Request Infrastructure Quote →
              </Link>
            </div>
          </div>

          {/* Sector 4: EPC & Heavy Industrial */}
          <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[#C0714A] font-bold text-xs uppercase tracking-wider">
                04. Sector Focus
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                EPC Contracting &amp; Heavy Industrial Erection
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sub-station erection, steel fabrication yards, power generation plants, and water desalination facilities require specialized heavy lifting and precision technical trades. GulfFast delivers 25T-500T mobile cranes, TUV riggers, millwright fitters, and instrument technicians.
              </p>
              <div className="flex flex-wrap gap-2 text-xs pt-2">
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">500T Mobile Cranes</span>
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">Millwright Fitters</span>
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">Instrument Technicians</span>
                <span className="bg-[#F0EBE3] px-3 py-1 rounded-xl border border-[#E2DED4] text-[#0F172A] font-bold">HV Cable Jointers</span>
              </div>
            </div>
            <div className="lg:col-span-4 bg-[#F9F8F5] p-6 rounded-xl border border-[#E2DED4] text-center space-y-3">
              <h3 className="text-base font-bold text-[#0F172A]">EPC Turnkey Manpower</h3>
              <p className="text-xs text-slate-600">Complete trade crews bundled with certified lifting machinery.</p>
              <Link href="/request-a-quote" className="block w-full py-2.5 bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold text-xs rounded-xl transition-colors shadow-sm">
                Request EPC Quote →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
