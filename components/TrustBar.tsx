export default function TrustBar() {
  return (
    <section className="bg-slate-900 border-y border-slate-800 py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          
          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-500 font-mono">1999</div>
            <p className="text-xs uppercase tracking-wider font-bold text-slate-300 mt-1">Established in KSA</p>
            <p className="text-[11px] text-slate-400 mt-0.5">25+ Years Industrial Supply Track Record</p>
          </div>

          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-500 font-mono">100%</div>
            <p className="text-xs uppercase tracking-wider font-bold text-slate-300 mt-1">Direct Equipment Owner</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Direct Fleet &amp; Personnel — Zero Broker Fee</p>
          </div>

          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-500 font-mono">TPI / SAG</div>
            <p className="text-xs uppercase tracking-wider font-bold text-slate-300 mt-1">Aramco &amp; SABIC Compliant</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Valid Gate Pass &amp; TPI Inspection Ready</p>
          </div>

          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-500 font-mono">24/7</div>
            <p className="text-xs uppercase tracking-wider font-bold text-slate-300 mt-1">Site Mobilization Support</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Al Khobar Hub • Fast Delivery Across KSA</p>
          </div>

        </div>
      </div>
    </section>
  );
}
