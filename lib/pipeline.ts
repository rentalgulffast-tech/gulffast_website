// GulfFast Pipeline Division — pipeline construction spread equipment.
//
// WHY THIS FILE EXISTS SEPARATELY FROM lib/equipment-categories.ts
// ----------------------------------------------------------------
// The general rental categories (excavators, cranes, forklifts, tankers) compete
// against every rental yard in the Kingdom. The units below compete against almost
// nobody: as of September 2026 a search for "pipeline equipment rental Saudi Arabia"
// returns US suppliers and business directories, not Saudi companies. Side booms,
// internal line-up clamps and paywelders are bought by pipeline contractors on live
// spreads, not by general contractors, and they need their own vocabulary and their
// own pages.
//
// ELEVEN UNITS HAVE PAGES HERE, NOT 14
// ------------------------------------
// The rental brochure lists 14 items. Three of them — excavator, diesel generator
// and tower light — already have strong pages under /equipment, and duplicating
// them here would split their ranking signal across two URLs for no gain. The hub
// cross-links to those existing pages instead (see `pipelineCrossLinks`, which also
// surfaces welding sets). Do not create /pipeline pages for those three.
//
// `diesel-welding-support` is the one deliberate overlap: it exists because the real
// question a pipeline contractor has is "paywelder or engine-driven sets?", which
// /equipment/welding-sets does not and should not answer. It targets pipeline intent
// and links out to the general pages rather than competing with them.
//
// SPEC PROVENANCE
// ---------------
// Capacities and size ranges marked `fromBrochure: true` are taken verbatim from the
// company rental brochure supplied by the owner (side boom tonnages, bend and clamp
// diameter ranges, ArcoTrac model numbers, boom truck tonnages). Anything else is
// written as capability language without invented numbers. `needsOwnerSpec: true`
// flags a unit where real make/model/quantity data would materially improve the page
// and has not yet been supplied. Do not fill those with plausible-sounding figures.
//
// TERMINOLOGY NOTE
// ----------------
// The brochure contains three spellings that are not the industry search terms:
// "HYDRO TESTING PUMB" (pump), "PIPE ROLLIE CRADLE" (roller cradle) and "PAY WELDER"
// (paywelder is the common single word, both are used). The `aka` arrays below carry
// every variant a buyer might actually type, including the brochure spellings, so the
// pages catch the search either way. The printed brochure should be corrected before
// the next reprint.

export interface PipelineSpec {
  label: string;
  value: string;
}

export interface PipelineSection {
  heading: string;
  body: string;
}

export type PipelineGroupSlug =
  | 'lay-and-lift'
  | 'welding-and-joining'
  | 'bending-and-cutting'
  | 'testing-and-commissioning'
  | 'transport-and-support';

export interface PipelineGroup {
  slug: PipelineGroupSlug;
  name: string;
  blurb: string;
}

export interface PipelineUnit {
  slug: string;
  name: string;
  /** every alternate name a buyer might search, including brochure spellings */
  aka: string[];
  group: PipelineGroupSlug;
  /** one-line capability summary shown on cards */
  specSummary: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  targetKeywords: string[];
  specs: PipelineSpec[];
  sections: PipelineSection[];
  faqs: { question: string; answer: string }[];
  /** other pipeline unit slugs typically mobilised with this one */
  relatedSlugs: string[];
  /** existing /equipment category slugs that pair with this unit */
  relatedEquipmentSlugs: string[];
  /** /manpower category slugs that pair with this unit */
  relatedManpowerSlugs: string[];
  /** true when the numbers on this page come from the company brochure */
  fromBrochure: boolean;
  /** true when real make/model/quantity data is still outstanding */
  needsOwnerSpec: boolean;
}

export const pipelineGroups: PipelineGroup[] = [
  {
    slug: 'lay-and-lift',
    name: 'Lay & Lift',
    blurb: 'Lowering-in, stringing and pipe handling along the right of way.'
  },
  {
    slug: 'welding-and-joining',
    name: 'Welding & Joining',
    blurb: 'Line-up, welding and everything that governs joint quality and weld rate.'
  },
  {
    slug: 'bending-and-cutting',
    name: 'Bending & Cutting',
    blurb: 'Cold bends to follow the ditch profile, and cold cuts into live systems.'
  },
  {
    slug: 'testing-and-commissioning',
    name: 'Testing & Commissioning',
    blurb: 'Hydrostatic testing and the pre-commissioning sequence before handover.'
  },
  {
    slug: 'transport-and-support',
    name: 'Transport & Support',
    blurb: 'Moving the spread, and the lifting that keeps it moving.'
  }
];

/**
 * Cities the Pipeline Division actively covers. Deliberately narrower and more
 * pipeline-specific than lib/cities.ts: Ras Tanura and Abqaiq are on this list
 * because that is where the gas transmission network runs, and Yanbu because the
 * East-West pipeline terminates there. Jeddah and Riyadh are not — pipeline spread
 * work in those areas is rare enough that a page would be thin.
 */
export interface PipelineCity {
  slug: string;
  name: string;
  /** why a pipeline contractor is working here — used in page copy, must stay factual */
  context: string;
  driveTime: string;
  /** the shape of pipeline work here — drives the unit x city page copy */
  workTypes: string;
  /** how urgent work here typically is; changes what the page promises */
  urgency: string;
}

export const pipelineCities: PipelineCity[] = [
  {
    slug: 'jubail',
    name: 'Jubail',
    context:
      'Jubail Industrial City concentrates more petrochemical plant, and therefore more in-plant and interconnecting pipework, than anywhere else in the Kingdom. Tie-ins, revamps and shutdown pipework run continuously alongside new-build.',
    driveTime: 'roughly 90 minutes from our Al Khobar yard',
    workTypes:
      'Mostly in-plant and interconnecting pipework rather than open right of way: tie-ins, revamps, unit interconnects and shutdown pipework inside operating petrochemical plants.',
    urgency:
      'Shutdown-window driven. Dates are fixed months ahead and then absolutely immovable, so equipment is placed before the window opens, not on its first day.'
  },
  {
    slug: 'ras-tanura',
    name: 'Ras Tanura',
    context:
      'The refinery and the Juaymah export terminal sit on a dense gas and crude transmission network. Replacement and refurbishment of existing transmission lines is ongoing work rather than an occasional project.',
    driveTime: 'roughly 90 minutes from our Al Khobar yard',
    workTypes:
      'Transmission line replacement and refurbishment on the gas and crude network feeding the refinery and the Juaymah export terminal, plus scraper trap and valve station work.',
    urgency:
      'A mix of planned replacement programmes and unplanned integrity work. Both are permit-controlled and both move faster than a general construction site.'
  },
  {
    slug: 'dhahran',
    name: 'Dhahran',
    context:
      'Dhahran is where the operator and most of the major EPC contractors keep their offices, and the surrounding field infrastructure carries flowlines, trunklines and gathering systems.',
    driveTime: 'under 30 minutes from our Al Khobar yard',
    workTypes:
      'Field infrastructure rather than plant: flowlines, trunklines and gathering systems, plus the engineering offices where the scope is written before it reaches the ground.',
    urgency:
      'Programme-driven and usually planned, because the contractors here are working to a schedule set months earlier by the operator.'
  },
  {
    slug: 'dammam',
    name: 'Dammam',
    context:
      'Dammam covers the port, the industrial cities and the fabrication yards where pipe is spooled, coated and staged before it goes to the right of way.',
    driveTime: 'under 30 minutes from our Al Khobar yard',
    workTypes:
      'Yard and staging work as much as field work — pipe spooling, coating, bevelling and pre-fabrication before material goes to the right of way, plus port and industrial-city pipework.',
    urgency:
      'Continuous rather than campaign-based. Equipment here is often on longer standing hire against a yard rather than a spread.'
  },
  {
    slug: 'al-khobar',
    name: 'Al Khobar',
    context:
      'Our own operations hub. Equipment is loaded here, and Al Khobar is the base from which the rest of the Eastern Province is served.',
    driveTime: 'same-day from our own yard',
    workTypes:
      'Our own operations base, plus local industrial and infrastructure pipework. This is where equipment is loaded, inspected and made ready before it goes anywhere else.',
    urgency:
      'Same-day where the machine is in the yard. This is the shortest response time we can offer on anything.'
  },
  {
    slug: 'abqaiq',
    name: 'Abqaiq',
    context:
      'Abqaiq is the hub of the crude stabilisation and transmission network, feeding the Abqaiq–Ras Tanura and East-West systems. Pipeline work here is permit-controlled and scheduling-critical.',
    driveTime: 'roughly 90 minutes from our Al Khobar yard',
    workTypes:
      'Crude stabilisation and transmission work on the network feeding the Abqaiq–Ras Tanura and East-West systems: tie-ins, replacement sections and integrity-driven pipework.',
    urgency:
      'Heavily permit-controlled and schedule-critical. Access approvals govern the programme more than equipment availability does.'
  },
  {
    slug: 'yanbu',
    name: 'Yanbu',
    context:
      'The western terminus of the East-West pipeline system and a refining and petrochemical hub in its own right. Longer mobilisation, planned rather than emergency.',
    driveTime: 'cross-country mobilisation, planned in advance',
    workTypes:
      'The western terminus of the East-West pipeline system, plus refinery and petrochemical pipework in the industrial city.',
    urgency:
      'Planned only. This is a cross-country mobilisation of roughly 1,200 km from Al Khobar, so it is quoted and scheduled in advance rather than mobilised at short notice.'
  }
];

export const pipelineUnits: PipelineUnit[] = [
  // ------------------------------------------------------------------
  // LAY & LIFT
  // ------------------------------------------------------------------
  {
    slug: 'side-boom-pipelayer',
    name: 'Side Boom (Pipelayer)',
    aka: [
      'Side Boom',
      'Sideboom',
      'Pipelayer',
      'Pipe Layer',
      'Side Boom Tractor',
      'Sideboom Crane',
      'Pipelayer Rental'
    ],
    group: 'lay-and-lift',
    specSummary: '40 t, 60 t and 90 t side booms · stringing, lowering-in and tie-in support',
    h1: 'Side Boom (Pipelayer) Rental in the Eastern Province — 40 t, 60 t and 90 t',
    title: 'Side Boom & Pipelayer Rental | 40t 60t 90t | Eastern Province | GulfFast',
    description:
      'Side boom (pipelayer) rental in Jubail, Ras Tanura, Dhahran, Dammam and Al Khobar. 40 t, 60 t and 90 t machines from our own fleet for stringing, lowering-in and tie-in work.',
    intro:
      'A side boom is the machine the whole spread waits on. Nothing gets strung, cradled or lowered in without one, and there is no substitute — a mobile crane cannot travel the right of way alongside the ditch with a load on the hook. GulfFast holds 40 t, 60 t and 90 t side booms in its own fleet and dispatches them across the Eastern Province from Al Khobar.',
    targetKeywords: [
      'Side boom rental Saudi Arabia',
      'Sideboom rental Eastern Province',
      'Pipelayer rental Jubail',
      'Side boom tractor hire Dammam',
      'Pipelayer for pipeline construction Saudi Arabia'
    ],
    specs: [
      { label: 'Lift capacities', value: '40 t · 60 t · 90 t' },
      { label: 'Typical duty', value: 'Stringing, cradling, lowering-in, tie-in support, skid handling' },
      { label: 'Hire basis', value: 'Bare hire or with certified operator' },
      { label: 'Minimum term', value: 'Quoted against the spread duration, not a day rate' },
      { label: 'Mobilisation', value: 'Low bed from Al Khobar; we own the low beds as well' }
    ],
    sections: [
      {
        heading: 'Why capacity is chosen by the lift plan, not the pipe diameter',
        body: 'Contractors often ask for a tonnage based on the line size. The load that actually governs is the lowering-in plan: the number of machines on the string, the spacing, the boom radius at the worst point, and the dynamic allowance the lift study applies. A 24-inch line lowered in with three machines at wide spacing can demand more per machine than a larger line with five. Send us the lift plan or the pipe schedule and the ditch profile, and we will tell you which of the three capacities the job actually needs — including when a smaller machine is enough, which is usually the cheaper answer.'
      },
      {
        heading: 'Side boom, pipelayer or sideboom — the same machine',
        body: 'The three names are used interchangeably across the industry and across nationalities on a Saudi spread. Caterpillar and its pipeline dealer network call them both pipelayers and sidebooms; European contractors tend to say side boom; American crews say pipelayer. If your scope of work, your lift study and your material requisition use different words for it, they are describing the same machine. It matters only when you are searching for one, which is why this page carries all three.'
      },
      {
        heading: 'Owned, not brokered',
        body: 'These machines are in our own fleet. That is the difference that shows up when a spread goes down: when we tell you a 60 t can be on the right of way tomorrow morning, we are not waiting for another yard to confirm it first. Side booms are also the hardest item on a spread to source at short notice in the Kingdom, because the machines that exist are usually already committed to a project for its duration.'
      },
      {
        heading: 'Operators and certification',
        body: 'Side booms can be supplied bare or with a certified operator. Pipelaying operators are a specific skill — travelling in formation with a suspended load along an uneven right of way is not crane work and not dozer work. We supply operators from our manpower division on the same commercial registration as the machine, so the equipment and the man are on one contract and one invoice.'
      }
    ],
    faqs: [
      {
        question: 'What side boom capacities do you have?',
        answer:
          'Our own fleet covers 40 t, 60 t and 90 t. Which one you need is set by the lowering-in plan and the number of machines on the string rather than by pipe diameter alone.'
      },
      {
        question: 'Can you supply several side booms for one spread?',
        answer:
          'Yes — lowering-in normally needs machines working in formation, so they are usually supplied as a set rather than singly. Tell us the string length, the line size and how many machines your lift study calls for and we will quote the set.'
      },
      {
        question: 'Do you supply operators with the side booms?',
        answer:
          'Yes, or bare hire if your own operators are certified. Pipelaying is a distinct competency from crane or dozer operation, so if you are self-performing it is worth confirming your operators have done it before.'
      },
      {
        question: 'How quickly can a side boom reach Jubail or Ras Tanura?',
        answer:
          'Both are roughly 90 minutes from our Al Khobar yard, and we own the hydraulic low beds that move the machines, so transport is not a separate booking with a separate lead time.'
      },
      {
        question: 'Is a side boom the same as a pipelayer?',
        answer:
          'Yes. Side boom, sideboom and pipelayer all describe the same tracked machine with a boom mounted on the side of the chassis and a counterweight opposite it. The names vary by region and by crew nationality, not by machine.'
      }
    ],
    relatedSlugs: ['pipe-roller-cradle', 'internal-line-up-clamp', 'hydraulic-low-bed-trailer'],
    relatedEquipmentSlugs: ['excavators', 'dozers', 'cranes'],
    relatedManpowerSlugs: ['rigging-and-scaffolding', 'heavy-equipment-operators'],
    fromBrochure: true,
    needsOwnerSpec: true
  },
  {
    slug: 'pipe-roller-cradle',
    name: 'Pipe Roller Cradle',
    aka: [
      'Pipe Roller Cradle',
      'Pipe Rollie Cradle',
      'Roller Cradle',
      'Pipe Cradle',
      'Cradle Block',
      'Pipe Roller'
    ],
    group: 'lay-and-lift',
    specSummary: '4" to 60" · non-marring support for coated line pipe',
    h1: 'Pipe Roller Cradle Rental — 4" to 60"',
    title: 'Pipe Roller Cradle Rental 4"–60" | Pipeline Handling | GulfFast Eastern Province',
    description:
      'Pipe roller cradles for 4" to 60" line pipe, for hire across Jubail, Ras Tanura, Dammam, Dhahran and Al Khobar. Protects coating during stringing, welding and lowering-in.',
    intro:
      'A roller cradle is a cheap piece of equipment that prevents an expensive problem. Coated line pipe that is set down on a bare hook, a bare skid or the wrong sling gets its coating damaged, and coating damage found at the holiday detection stage means the joint comes back out. GulfFast holds roller cradles covering 4" through 60".',
    targetKeywords: [
      'Pipe roller cradle rental Saudi Arabia',
      'Pipe cradle hire Eastern Province',
      'Pipeline roller cradle Jubail',
      'Coated pipe handling equipment rental'
    ],
    specs: [
      { label: 'Pipe size range', value: '4" to 60"' },
      { label: 'Purpose', value: 'Coating-safe support during stringing, line-up, welding and lowering-in' },
      { label: 'Used with', value: 'Side booms, paywelders, internal line-up clamps' },
      { label: 'Hire basis', value: 'Per set, quoted against string length and line size' }
    ],
    sections: [
      {
        heading: 'What the cradle is actually protecting',
        body: 'Modern line pipe arrives with a factory-applied external coating — three-layer polyethylene, FBE or similar — and that coating is the pipe\'s entire corrosion defence for its design life. It is also soft. Every time the pipe is set down, rolled, rotated for welding or lowered into the ditch, the contact points are where the coating gets cut. Roller cradles spread the load over a wide, non-marring surface and let the pipe rotate without dragging, which is why they appear in the method statement for every stage between stringing and lowering-in.'
      },
      {
        heading: 'Matching cradle to pipe size',
        body: 'A cradle sized for a 12" line will not support a 48" joint, and a 48" cradle under a 12" joint gives point contact instead of the wide contact it was designed for. Our range runs from 4" to 60", which covers everything from small in-plant interconnecting pipework in Jubail up to large transmission line pipe. Tell us the line sizes on your schedule and we will send the matching sets rather than a generic assortment.'
      },
      {
        heading: 'Quantity is a function of string length',
        body: 'Cradles are quoted per set and the set size follows how long a string you are building and at what spacing. It is one of the few items on a spread where running short is genuinely disruptive — the string stops while somebody drives back to the yard. We would rather over-supply cradles and under-charge for them than have your spread wait.'
      }
    ],
    faqs: [
      {
        question: 'What pipe sizes do your roller cradles cover?',
        answer: '4" through 60", which covers in-plant interconnecting pipework up to large-diameter transmission line pipe.'
      },
      {
        question: 'Do cradles come with the side booms or separately?',
        answer:
          'Either. Most contractors take them together because they are used in the same operation, and taking both from one supplier means one delivery and one invoice.'
      },
      {
        question: 'Why not just use timber skids?',
        answer:
          'Timber skids do not let the pipe rotate, and a coated joint dragged across a skid is a coating repair. For uncoated or temporary staging skids are fine; for coated line pipe that is going into the ground, cradles are what the method statement will call for.'
      }
    ],
    relatedSlugs: ['side-boom-pipelayer', 'internal-line-up-clamp', 'paywelder-welding-tractor'],
    relatedEquipmentSlugs: ['excavators'],
    relatedManpowerSlugs: ['rigging-and-scaffolding'],
    fromBrochure: true,
    needsOwnerSpec: true
  },

  // ------------------------------------------------------------------
  // WELDING & JOINING
  // ------------------------------------------------------------------
  {
    slug: 'internal-line-up-clamp',
    name: 'Internal Line-Up Clamp',
    aka: [
      'Internal Line Up Clamp',
      'Internal Lineup Clamp',
      'ILUC',
      'Internal Clamp',
      'Pneumatic Internal Line Up Clamp',
      'Line Up Clamp',
      'Pipe Line Up Clamp'
    ],
    group: 'welding-and-joining',
    specSummary: '8" to 60" · internal alignment for root pass welding',
    h1: 'Internal Line-Up Clamp (ILUC) Rental — 8" to 60"',
    title: 'Internal Line-Up Clamp Rental 8"–60" | ILUC Hire | GulfFast Eastern Province',
    description:
      'Internal line-up clamps for 8" to 60" pipe, for hire in Jubail, Ras Tanura, Abqaiq, Dammam and Al Khobar. Internal alignment and root gap control for pipeline root pass welding.',
    intro:
      'The internal line-up clamp is what decides your repair rate. Hi-lo at the root is the single most common cause of root pass rejection, and an external clamp cannot control it on large diameter pipe the way an internal one can. GulfFast holds internal line-up clamps covering 8" through 60".',
    targetKeywords: [
      'Internal line up clamp rental Saudi Arabia',
      'ILUC rental Eastern Province',
      'Internal clamp hire pipeline welding',
      'Pipe line up clamp Jubail',
      'Internal lineup clamp 60 inch rental'
    ],
    specs: [
      { label: 'Pipe size range', value: '8" to 60"' },
      { label: 'Function', value: 'Internal alignment, hi-lo control and root gap setting before the root pass' },
      { label: 'Typical use', value: 'Mainline root pass welding, large-diameter transmission pipe' },
      { label: 'Used with', value: 'Paywelders, pipe facing and bevelling equipment, roller cradles' },
      { label: 'Hire basis', value: 'Per unit per size range, quoted against the weld schedule' }
    ],
    sections: [
      {
        heading: 'Why internal beats external on large diameter',
        body: 'An external clamp pulls the pipe ends together from the outside, which corrects ovality only where the clamp shoes sit and leaves the root free to drift between them. On large-diameter thin-wall pipe that drift becomes hi-lo, and hi-lo becomes a repair. An internal clamp expands from inside against the full circumference, so it rounds the pipe and holds the root gap uniformly all the way round, and the welder can complete the full root without stopping to reposition. On a mainline spread that is the difference between a weld rate you planned for and one you did not.'
      },
      {
        heading: 'What the clamp does to your repair rate',
        body: 'Root pass defects are expensive out of proportion to their size, because a rejected root means grinding out and rewelding a joint that is already in the string, often with the crew and the equipment standing by. Contractors who track it usually find the clamp pays for itself against the repair rate alone before any weld-rate gain is counted. If you are being asked to justify the hire line to a client or a QS, that is the argument that works.'
      },
      {
        heading: 'Sizing, and what we need from you',
        body: 'Clamps are size-specific. Our range covers 8" to 60", but a single clamp covers a band, not the whole range, so a spread welding two or three line sizes needs more than one unit. Send us the pipe schedule — sizes, wall thicknesses and joint counts — and we will tell you exactly how many units and which bands, rather than sending the whole range and invoicing you for it.'
      },
      {
        heading: 'Spares and standby on a live spread',
        body: 'An internal clamp stopping mid-string stops the welding crew, the paywelder and the side booms with it. For spreads where that exposure is unacceptable we can hold a standby unit on hire alongside the working one. Whether that is worth the extra line item depends on your penalty exposure, and we will give you an honest view rather than sell you a second clamp by default.'
      }
    ],
    faqs: [
      {
        question: 'What pipe sizes do your internal line-up clamps cover?',
        answer:
          '8" through 60". Each clamp covers a size band rather than the whole range, so tell us which line sizes are on your schedule and we will match the units to them.'
      },
      {
        question: 'Are they pneumatic or hydraulic?',
        answer:
          'Send us your line sizes and wall thicknesses and we will confirm exactly which units we can allocate to your spread and how they are actuated, rather than guessing here.'
      },
      {
        question: 'Can we hire a clamp for a short tie-in rather than a whole spread?',
        answer:
          'Yes. Tie-ins and short replacement sections are common in Jubail and at Ras Tanura, and clamps are hired for that duration. The rate reflects the short term.'
      },
      {
        question: 'Do you supply welders as well as the clamps?',
        answer:
          'Yes. Certified pipeline welders and pipe fitters come from our manpower division on the same commercial registration, so equipment and crew sit on one contract.'
      }
    ],
    relatedSlugs: ['paywelder-welding-tractor', 'pipeline-demagnetizer', 'pipe-roller-cradle'],
    relatedEquipmentSlugs: ['welding-sets', 'generators'],
    relatedManpowerSlugs: ['welding-and-fabrication', 'piping-and-mechanical-trades', 'qaqc-and-inspection'],
    fromBrochure: true,
    needsOwnerSpec: true
  },
  {
    slug: 'paywelder-welding-tractor',
    name: 'Paywelder (Welding Tractor)',
    aka: [
      'Paywelder',
      'Pay Welder',
      'Welding Tractor',
      'ArcoTrac',
      'Arcotrac 1100',
      'Arcotrac 1800',
      'Vietz ArcoTrac',
      'Pipeline Welding Tractor',
      'Welding Rig'
    ],
    group: 'welding-and-joining',
    specSummary: 'Vietz ArcoTrac 1100 and 1800 · self-propelled multi-station welding on the right of way',
    h1: 'Paywelder Rental — Vietz ArcoTrac 1100 and 1800',
    title: 'Paywelder & Welding Tractor Rental | Vietz ArcoTrac 1100 / 1800 | GulfFast',
    description:
      'Paywelder (welding tractor) rental in the Eastern Province — Vietz ArcoTrac 1100 and 1800. Self-propelled multi-station welding power for pipeline spreads in Jubail, Ras Tanura and Abqaiq.',
    intro:
      'A paywelder is a welding shop that drives itself along the right of way: multiple welding stations, generator power, crane and toolage on one tracked or wheeled chassis, so the welders, the machines and the consumables arrive at the joint together instead of being ferried to it. GulfFast operates Vietz ArcoTrac 1100 and 1800 units.',
    targetKeywords: [
      'Paywelder rental Saudi Arabia',
      'Welding tractor rental Eastern Province',
      'ArcoTrac rental Jubail',
      'Pipeline welding rig hire Saudi Arabia',
      'Pay welder hire Dammam'
    ],
    specs: [
      { label: 'Models', value: 'Vietz ArcoTrac 1100 and ArcoTrac 1800' },
      { label: 'Function', value: 'Self-propelled multi-station welding power and crew transport along the right of way' },
      { label: 'Typical duty', value: 'Mainline welding, fill and cap passes, tie-in support' },
      { label: 'Used with', value: 'Internal line-up clamps, demagnetizers, roller cradles' },
      { label: 'Hire basis', value: 'Bare hire or operated, quoted against spread duration' }
    ],
    sections: [
      {
        heading: 'Why a paywelder instead of engine-driven sets on a pickup',
        body: 'On a short tie-in, a pickup and two engine-driven welding sets is the right answer and we will tell you so. On a mainline spread it is not: the welding crew spends the day moving machines, cables and consumables instead of welding, and the weld rate collapses. A paywelder carries the stations, the power, the crane and the consumables as one unit that tracks the string, which is why every serious cross-country spread uses one. The economics turn on joints per day, so if you are deciding between the two, work out your target weld rate first.'
      },
      {
        heading: 'ArcoTrac 1100 and 1800',
        body: 'Vietz builds the ArcoTrac specifically for pipeline construction rather than adapting a general-purpose machine, and the 1100 and 1800 designations reflect different chassis and capacity classes. Which one suits your spread depends on the number of welding stations you need working simultaneously and the terrain on the right of way. Tell us your crew structure and we will match the unit.'
      },
      {
        heading: 'Power, and what else it feeds',
        body: 'The generator capacity on a paywelder is sized for its welding stations, and it is worth confirming what else you intend to run from it — preheat, grinders, lighting for night working — before assuming there is headroom. Where there is not, we supply separate diesel generators and light towers from the same yard, so the answer is a second line on the same quote rather than a second supplier.'
      }
    ],
    faqs: [
      {
        question: 'What paywelder models do you have?',
        answer: 'Vietz ArcoTrac 1100 and ArcoTrac 1800, in our own fleet.'
      },
      {
        question: 'Is a paywelder the same as a welding tractor?',
        answer:
          'Yes. Paywelder, pay welder and welding tractor all describe the same machine. Vietz markets the ArcoTrac as both. The spelling varies; the machine does not.'
      },
      {
        question: 'Can you supply the welders as well as the machine?',
        answer:
          'Yes. Certified pipeline welders are supplied from our manpower division, on the same commercial registration as the equipment. For pipeline work, certification currency is usually the binding constraint, so tell us the qualification standard your client requires early.'
      },
      {
        question: 'Do we need a paywelder for a short tie-in?',
        answer:
          'Usually not. For a handful of joints, engine-driven welding sets and a service vehicle are more economic, and we rent those too. A paywelder earns its rate when you are welding a string, not a joint.'
      }
    ],
    relatedSlugs: ['internal-line-up-clamp', 'pipeline-demagnetizer', 'diesel-welding-support'],
    relatedEquipmentSlugs: ['welding-sets', 'generators', 'light-towers'],
    relatedManpowerSlugs: ['welding-and-fabrication', 'piping-and-mechanical-trades'],
    fromBrochure: true,
    needsOwnerSpec: true
  },
  {
    slug: 'pipeline-demagnetizer',
    name: 'Pipeline Demagnetizer',
    aka: [
      'Demagnetizer',
      'Demagnetiser',
      'Pipe Demagnetizer',
      'Pipeline Demagnetising Equipment',
      'Residual Magnetism Removal',
      'Arc Blow Control'
    ],
    group: 'welding-and-joining',
    specSummary: 'Residual magnetism removal · arc blow control before welding',
    h1: 'Pipeline Demagnetizer Rental — Arc Blow Control',
    title: 'Pipeline Demagnetizer Rental | Arc Blow & Residual Magnetism | GulfFast Eastern Province',
    description:
      'Pipeline demagnetizer hire in the Eastern Province. Removes residual magnetism from line pipe to stop arc blow before root pass welding in Jubail, Ras Tanura and Abqaiq.',
    intro:
      'Residual magnetism in line pipe deflects the welding arc — arc blow — and produces porosity, undercut and wandering beads that no amount of welder skill corrects. It is one of the few welding problems where the cause is invisible and the crew gets blamed. A demagnetizer removes the cause in minutes.',
    targetKeywords: [
      'Pipeline demagnetizer rental Saudi Arabia',
      'Demagnetizer hire Eastern Province',
      'Arc blow pipeline welding solution',
      'Residual magnetism removal pipe Jubail'
    ],
    specs: [
      { label: 'Function', value: 'Reduces residual magnetism in pipe ends to a level where the arc stays stable' },
      { label: 'When it is used', value: 'Before root pass welding, particularly on tie-ins and cut pipe' },
      { label: 'Typical symptom it solves', value: 'Arc blow, porosity, undercut, wandering root' },
      { label: 'Used with', value: 'Internal line-up clamps, paywelders, cold cutting machines' }
    ],
    sections: [
      {
        heading: 'Where the magnetism comes from',
        body: 'Line pipe picks up residual magnetism from magnetic particle inspection, from magnetic lifting equipment, from long storage aligned with the earth\'s field, and from the cathodic protection system on an existing line. That last one is why tie-ins into a live, CP-protected system are the classic arc blow scenario: the pipe in the ground has been sitting in an imposed field for years. If your welders are struggling specifically at tie-ins and not on the mainline, magnetism is the first thing to check.'
      },
      {
        heading: 'Cheaper than the repair it prevents',
        body: 'Demagnetizing takes minutes per joint and the hire rate is a small line on a spread budget. Grinding out and rewelding a rejected root on a tie-in — with the excavation open, the crew standing by and possibly a permit window closing — is not. This is the item on the list that contractors most often skip and most often regret.'
      },
      {
        heading: 'Measure, do not assume',
        body: 'Demagnetizing without measuring is guesswork in both directions: you can leave enough field to still cause blow, or you can waste time on pipe that never had a problem. The sequence that works is measure the field at the pipe end, demagnetize, measure again, then weld. If your QA/QC procedure does not already specify a threshold, agree one with the client before the spread starts rather than during it.'
      }
    ],
    faqs: [
      {
        question: 'When do we actually need a demagnetizer?',
        answer:
          'Tie-ins into existing cathodically protected lines are the highest-risk case. Cut pipe, pipe that has been through magnetic particle inspection, and pipe that has been stored a long time are the next most common. If welders report the arc wandering or blowing out at the root, that is the symptom.'
      },
      {
        question: 'How long does demagnetizing a joint take?',
        answer:
          'Minutes rather than hours, which is why it is almost always cheaper than the repair it prevents. The measure–demagnetize–measure sequence is what takes the time, and it is the part worth doing properly.'
      },
      {
        question: 'Can we hire one for a single tie-in?',
        answer: 'Yes. Short-duration hire for tie-ins and shutdown pipework is normal for this item.'
      }
    ],
    relatedSlugs: ['internal-line-up-clamp', 'cold-cutting-machine', 'paywelder-welding-tractor'],
    relatedEquipmentSlugs: ['welding-sets'],
    relatedManpowerSlugs: ['welding-and-fabrication', 'qaqc-and-inspection'],
    fromBrochure: false,
    needsOwnerSpec: true
  },

  // ------------------------------------------------------------------
  // BENDING & CUTTING
  // ------------------------------------------------------------------
  {
    slug: 'pipe-bending-machine',
    name: 'Pipe Bending Machine',
    aka: [
      'Pipe Bending Machine',
      'Pipeline Bending Machine',
      'Pipe Bender',
      'Hydraulic Pipe Bender',
      'Mandrel Bending Machine',
      'Cold Field Bending Machine'
    ],
    group: 'bending-and-cutting',
    specSummary: '6" to 60" · cold field bends to follow the ditch profile',
    h1: 'Pipe Bending Machine Rental — 6" to 60"',
    title: 'Pipe Bending Machine Rental 6"–60" | Cold Field Bends | GulfFast Eastern Province',
    description:
      'Pipeline bending machine hire for 6" to 60" line pipe across Jubail, Ras Tanura, Abqaiq, Dammam and Al Khobar. Cold field bends made on the right of way to follow the ditch profile.',
    intro:
      'Every metre of ditch that is not dead straight and dead level needs the pipe to follow it, and on a pipeline that is done with cold field bends made on the right of way, not with fittings. A bending machine is therefore not optional equipment on a spread — it is what makes the pipe fit the ground. GulfFast holds bending capability from 6" to 60".',
    targetKeywords: [
      'Pipe bending machine rental Saudi Arabia',
      'Pipeline bending machine hire Eastern Province',
      'Cold field bending machine Jubail',
      'Pipe bender rental 60 inch',
      'Hydraulic pipe bending machine Dammam'
    ],
    specs: [
      { label: 'Pipe size range', value: '6" to 60"' },
      { label: 'Bend type', value: 'Cold field bends — sag, overbend and side bends to the ditch profile' },
      { label: 'Typical duty', value: 'Mainline right of way bending ahead of the welding crew' },
      { label: 'Used with', value: 'Side booms, roller cradles, low bed transport' },
      { label: 'Hire basis', value: 'Quoted against line size, wall thickness and bend count' }
    ],
    sections: [
      {
        heading: 'Cold bends, not fittings',
        body: 'On plant piping, a change of direction is an elbow. On a transmission pipeline it is a cold bend made in the parent pipe, because a fitting means two more welds, two more potential defects and a discontinuity in a line that may later be pigged. Cold field bending keeps the pipe continuous and the wall thickness within tolerance, and the machine that does it has to be sized for the pipe rather than adapted to it.'
      },
      {
        heading: 'What governs whether a bend is acceptable',
        body: 'Wall thinning on the outer radius, ovality, and buckling or rippling on the inner radius are the three things the client\'s inspector will measure, and they are all functions of the mandrel, the shoe and the increment the machine works to — not of operator enthusiasm. The bend radius your specification allows is usually expressed in pipe diameters and is tighter for thin wall. Send us the line sizes, wall thicknesses, grade and the bending specification, and we will confirm what the machine can do before you are committed to it.'
      },
      {
        heading: 'Bending runs ahead of welding',
        body: 'On a moving spread the bending crew works ahead of the line-up and welding crews, so the bending machine is one of the first items mobilised and often one of the last released. Plan the hire window against the survey and the ditch profile rather than against the welding schedule, or you will find you have booked it for the wrong weeks.'
      }
    ],
    faqs: [
      {
        question: 'What pipe sizes can you bend?',
        answer: '6" through 60". Wall thickness and grade also matter, so send the pipe schedule with the enquiry.'
      },
      {
        question: 'Do you supply the bending crew as well?',
        answer:
          'Yes, through our manpower division on the same commercial registration. Field bending is a specific skill and an inexperienced crew will produce bends the inspector rejects.'
      },
      {
        question: 'Can bends be made in the yard instead of on the right of way?',
        answer:
          'They can, but cold field bends are normally made on the right of way because the bend has to match the surveyed ditch profile, which is not fully known until the ditch is cut. Yard bending works where the geometry is fixed in advance.'
      },
      {
        question: 'How far in advance should we book?',
        answer:
          'Bending machines are mobilised before the welding spread, so book against your survey and ditching programme. On a live spread this is the item people book too late.'
      }
    ],
    relatedSlugs: ['side-boom-pipelayer', 'pipe-roller-cradle', 'hydraulic-low-bed-trailer'],
    relatedEquipmentSlugs: ['excavators', 'cranes'],
    relatedManpowerSlugs: ['piping-and-mechanical-trades', 'qaqc-and-inspection'],
    fromBrochure: true,
    needsOwnerSpec: true
  },
  {
    slug: 'cold-cutting-machine',
    name: 'Cold Cutting Machine',
    aka: [
      'Cold Cutting Machine',
      'Pipe Cold Cutting Machine',
      'Cold Cutting and Bevelling Machine',
      'Split Frame Cutting Machine',
      'Clamshell Cutter',
      'Pipe Cutting and Bevelling'
    ],
    group: 'bending-and-cutting',
    specSummary: 'Spark-free cutting and bevelling · hot work permit avoidance',
    h1: 'Cold Cutting Machine Rental — Spark-Free Pipe Cutting and Bevelling',
    title: 'Cold Cutting Machine Rental | Spark-Free Pipe Cutting & Bevelling | GulfFast',
    description:
      'Cold cutting and bevelling machine hire in the Eastern Province. Spark-free mechanical cutting for live plant tie-ins, shutdowns and hydrocarbon areas in Jubail, Ras Tanura and Abqaiq.',
    intro:
      'In a hydrocarbon area, how you cut the pipe is a safety decision before it is an engineering one. A cold cutting machine cuts and bevels mechanically with no flame, no spark and no heat-affected zone, which is what makes it usable where a hot work permit is difficult, slow or simply not going to be issued.',
    targetKeywords: [
      'Cold cutting machine rental Saudi Arabia',
      'Pipe cold cutting and bevelling hire',
      'Spark free pipe cutting Jubail',
      'Cold cutting machine Ras Tanura',
      'Clamshell pipe cutter rental Eastern Province'
    ],
    specs: [
      { label: 'Method', value: 'Mechanical cutting and bevelling — no flame, no spark, no heat-affected zone' },
      { label: 'Typical use', value: 'Live plant tie-ins, shutdown pipework, hydrocarbon areas, permit-restricted work' },
      { label: 'Output', value: 'Square cut and weld-ready bevel in one operation' },
      { label: 'Used with', value: 'Demagnetizer, internal line-up clamp, welding sets' }
    ],
    sections: [
      {
        heading: 'The permit argument, which is usually the real argument',
        body: 'In an operating plant in Jubail or at Ras Tanura, a hot work permit in a hydrocarbon area can take longer to obtain than the work takes to do, and during a shutdown the permit queue is the critical path for everyone. Cold cutting takes the ignition source out of the job, which changes what permit is required and often removes the dependency entirely. Contractors who cost cold cutting against a saw or a torch on hire rate alone are measuring the wrong thing — the saving is in the schedule, not the rate.'
      },
      {
        heading: 'Cut and bevel in one operation',
        body: 'The machine produces a square cut and a weld-ready bevel in the same pass, to a consistent angle and land. That matters downstream: an inconsistent bevel is a root gap problem, and a root gap problem is a repair. Torch cutting followed by grinding to a bevel gives you neither the consistency nor the absence of a heat-affected zone, and on higher-grade line pipe the heat-affected zone is itself a metallurgical concern.'
      },
      {
        heading: 'Where it is genuinely needed, and where it is not',
        body: 'Cold cutting is the right answer in live plant, in hydrocarbon areas, on higher-grade pipe where heat input is controlled, and wherever the permit regime makes hot work slow. On an open right of way in the desert, cutting new pipe with no hydrocarbon present, it is often unnecessary and a torch is faster and cheaper. We would rather tell you that than rent you a machine you did not need.'
      }
    ],
    faqs: [
      {
        question: 'Why use cold cutting instead of a cutting torch?',
        answer:
          'No ignition source, so the hot work permit requirement changes or disappears; no heat-affected zone, which matters on higher-grade pipe; and a consistent machined bevel rather than a torched edge that needs grinding.'
      },
      {
        question: 'What pipe sizes can you cut?',
        answer:
          'Machines are size-banded, so tell us the diameters and wall thicknesses on your scope and we will confirm which units cover them before quoting.'
      },
      {
        question: 'Can you supply it for a shutdown window only?',
        answer:
          'Yes, and that is the most common hire pattern for this item. Tell us your window and we will place the machine on site before it opens rather than on the first day of it.'
      },
      {
        question: 'Does it bevel as well as cut?',
        answer: 'Yes — square cut and weld-ready bevel in one operation, which is most of the point of using one.'
      }
    ],
    relatedSlugs: ['pipeline-demagnetizer', 'internal-line-up-clamp', 'hydrostatic-test-pump'],
    relatedEquipmentSlugs: ['welding-sets', 'generators'],
    relatedManpowerSlugs: ['piping-and-mechanical-trades', 'welding-and-fabrication', 'safety-and-hse'],
    fromBrochure: false,
    needsOwnerSpec: true
  },

  // ------------------------------------------------------------------
  // TESTING & COMMISSIONING
  // ------------------------------------------------------------------
  {
    slug: 'hydrostatic-test-pump',
    name: 'Hydrostatic Test Pump',
    aka: [
      'Hydro Testing Pump',
      'Hydro Testing Pumb',
      'Hydrostatic Test Pump',
      'Hydrotest Pump',
      'Pressure Test Pump',
      'Hydrostatic Testing Equipment'
    ],
    group: 'testing-and-commissioning',
    specSummary: 'Diesel-driven hydrostatic testing · pipeline and plant pressure testing',
    h1: 'Hydro Testing Pump Rental — Pipeline Hydrostatic Testing',
    title: 'Hydro Testing Pump Rental | Hydrostatic Test Equipment | GulfFast Eastern Province',
    description:
      'Hydrostatic test pump hire across Jubail, Ras Tanura, Abqaiq, Dammam and Al Khobar. Diesel-driven pressure testing equipment for pipeline and plant hydrostatic testing.',
    intro:
      'Hydrostatic testing is the last thing standing between your pipeline and handover, and it is usually the stage with the least schedule float left in it. A test that will not hold pressure, or a pump that cannot reach test pressure on a large volume, stops the handover and everything behind it.',
    targetKeywords: [
      'Hydro testing pump rental Saudi Arabia',
      'Hydrostatic test pump hire Eastern Province',
      'Pipeline hydrotest equipment Jubail',
      'Pressure testing pump rental Dammam',
      'Hydrostatic testing equipment Ras Tanura'
    ],
    specs: [
      { label: 'Function', value: 'Fill and pressurisation for pipeline and plant hydrostatic testing' },
      { label: 'Drive', value: 'Diesel-driven, for use where site power is not available' },
      { label: 'Typical duty', value: 'Strength and leak testing before commissioning and handover' },
      { label: 'Used with', value: 'Generators, temporary lighting for hold periods running overnight' }
    ],
    sections: [
      {
        heading: 'The pump is sized by volume and time, not just by pressure',
        body: 'Contractors specify a hydrotest pump by test pressure, which is only half the requirement. The other half is how long it will take to fill and pressurise the volume — a long large-diameter section holds an enormous amount of water, and a pump that reaches the pressure but takes two days to get there has cost you the schedule anyway. Give us the section length, the diameter and the test pressure, and we will size the pump against the fill time rather than the gauge reading.'
      },
      {
        heading: 'Hold periods run through the night',
        body: 'A strength test hold is measured in hours and the pressure and temperature have to be logged continuously throughout, which in practice means a crew and lighting on site overnight. We supply diesel generators and tower lights from the same yard, so the night side of a hydrotest is one quote rather than a scramble. Temperature is not a detail in the Eastern Province — a pressure drop that is actually a temperature drop has stopped more tests than genuine leaks have.'
      },
      {
        heading: 'Water, disposal and what we do not do',
        body: 'Test water sourcing, treatment, chemical dosing and permitted disposal are a separate scope with their own environmental requirements, and they are not something we supply. We rent the pumping equipment. Raise disposal with your client early, because the permit for getting the water out is frequently slower than the test itself.'
      }
    ],
    faqs: [
      {
        question: 'What test pressure can your pumps reach?',
        answer:
          'Tell us the section volume and the required test pressure and we will confirm which unit suits before quoting. Sizing against fill time matters as much as the pressure rating.'
      },
      {
        question: 'Do you supply the test water and its disposal?',
        answer:
          'No. We supply the pumping equipment. Sourcing, treating and permitted disposal of test water is a separate scope and usually the slowest part of the approval chain, so start it early.'
      },
      {
        question: 'Can you supply lighting and power for an overnight hold?',
        answer:
          'Yes — diesel generators and tower lights come from the same yard on the same quote, which is the usual arrangement for a test with a long hold period.'
      },
      {
        question: 'Do you hire for plant pressure testing as well as pipelines?',
        answer:
          'Yes. Plant and in-plant pipework testing in Jubail is common work for these pumps, and the hire pattern is typically shorter.'
      }
    ],
    relatedSlugs: ['cold-cutting-machine', 'pipeline-demagnetizer'],
    relatedEquipmentSlugs: ['generators', 'light-towers'],
    relatedManpowerSlugs: ['qaqc-and-inspection', 'safety-and-hse'],
    fromBrochure: false,
    needsOwnerSpec: true
  },

  // ------------------------------------------------------------------
  // TRANSPORT & SUPPORT
  // ------------------------------------------------------------------
  {
    slug: 'hydraulic-low-bed-trailer',
    name: 'Hydraulic Low Bed Trailer',
    aka: [
      'Hydraulic Low Bed',
      'Low Bed Trailer',
      'Lowbed Trailer',
      'Lowboy Trailer',
      'Hydraulic Lowbed',
      'Heavy Haulage Trailer',
      'Low Loader'
    ],
    group: 'transport-and-support',
    specSummary: 'Hydraulic low beds · moving side booms, dozers and spread equipment',
    h1: 'Hydraulic Low Bed Trailer Rental — Heavy Equipment Transport',
    title: 'Hydraulic Low Bed Trailer Rental | Heavy Haulage | GulfFast Eastern Province',
    description:
      'Hydraulic low bed trailer hire in the Eastern Province. Moving side booms, dozers, excavators and pipeline spread equipment between Al Khobar, Jubail, Ras Tanura and Abqaiq.',
    intro:
      'Pipeline equipment does not drive itself to site. A 90 t side boom, a dozer or a bending machine moves on a low bed, and on a spread that relocates as the string advances, transport is not a one-off at the start — it is a recurring operation. GulfFast owns its hydraulic low beds, which is why our equipment mobilisation is not dependent on somebody else\'s haulage schedule.',
    targetKeywords: [
      'Hydraulic low bed rental Saudi Arabia',
      'Low bed trailer hire Eastern Province',
      'Lowbed trailer Jubail',
      'Heavy equipment transport Dammam',
      'Low loader hire Al Khobar'
    ],
    specs: [
      { label: 'Type', value: 'Hydraulic low bed trailers' },
      { label: 'Typical loads', value: 'Side booms, dozers, excavators, bending machines, spread equipment' },
      { label: 'Coverage', value: 'Eastern Province routine; cross-country to Yanbu by arrangement' },
      { label: 'Hire basis', value: 'Per move or on standing hire for a spread that relocates' }
    ],
    sections: [
      {
        heading: 'Why owning the transport changes the delivery promise',
        body: 'Most equipment suppliers in the Eastern Province sub-contract haulage. That is invisible when the job is planned weeks ahead and very visible when it is not: the machine is available, the transport is not, and the promised date slips by two days. We own the low beds, so when we commit to a machine being on the right of way in the morning, the transport is part of that commitment rather than a dependency on it.'
      },
      {
        heading: 'Permits and escorts are not an afterthought',
        body: 'Abnormal loads in the Kingdom need route planning, permits and in some cases escorts, and the lead time on those is real. A 90 t side boom is not a load that moves on the spur of the moment. Tell us the move as early as you know it, and we will tell you honestly what the permit lead time does to your date rather than discovering it together on the day.'
      },
      {
        heading: 'Standing hire for a moving spread',
        body: 'A spread that advances along the right of way needs equipment repositioned continually, and booking each move separately generates administrative friction and waiting time. For spreads of any length, standing hire on a low bed with a driver is usually both cheaper and faster than per-move hire. Which is right for you depends on how often you relocate; tell us and we will do the arithmetic.'
      }
    ],
    faqs: [
      {
        question: 'Do you own your low beds or sub-contract transport?',
        answer:
          'We own them. That is why our mobilisation dates hold — the transport is not a separate company with its own schedule.'
      },
      {
        question: 'Can you move a 90 t side boom?',
        answer:
          'Yes, and we do so routinely, since we own the side booms as well. Abnormal load permits and route planning apply and need lead time, so tell us as early as the move is known.'
      },
      {
        question: 'Do you transport equipment we did not hire from you?',
        answer:
          'Yes, subject to availability. Tell us the machine, its weight and dimensions, and the route.'
      },
      {
        question: 'Can we keep a low bed on site for the duration of a spread?',
        answer:
          'Yes. For a spread that relocates regularly, standing hire is usually more economic than booking each move individually.'
      }
    ],
    relatedSlugs: ['side-boom-pipelayer', 'boom-truck', 'pipe-bending-machine'],
    relatedEquipmentSlugs: ['trucks', 'trailers', 'flatbed-trailers'],
    relatedManpowerSlugs: ['drivers', 'rigging-and-scaffolding'],
    fromBrochure: true,
    needsOwnerSpec: true
  },
  {
    slug: 'boom-truck',
    name: 'Boom Truck',
    aka: [
      'Boom Truck',
      'Truck Mounted Crane',
      'Lorry Loader',
      'HIAB',
      'Knuckle Boom Truck',
      'Pick and Carry Truck Crane'
    ],
    group: 'transport-and-support',
    specSummary: '5 t, 10 t and 15 t boom trucks · lifting and carrying in one move',
    h1: 'Boom Truck Rental — 5 t, 10 t and 15 t',
    title: 'Boom Truck Rental 5t 10t 15t | Truck Mounted Crane | GulfFast Eastern Province',
    description:
      'Boom truck hire in Al Khobar, Dammam, Dhahran, Jubail and Ras Tanura. 5 t, 10 t and 15 t truck-mounted cranes from our own fleet for pipeline, plant and site support work.',
    intro:
      'A boom truck does the job that would otherwise need a flatbed and a crane: it carries the load to the point of work and lifts it off itself. On a pipeline spread and in plant it handles valves, fittings, skids, spools, test equipment and everything else that is too heavy to lift by hand and too small to justify a mobile crane. GulfFast holds 5 t, 10 t and 15 t boom trucks in its own fleet.',
    targetKeywords: [
      'Boom truck rental Saudi Arabia',
      'Boom truck hire Al Khobar',
      'Truck mounted crane rental Dammam',
      'Boom truck 15 ton rental Jubail',
      'Lorry loader hire Eastern Province'
    ],
    specs: [
      { label: 'Capacities', value: '5 t · 10 t · 15 t' },
      { label: 'Function', value: 'Carry and lift in one vehicle — no separate crane mobilisation' },
      { label: 'Typical duty', value: 'Valves, fittings, spools, skids, test equipment, general site support' },
      { label: 'Hire basis', value: 'Daily, monthly or project duration, with operator' }
    ],
    sections: [
      {
        heading: 'One vehicle instead of two mobilisations',
        body: 'The alternative to a boom truck is a flatbed to bring the item and a crane to lift it, which means two mobilisations, two rates, and the coordination problem of getting both to the same place at the same time. For loads inside its capacity the boom truck removes all of that. The point at which a mobile crane becomes the right answer is set by weight and radius, not by the look of the lift, so if you are unsure, send us the weight and the reach.'
      },
      {
        heading: 'Choosing between 5 t, 10 t and 15 t',
        body: 'Capacity ratings are quoted at minimum radius and fall away sharply as the boom extends, which is the single most common source of a boom truck arriving on site and not being able to make the lift. A 15 t machine is not a 15 t machine at full reach. Tell us the heaviest item and the distance from the truck to where it has to land, and we will size it against the load chart rather than the headline number.'
      },
      {
        heading: 'In plant, in the yard, and on the right of way',
        body: 'Boom trucks are the most continuously used item on most sites because they are useful at every stage: unloading deliveries, positioning valves and fittings, moving test equipment, handling skids and generators, and recovering equipment. On a pipeline spread they usually earn their keep before the first joint is welded and after the last one is tested.'
      }
    ],
    faqs: [
      {
        question: 'What boom truck capacities do you have?',
        answer: '5 t, 10 t and 15 t, in our own fleet.'
      },
      {
        question: 'Do they come with an operator?',
        answer:
          'Yes. Boom trucks are supplied with a certified operator as standard, and the operator and the machine are on one contract.'
      },
      {
        question: 'Can a 15 t boom truck lift 15 tonnes anywhere on its chart?',
        answer:
          'No — that rating is at minimum radius and reduces as the boom extends. Give us the load weight and the working radius and we will confirm against the load chart, which avoids a wasted mobilisation.'
      },
      {
        question: 'Are they available for short-notice work?',
        answer:
          'Usually yes, as they are our own units. Al Khobar, Dammam and Dhahran are within thirty minutes of the yard; Jubail and Ras Tanura are about ninety.'
      }
    ],
    relatedSlugs: ['hydraulic-low-bed-trailer', 'side-boom-pipelayer'],
    relatedEquipmentSlugs: ['trucks', 'cranes', 'telehandlers', 'forklifts'],
    relatedManpowerSlugs: ['rigging-and-scaffolding', 'heavy-equipment-operators', 'drivers'],
    fromBrochure: true,
    needsOwnerSpec: true
  },
  {
    slug: 'diesel-welding-support',
    name: 'Diesel Welding Machines & Site Power',
    aka: [
      'Diesel Welding Machine',
      'Engine Driven Welder',
      'Welding Generator',
      'Diesel Welder Rental',
      'Welding Set Hire'
    ],
    group: 'transport-and-support',
    specSummary: 'Engine-driven welding sets, generators and tower lights for the spread',
    h1: 'Diesel Welding Machines and Site Power for Pipeline Work',
    title: 'Diesel Welding Machine, Generator & Tower Light Rental | Pipeline | GulfFast',
    description:
      'Diesel welding machines, generators and tower lights for pipeline spreads and plant work in Jubail, Ras Tanura, Abqaiq, Dammam and Al Khobar. Owned fleet, dispatched from Al Khobar.',
    intro:
      'Not every joint needs a paywelder. Tie-ins, repairs, shutdown pipework and in-plant work are done with engine-driven welding sets, and every one of them needs power and, if the work runs past sunset, light. These are the least glamorous items on a spread and the ones whose absence stops it soonest.',
    targetKeywords: [
      'Diesel welding machine rental Saudi Arabia',
      'Engine driven welder hire Eastern Province',
      'Welding generator rental Jubail',
      'Site power pipeline construction Dammam'
    ],
    specs: [
      { label: 'Welding sets', value: 'Engine-driven diesel welding machines, up to 400 A' },
      { label: 'Generators', value: '50 kVA to 1,000 kVA · silenced and standard enclosures' },
      { label: 'Lighting', value: '4,000 W trailer-mounted diesel tower lights' },
      { label: 'Typical duty', value: 'Tie-ins, repairs, shutdown pipework, night working, hydrotest hold periods' }
    ],
    sections: [
      {
        heading: 'When engine-driven sets beat a paywelder',
        body: 'A paywelder earns its rate on a moving spread welding a string. For a tie-in of a few joints, for repair work, or for in-plant pipework in Jubail where the machine cannot travel anyway, engine-driven welding sets on a service vehicle are faster to mobilise, cheaper, and easier to get a permit for. We rent both and will tell you which your scope actually calls for.'
      },
      {
        heading: 'Power sizing, honestly',
        body: 'Generator sizing goes wrong in both directions. Undersized, and the set trips when the welders and the grinders run together. Oversized, and you burn fuel carrying capacity you never use, which on a long spread is a real number. Give us the connected load and the duty pattern and we will size it properly — our range runs 50 kVA to 1,000 kVA.'
      },
      {
        heading: 'Night working is normal on pipeline and turnaround work',
        body: 'Hydrotest hold periods run overnight, shutdown windows run continuously, and summer working in the Eastern Province often shifts to night for heat reasons alone. Tower lights are a small line item that determine whether the night shift is productive or merely present.'
      }
    ],
    faqs: [
      {
        question: 'Should we hire welding sets or a paywelder?',
        answer:
          'Count the joints. A string on a moving spread justifies a paywelder; a tie-in or a repair does not. In-plant work where the machine cannot travel is always engine-driven sets.'
      },
      {
        question: 'What generator sizes do you have?',
        answer: '50 kVA to 1,000 kVA, silenced and standard. Tell us the connected load and duty pattern and we will size it.'
      },
      {
        question: 'Can you supply lighting for overnight hydrotest holds?',
        answer:
          'Yes. Trailer-mounted 4,000 W diesel tower lights, from the same yard and on the same quote as the test pump.'
      }
    ],
    relatedSlugs: ['paywelder-welding-tractor', 'hydrostatic-test-pump', 'internal-line-up-clamp'],
    relatedEquipmentSlugs: ['welding-sets', 'generators', 'light-towers', 'air-compressors'],
    relatedManpowerSlugs: ['welding-and-fabrication', 'electrical-and-instrumentation'],
    fromBrochure: true,
    needsOwnerSpec: true
  }
];

/**
 * The four brochure items that deliberately do NOT get a /pipeline page, because
 * they already rank under /equipment. The hub links here instead of duplicating.
 */
export interface PipelineCrossLink {
  name: string;
  equipmentSlug: string;
  pipelineContext: string;
}

export const pipelineCrossLinks: PipelineCrossLink[] = [
  {
    name: 'Excavator',
    equipmentSlug: 'excavators',
    pipelineContext: 'Ditching, padding, backfill and bell holes along the right of way.'
  },
  {
    name: 'Diesel Generator',
    equipmentSlug: 'generators',
    pipelineContext: 'Temporary power for welding, testing and night working where there is no site supply.'
  },
  {
    name: 'Tower Light',
    equipmentSlug: 'light-towers',
    pipelineContext: 'Night shifts, hydrotest hold periods and continuous shutdown working.'
  },
  {
    name: 'Welding Sets',
    equipmentSlug: 'welding-sets',
    pipelineContext: 'Engine-driven sets for tie-ins, repairs and in-plant pipework.'
  }
];

export function getPipelineUnits(): PipelineUnit[] {
  return pipelineUnits;
}

export function getPipelineUnitBySlug(slug: string): PipelineUnit | undefined {
  return pipelineUnits.find((u) => u.slug === slug);
}

export function getPipelineUnitsByGroup(group: PipelineGroupSlug): PipelineUnit[] {
  return pipelineUnits.filter((u) => u.group === group);
}

export function getPipelineGroupsWithUnits(): Array<PipelineGroup & { units: PipelineUnit[] }> {
  return pipelineGroups
    .map((g) => ({ ...g, units: getPipelineUnitsByGroup(g.slug) }))
    .filter((g) => g.units.length > 0);
}

export function getPipelineCities(): PipelineCity[] {
  return pipelineCities;
}

export function getPipelineCityBySlug(slug: string): PipelineCity | undefined {
  return pipelineCities.find((c) => c.slug === slug);
}

/**
 * Work-stage x city angles — the content that makes 77 unit x city pages defensible
 * rather than doorway pages.
 *
 * Google's guidance is explicit that near-identical pages generated per city are
 * treated as doorway pages. The defence is that each page must say something true
 * that only applies to that combination. These 35 paragraphs (5 work stages x 7
 * cities) carry that, and the unit page layers its own specifics on top. If you add
 * a city, you owe it 5 new paragraphs — do not template the city name into an
 * existing one.
 */
export const GROUP_CITY_ANGLE: Record<PipelineGroupSlug, Record<string, string>> = {
  'lay-and-lift': {
    jubail:
      'Lifting inside an operating Jubail plant is a congestion problem before it is a capacity problem. Pipe racks, existing services and live units restrict where a machine can stand and how far it can slew, so the governing constraint is usually radius and access rather than tonnage. Send the plot plan with the enquiry and the sizing conversation gets much shorter.',
    'ras-tanura':
      'Replacement work on the transmission network around Ras Tanura means lifting into an existing corridor, often alongside lines that stay live. Lowering-in a replacement section next to in-service pipe changes the lift plan: spacing is dictated by what you must not touch, not by what is convenient for the machines.',
    dhahran:
      'Flowline and gathering-system work around Dhahran is open-country lowering-in, which is the duty side booms were built for. Being under 30 minutes from our yard matters most here, because field work generates the short-notice equipment swaps that a 90-minute haul makes expensive.',
    dammam:
      'Around Dammam the lifting is often in a yard rather than a ditch: loading and unloading coated joints, feeding the bevelling and coating stations, and staging strings before they go to site. Coating damage is the risk that matters, which is why cradles and correct slinging get specified alongside the machine.',
    'al-khobar':
      'Al Khobar is where the machines already are. For lifting and pipe handling here we are quoting against a same-day response, and we can have somebody look at the lift before committing to a capacity — which is not something we can honestly promise anywhere else on this list.',
    abqaiq:
      'Lowering-in around Abqaiq is governed by access approval rather than by equipment. The crude stabilisation and transmission corridors are permit-controlled, and a machine that cannot get through the gate is worth nothing on paper. We place equipment against your approved access window, not against a calendar date.',
    yanbu:
      'Yanbu lifting work is planned mobilisation. The machines travel roughly 1,200 km on our own low beds, so the lead time is real and the quote reflects it. For a scheduled tie-in or a planned section replacement that is fine; for a breakdown it is not, and we will tell you so.'
  },
  'welding-and-joining': {
    jubail:
      'Jubail welding is tie-in and revamp welding inside live plant, which means short runs of joints under a permit rather than a moving string. Line-up quality still decides the repair rate, and a repair inside a shutdown window costs the window, not just the joint. That is the argument for an internal clamp even on a handful of joints.',
    'ras-tanura':
      'Tie-ins into the existing Ras Tanura network are the textbook arc blow scenario: the line in the ground has been under cathodic protection for years and carries a residual field that deflects the arc. If welders are struggling at the tie-in and not on the new pipe, the pipe is magnetised — and that is a ten-minute fix, not a welder problem.',
    dhahran:
      'Field welding on flowlines and trunklines around Dhahran is string welding, where weld rate is the number that matters and the equipment either supports it or does not. A paywelder with the right station count and an internal clamp sized to the schedule are what move joints-per-day; everything else is detail.',
    dammam:
      'Much of the welding around Dammam happens in the fabrication yards before pipe ever reaches site — spools, pre-fabricated sections and bevelled joints. Yard welding is more forgiving on logistics and less forgiving on consistency, because everything gets inspected before it ships.',
    'al-khobar':
      'For welding equipment out of Al Khobar we can get a clamp or a welding set to you the same day. On short tie-ins that is often the whole value: the equipment arrives before the permit does, rather than after it.',
    abqaiq:
      'Welding on the Abqaiq crude network is permit-controlled hot work in a hydrocarbon environment, so the sequence is decided by the permit regime as much as by the weld procedure. Cold cutting, demagnetising and internal line-up all sit upstream of the first arc, and getting them wrong pushes everything right.',
    yanbu:
      'Welding equipment for Yanbu is mobilised as a planned set rather than piecemeal. Because a forgotten item cannot be corrected with a 90-minute drive, we go through the welding scope in detail before anything is loaded.'
  },
  'bending-and-cutting': {
    jubail:
      'In an operating Jubail plant, cutting method is a permit decision. Hot work in a hydrocarbon area during a shutdown competes with every other permit on site, and the permit queue is the critical path for everyone. Cold cutting removes the ignition source and often removes the dependency, which buys schedule rather than saving on a hire rate.',
    'ras-tanura':
      'Cutting into the live gas and crude transmission system at Ras Tanura is cold cutting work by default. There is no version of this where a torch is the sensible answer, and the machine has to produce a weld-ready bevel in the same pass because the tie-in window does not allow for grinding afterwards.',
    dhahran:
      'Field bending around Dhahran follows the surveyed ditch profile, which is why bending machines mobilise before the welding spread and are released after it. Being close to our yard helps when the survey changes and the bend schedule changes with it.',
    dammam:
      'Around Dammam, bending and bevelling often happen in the yard against a fixed geometry rather than a surveyed ditch. That makes the acceptance criteria easier to hold and the inspection tighter, since everything is checked before it leaves.',
    'al-khobar':
      'Cold cutting and bevelling equipment for Al Khobar work goes out same-day from our own yard. For a small replacement section that is usually the difference between doing it this week and doing it next.',
    abqaiq:
      'Abqaiq work is overwhelmingly tie-ins and replacement sections into a live crude system, which makes cold cutting the default and the demagnetizer the item people forget. Both belong in the same enquiry, because you will need the second one about an hour after you need the first.',
    yanbu:
      'For Yanbu, bending and cutting equipment is quoted against a defined scope and mobilised as a set. Tell us the line sizes, wall thicknesses and bend schedule up front — a missing size band cannot be corrected quickly at this distance.'
  },
  'testing-and-commissioning': {
    jubail:
      'Hydrostatic testing inside a Jubail plant is usually short sections at high pressure rather than long lines at volume, and the binding constraint is often test water: sourcing it, and getting permitted disposal for it afterwards. Start the disposal approval before the test, because it is routinely slower than the test itself.',
    'ras-tanura':
      'Testing a replacement transmission section at Ras Tanura means a large volume and a long fill, so the pump is sized by fill time as much as by test pressure. A pump that reaches the pressure but takes two days to get there has cost you the window regardless.',
    dhahran:
      'Testing field lines around Dhahran means long sections, overnight holds and a crew on site through the night logging pressure and temperature. Test pump, generator and tower lights come from the same yard on the same quote, which is the practical reason to take them together.',
    dammam:
      'Around Dammam much of the pressure testing is on pre-fabricated spools and yard-built sections before shipping, which is shorter-duration hire and a different pump size from a mainline test.',
    'al-khobar':
      'Test equipment for Al Khobar work goes out the same day, and we can supply the lighting and power for the hold period at the same time rather than as a second booking.',
    abqaiq:
      'Testing on the Abqaiq network happens inside an approved access window, so the equipment has to be on site and proven before the window opens. We place test pumps early rather than on the first morning, because a pump that will not start at 6am has cost a day nobody budgeted.',
    yanbu:
      'Hydrostatic test equipment for Yanbu is planned mobilisation. Confirm the section volume and test pressure before we load, since sending the wrong pump size 1,200 km is a mistake that takes a week to correct.'
  },
  'transport-and-support': {
    jubail:
      'Moving equipment into an operating Jubail plant is a gate-pass and route problem as much as a haulage one. Vehicle passes, escort requirements and restricted in-plant routes all take longer than the 90-minute drive, so tell us the move as early as you know it.',
    'ras-tanura':
      'Access to the Ras Tanura refinery and the Juaymah terminal is controlled, and abnormal loads need route planning on top of that. We own the low beds, so at least the transport itself is not a third party with its own schedule sitting between you and your date.',
    dhahran:
      'Being under 30 minutes from Dhahran is what makes short-notice equipment swaps affordable here. On field work, the machine you need tomorrow is frequently not the machine you specified last month, and a short haul is what makes changing your mind cheap.',
    dammam:
      'Transport around Dammam is constant rather than occasional — pipe, spools and equipment moving between port, yards and site. Standing hire on a low bed with a driver usually beats per-move booking once you are relocating more than once or twice a week.',
    'al-khobar':
      'Al Khobar is the yard. Loading happens here, so for local work the transport leg is effectively zero and a boom truck can be with you within the hour on most days.',
    abqaiq:
      'Abnormal loads into the Abqaiq area need permits and, for the heavier machines, escorts. A 90 t side boom is not a load that moves on the spur of the moment, and we would rather tell you the real permit lead time at enquiry stage than discover it together on the day.',
    yanbu:
      'Yanbu is a cross-country haul of roughly 1,200 km. It is entirely routine for us on planned work and entirely unsuitable for an emergency. If the requirement is urgent, say so at the enquiry and we will be honest about whether we are the right supplier for it.'
  }
};

export function getGroupCityAngle(group: PipelineGroupSlug, citySlug: string): string | undefined {
  return GROUP_CITY_ANGLE[group]?.[citySlug];
}

/** Every unit x city combination, for generateStaticParams. */
export function getPipelineUnitCityPairs(): Array<{ slug: string; city: string }> {
  return pipelineUnits.flatMap((u) => pipelineCities.map((c) => ({ slug: u.slug, city: c.slug })));
}
