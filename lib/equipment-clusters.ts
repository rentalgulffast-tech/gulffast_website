import { EquipmentCategory, equipmentCategories } from '@/lib/equipment-categories';

export interface EquipmentCluster {
  name: string;
  slug: string;
}

// Groupings for the equipment hub page. Every category slug below must exist in
// lib/equipment-categories.ts — this file only sorts categories into display
// buckets, it does not add or invent equipment.
export const equipmentClusters: EquipmentCluster[] = [
  { name: 'Earthmoving & Excavation', slug: 'earthmoving-and-excavation' },
  { name: 'Lifting & Access', slug: 'lifting-and-access' },
  { name: 'Power, Lighting & Air', slug: 'power-lighting-and-air' },
  { name: 'Compaction & Paving', slug: 'compaction-and-paving' },
  { name: 'Transport & Trucks', slug: 'transport-and-trucks' },
  { name: 'Trailers & Haulage', slug: 'trailers-and-haulage' },
  { name: 'Concrete & Demolition', slug: 'concrete-and-demolition' },
  { name: 'Site Support & Facilities', slug: 'site-support-and-facilities' },
  { name: 'Agriculture & Forestry', slug: 'agriculture-and-forestry' },
  { name: 'Vehicles & Passenger Transport', slug: 'vehicles-and-passenger-transport' },
];

// Fallback bucket for any category slug that isn't in the map below — keeps the
// page from crashing if lib/equipment-categories.ts grows without this file
// being updated. Not part of the displayed cluster list unless it's ever used.
const OTHER_EQUIPMENT_CLUSTER: EquipmentCluster = { name: 'Other Equipment', slug: 'other-equipment' };

const CATEGORY_SLUG_TO_CLUSTER_SLUG: Record<string, string> = {
  'flatbed-trailers': 'trailers-and-haulage',
  'agricultural-and-forestry-equipment': 'agriculture-and-forestry',
  'agricultural-trailers': 'agriculture-and-forestry',
  'agriculture-equipment': 'agriculture-and-forestry',
  'air-compressors': 'power-lighting-and-air',
  'ambulances': 'vehicles-and-passenger-transport',
  'asphalt-equipment': 'compaction-and-paving',
  'attachments': 'site-support-and-facilities',
  'atvs': 'vehicles-and-passenger-transport',
  'backhoe-loaders': 'earthmoving-and-excavation',
  'buses': 'vehicles-and-passenger-transport',
  'cars': 'vehicles-and-passenger-transport',
  'chippers': 'agriculture-and-forestry',
  'cold-milling-machines': 'compaction-and-paving',
  'commercial-vehicles': 'transport-and-trucks',
  'compaction-equipment': 'compaction-and-paving',
  'compressors': 'power-lighting-and-air',
  'concrete-equipment': 'concrete-and-demolition',
  'concrete-pumps': 'concrete-and-demolition',
  'container-handlers': 'lifting-and-access',
  'containers': 'site-support-and-facilities',
  'coolers': 'site-support-and-facilities',
  'cranes': 'lifting-and-access',
  'crawler-loaders': 'earthmoving-and-excavation',
  'crushers-and-screens': 'concrete-and-demolition',
  'cultivators': 'agriculture-and-forestry',
  'cutters': 'concrete-and-demolition',
  'demolition-equipment': 'concrete-and-demolition',
  'disk-harrows': 'agriculture-and-forestry',
  'dozers': 'earthmoving-and-excavation',
  'drilling-equipment': 'earthmoving-and-excavation',
  'excavators': 'earthmoving-and-excavation',
  'feeders': 'agriculture-and-forestry',
  'generators': 'power-lighting-and-air',
  'harvesters': 'agriculture-and-forestry',
  'hoists': 'lifting-and-access',
  'industrial-balers': 'site-support-and-facilities',
  'lifts': 'lifting-and-access',
  'light-towers': 'power-lighting-and-air',
  'logging-equipment': 'agriculture-and-forestry',
  'military-vehicles': 'vehicles-and-passenger-transport',
  'mining-equipment': 'earthmoving-and-excavation',
  'miscellaneous-equipment': 'site-support-and-facilities',
  'motor-graders': 'earthmoving-and-excavation',
  'mowers': 'agriculture-and-forestry',
  'mulcher-tractors': 'agriculture-and-forestry',
  'pallet-stackers': 'lifting-and-access',
  'paper-cutting-machines': 'site-support-and-facilities',
  'pavers': 'compaction-and-paving',
  'pickup-trucks': 'transport-and-trucks',
  'piling-equipment': 'earthmoving-and-excavation',
  'pipelayers': 'earthmoving-and-excavation',
  'plants': 'concrete-and-demolition',
  'plows': 'agriculture-and-forestry',
  'porta-cabins': 'site-support-and-facilities',
  'pull-scrapers': 'earthmoving-and-excavation',
  'rakes': 'agriculture-and-forestry',
  'reachstackers': 'lifting-and-access',
  'road-reclaimers': 'compaction-and-paving',
  'round-balers': 'agriculture-and-forestry',
  'scrapers': 'earthmoving-and-excavation',
  'seeders': 'agriculture-and-forestry',
  'service-vehicles': 'transport-and-trucks',
  'site-dumpers': 'earthmoving-and-excavation',
  'skid-steer-loaders': 'earthmoving-and-excavation',
  'snow-throwers': 'agriculture-and-forestry',
  'spare-parts': 'site-support-and-facilities',
  'sweepers': 'compaction-and-paving',
  'tracked-dumpers': 'earthmoving-and-excavation',
  'tractors': 'agriculture-and-forestry',
  'trailers': 'trailers-and-haulage',
  'tree-spades-and-stump-cutters': 'agriculture-and-forestry',
  'trenchers': 'earthmoving-and-excavation',
  'trucks': 'transport-and-trucks',
  'utility-vehicles': 'vehicles-and-passenger-transport',
  'vans': 'vehicles-and-passenger-transport',
  'waste-conveyors': 'site-support-and-facilities',
  'waste-plants': 'site-support-and-facilities',
  'waste-shredders': 'site-support-and-facilities',
  'welding-sets': 'power-lighting-and-air',
  'wheel-loaders': 'earthmoving-and-excavation',
  'forklifts': 'lifting-and-access',
  'telehandlers': 'lifting-and-access',
  'scissor-lifts': 'lifting-and-access',
  'man-lifts': 'lifting-and-access',
};

export function getClusterForCategory(category: EquipmentCategory): EquipmentCluster {
  const clusterSlug = CATEGORY_SLUG_TO_CLUSTER_SLUG[category.slug];
  return equipmentClusters.find((c) => c.slug === clusterSlug) ?? OTHER_EQUIPMENT_CLUSTER;
}

export interface EquipmentClusterWithCount extends EquipmentCluster {
  count: number;
}

export function getEquipmentClustersWithCounts(
  categories: EquipmentCategory[] = equipmentCategories
): EquipmentClusterWithCount[] {
  const counts = new Map<string, number>();
  for (const category of categories) {
    const cluster = getClusterForCategory(category);
    counts.set(cluster.slug, (counts.get(cluster.slug) ?? 0) + 1);
  }

  return [...equipmentClusters, OTHER_EQUIPMENT_CLUSTER]
    .map((cluster) => ({ ...cluster, count: counts.get(cluster.slug) ?? 0 }))
    .filter((cluster) => cluster.count > 0);
}
