export default function TrustBar() {
  return (
    <section className="bg-slate-100 border-y border-slate-200 py-8 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-300">
          
          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-900 font-mono">1999</div>
            <p className="text-xs uppercase tracking-wider font-bold text-slate-800 mt-1">Established in KSA</p>
            <p className="text-[11px] text-slate-600 mt-0.5">25+ Years Industrial Supply Track Record</p>
          </div>

          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-900 font-mono">100%</div>
            <p className="text-xs uppercase tracking-wider font-bold text-slate-800 mt-1">Direct Fleet Owner</p>
            <p className="text-[11px] text-slate-600 mt-0.5">Direct Equipment &amp; Personnel — Zero Broker Fee</p>
          </div>

          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-900 font-mono">TPI / SAG</div>
            <p className="text-xs uppercase tracking-wider font-bold text-slate-800 mt-1">Aramco &amp; SABIC Vendor</p>
            <p className="text-[11px] text-slate-600 mt-0.5">Valid Gate Pass &amp; TPI Inspection Certified</p>
          </div>

          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-900 font-mono">24/7</div>
            <p className="text-xs uppercase tracking-wider font-bold text-slate-800 mt-1">KSA Site Mobilization</p>
            <p className="text-[11px] text-slate-600 mt-0.5">Al Khobar Yard • Fast Eastern Province Delivery</p>
          </div>

        </div>
      </div>
    </section>
  );
}
