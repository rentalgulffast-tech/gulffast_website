interface OwnedFleetBadgeProps {
  categoryName: string;
  ownedFleetCount: number;
}

export default function OwnedFleetBadge({ categoryName, ownedFleetCount }: OwnedFleetBadgeProps) {
  if (ownedFleetCount > 0) {
    return (
      <div className="inline-flex items-center gap-2 bg-white border border-[#E2DED4] rounded-xl px-4 py-2.5 text-xs font-bold text-[#0F172A] shadow-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        {ownedFleetCount} {ownedFleetCount === 1 ? 'unit' : 'units'} of {categoryName} in our own fleet
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 bg-white border border-[#E2DED4] rounded-xl px-4 py-2.5 text-xs font-bold text-slate-600 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-[#C0714A]"></span>
      {categoryName} sourced through our partner network
    </div>
  );
}
