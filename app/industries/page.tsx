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
    <div className="py-10 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Industries Served', url: '/industries' }
          ]}
        />

        <div className="my-8 border-b border-slate-800 pb-8">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
            Industrial Sectors &amp; Field Expertise
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3">
            Industries Served in Saudi Arabia
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mt-3 leading-relaxed">
            GulfFast delivers direct equipment rental, heavy transport, and certified manpower supply tailored to the technical standards of Saudi Arabia&apos;s primary economic sectors.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="space-y-12 my-12">
          
          {/* Sector 1: Oil & Gas */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <span>01. Sector Focus</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Oil, Gas &amp; Petrochemical Refineries
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Refineries, gas processing plants, and cross-country pipelines demand stringent safety compliance. GulfFast provides Aramco-approved machinery, TPI inspected diesel generators, 6G alloy welders, and certified Rigger Level 1 supervisors qualified under Saudi Aramco GI 6.012, GI 7.027, and GI 8.001.
              </p>
              <div className="flex flex-wrap gap-2 text-xs pt-2">
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">Aramco WQT Welders</span>
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">High-Pressure Compressors</span>
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">6-Pack Welding Racks</span>
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">IVMS Heavy Trucks</span>
              </div>
            </div>
            <div className="lg:col-span-4 bg-slate-950 p-6 rounded-xl border border-slate-800 text-center space-y-3">
              <h3 className="text-base font-bold text-white">Need Oilfield Compliance Support?</h3>
              <p className="text-xs text-slate-400">Our Al Khobar desk manages gate pass issuance and third-party inspection certificates.</p>
              <Link href="/request-a-quote" className="block w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg transition-colors">
                Request Oilfield Quote →
              </Link>
            </div>
          </div>

          {/* Sector 2: Commercial Construction */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <span>02. Sector Focus</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Commercial &amp; Residential Construction
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                For commercial high-rises, residential compounds, and mixed-use developments in Riyadh, Dammam, and Jeddah, GulfFast supplies heavy excavators, mobile lighting towers, crew transport buses, and certified scaffolding falsework.
              </p>
              <div className="flex flex-wrap gap-2 text-xs pt-2">
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">Earthmoving Excavators</span>
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">50-Seat Crew Buses</span>
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">Cuplock Scaffolding</span>
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">Tower Light Fleets</span>
              </div>
            </div>
            <div className="lg:col-span-4 bg-slate-950 p-6 rounded-xl border border-slate-800 text-center space-y-3">
              <h3 className="text-base font-bold text-white">Building Site Fleet Leasing</h3>
              <p className="text-xs text-slate-400">Monthly and annual bare-lease or fully operated equipment contracts.</p>
              <Link href="/request-a-quote" className="block w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg transition-colors">
                Request Construction Quote →
              </Link>
            </div>
          </div>

          {/* Sector 3: Infrastructure */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <span>03. Sector Focus</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Mega Infrastructure &amp; Giga Projects
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                KSA mega-projects—including NEOM, Red Sea, Qiddiya, and regional highway expansions—require massive earthmoving and heavy haulage capacity. GulfFast supplies 100-ton lowbed trailers, heavy bulldozers, high-output dewatering pumps, and off-grid generator power modules.
              </p>
              <div className="flex flex-wrap gap-2 text-xs pt-2">
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">100T Lowbed Haulers</span>
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">D8/D10 Heavy Dozers</span>
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">Off-Grid Power Modules</span>
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">Dewatering Pumps</span>
              </div>
            </div>
            <div className="lg:col-span-4 bg-slate-950 p-6 rounded-xl border border-slate-800 text-center space-y-3">
              <h3 className="text-base font-bold text-white">NEOM &amp; Giga Project Supply</h3>
              <p className="text-xs text-slate-400">Direct logistics and equipment dispatch from our Al Khobar operations hub.</p>
              <Link href="/request-a-quote" className="block w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg transition-colors">
                Request Infrastructure Quote →
              </Link>
            </div>
          </div>

          {/* Sector 4: EPC & Heavy Industrial */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <span>04. Sector Focus</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                EPC Contracting &amp; Heavy Industrial Erection
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Sub-station erection, steel fabrication yards, power generation plants, and water desalination facilities require specialized heavy lifting and precision technical trades. GulfFast delivers 25T-500T mobile cranes, TUV riggers, millwright fitters, and instrument technicians.
              </p>
              <div className="flex flex-wrap gap-2 text-xs pt-2">
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">500T Mobile Cranes</span>
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">Millwright Fitters</span>
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">Instrument Technicians</span>
                <span className="bg-slate-950 px-3 py-1 rounded border border-slate-800 text-amber-300">HV Cable Jointers</span>
              </div>
            </div>
            <div className="lg:col-span-4 bg-slate-950 p-6 rounded-xl border border-slate-800 text-center space-y-3">
              <h3 className="text-base font-bold text-white">EPC Turnkey Manpower</h3>
              <p className="text-xs text-slate-400">Complete trade crews bundled with certified lifting machinery.</p>
              <Link href="/request-a-quote" className="block w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg transition-colors">
                Request EPC Quote →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
