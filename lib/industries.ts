export interface Industry {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export const industries: Industry[] = [
  {
    name: 'Oil & Gas',
    slug: 'oil-and-gas',
    tagline: 'Upstream fields, gas plants, and cross-country pipelines',
    description: 'Upstream oilfields, gas processing plants, and cross-country pipelines demand stringent safety compliance. GulfFast provides Aramco-approved machinery, TPI inspected diesel generators, 6G alloy welders, and certified Rigger Level 1 supervisors qualified under Saudi Aramco GI 6.012, GI 7.027, and GI 8.001.',
    highlights: ['Aramco WQT Welders', 'High-Pressure Compressors', 'TPI Inspected Generators', 'IVMS Heavy Trucks']
  },
  {
    name: 'Petrochemical',
    slug: 'petrochemical',
    tagline: 'Refineries, plant turnarounds, and shutdown maintenance',
    description: 'Refinery turnarounds and petrochemical plant shutdowns require rapid, compliant mobilization of both machinery and certified trade crews within tight maintenance windows. GulfFast supplies temporary power generation, certified welders, TUV riggers, and scaffolders for shutdown and turnaround work across Jubail and Yanbu industrial cities.',
    highlights: ['Turnaround Power Packages', 'TUV Certified Scaffolders', 'Coating & Blasting Crews', '24/7 Shift Mobilization']
  },
  {
    name: 'Construction',
    slug: 'construction',
    tagline: 'Commercial, residential, and mixed-use developments',
    description: 'For commercial high-rises, residential compounds, and mixed-use developments across Riyadh, Dammam, and Jeddah, GulfFast supplies heavy excavators, mobile lighting towers, crew transport buses, and certified scaffolding falsework, available as bare-lease or fully operated equipment contracts.',
    highlights: ['Earthmoving Excavators', 'Crew Transport Buses', 'Cuplock Scaffolding', 'Tower Light Fleets']
  },
  {
    name: 'Power & Utilities',
    slug: 'power-and-utilities',
    tagline: 'Sub-stations, generation plants, and grid infrastructure',
    description: 'Sub-station erection, power generation plant construction, and grid infrastructure projects require specialized heavy lifting and precision technical trades. GulfFast delivers mobile cranes, TUV riggers, millwright fitters, and instrument and electrical technicians for SEC and independent power producer projects.',
    highlights: ['Mobile Cranes to 500T', 'HV Cable Jointers', 'Instrument Technicians', 'Millwright Fitters']
  },
  {
    name: 'Marine & Ports',
    slug: 'marine-and-ports',
    tagline: 'Port facilities, marine terminals, and dockside works',
    description: 'Port facility construction and marine terminal upgrades along the Arabian Gulf and Red Sea coasts require corrosion-resistant equipment and certified riggers experienced with dockside lifting and container handling. GulfFast supplies compaction equipment, generators, and certified crews for marine and port infrastructure works.',
    highlights: ['Dockside Lifting Crews', 'Corrosion-Resistant Fleet', 'Compaction Equipment', 'Coastal Site Generators']
  },
  {
    name: 'Infrastructure & Roads',
    slug: 'infrastructure-and-roads',
    tagline: 'Highways, mega-projects, and giga-project earthworks',
    description: "KSA mega-projects and regional highway expansions require massive earthmoving and heavy haulage capacity. GulfFast supplies heavy bulldozers, motor graders, vibratory rollers, and multi-axle trucks for site grading, base layer compaction, and highway construction, with direct logistics dispatched from our Al Khobar operations hub.",
    highlights: ['Heavy Bulldozers', 'Motor Graders', 'Vibratory Rollers', 'Multi-Axle Heavy Trucks']
  },
  {
    name: 'Water & Wastewater',
    slug: 'water-and-wastewater',
    tagline: 'Desalination, treatment plants, and pipeline networks',
    description: 'Water desalination facilities, wastewater treatment plants, and distribution pipeline networks require dewatering-capable equipment and certified pipefitting and electrical trades. GulfFast supplies excavators, generators, compaction equipment, and certified manpower for water infrastructure projects across Saudi Arabia.',
    highlights: ['Pipeline Excavation Fleet', 'Certified Pipefitters', 'Site Power Generators', 'Compaction Equipment']
  }
];
