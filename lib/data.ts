import equipmentCategoriesData from '../data/equipment-categories.json';
import vehicleCategoriesData from '../data/vehicle-categories.json';
import jobTitlesData from '../data/job-titles.json';

export interface CategoryItem {
  id: string;
  slug: string;
  title: string;
  h1: string;
  shortSummary: string;
  description: string;
  specs: Array<{ name: string; value: string }>;
  applications?: string[];
  certifications?: string[];
  experienceLevels?: string;
  cityCoverage: string[];
  faq: Array<{ question: string; answer: string }>;
  relatedSlugs: string[];
  blogPostSlugs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: string;
}

export function getEquipmentCategories(): CategoryItem[] {
  return equipmentCategoriesData as CategoryItem[];
}

export function getEquipmentCategoryBySlug(slug: string): CategoryItem | undefined {
  return (equipmentCategoriesData as CategoryItem[]).find((item) => item.slug === slug);
}

export function getVehicleCategories(): CategoryItem[] {
  return vehicleCategoriesData as CategoryItem[];
}

export function getVehicleCategoryBySlug(slug: string): CategoryItem | undefined {
  return (vehicleCategoriesData as CategoryItem[]).find((item) => item.slug === slug);
}

export function getJobTitles(): CategoryItem[] {
  return jobTitlesData as CategoryItem[];
}

export function getJobTitleBySlug(slug: string): CategoryItem | undefined {
  return (jobTitlesData as CategoryItem[]).find((item) => item.slug === slug);
}

// Blog Posts Data
const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'aramco-heavy-equipment-compliance',
    title: 'Saudi Aramco Heavy Equipment Compliance & TPI Inspection Guide',
    excerpt: 'Key technical requirements, safety standards (GI 6.012), and Third-Party Inspection (TPI) prerequisites for heavy machinery entering Aramco gas plants and oilfields.',
    date: '2026-06-15',
    readTime: '6 min read',
    category: 'Equipment Safety',
    author: 'GulfFast Technical Safety Team',
    content: `
Operating heavy construction equipment within Saudi Aramco facilities and gas plant developments requires strict adherence to safety protocol. Equipment mobilization delays often occur when contractors fail to verify Third-Party Inspection (TPI) stickers or skip daily operator pre-checklists.

### Essential Aramco Inspection Prerequisites
Every piece of heavy earthmoving equipment—including excavators, wheel loaders, dozers, and motor graders—must comply with **Saudi Aramco General Instruction GI 6.012** (Earthmoving Machinery Safety). Key checklist items include:

1. **Spark Arrestors & Exhaust Shielding**: Certified spark arrestor exhaust traps are mandatory for all diesel engines operating inside hydrocarbon processing zones.
2. **Emergency Cutoff & Battery Master Switches**: Clearly labeled external emergency fuel cutoff pull cords and battery isolators.
3. **Automatic Reverse Alarm & Beacon Strobe**: High-decibel backup alarm (minimum 95 dBA) and 360-degree yellow amber strobe light on the cab roof.
4. **Third-Party Inspection (TPI) Sticker**: Issued by an accredited Aramco-approved inspection agency, stating valid expiration date and serial number match.
5. **Operator Certification**: Operative must hold a SAG Heavy Driver License alongside a valid Aramco Operator Validation Card.

### Streamlining Mobilization with GulfFast
At GulfFast, every machine in our Al Khobar and Jubail equipment yards undergoes weekly TPI audit checks. We deliver ready-to-work machinery complete with gate pass paperwork, eliminating site access friction for main contractors.
`
  },
  {
    slug: 'manpower-supply-compliance-tuv-aramco',
    title: 'Manpower Supply Compliance in Saudi Arabia: TUV & Third-Party Certifications',
    excerpt: 'How contractor manpower supply complies with Saudi Labor Law, Aramco WQT, and TUV skill certifications for welders, scaffolders, and riggers.',
    date: '2026-05-20',
    readTime: '7 min read',
    category: 'Manpower Supply',
    author: 'GulfFast HR & Compliance',
    content: `
Deploying skilled industrial manpower across Saudi Arabia's oil, gas, and infrastructure sectors demands strict compliance with Saudi Labor Regulations, Ministry of Human Resources guidelines, and client-specific site credentials.

### Certified Trades Certification Standards
For high-risk trades—such as 6G pipe welders, scaffolders, and crane riggers—verbal experience is insufficient. Contractors must verify formal Third-Party Inspection (TPI) credentials:

- **6G / TIG Welders**: Must hold Welder Qualification Test (WQT) records qualified under ASME Section IX for specific pipe wall thickness and metallurgy (P1 to P91). Radiographic test (RT) reports must accompany the card.
- **Scaffolders**: Qualified under **Saudi Aramco GI 8.001**. Scaffold Erectors, Supervisors, and Inspectors require designated cards for green-tagging erect access structures.
- **Riggers**: Level 1 (Supervisor), Level 2, and Level 3 riggers holding TUV / Aramco cards verifying competence in crane load chart calculation, sling angles, and tandem lifting.

### The Direct Supplier Advantage
Unlike recruitment agencies or brokerage middle-men, GulfFast maintains direct employment Iqamas and housing facilities in Al Khobar. This guarantees full Saudization compliance, mobilization readiness, and client safety compliance.
`
  },
  {
    slug: 'crane-safety-lifting-standards-ksa',
    title: 'Mobile Crane Safety & Critical Lift Planning (Aramco GI 7.027)',
    excerpt: 'Understanding critical lift plan criteria, tandem lifts, ground load calculations, and rigger responsibilities under Saudi Aramco lifting standards.',
    date: '2026-04-10',
    readTime: '5 min read',
    category: 'Lifting Safety',
    author: 'GulfFast Heavy Lifting Operations',
    content: `
Heavy lifts exceeding 40 tons or executed within operating petrochemical plants are classified as Critical Lifts in Saudi Arabia. Under **Saudi Aramco General Instruction GI 7.027**, a critical lift plan must be prepared, reviewed, and signed before outriggers are set.

### When is a Lift Classified as Critical?
A lift plan is designated critical under any of the following parameters:
- The load exceeds 85% of the crane's rated capacity at specified radius.
- The lift involves two or more cranes in a tandem lift arrangement.
- The lift takes place over operating hydrocarbon pipelines, live electrical lines, or occupied structures.
- The lift involves personnel hoisting or blind pick-and-carry maneuvers.

### Key Elements of an Approved Critical Lift Plan
1. **Ground Bearing Capacity & Outrigger Matting**: Verification that outrigger pad pressure does not exceed soil bearing limits, utilizing heavy hardwood or steel crane mats.
2. **Rigging Tackle Certification**: All shackles, wire rope slings, spreader bars, and synthetic web slings must possess valid TPI load test certificates and color-code tags.
3. **Certified Rigger Level 1 Sign-Off**: The lift plan drawing must be checked, stamped, and signed by a certified Master Rigger Level 1.
`
  },
  {
    slug: 'diesel-generator-sizing-saudi-climate',
    title: 'Diesel Generator Sizing & De-Rating for Saudi Ambient Conditions',
    excerpt: 'Calculating ambient temperature power de-rating, altitude adjustments, and fuel tank requirements for continuous generator operation in KSA.',
    date: '2026-03-05',
    readTime: '6 min read',
    category: 'Power Engineering',
    author: 'GulfFast Power Systems Team',
    content: `
Selecting a diesel generator for construction camps or plant turnarounds in Saudi Arabia requires factoring in extreme ambient heat. Standard generator ratings are specified at ISO conditions (25°C ambient, sea level). In Saudi Arabia summer temperatures frequently exceed 50°C.

### Generator Power De-Rating Calculations
When ambient temperatures rise above 40°C, diesel engines experience reduced air intake density, resulting in thermal de-rating of electrical output:
- **Temperature De-Rating**: Typically 1% to 2% power reduction for every 5°C rise above 40°C.
- **Altitude De-Rating**: Approximately 3% power loss per 300 meters above sea level (relevant for Tabuk and Abha mountain sites).
- **Soundproof Acoustic Canopy Venting**: Heavy-duty tropical cooling radiators with enlarged fan blades are required to prevent high-water-temperature shutdowns.

### Turnkey Fuel & Power Support
GulfFast supplies Cummins, Perkins, and Caterpillar generators equipped with tropical radiators, external bunded fuel tanks, automatic fuel transfer systems, and 24/7 on-site maintenance technicians.
`
  },
  {
    slug: 'heavy-transport-compliance-aramco',
    title: 'Heavy Vehicle Fleet Safety & IVMS Requirements in KSA',
    excerpt: 'Overview of In-Vehicle Monitoring Systems (IVMS), speed governors, driver safety training, and highway load limits for heavy transport in Saudi Arabia.',
    date: '2026-02-18',
    readTime: '4 min read',
    category: 'Fleet Logistics',
    author: 'GulfFast Logistics Management',
    content: `
Transporting heavy equipment, pipe shipments, and fuel across Saudi Arabia requires strict adherence to Ministry of Transport (MOT) axle load regulations and client fleet safety standards.

### In-Vehicle Monitoring System (IVMS) Mandatory Features
All heavy tractor trucks, flatbeds, and crew buses entering major oilfields must be equipped with approved IVMS GPS telemetry units monitoring:
- Harsh acceleration, harsh braking, and sudden cornering events.
- Real-time speed governor enforcement (maximum 80 km/h for heavy trucks).
- Driver fatigue alerts and continuous driving time limits (mandatory break after 4 hours).
- Automatic SOS emergency panic buttons and satellite tracking.

### GulfFast Transport Reliability
Our fleet of Mercedes Actros and Volvo FH heavy trucks undergo routine brake, tire tread, and suspension checks in our Al Khobar workshop. All drivers hold valid SAG licenses, Aramco safety induction cards, and defensive driving qualifications.
`
  },
  {
    slug: 'selecting-right-excavator-ksa',
    title: 'Selecting the Right Hydraulic Excavator for Desert Earthmoving',
    excerpt: 'Comparing 20T, 30T, and 50T excavators for rock trenching, pipeline excavation, and quarry loading in Saudi Arabia sandy and rocky terrain.',
    date: '2026-01-25',
    readTime: '5 min read',
    category: 'Equipment Selection',
    author: 'GulfFast Fleet Operations',
    content: `
Earthmoving conditions in Saudi Arabia range from loose desert sand in the Rub' al Khali to hard caprock and limestone in Riyadh and Jubail. Choosing the right excavator tonnage and attachment dramatically impacts daily productivity and fuel consumption.

### Tonnage & Bucket Selection Matrix
- **20-Ton Excavators (CAT 320 / Komatsu PC200)**: Ideal for general utility trenching, pipe laying, site foundation backfilling, and urban civil construction.
- **30-Ton Excavators (CAT 330 / Komatsu PC300)**: Preferred choice for heavy pipeline trenching, mass earthmoving, and rock breaking with hydraulic hammers (3.5 ton breakers).
- **50-Ton Excavators (CAT 349 / Komatsu PC450)**: Heavy quarrying, deep rock excavation, mass aggregate loading, and heavy foundation digging.

### Desert Bucket & Track Modifications
For abrasive desert rock, excavators must be equipped with heavy-duty rock buckets (HDR), tungsten carbide tooth tips, bottom wear strips, and heavy track guide guards to prevent track derailment in soft sand.
`
  }
];

export function getBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
