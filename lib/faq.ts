import { BRAND_LEGAL_NAME } from '@/lib/brand';

export interface FaqEntry {
  question: string;
  answer: string;
  needsConfirmation?: boolean;
}

export interface FaqTopic {
  topic: string;
  slug: string;
  faqs: FaqEntry[];
}

export const faqTopics: FaqTopic[] = [
  {
    topic: 'Equipment Terms',
    slug: 'equipment-terms',
    faqs: [
      {
        question: 'Is GulfFast a direct equipment owner or an equipment broker?',
        answer: 'GulfFast is a direct rental supplier. We primarily deploy our own owned fleet, and only source through our partner network to fill gaps when a project needs more units or a category we don\'t hold ourselves — we remain the contracting party either way, not a broker passing your request to a third party.'
      },
      {
        question: 'Can I rent equipment bare, or only with an operator?',
        answer: 'Both. Equipment across our 85 categories is available as bare-rental or as operated & maintained (O&M) packages with a certified operator and mobile maintenance support included.'
      },
      {
        question: 'How do I know if a specific category is from GulfFast\'s own fleet?',
        answer: 'Every equipment category page shows an owned-fleet badge stating exactly how many units GulfFast holds in that category. Where the count is zero, the page says so plainly and the item is sourced through our partner network instead.'
      },
      // TODO: confirm answer — real minimum rental duration per category not yet provided
      {
        question: 'What is the minimum rental duration for equipment?',
        answer: 'Minimum rental terms vary by category and equipment tonnage.',
        needsConfirmation: true
      },
      {
        question: 'Does GulfFast provide equipment across all of Saudi Arabia, or only the Eastern Province?',
        answer: 'We have direct dispatch coverage in Al Khobar, Dammam, Dhahran, Jubail, Riyadh, Jeddah, and Yanbu, with Al Khobar as our operations hub. Requests outside these seven cities are handled case-by-case through our partner network.'
      },
      {
        question: 'Is rented equipment inspected before it reaches site?',
        answer: 'Yes. Equipment carries Third-Party Inspection (TPI) documentation and is checked ahead of mobilization to meet standard site safety requirements, including for Aramco and SABIC gate access.'
      },
      {
        question: 'Can I get a quote for multiple equipment categories in one request?',
        answer: 'Yes — the quote form lets you select Equipment, Manpower, or Both, and lists the specific categories or trades you need in a single submission.'
      }
    ]
  },
  {
    topic: 'Manpower Terms',
    slug: 'manpower-terms',
    faqs: [
      {
        question: 'Is GulfFast a manpower agency?',
        answer: 'No. GulfFast directly recruits, sponsors, and employs its workforce through our own job postings, referrals, and outreach — we are not a staffing agency placing workers employed by a third party. That means one accountable party for site conduct, Iqama sponsorship, and compliance.'
      },
      {
        question: 'How many manpower trades does GulfFast supply?',
        answer: 'We supply across 22 manpower categories covering 236 distinct job titles, from certified welders and riggers to safety officers, equipment operators, and site support trades.'
      },
      {
        question: 'Are your riggers and scaffolders certified?',
        answer: 'Our Rigging & Scaffolding category includes Aramco-approved and TUV-certified rigger and scaffolder job titles specifically. Certification status is called out on the category page for any trade where it applies.'
      },
      {
        question: 'Does GulfFast handle Iqama and gate pass processing for supplied manpower?',
        answer: 'Yes. As the direct employer, we manage Iqama sponsorship and support gate pass documentation for Aramco, SABIC, and similar site access requirements.'
      },
      {
        question: 'Can I request a single tradesperson, or only full crews?',
        answer: 'Both. Requests can range from a single certified trade to a full turnkey crew with camp and transport support.'
      },
      {
        question: 'What happens if a specific job title isn\'t listed on the site?',
        answer: 'Contact our workforce desk directly — the site lists our core 236 job titles, but we can confirm availability for adjacent trades on request.'
      },
      // TODO: confirm answer — real mobilization lead time not yet provided
      {
        question: 'How quickly can manpower be mobilized?',
        answer: 'Typical mobilization timelines depend on trade, quantity, and site clearance requirements.',
        needsConfirmation: true
      }
    ]
  },
  {
    topic: 'Contracts & Payment',
    slug: 'contracts-and-payment',
    faqs: [
      {
        question: 'How fast will I get a quote after submitting a request?',
        answer: 'Our sales desk targets a response within 2 business hours during working hours (Sunday–Thursday, 07:30–17:30 AST).'
      },
      {
        question: 'What contract durations are available?',
        answer: 'Flexible terms from short-term daily dispatch to monthly, annual, and multi-year contracts, for both equipment and manpower.'
      },
      // TODO: confirm answer — real payment terms (deposit %, net terms) not yet provided
      {
        question: 'What are your payment terms?',
        answer: 'Payment terms are confirmed per contract based on project scope and client account status.',
        needsConfirmation: true
      },
      {
        question: 'Is VAT included in quoted pricing?',
        answer: 'Quotes are issued in line with Saudi Arabia\'s standard VAT requirements; your formal quotation will show pricing and VAT as separate line items.'
      },
      // TODO: confirm answer — real cancellation notice period not yet provided
      {
        question: 'What is your cancellation or rescheduling policy?',
        answer: 'Cancellation and rescheduling notice periods are set out in the signed rental or supply agreement and can vary by contract.',
        needsConfirmation: true
      },
      {
        question: 'Do you offer long-term fleet leasing for large projects?',
        answer: 'Yes, we offer monthly and annual bare-lease or fully operated equipment contracts for ongoing project sites and giga-project mobilization.'
      }
    ]
  },
  {
    topic: 'Compliance & Safety',
    slug: 'compliance-and-safety',
    faqs: [
      {
        question: 'Can GulfFast mobilize to Saudi Aramco and SABIC sites?',
        answer: 'Yes. We prepare equipment and personnel to the relevant site safety instructions and support the gate pass documentation your project needs, including Third-Party Inspection records for machinery and Iqama and trade certification records for personnel. Final site access approval always rests with the site operator and the sponsoring main contractor.'
      },
      {
        question: 'What certifications back your rigger and scaffolder trades specifically?',
        answer: 'Job titles in our Rigging & Scaffolding, Painting/Coating & Blasting, QA/QC & Inspection, and Heavy Equipment Operator categories are explicitly listed as Aramco-approved or TUV-certified where that applies — check the specific category page for the exact job title.'
      },
      // TODO: confirm answer — real insurance/liability coverage details not yet provided
      {
        question: 'Does GulfFast carry general liability insurance?',
        answer: 'Insurance coverage details are confirmed as part of the signed rental or supply agreement.',
        needsConfirmation: true
      },
      {
        question: 'Who is responsible for equipment safety compliance on site — GulfFast or the client?',
        answer: 'GulfFast is responsible for delivering equipment in safe, TPI-compliant condition; the client is responsible for site-specific safety induction and ensuring equipment is operated within agreed terms, as set out in the rental agreement.'
      },
      {
        question: 'What Commercial Registration and business documentation does GulfFast hold?',
        answer: `GulfFast (${BRAND_LEGAL_NAME}) operates under Saudi Commercial Registration and VAT registration; full documentation is provided to clients as part of contracting.`
      },
      {
        question: 'How does GulfFast vet manpower before deployment?',
        answer: 'Our own recruitment process verifies trade certification, Iqama status, and, where applicable, Aramco or TUV qualification records before mobilization.'
      }
    ]
  }
];

export function getAllFaqs(): FaqEntry[] {
  return faqTopics.flatMap((t) => t.faqs);
}

export function getFeaturedFaqs(count: number = 4): FaqEntry[] {
  return getAllFaqs()
    .filter((f) => !f.needsConfirmation)
    .slice(0, count);
}
