import { getCertificationSignals } from '@/lib/certifications';

interface CertificationsBadgesProps {
  compact?: boolean;
  dark?: boolean;
}

export default function CertificationsBadges({ compact = false, dark = false }: CertificationsBadgesProps) {
  const signals = getCertificationSignals();

  if (compact) {
    return (
      <div className="flex flex-wrap gap-2">
        {signals.map((signal) => (
          <span
            key={signal.name}
            className={
              dark
                ? 'inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-xl'
                : 'inline-flex items-center gap-1.5 bg-background border border-border text-primary text-xs font-bold px-3 py-1.5 rounded-xl'
            }
          >
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
        <div key={signal.name} className="bg-card-background border border-border rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <h3 className="font-extrabold text-primary text-base">{signal.name}</h3>
          </div>
          <p className="text-xs text-muted leading-relaxed">{signal.description}</p>
        </div>
      ))}
    </div>
  );
}
