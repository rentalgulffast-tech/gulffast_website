// Service-area map geometry.
//
// Border: Natural Earth 1:50m admin-0 boundary for Saudi Arabia, obtained from the
// `world-atlas` package (ISC). Natural Earth itself is public domain — no attribution
// required. Decoded from TopoJSON, Web-Mercator projected, Douglas-Peucker simplified
// to 182 points.
//
// Projection constants (for regenerating or adding a city):
//   merc(lon, lat) -> [lon, degrees(ln(tan(PI/4 + rad(lat)/2)))]
//   x = (mercX - 34.616146) * 29.109298 + 14
//   y = (33.954331 - mercY) * 29.109298 + 14
// Do not hand-edit x/y — recompute them from lat/lon with the formula above.

export const MAP_VIEWBOX = { width: 640, height: 533 } as const;

export const KSA_BORDER_PATH =
  'M519.4,439.0 438.3,450.5 433.9,451.8 408.7,464.8 391.4,486.4 387.4,496.7 378.7,501.7 373.8,501.5 366.5,492.0 354.4,493.1 331.8,490.9 328.1,490.4 320.5,487.1 291.7,488.0 284.8,490.2 278.8,489.0 275.5,485.7 270.2,484.3 263.6,489.2 263.5,490.2 265.0,492.0 262.6,493.9 261.4,501.9 262.3,504.8 263.4,505.8 262.9,509.6 261.1,510.3 259.0,513.8 252.2,519.2 249.3,508.1 245.1,504.1 244.8,501.3 240.1,496.4 237.5,486.8 230.5,479.7 221.7,473.1 214.6,461.7 212.4,455.7 206.5,448.8 203.3,436.3 197.3,423.8 193.7,418.9 192.8,415.6 188.7,413.5 184.7,408.2 173.1,399.7 167.3,398.9 162.8,395.9 159.5,391.9 155.9,385.1 149.6,377.8 144.4,367.2 146.0,363.4 145.9,360.7 141.2,349.4 142.6,339.2 144.4,333.3 143.4,327.0 141.6,323.6 141.8,321.4 139.9,320.3 138.2,317.8 139.9,317.9 135.7,312.6 133.0,304.5 126.0,291.5 120.9,285.2 110.2,276.5 107.3,276.4 104.1,273.6 99.2,273.1 88.6,256.2 91.1,251.7 87.8,241.1 81.1,229.7 76.5,226.2 73.9,216.9 69.3,214.7 61.6,198.8 49.9,183.3 47.4,177.1 42.1,171.4 37.5,161.6 30.5,151.6 27.4,149.9 17.0,148.5 14.2,150.7 14.0,147.9 18.7,136.0 19.3,128.9 23.7,107.9 54.8,113.4 56.2,113.0 68.2,103.2 74.8,91.9 76.2,90.7 97.1,86.4 101.8,75.7 111.9,69.4 82.2,35.7 140.5,18.5 145.8,14.0 181.5,20.4 231.1,49.7 253.9,69.5 307.2,113.0 355.7,117.6 360.9,116.5 387.1,120.0 389.7,125.1 391.5,132.1 394.0,135.2 416.5,134.9 421.9,148.4 427.1,156.2 427.8,159.4 426.8,161.9 429.9,165.0 439.6,169.5 437.8,171.3 444.5,179.7 448.4,180.7 453.6,187.1 461.4,191.2 466.2,196.6 462.6,195.5 462.1,196.1 462.6,201.0 467.2,205.0 468.1,208.2 466.3,214.9 462.7,214.6 468.8,230.4 475.1,236.7 478.0,247.6 485.3,257.2 488.8,263.4 493.6,264.3 498.7,263.0 500.8,264.3 502.9,264.2 503.1,265.5 499.9,271.5 507.5,273.3 508.2,279.9 536.2,316.2 610.4,326.1 612.8,323.5 626.0,345.6 606.7,408.1 519.4,439.0Z M228.6,508.8 230.8,508.9 229.7,507.5 230.7,506.1 233.9,509.0 233.5,513.2 231.0,510.1 227.9,510.6 223.2,506.8 222.4,504.8 224.8,503.3 225.6,501.7 224.8,500.0 226.5,500.3 227.5,502.0 227.4,507.7 228.6,508.8Z M80.5,238.1 75.3,233.2 69.8,231.0 68.9,229.6 69.9,228.2 71.4,230.4 76.0,232.4 82.1,237.1 80.5,238.1Z M71.6,227.4 70.1,226.7 70.2,224.2 71.2,222.8 71.6,227.4Z';

export interface ServiceCity {
  slug: string;
  name: string;
  lat: number;
  lon: number;
  region: string;
  role: string;
  /** projected map coordinates, in MAP_VIEWBOX units */
  x: number;
  y: number;
  /** label anchor point, hand-placed so the Eastern Province cluster stays legible */
  labelX: number;
  labelY: number;
  labelAnchor: 'start' | 'end';
}

export const HQ_SLUG = 'al-khobar';

export const serviceCities: ServiceCity[] = [
  { slug: 'jubail', name: 'Jubail', lat: 27.0046, lon: 49.6606,
    region: 'Eastern Province',
    role: 'Petrochemical and industrial city equipment coverage',
    x: 451.9, y: 185.5, labelX: 512, labelY: 171, labelAnchor: 'start' },
  { slug: 'dammam', name: 'Dammam', lat: 26.4207, lon: 50.0888,
    region: 'Eastern Province',
    role: 'Heavy machinery transport and port logistics coverage',
    x: 464.4, y: 204.5, labelX: 532, labelY: 199, labelAnchor: 'start' },
  { slug: 'al-khobar', name: 'Al Khobar', lat: 26.2794, lon: 50.2083,
    region: 'Eastern Province',
    role: 'Headquarters and primary operations dispatch hub',
    x: 467.9, y: 209.1, labelX: 532, labelY: 227, labelAnchor: 'start' },
  { slug: 'dhahran', name: 'Dhahran', lat: 26.2361, lon: 50.0393,
    region: 'Eastern Province',
    role: 'Aramco camp-adjacent equipment and manpower dispatch',
    x: 463.0, y: 210.5, labelX: 532, labelY: 255, labelAnchor: 'start' },
  { slug: 'riyadh', name: 'Riyadh', lat: 24.7136, lon: 46.6753,
    region: 'Central Province',
    role: 'Commercial construction and infrastructure coverage',
    x: 365.0, y: 259.6, labelX: 352, labelY: 292, labelAnchor: 'end' },
  { slug: 'jeddah', name: 'Jeddah', lat: 21.4858, lon: 39.1925,
    region: 'Western Province',
    role: 'Commercial transport and workforce dispatch',
    x: 147.2, y: 361.8, labelX: 126, labelY: 392, labelAnchor: 'end' },
  { slug: 'yanbu', name: 'Yanbu', lat: 24.0895, lon: 38.0618,
    region: 'Western Province',
    role: 'Red Sea industrial city equipment coverage',
    x: 114.3, y: 279.5, labelX: 96, labelY: 268, labelAnchor: 'end' },
];

export const serviceRegions = [...new Set(serviceCities.map((c) => c.region))];
