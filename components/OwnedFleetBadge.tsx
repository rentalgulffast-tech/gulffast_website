interface OwnedFleetBadgeProps {
  categoryName: string;
  ownedFleetCount: number;
}

export default function OwnedFleetBadge({ categoryName, ownedFleetCount }: OwnedFleetBadgeProps) {
  if (ownedFleetCount > 0) {
    return (
      <div className="w-full flex items-center gap-4 bg-white border-2 border-[#0F172A]/10 rounded-2xl px-6 py-5 shadow-sm">
        <span className="shrink-0 w-12 h-12 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] text-[#C0714A] flex items-center justify-center text-xl font-black">
          {ownedFleetCount}
        </span>
        <div>
          <p className="text-sm font-extrabold text-[#0F172A]">
            {`${ownedFleetCount} ${ownedFleetCount === 1 ? 'unit' : 'units'} of ${categoryName} in our own fleet`}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">Dispatched directly from our Al Khobar operations hub — not sub-rented.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex items-center gap-4 bg-white border-2 border-[#E2DED4] rounded-2xl px-6 py-5 shadow-sm">
      <span className="shrink-0 w-12 h-12 rounded-xl bg-[#F0EBE3] border border-[#E2DED4] text-[#0F172A] flex items-center justify-center">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </span>
      <div>
        <p className="text-sm font-extrabold text-[#0F172A]">
          {`${categoryName} sourced through our partner network`}
        </p>
        <p className="text-xs text-slate-500 mt-0.5">GulfFast remains the direct contracting party — we manage sourcing, not a broker handoff.</p>
      </div>
    </div>
  );
}
