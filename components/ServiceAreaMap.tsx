'use client';

import { useState } from 'react';
import { KSA_BORDER_PATH, MAP_VIEWBOX, serviceCities, HQ_SLUG } from '@/lib/service-area';

export default function ServiceAreaMap() {
  const [selectedSlug, setSelectedSlug] = useState<string>(HQ_SLUG);
  const selectedCity = serviceCities.find((c) => c.slug === selectedSlug) ?? serviceCities[0];
  const isHQSelected = selectedCity.slug === HQ_SLUG;

  return (
    <div className="rounded-2xl bg-card-background p-6 shadow-[0_2px_10px_-4px_rgba(20,34,74,0.1)] sm:p-8">
      <div className="mb-6 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-accent-strong bg-accent-strong/10 px-3 py-1 rounded-full border border-accent-strong/20">
            Kingdom-Wide Fleet Dispatch
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mt-2">
            Where We Work
          </h2>
          <p className="text-muted text-xs sm:text-sm mt-1">
            {`GulfFast dispatches equipment and manpower directly to ${serviceCities.length} cities across Saudi Arabia. Hover or tap a city to see its coverage focus.`}
          </p>
        </div>
        <div className="flex items-center gap-3 bg-background px-4 py-2 rounded-xl text-xs shrink-0 border border-border">
          <span className="w-3 h-3 rounded-full bg-accent-strong"></span>
          <span className="font-bold text-primary">Al Khobar Operational HQ</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* SVG map */}
        <div className="lg:col-span-7 relative bg-tint rounded-xl border border-border p-4 sm:p-8 flex items-center justify-center overflow-hidden">
          <svg
            className="w-full h-auto max-h-[420px] overflow-visible"
            viewBox={`0 0 ${MAP_VIEWBOX.width} ${MAP_VIEWBOX.height}`}
            role="img"
            aria-label="Map of Saudi Arabia showing GulfFast coverage cities"
          >
            <path
              d={KSA_BORDER_PATH}
              fill="var(--tint)"
              stroke="var(--border)"
              strokeWidth={1.4}
              strokeLinejoin="round"
            />

            {serviceCities.map((city) => {
              const isSelected = city.slug === selectedSlug;
              const isCityHQ = city.slug === HQ_SLUG;

              return (
                <g
                  key={city.slug}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={city.name}
                  onMouseEnter={() => setSelectedSlug(city.slug)}
                  onClick={() => setSelectedSlug(city.slug)}
                  onFocus={() => setSelectedSlug(city.slug)}
                  className="cursor-pointer outline-none"
                >
                  <line
                    x1={city.x}
                    y1={city.y}
                    x2={city.labelX}
                    y2={city.labelY}
                    stroke={isSelected ? 'var(--accent)' : 'var(--border)'}
                    strokeWidth={1}
                    strokeDasharray={isSelected ? undefined : '2 3'}
                  />
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={13}
                    fill="var(--accent-strong)"
                    opacity={isSelected ? 0.18 : 0}
                    className={isSelected ? 'city-halo-pulse' : undefined}
                  />
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={isSelected ? 7.5 : 5}
                    fill={isSelected || isCityHQ ? 'var(--accent-strong)' : 'var(--primary)'}
                    stroke="var(--card-background)"
                    strokeWidth={2}
                    className="transition-[r] duration-200 ease-out"
                  />
                  <text
                    x={city.labelX}
                    y={city.labelY}
                    textAnchor={city.labelAnchor}
                    dominantBaseline="middle"
                    className={`text-[12.5px] transition-colors ${isSelected ? 'fill-primary font-bold' : 'fill-muted font-semibold'}`}
                  >
                    {city.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected city detail panel */}
        <div className="lg:col-span-5 relative flex flex-col overflow-hidden rounded-xl bg-primary-deep p-7 text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-16 h-[220px] w-[220px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(232,135,26,0.2), transparent 70%)' }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                {selectedCity.region}
              </span>
              <span className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/10 flex items-center justify-center text-sm">
                📍
              </span>
            </div>
            <h3 className="text-2xl sm:text-[28px] font-bold tracking-tight mt-1 text-white">{selectedCity.name}</h3>
            {isHQSelected && (
              <span className="inline-block mt-2.5 text-[10px] font-bold uppercase tracking-[0.12em] bg-white/[0.14] px-2.5 py-1 rounded">
                Operational Headquarters
              </span>
            )}

            <div className="my-5 h-px bg-white/10" />

            <span className="block mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/55">
              Coverage focus
            </span>
            <p className="text-sm leading-relaxed text-white/85">{selectedCity.role}</p>
          </div>

          <p className="relative z-10 mt-auto pt-5 border-t border-white/10 text-[12px] leading-relaxed text-white/55">
            {`* GulfFast dispatches equipment and manpower from our Al Khobar operations hub to job sites in and around ${selectedCity.name} and surrounding areas.`}
          </p>
        </div>
      </div>
    </div>
  );
}
