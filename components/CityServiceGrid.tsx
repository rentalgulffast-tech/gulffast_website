import Link from 'next/link';
import { City } from '@/lib/cities';

interface CityServiceGridProps {
  cities: City[];
  basePath: string; // e.g. '/equipment/crane-rental' or '/manpower/rigger-supply'
  label: string; // e.g. 'Crane Rental' or 'Rigger Supply'
}

export default function CityServiceGrid({ cities, basePath, label }: CityServiceGridProps) {
  return (
    <div className="bg-white border border-[#D7E6F5] rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-extrabold text-[#12233B] mb-3 border-l-4 border-[#2B6CB0] pl-3">
        {`${label} by City`}
      </h2>
      <p className="text-xs text-slate-600 mb-4">
        {`GulfFast dispatches ${label.toLowerCase()} from our Al Khobar operations hub to job sites across Saudi Arabia:`}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`${basePath}/${city.slug}`}
            className="bg-[#EAF4FC] hover:bg-[#D7E6F5] border border-[#D7E6F5] text-[#12233B] font-bold px-3 py-2 rounded-xl text-xs text-center transition-colors"
          >
            📍 {city.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
