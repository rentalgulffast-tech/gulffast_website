'use client';

import { useState } from 'react';
import { cities, City } from '@/lib/cities';

interface CityHub extends City {
  region: string;
  role: string;
  coords: { x: number; y: number }; // SVG percentage coordinates
}

const CITY_META: Record<string, { region: string; role: string; coords: { x: number; y: number } }> = {
  'al-khobar': { region: 'Eastern Province', role: 'Headquarters & primary operations dispatch hub', coords: { x: 74, y: 38 } },
  'dammam': { region: 'Eastern Province', role: 'Heavy machinery transport & port logistics coverage', coords: { x: 72, y: 40 } },
  'dhahran': { region: 'Eastern Province', role: 'Aramco camp-adjacent equipment & manpower dispatch', coords: { x: 73, y: 39 } },
  'jubail': { region: 'Eastern Province', role: 'Petrochemical & industrial city equipment coverage', coords: { x: 73, y: 32 } },
  'riyadh': { region: 'Central Province', role: 'Commercial construction & infrastructure coverage', coords: { x: 55, y: 48 } },
  'jeddah': { region: 'Western Province', role: 'Commercial transport & workforce dispatch', coords: { x: 30, y: 58 } },
  'yanbu': { region: 'Western Province', role: 'Red Sea industrial city equipment coverage', coords: { x: 28, y: 48 } }
};

const CITY_HUBS: CityHub[] = cities.map((city) => ({
  ...city,
  ...CITY_META[city.slug]
}));

export default function ServiceAreaMap() {
  const [activeHub, setActiveHub] = useState<CityHub>(CITY_HUBS[0]);

  return (
    <div className="bg-card-background border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-accent-strong bg-accent-strong/10 px-3 py-1 rounded-full border border-accent-strong/20">
            Kingdom-Wide Fleet Dispatch
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mt-2">
            Where We Work
          </h2>
          <p className="text-muted text-xs sm:text-sm mt-1">
            {`GulfFast dispatches equipment and manpower directly to ${CITY_HUBS.length} cities across Saudi Arabia. Hover or tap a city to see its coverage focus.`}
          </p>
        </div>
        <div className="flex items-center gap-3 bg-background px-4 py-2 rounded-xl text-xs shrink-0 border border-border">
          <span className="w-3 h-3 rounded-full bg-accent animate-pulse"></span>
          <span className="font-bold text-primary">Al Khobar Operational HQ</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* SVG Interactive Map Container */}
        <div className="lg:col-span-7 relative bg-tint rounded-xl border border-border p-4 sm:p-8 min-h-[340px] flex items-center justify-center overflow-hidden">

          {/* Stylized KSA Map Outline SVG */}
          <svg className="w-full h-auto max-h-[320px] text-border" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 120,40 L 220,30 L 320,60 L 400,120 L 420,180 L 380,220 L 320,240 L 280,320 L 220,360 L 170,300 L 130,220 L 110,160 L 120,40 Z"
              fill="var(--tint)"
              stroke="var(--border)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 370,80 Q 420,120 440,170"
              stroke="var(--primary)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.3"
            />
            <path
              d="M 100,140 Q 130,240 180,330"
              stroke="var(--accent)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.3"
            />
            <line x1="50" y1="100" x2="450" y2="100" stroke="var(--border)" strokeWidth="1" />
            <line x1="50" y1="200" x2="450" y2="200" stroke="var(--border)" strokeWidth="1" />
            <line x1="50" y1="300" x2="450" y2="300" stroke="var(--border)" strokeWidth="1" />
          </svg>

          {/* Interactive City Nodes overlay */}
          {CITY_HUBS.map((hub) => {
            const isActive = activeHub.slug === hub.slug;
            return (
              <button
                key={hub.slug}
                onClick={() => setActiveHub(hub)}
                onMouseEnter={() => setActiveHub(hub)}
                style={{ left: `${hub.coords.x}%`, top: `${hub.coords.y}%` }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-200 focus:outline-none"
              >
                <span className="relative flex items-center justify-center">
                  {isActive && (
                    <span className="absolute w-8 h-8 rounded-full bg-accent-strong/20 animate-ping"></span>
                  )}
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center border-2 shadow-md transition-transform duration-200 ${
                      isActive
                        ? 'bg-accent-strong border-white scale-125'
                        : 'bg-primary border-white group-hover:scale-110'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  </span>
                </span>

                <span
                  className={`mt-1 inline-block px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap shadow-sm transition-colors ${
                    isActive
                      ? 'bg-accent-strong text-white'
                      : 'bg-white text-primary border border-border'
                  }`}
                >
                  {hub.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Hub Details Card */}
        <div className="lg:col-span-5 bg-background border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-accent-strong">
                {activeHub.region}
              </span>
              <h3 className="text-xl font-extrabold text-primary">{activeHub.name}</h3>
            </div>
            <span className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center text-sm font-bold text-primary">
              📍
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="font-bold text-primary block mb-0.5">Coverage Focus:</span>
              <p className="text-muted leading-relaxed">{activeHub.role}</p>
            </div>

            <p className="text-[11px] text-faint italic">
              {`* GulfFast dispatches equipment and manpower from our Al Khobar operations hub to job sites in and around ${activeHub.name} and surrounding areas.`}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
