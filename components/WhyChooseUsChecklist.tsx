interface ChecklistPoint {
  title: string;
  text: string;
}

const POINTS: ChecklistPoint[] = [
  { title: 'Own Fleet + Partner Network', text: 'We deploy our own equipment and workforce first, sourcing through our partner network only to fill gaps — never a pure brokerage.' },
  { title: 'Eastern Province Roots Since 1999', text: 'Headquartered in Al Khobar for 25+ years, with direct dispatch coverage across 7 Saudi cities.' },
  { title: 'Aramco & TUV-Certified Trades', text: 'Rigging, scaffolding, QA/QC, and equipment operator categories include Aramco-approved and TUV-certified job titles.' },
  { title: 'Flexible Contracts', text: 'Daily, monthly, annual, bare-rental, or fully operated & maintained — terms built around your project timeline.' },
  { title: 'HSE-First Approach', text: 'TPI-inspected equipment and gate-pass-ready mobilization for Aramco and SABIC site access.' },
  { title: 'Single Accountable Source', text: 'One direct contract, one point of contact — for equipment and manpower alike, not a chain of subcontracted parties.' }
];

export default function WhyChooseUsChecklist() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {POINTS.map((point) => (
        <div key={point.title} className="flex items-start gap-3 bg-white border border-[#E2DED4] rounded-2xl p-5 shadow-sm">
          <span className="shrink-0 w-9 h-9 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] text-[#C0714A] flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <div>
            <h3 className="font-bold text-[#0F172A] text-sm mb-1">{point.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{point.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
