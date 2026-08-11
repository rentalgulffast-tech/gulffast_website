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
  },
  {
    slug: 'crane-rental-cost-saudi-arabia',
    title: 'How Much Does Crane Rental Cost in Saudi Arabia?',
    excerpt: 'A guide to the factors that drive mobile crane rental pricing in Saudi Arabia, from load capacity and lift duration to Aramco site certification requirements.',
    date: '2026-08-01',
    readTime: '4 min read',
    category: 'Equipment Selection',
    author: 'GulfFast Fleet Operations',
    content: `
Crane rental pricing in Saudi Arabia varies based on load capacity, lift duration, site location, and whether the crane is supplied bare or with a certified operator. This guide will cover the key cost drivers in detail.

Full pricing breakdown coming soon. Contact our Al Khobar equipment desk directly for a same-day quote on mobile crane rental.
`
  },
  {
    slug: 'hire-certified-riggers-al-khobar',
    title: 'How to Hire Certified Riggers in Al Khobar',
    excerpt: 'What to check before hiring riggers for lifting operations in Al Khobar, including TUV and Aramco Level 1-3 certification requirements.',
    date: '2026-07-20',
    readTime: '4 min read',
    category: 'Manpower Supply',
    author: 'GulfFast HR & Compliance',
    content: `
Hiring certified riggers in Al Khobar requires verifying TUV or Aramco Level 1, 2, or 3 rigger certification, valid Iqama status, and site-specific safety induction records before mobilization.

Full hiring checklist coming soon. Contact our Al Khobar workforce desk directly to discuss certified rigger availability.
`
  },
  {
    slug: 'equipment-rental-vs-buying-ksa',
    title: 'Equipment Rental vs. Buying: What\'s Right for Your Project in KSA?',
    excerpt: 'Comparing the cost, flexibility, and maintenance trade-offs between renting and buying heavy equipment for projects in Saudi Arabia.',
    date: '2026-07-08',
    readTime: '5 min read',
    category: 'Equipment Selection',
    author: 'GulfFast Fleet Operations',
    content: `
Deciding between renting and buying heavy equipment depends on project duration, utilization rate, maintenance overhead, and capital availability. This guide will walk through the decision factors relevant to KSA project sites.

Full comparison coming soon. Contact our Al Khobar equipment desk to discuss bare-rental versus long-term lease options.
`
  },
  {
    slug: 'source-aramco-approved-welders-saudi-arabia',
    title: 'How to Source Aramco-Approved Welders in Saudi Arabia',
    excerpt: 'What Aramco-approved welder certification actually requires, from WQT records to radiographic test reports, and how to verify it before mobilization.',
    date: '2026-06-25',
    readTime: '4 min read',
    category: 'Manpower Supply',
    author: 'GulfFast HR & Compliance',
    content: `
Sourcing Aramco-approved welders requires verifying Welder Qualification Test (WQT) records under ASME Section IX, along with radiographic test (RT) reports matching the welder's certified pipe wall thickness and metallurgy range.

Full sourcing guide coming soon. Contact our Al Khobar workforce desk directly to discuss certified welder availability.
`
  },
  {
    slug: 'generator-rental-guide-construction-sites-saudi-arabia',
    title: 'Generator Rental Guide for Construction Sites in Saudi Arabia',
    excerpt: 'How to size and select a diesel generator for a Saudi Arabia construction site, accounting for ambient temperature de-rating and fuel logistics.',
    date: '2026-06-10',
    readTime: '5 min read',
    category: 'Power Engineering',
    author: 'GulfFast Power Systems Team',
    content: `
Selecting the right generator for a construction site in Saudi Arabia means accounting for ambient temperature de-rating, load profile, and fuel tank autonomy for continuous multi-shift operation.

Full sizing guide coming soon. Contact our Al Khobar equipment desk directly to discuss generator availability and site power planning.
`
  },
  {
    slug: 'documents-needed-rent-heavy-equipment-saudi-arabia',
    title: 'What Documents Are Needed to Rent Heavy Equipment in Saudi Arabia?',
    excerpt: 'The commercial registration, VAT, and site access documentation typically required to rent heavy equipment from a direct supplier in Saudi Arabia.',
    date: '2026-05-28',
    readTime: '3 min read',
    category: 'Equipment Safety',
    author: 'GulfFast Technical Safety Team',
    content: `
Renting heavy equipment in Saudi Arabia typically requires your company's Commercial Registration (CR), VAT certificate, and, for Aramco or SABIC sites, gate pass sponsorship documentation.

Full documentation checklist coming soon. Contact our Al Khobar equipment desk directly to confirm requirements for your project site.
`
  },
  {
    slug: 'manpower-supply-vs-manpower-agencies',
    title: 'Manpower Supply vs. Manpower Agencies: What\'s the Difference?',
    excerpt: 'Why GulfFast operates as a direct manpower supplier rather than a staffing agency, and what that means for Iqama sponsorship and site accountability.',
    date: '2026-05-15',
    readTime: '4 min read',
    category: 'Manpower Supply',
    author: 'GulfFast HR & Compliance',
    content: `
A manpower agency places workers employed by a third party, while a direct manpower supplier like GulfFast directly recruits, sponsors, and employs its workforce, giving clients a single accountable party for site conduct and compliance.

Full comparison coming soon. Contact our Al Khobar workforce desk directly to discuss your project's manpower requirements.
`
  }
];

export function getBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
