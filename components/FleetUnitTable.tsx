import { FleetItem } from '@/lib/fleet-reference';

interface FleetUnitTableProps {
  units: FleetItem[];
  categoryName: string;
}

export default function FleetUnitTable({ units, categoryName }: FleetUnitTableProps) {
  if (units.length === 0) return null;

  return (
    <div className="bg-white border border-[#D7E6F5] rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-extrabold text-[#12233B] mb-2 border-l-4 border-[#2B6CB0] pl-3">
        Our {categoryName} Fleet, Unit by Unit
      </h2>
      <p className="text-xs text-slate-600 mb-4">
        The specific owned units backing the fleet count above — not a generic stock photo catalog.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-[#D7E6F5] text-left text-slate-500 uppercase tracking-wider">
              <th className="py-2 pr-3 font-bold">Unit</th>
              <th className="py-2 pr-3 font-bold">Spec / Capacity</th>
              <th className="py-2 pr-3 font-bold">Make</th>
              <th className="py-2 font-bold">Year</th>
            </tr>
          </thead>
          <tbody>
            {units.map((unit, idx) => (
              <tr key={idx} className="border-b border-[#D7E6F5] last:border-0">
                <td className="py-2.5 pr-3 font-semibold text-[#12233B]">{unit.itemName}</td>
                <td className="py-2.5 pr-3 text-slate-600">{unit.spec || '—'}</td>
                <td className="py-2.5 pr-3 text-slate-600">{unit.make || '—'}</td>
                <td className="py-2.5 text-slate-600">{unit.year || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
