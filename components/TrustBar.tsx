export default function TrustBar() {
  return (
    <section className="bg-white border border-[#E2DED4] rounded-2xl p-6 sm:p-8 shadow-sm text-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E2DED4]">
          
          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-[#0F2942] font-mono">1999</div>
            <p className="text-xs uppercase tracking-wider font-bold text-[#C2410C] mt-1">Established in KSA</p>
            <p className="text-[11px] text-slate-600 mt-0.5 font-medium">25+ Years Industrial Supply Track Record</p>
          </div>

          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-[#0F2942] font-mono">100%</div>
            <p className="text-xs uppercase tracking-wider font-bold text-[#C2410C] mt-1">Direct Fleet Owner</p>
            <p className="text-[11px] text-slate-600 mt-0.5 font-medium">Direct Equipment &amp; Personnel — Zero Broker Fee</p>
          </div>

          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-[#0F2942] font-mono">TPI / SAG</div>
            <p className="text-xs uppercase tracking-wider font-bold text-[#C2410C] mt-1">Aramco &amp; SABIC Vendor</p>
            <p className="text-[11px] text-slate-600 mt-0.5 font-medium">Valid Gate Pass &amp; TPI Inspection Certified</p>
          </div>

          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-[#0F2942] font-mono">24/7</div>
            <p className="text-xs uppercase tracking-wider font-bold text-[#C2410C] mt-1">KSA Site Mobilization</p>
            <p className="text-[11px] text-slate-600 mt-0.5 font-medium">Al Khobar Yard • Fast Eastern Province Delivery</p>
          </div>

        </div>
      </div>
    </section>
  );
}
