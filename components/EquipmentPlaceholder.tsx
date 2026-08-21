import type { ReactNode } from 'react';

interface EquipmentPlaceholderProps {
  cluster: string;
  className?: string;
}

const ICONS: Record<string, ReactNode> = {
  'Earthmoving & Excavation': (
    <>
      <path d="M3 20h10v-4H4l-1 4zM6 16V9h4l3 4" />
      <path d="M13 13l5-7 3 1-4 8" />
      <circle cx="6" cy="20" r="1.6" />
      <circle cx="11" cy="20" r="1.6" />
    </>
  ),
  'Lifting & Access': (
    <>
      <path d="M4 20h16M6 20V9l6-4 6 4v11M9 20v-5h6v5" />
      <path d="M12 5V2" />
    </>
  ),
  'Power, Lighting & Air': (
    <>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </>
  ),
  'Compaction & Paving': (
    <>
      <circle cx="6" cy="16" r="3.2" />
      <circle cx="18" cy="16" r="3.2" />
      <path d="M6 12.8V6h9l3 6" />
    </>
  ),
  'Transport & Trucks': (
    <>
      <path d="M3 17h13l3-5h2v5h-1M3 17a2 2 0 104 0 2 2 0 10-4 0m9 0a2 2 0 104 0 2 2 0 10-4 0M3 17V8h9v4" />
      <path d="M5 8V6h5v2" />
    </>
  ),
  'Trailers & Haulage': (
    <>
      <path d="M2 16h14V9H8L4 12v4z" />
      <path d="M16 16h5v-3l-2-2h-3" />
      <circle cx="6.5" cy="19" r="1.6" />
      <circle cx="17.5" cy="19" r="1.6" />
    </>
  ),
  'Concrete & Demolition': (
    <>
      <path d="M5 20V10l7-4 7 4v10" />
      <path d="M5 10l7 4 7-4" />
      <path d="M12 14v6" />
    </>
  ),
  'Site Support & Facilities': (
    <>
      <rect x="4" y="8" width="16" height="10" rx="1" />
      <path d="M4 8l8-4 8 4" />
      <path d="M9 18v-5h6v5" />
    </>
  ),
  'Agriculture & Forestry': (
    <>
      <circle cx="7" cy="18" r="2.4" />
      <circle cx="17.5" cy="18" r="1.6" />
      <path d="M7 18V9h4l3 4h3.5v5" />
      <path d="M11 9V6h3" />
    </>
  ),
  'Vehicles & Passenger Transport': (
    <>
      <path d="M4 17V9a2 2 0 012-2h12a2 2 0 012 2v8" />
      <path d="M4 17h16M6 17v2M18 17v2" />
      <path d="M4 13h16" />
    </>
  ),
};

const DEFAULT_ICON: ReactNode = (
  <>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 8v4l3 2" />
  </>
);

export default function EquipmentPlaceholder({ cluster, className = '' }: EquipmentPlaceholderProps) {
  const icon = ICONS[cluster] ?? DEFAULT_ICON;

  return (
    <div
      aria-hidden="true"
      className={`relative flex aspect-[3/2] items-center justify-center overflow-hidden bg-tint ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--primary)"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[38%] w-[38%] opacity-[0.17] transition-transform duration-500 ease-[cubic-bezier(.22,.8,.3,1)] group-hover:scale-[1.09]"
      >
        {icon}
      </svg>
    </div>
  );
}
