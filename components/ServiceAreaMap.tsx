'use client';

import { useState } from 'react';

interface CityHub {
  id: string;
  name: string;
  region: string;
  role: string;
  equipmentUnits: string;
  gatePassStatus: string;
  coords: { x: number; y: number }; // SVG percentage coordinates
}

const CITY_HUBS: CityHub[] = [
  {
    id: 'khobar',
    name: 'Al Khobar (Headquarters)',
    region: 'Eastern Province',
    role: 'Main Corporate HQ & Primary Operations Dispatch Yard',
    equipmentUnits: '450+ Active Fleet Units',
    gatePassStatus: 'Aramco & SABIC Vendor Approved',
    coords: { x: 74, y: 38 }
  },
  {
    id: 'jubail',
    name: 'Jubail Industrial City',
    region: 'Eastern Province',
    role: 'Petrochemical Shutdown & Refinery Equipment Hub',
    equipmentUnits: '250+ Generators & Welding Racks',
    gatePassStatus: 'Sadara & Marafiq Green-Tag Certified',
    coords: { x: 73, y: 32 }
  },
  {
    id: 'dammam',
    name: 'Dammam Port & Logistics',
    region: 'Eastern Province',
    role: 'Heavy Machinery Transport & Maintenance Depot',
    equipmentUnits: '120+ Heavy Trucks & Lowbeds',
    gatePassStatus: 'MOT Highway Permit Clearance',
    coords: { x: 72, y: 40 }
  },
  {
    id: 'riyadh',
    name: 'Riyadh Central Hub',
    region: 'Central Province',
    role: 'Commercial Construction & Infrastructure Equipment Yard',
    equipmentUnits: '180+ Earthmoving Machinery',
    gatePassStatus: 'Riyadh Metro & DGDA Compliant',
    coords: { x: 55, y: 48 }
  },
  {
    id: 'neom',
    name: 'NEOM & Tabuk Region',
    region: 'Northwestern KSA',
    role: 'Giga-Project Mobilization Base & Off-Grid Power Support',
    equipmentUnits: '150+ Heavy Dozers & Crew Buses',
    gatePassStatus: 'NEOM Logistics Pass Registered',
    coords: { x: 20, y: 22 }
  },
  {
    id: 'yanbu',
    name: 'Yanbu Industrial City',
    region: 'Western Province',
    role: 'Red Sea Petrochemical & Refinery Support Hub',
    equipmentUnits: '90+ High-Pressure Compressors',
    gatePassStatus: 'Royal Commission Approved',
    coords: { x: 28, y: 48 }
  },
  {
    id: 'jeddah',
    name: 'Jeddah Operations Hub',
    region: 'Western Province',
    role: 'Commercial Transport & Workforce Dispatch',
    equipmentUnits: '110+ Transport Buses & Cranes',
    gatePassStatus: 'Jeddah Port Clearance',
    coords: { x: 30, y: 58 }
  },
  {
    id: 'turaif',
    name: 'Wa\'ad Al Shamal (Turaif)',
    region: 'Northern Borders',
    role: 'Mining & Phosphate Heavy Equipment Support',
    equipmentUnits: '60+ Heavy Excavators',
    gatePassStatus: 'Ma\'aden Project Compliant',
    coords: { x: 32, y: 12 }
  },
  {
    id: 'jizan',
    name: 'Jizan Economic City',
    region: 'Southern Province',
    role: 'Refinery & Marine Construction Fleet Base',
    equipmentUnits: '75+ Power Generators & Welders',
    gatePassStatus: 'Jizan Refinery Approved',
    coords: { x: 42, y: 82 }
  }
];

export default function ServiceAreaMap() {
  const [activeHub, setActiveHub] = useState<CityHub>(CITY_HUBS[0]);

  return (
    <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2DED4] mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C] bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Kingdom-Wide Fleet Dispatch
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2942] mt-2">
            Saudi Arabia Interactive Service Area Map
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Hover or tap any operational hub to view GulfFast machinery capacity, logistics routes, and gate pass readiness.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-[#F5F2EB] px-4 py-2 rounded-xl text-xs shrink-0 border border-[#E2DED4]">
          <span className="w-3 h-3 rounded-full bg-[#C2410C] animate-pulse"></span>
          <span className="font-bold text-[#0F2942]">Al Khobar Operational HQ</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* SVG Interactive Map Container */}
        <div className="lg:col-span-7 relative bg-[#F9F8F5] rounded-xl border border-[#E2DED4] p-4 sm:p-8 min-h-[340px] flex items-center justify-center overflow-hidden">
          
          {/* Stylized KSA Map Outline SVG */}
          <svg className="w-full h-auto max-h-[320px] text-[#E2DED4]" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stylized Saudi Peninsula Shape */}
            <path
              d="M 120,40 L 220,30 L 320,60 L 400,120 L 420,180 L 380,220 L 320,240 L 280,320 L 220,360 L 170,300 L 130,220 L 110,160 L 120,40 Z"
              fill="#EFECE6"
              stroke="#D6D0C2"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Arabian Gulf Water Highlight */}
            <path
              d="M 370,80 Q 420,120 440,170"
              stroke="#0F2942"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.3"
            />
            {/* Red Sea Water Highlight */}
            <path
              d="M 100,140 Q 130,240 180,330"
              stroke="#C2410C"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.3"
            />
            {/* Regional Grid Lines */}
            <line x1="50" y1="100" x2="450" y2="100" stroke="#E2DED4" strokeWidth="1" />
            <line x1="50" y1="200" x2="450" y2="200" stroke="#E2DED4" strokeWidth="1" />
            <line x1="50" y1="300" x2="450" y2="300" stroke="#E2DED4" strokeWidth="1" />
          </svg>

          {/* Interactive City Nodes overlay */}
          {CITY_HUBS.map((hub) => {
            const isActive = activeHub.id === hub.id;
            return (
              <button
                key={hub.id}
                onClick={() => setActiveHub(hub)}
                onMouseEnter={() => setActiveHub(hub)}
                style={{ left: `${hub.coords.x}%`, top: `${hub.coords.y}%` }}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-200 focus:outline-none`}
              >
                <span className="relative flex items-center justify-center">
                  {/* Outer Pulsing Ring for Active */}
                  {isActive && (
                    <span className="absolute w-8 h-8 rounded-full bg-[#C2410C]/20 animate-ping"></span>
                  )}
                  {/* Pin Dot */}
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center border-2 shadow-md transition-transform duration-200 ${
                      isActive
                        ? 'bg-[#C2410C] border-white scale-125'
                        : 'bg-[#0F2942] border-white group-hover:scale-110'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  </span>
                </span>

                {/* City Label Badge */}
                <span
                  className={`mt-1 inline-block px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap shadow-sm transition-colors ${
                    isActive
                      ? 'bg-[#C2410C] text-white'
                      : 'bg-white text-[#0F2942] border border-[#E2DED4]'
                  }`}
                >
                  {hub.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Hub Details Card */}
        <div className="lg:col-span-5 bg-[#F5F2EB] border border-[#E2DED4] rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-[#E2DED4] pb-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C2410C]">
                {activeHub.region}
              </span>
              <h3 className="text-xl font-extrabold text-[#0F2942]">{activeHub.name}</h3>
            </div>
            <span className="w-8 h-8 rounded-lg bg-white border border-[#E2DED4] flex items-center justify-center text-sm font-bold text-[#0F2942]">
              📍
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="font-bold text-[#0F2942] block mb-0.5">Hub Role &amp; Operations:</span>
              <p className="text-slate-600 leading-relaxed">{activeHub.role}</p>
            </div>

            <div className="bg-white p-3 rounded-lg border border-[#E2DED4] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-semibold">Mobilization Fleet:</span>
                <span className="font-bold text-[#0F2942]">{activeHub.equipmentUnits}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-semibold">Site Compliance:</span>
                <span className="font-bold text-[#C2410C]">{activeHub.gatePassStatus}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 italic">
              * GulfFast maintains dedicated transport trailers operating daily routes from Al Khobar HQ to all major KSA industrial zones.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
