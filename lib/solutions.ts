// Solution and audience landing pages, targeting the project-level and buyer-level
// search terms that the equipment/manpower category pages do not cover.
//
// Focus is the Eastern Province: Al Khobar, Dammam, Dhahran and Jubail first.
//
// Wording rule for the Aramco page: GulfFast is described as a SUPPLIER TO Aramco
// contractors and subcontractors. It is never described as holding Aramco vendor
// approval itself. Do not change that framing without an approval document on file.

export interface SolutionSection {
  heading: string;
  body: string;
}

export interface Solution {
  slug: string;
  kind: 'service' | 'audience';
  badge: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  /** search terms this page is written to rank for */
  targetKeywords: string[];
  sections: SolutionSection[];
  checklist: { heading: string; items: string[] };
  faqs: { question: string; answer: string }[];
  relatedEquipment: string[];
  relatedManpower: string[];
}

export const solutions: Solution[] = [
  {
    slug: 'shutdown-and-turnaround',
    kind: 'service',
    badge: 'Shutdown & Turnaround',
    h1: 'Shutdown and Turnaround Support in the Eastern Province',
    title: 'Shutdown & Turnaround Equipment and Manpower | Eastern Province | GulfFast',
    description:
      'Equipment and certified trade crews for plant shutdowns and turnarounds in Jubail, Dhahran, Dammam and Al Khobar. Shift-based mobilization from our Al Khobar hub.',
    intro:
      'A turnaround is won or lost on mobilization. GulfFast supplies the machinery and the trade crews that petrochemical and oil and gas facilities need inside a fixed maintenance window, dispatched from our Al Khobar hub to Jubail, Dhahran, Dammam and across the Eastern Province.',
    targetKeywords: ['Shutdown project', 'Turnaround', 'Petrochemical facilities', 'Plant maintenance'],
    sections: [
      {
        heading: 'Why turnarounds fail on supply, not on scope',
        body: 'Shutdown windows are costed in hours. The cost of a late crane or a welder who arrives without current certification is not the rental rate — it is the extension of the whole window. Turnaround supply is therefore a scheduling problem more than a pricing one, which is why we quote against your window and your shift pattern rather than against a day rate.'
      },
      {
        heading: 'What we mobilize for a turnaround',
        body: 'Lifting and access equipment, temporary power and lighting for round-the-clock working, welding sets, compressors, and the trades that go with them: welders and pipe fitters, riggers and scaffolders, painters and blasting crews, QA/QC inspectors and safety officers. Equipment and people come from the same supplier on one commercial registration, so you are not reconciling three vendors mid-shutdown.'
      },
      {
        heading: 'Shift working and night mobilization',
        body: 'Turnarounds run continuously. Crews can be supplied on rotating shift patterns, and equipment placed on site ahead of the window rather than on the first day of it, so the machine is in position and inspected before the plant comes down.'
      },
      {
        heading: 'Documentation before the gate, not at it',
        body: 'Machinery carries Third-Party Inspection records and personnel carry current trade certification and Iqama documentation. We prepare that pack in advance and support the gate pass process your main contractor runs. Final site access approval rests with the facility operator and the sponsoring contractor.'
      }
    ],
    checklist: {
      heading: 'Typical turnaround scope we cover',
      items: [
        'Mobile cranes and lifting support for exchanger and vessel work',
        'Scaffolding crews and access systems for elevated maintenance',
        'Welders, pipe fitters and fabrication support',
        'Temporary generators, light towers and compressors for night shifts',
        'Blasting, coating and painting crews for tank and structure work',
        'QA/QC inspectors and safety officers for permit-controlled areas',
        'Manlifts, scissor lifts and telehandlers for confined plant access'
      ]
    },
    faqs: [
      {
        question: 'How far ahead should we book turnaround equipment and manpower?',
        answer: 'As early as your window is fixed. Turnaround season in Jubail and the wider Eastern Province concentrates demand into the same few months, and the crews with current certification are committed first. Early booking is the difference between the crew you specified and the crew that is left.'
      },
      {
        question: 'Can you supply equipment and manpower together on one contract?',
        answer: 'Yes. That is the normal case for turnaround work — one supplier, one commercial registration, one VAT number, one point of contact for both the machinery and the crews.'
      },
      {
        question: 'Do you work night shifts and continuous rotations?',
        answer: 'Yes. Turnarounds run around the clock and crews are supplied on the rotation your schedule requires, with temporary lighting and power supplied alongside where site power is down.'
      },
      {
        question: 'Which areas do you cover for shutdown work?',
        answer: 'The Eastern Province is our primary coverage: Jubail, Dhahran, Dammam and Al Khobar, dispatched from our Al Khobar operations hub. We also mobilize to Yanbu, Riyadh and Jeddah.'
      }
    ],
    relatedEquipment: ['cranes', 'generators', 'light-towers', 'welding-sets', 'air-compressors', 'scissor-lifts'],
    relatedManpower: ['welding-and-fabrication', 'rigging-and-scaffolding', 'painting-coating-and-blasting', 'qaqc-and-inspection', 'safety-and-hse']
  },
  {
    slug: 'plant-maintenance',
    kind: 'service',
    badge: 'Plant Maintenance',
    h1: 'Plant Maintenance Equipment and Manpower Supply',
    title: 'Plant Maintenance Support — Oil, Gas & Petrochemical | Eastern Province | GulfFast',
    description:
      'Ongoing plant maintenance manpower and equipment for oil, gas and petrochemical facilities across the Eastern Province. Monthly and long-term contracts from Al Khobar.',
    intro:
      'Running maintenance is a different problem from a turnaround: the same trades, but continuously, and costed monthly rather than by the window. GulfFast supplies maintenance crews and equipment on long-term hire to operating facilities across the Eastern Province.',
    targetKeywords: ['Plant maintenance', 'Oil and gas', 'Petrochemical facilities', 'Long term and short term projects'],
    sections: [
      {
        heading: 'Maintenance supply is a retention problem',
        body: 'For continuous maintenance the question is not whether a crew can be found once, but whether the same crew is still there in month eight. Personnel supplied for maintenance contracts are recruited against the trade and the facility, not rotated through whichever assignment is open, because a maintenance crew that turns over every quarter costs the facility more in re-induction than it saves in rate.'
      },
      {
        heading: 'Equipment on long-term hire',
        body: 'Machinery held on site for maintenance work sits idle between jobs, which makes monthly and annual rates materially better value than repeated short hires. Forklifts, manlifts, welding sets, compressors and generators are commonly placed on long-term hire with maintenance included.'
      },
      {
        heading: 'Short-term cover as well',
        body: 'Not every maintenance need is a year long. Cover for leave, sickness, an unplanned repair or a certification lapse is supplied on short-term assignment from the same pool, which is usually why facilities keep one supplier for both.'
      }
    ],
    checklist: {
      heading: 'Common maintenance supply scopes',
      items: [
        'Mechanical fitters, millwrights and pipe fitters',
        'Electrical and instrumentation technicians',
        'Welders for routine repair and modification work',
        'Scaffolders and riggers for access and lifting',
        'QA/QC inspectors and permit receivers',
        'Forklifts, manlifts and telehandlers on monthly hire',
        'Standby generators, compressors and welding sets'
      ]
    },
    faqs: [
      {
        question: 'What is the minimum contract length for maintenance manpower?',
        answer: 'There is no fixed minimum. Assignments run from short-term cover of a few weeks through to multi-year maintenance contracts, and the rate reflects the duration.'
      },
      {
        question: 'Is equipment cheaper on a long-term maintenance contract?',
        answer: 'Yes, materially. Monthly and annual rates are significantly below the equivalent short-hire cost, and long-term placements normally include scheduled servicing so the machine stays available rather than going off-hire for maintenance.'
      },
      {
        question: 'Do you replace personnel who are not performing?',
        answer: 'Yes. If a supplied worker is not right for the facility, tell us and we replace them. A maintenance contract only works if the facility is willing to keep the crew.'
      }
    ],
    relatedEquipment: ['forklifts', 'scissor-lifts', 'telehandlers', 'welding-sets', 'generators', 'air-compressors'],
    relatedManpower: ['electrical-and-instrumentation', 'welding-and-fabrication', 'rigging-and-scaffolding', 'qaqc-and-inspection']
  },
  {
    slug: 'project-support-services',
    kind: 'service',
    badge: 'Project Support',
    h1: 'Project Support Services — Equipment and Manpower Packages',
    title: 'Project Support Services | Turnkey Equipment & Manpower Supply | GulfFast',
    description:
      'Combined equipment and manpower packages for onshore and offshore oil and gas, pipeline and industrial projects across Saudi Arabia. Short-term and long-term contracts.',
    intro:
      'Some projects need a machine. Most need a machine, an operator, a certified crew, and someone to keep the paperwork current for the whole duration. GulfFast supplies that as one package, on one contract, from our Al Khobar hub.',
    targetKeywords: ['Project support services', 'Turnkey', 'Pipeline projects', 'Offshore', 'Long term and short term projects', 'Lease'],
    sections: [
      {
        heading: 'One supplier instead of five',
        body: 'Splitting a project across an equipment yard, a manpower agency, a transport contractor and a documentation consultant means four sets of commercial terms and four points of failure. A combined package puts equipment, operators, trades and mobilization on a single commercial registration and VAT number, which shortens both the procurement cycle and the invoice reconciliation at the end of it.'
      },
      {
        heading: 'Pipeline and infrastructure projects',
        body: 'Pipeline work is linear and moves, which makes supply a logistics question. Excavators, side-boom support, welding crews, compaction equipment, water tankers for dust suppression and light towers for extended working move along the route with the spread rather than being re-hired at each section.'
      },
      {
        heading: 'Onshore and offshore projects',
        body: 'We supply contractors working on both onshore facilities and offshore-supporting scopes — fabrication yards, pipe spooling, module assembly and the shore-based work that offshore projects depend on. Personnel supplied for offshore-related scopes are documented to the certification the client contract specifies.'
      },
      {
        heading: 'Rental, lease and long-term placement',
        body: 'Equipment is available on short-term rental, on longer lease terms where the project runs for months rather than weeks, and bare or fully operated depending on whether you are supplying your own operators. Manpower runs on the same principle — short assignment, long assignment, or placement for the life of the project.'
      }
    ],
    checklist: {
      heading: 'What a project support package normally includes',
      items: [
        'Equipment selected against the scope, not against what is idle in the yard',
        'Certified operators supplied with the machine where required',
        'Trade crews mobilized to the project schedule',
        'Third-Party Inspection records for machinery',
        'Trade certification and Iqama documentation for personnel',
        'Transport and positioning to site',
        'One contract, one invoice, one point of contact'
      ]
    },
    faqs: [
      {
        question: 'Can we hire equipment without operators?',
        answer: 'Yes. Bare rental is available where you are supplying your own certified operators, and operated hire where you are not. Most projects mix the two.'
      },
      {
        question: 'What is the difference between rental and lease for us?',
        answer: 'Rental suits short and variable durations and carries a higher effective rate. Lease suits a project with a known length, holds the machine for the duration, and prices materially lower per month. If your scope runs beyond a few months it is usually worth asking for both.'
      },
      {
        question: 'Do you handle transport to site?',
        answer: 'Yes. Equipment is delivered and positioned, including to remote pipeline sections and project sites away from the main industrial cities.'
      }
    ],
    relatedEquipment: ['excavators', 'cranes', 'trucks', 'compaction-equipment', 'light-towers', 'generators'],
    relatedManpower: ['welding-and-fabrication', 'heavy-equipment-operators', 'drivers', 'safety-and-hse', 'labour-and-helpers']
  },
  {
    slug: 'epc-contractors',
    kind: 'audience',
    badge: 'For EPC & MEP Contractors',
    h1: 'Equipment and Manpower for EPC and MEP Contractors',
    title: 'Supplier to EPC, MEP & Main Contractors in Saudi Arabia | GulfFast',
    description:
      'GulfFast supplies equipment and certified manpower to EPC contractors, MEP contractors, facilities management companies and manpower supply firms across the Eastern Province.',
    intro:
      'Main contractors do not buy equipment and manpower separately from the project — they buy against a programme, a documentation standard and a payment cycle. GulfFast supplies EPC and MEP contractors across the Eastern Province on that basis.',
    targetKeywords: ['EPC contractors', 'MEP contractor', 'Facilities management companies', 'Recruitment companies', 'Manpower supplier companies'],
    sections: [
      {
        heading: 'What contractors actually need from a supplier',
        body: 'Rate matters, but it is rarely what loses a supplier the next package. What loses it is a machine that arrives without valid inspection records, a crew short of the certifications the client specified, or an invoice that cannot be reconciled against the delivery notes. Getting those three right is most of the job.'
      },
      {
        heading: 'MEP contractors',
        body: 'Mechanical, electrical and plumbing scopes need access equipment and licensed technical trades more than they need earthmoving. Manlifts, scissor lifts, telehandlers and forklifts, alongside electrical and instrumentation technicians, mechanical fitters and pipe fitters, are the common package.'
      },
      {
        heading: 'Facilities management companies',
        body: 'FM contractors running industrial and commercial sites need continuous maintenance trades and equipment on standing hire rather than project-length mobilizations. Those contracts are supplied on monthly terms with replacement cover built in.'
      },
      {
        heading: 'Recruitment and manpower supply companies',
        body: 'We also supply other manpower companies who need trade categories outside their own pool, or who need to cover a mobilization commitment at short notice. That is a normal part of the market and we treat it as a supply relationship, not competition.'
      }
    ],
    checklist: {
      heading: 'How we work with main contractors',
      items: [
        'Quotes priced against your programme and duration, not a standard day rate',
        'One commercial registration and VAT number for equipment and manpower together',
        'Third-Party Inspection records supplied with machinery',
        'Trade certification and Iqama records supplied with personnel',
        'Support for the gate pass documentation your client requires',
        'Replacement cover for personnel who are not right for the site',
        'Direct dispatch from Al Khobar to Eastern Province sites'
      ]
    },
    faqs: [
      {
        question: 'Do you work as a subcontractor or as a supplier?',
        answer: 'As a supplier. We provide the equipment and the personnel; the scope, supervision and site responsibility remain with you as the contractor. Where you need supervisory trades — foremen, crew supervisors, QA/QC — those are supplied as personnel within your structure.'
      },
      {
        question: 'Can you support a bid before we have won the work?',
        answer: 'Yes. We provide indicative rates and availability for tender pricing, and you are not committed until the project is awarded and you confirm.'
      },
      {
        question: 'What are your payment terms?',
        answer: 'Terms are agreed per contract and depend on duration and scope. Tell us what your project cycle looks like and we will quote against it.'
      }
    ],
    relatedEquipment: ['scissor-lifts', 'telehandlers', 'forklifts', 'cranes', 'generators'],
    relatedManpower: ['electrical-and-instrumentation', 'welding-and-fabrication', 'engineering-and-design', 'rigging-and-scaffolding']
  },
  {
    slug: 'aramco-contractors',
    kind: 'audience',
    badge: 'For Aramco Contractors',
    h1: 'Equipment and Manpower for Aramco Contractors and Subcontractors',
    title: 'Supplier to Aramco Contractors & Subcontractors | Eastern Province | GulfFast',
    description:
      'GulfFast supplies equipment and certified trade manpower to contractors and subcontractors working on Saudi Aramco facilities across the Eastern Province, from Al Khobar.',
    intro:
      'If you hold a contract on an Aramco facility, or work as a subcontractor under one, the supplier standard is set by your client rather than by us. GulfFast supplies the equipment and trades that Aramco contractors and subcontractors mobilize with, from our Al Khobar hub into Dhahran, Dammam, Jubail and the wider Eastern Province.',
    targetKeywords: ['Aramco contractor', 'Aramco subcontractors', 'Oil and gas', 'Plant maintenance'],
    sections: [
      {
        heading: 'Where we sit in the chain',
        body: 'We are a supplier to contractors, not the contractor. The Aramco relationship, the scope and the site responsibility are yours. What we provide is the machinery and the personnel, documented to the standard your contract requires, so that the mobilization does not become your problem to solve twice.'
      },
      {
        heading: 'Documentation is the whole game',
        body: 'Equipment held for facility work carries Third-Party Inspection records with valid dates and matching serial numbers. Personnel carry current trade certification and Iqama documentation. We prepare that pack ahead of mobilization and support the gate pass process you run with the facility. Final site access approval always rests with the facility operator and the sponsoring main contractor.'
      },
      {
        heading: 'Trade categories with certification called out',
        body: 'Several of our trade categories include job titles that are explicitly Aramco-approved or TUV-certified — riggers, scaffolders, welding and coating QC inspectors, and heavy equipment operators among them. The specific job titles are listed on each manpower category page rather than claimed in general, so you can check the exact designation you need before you ask us to quote.'
      },
      {
        heading: 'Eastern Province coverage',
        body: 'Dhahran, Al Khobar, Dammam and Jubail are our primary dispatch area, from an operations hub in Al Khobar. That proximity is the practical reason short-notice mobilization works at all — the machine is an hour away, not a day.'
      }
    ],
    checklist: {
      heading: 'What we provide to Aramco contractors',
      items: [
        'Equipment with Third-Party Inspection documentation',
        'Certified operators where the scope requires them',
        'Trade crews with current certification records',
        'Iqama and sponsorship documentation for supplied personnel',
        'Support for your gate pass documentation process',
        'Short-notice mobilization within the Eastern Province',
        'One CR and VAT number for equipment and manpower together'
      ]
    },
    faqs: [
      {
        question: 'Is GulfFast an approved Aramco vendor?',
        answer: 'We are a supplier to contractors and subcontractors working on Aramco facilities. The Aramco contract, and the vendor relationship that goes with it, sits with our client. We supply the equipment and personnel and prepare the documentation those mobilizations require.'
      },
      {
        question: 'Can you supply Aramco-certified trades?',
        answer: 'Several of our trade categories include job titles explicitly designated as Aramco-approved or TUV-certified — check the specific manpower category page for the exact job title, since the designation applies to particular trades rather than to every worker.'
      },
      {
        question: 'Who arranges the gate pass?',
        answer: 'The sponsoring contractor does, with the facility. We supply the documentation the process needs — inspection records for machinery, certification and Iqama records for personnel — and support you through it. Final approval is the facility operator’s decision.'
      },
      {
        question: 'How quickly can you mobilize to Dhahran or Jubail?',
        answer: 'Both are within short dispatch range of our Al Khobar hub. Call or WhatsApp with the requirement and we will tell you honestly what can move and when, rather than promising a time we cannot hold.'
      }
    ],
    relatedEquipment: ['cranes', 'generators', 'welding-sets', 'light-towers', 'scissor-lifts'],
    relatedManpower: ['rigging-and-scaffolding', 'welding-and-fabrication', 'qaqc-and-inspection', 'safety-and-hse', 'heavy-equipment-operators']
  }
];

export function getSolutions(): Solution[] {
  return solutions;
}

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
