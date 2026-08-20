// Presentation-only grouping of equipment-categories.ts for the mega-menu and hub page.
// Does not change the flat /equipment/[category]/ URL structure — purely a navigation aid.
// Auto-generated from GulfFast sitemap analysis. Do not hand-edit casually — regenerate from source data instead.

export interface EquipmentCluster {
  name: string;
  categorySlugs: string[];
}

export const equipmentClusters: EquipmentCluster[] = [
  {
    name: 'Earthmoving & Excavation',
    categorySlugs: [
      'excavators', 'dozers', 'wheel-loaders', 'backhoe-loaders', 'skid-steer-loaders',
      'crawler-loaders', 'motor-graders', 'scrapers', 'pull-scrapers', 'trenchers',
      'pipelayers', 'site-dumpers', 'tracked-dumpers', 'piling-equipment', 'drilling-equipment', 'mining-equipment'
    ]
  },
  {
    name: 'Lifting & Access',
    categorySlugs: [
      'cranes', 'forklifts', 'telehandlers', 'scissor-lifts', 'man-lifts',
      'lifts', 'hoists', 'reachstackers', 'container-handlers', 'pallet-stackers'
    ]
  },
  {
    name: 'Power, Lighting & Compressed Air',
    categorySlugs: ['generators', 'air-compressors', 'compressors', 'welding-sets', 'light-towers']
  },
  {
    name: 'Compaction & Paving',
    categorySlugs: ['compaction-equipment', 'pavers', 'cold-milling-machines', 'road-reclaimers', 'asphalt-equipment']
  },
  {
    name: 'Transport & Trucks',
    categorySlugs: [
      'trucks', 'buses', 'pickup-trucks', 'vans', 'cars', 'commercial-vehicles',
      'service-vehicles', 'utility-vehicles', 'atvs', 'military-vehicles', 'ambulances'
    ]
  },
  {
    name: 'Trailers & Haulage',
    categorySlugs: ['flatbed-trailers', 'trailers', 'agricultural-trailers']
  },
  {
    name: 'Concrete & Demolition',
    categorySlugs: ['concrete-equipment', 'concrete-pumps', 'demolition-equipment', 'crushers-and-screens', 'cutters']
  },
  {
    name: 'Agriculture & Landscaping',
    categorySlugs: [
      'agricultural-and-forestry-equipment', 'agriculture-equipment', 'cultivators', 'disk-harrows',
      'harvesters', 'mowers', 'mulcher-tractors', 'plows', 'rakes', 'round-balers', 'seeders',
      'tractors', 'chippers', 'tree-spades-and-stump-cutters', 'logging-equipment', 'snow-throwers'
    ]
  },
  {
    name: 'Site Support & Facilities',
    categorySlugs: ['containers', 'porta-cabins', 'coolers', 'spare-parts', 'attachments']
  },
  {
    name: 'Waste & Environmental',
    categorySlugs: ['waste-conveyors', 'waste-plants', 'waste-shredders', 'industrial-balers', 'sweepers', 'paper-cutting-machines']
  },
  {
    name: 'Specialty & Miscellaneous',
    categorySlugs: ['plants', 'feeders', 'miscellaneous-equipment']
  }
];
