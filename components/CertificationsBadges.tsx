import { getCertificationSignals } from '@/lib/certifications';

interface CertificationsBadgesProps {
  compact?: boolean;
}

export default function CertificationsBadges({ compact = false }: CertificationsBadgesProps) {
  const signals = getCertificationSignals();

  if (compact) {
    return (
      <div className="flex flex-wrap gap-2">
        {signals.map((signal) => (
          <span key={signal.name} className="inline-flex items-center gap-1.5 bg-[#EAF4FC] border border-[#D7E6F5] text-[#12233B] text-xs font-bold px-3 py-1.5 rounded-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            {signal.name}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {signals.map((signal) => (
        <div key={signal.name} className="bg-white border border-[#D7E6F5] rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <h3 className="font-extrabold text-[#12233B] text-base">{signal.name}</h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">{signal.description}</p>
        </div>
      ))}
    </div>
  );
}
