// Single source of truth for GulfFast's registration and certification numbers.
//
// Verified 30 August 2026 against the original documents:
//   - Ministry of Commerce Branch Registration Certificate (Gulf Fast Trading
//     Company, a branch of Technical Trade Company for Trading)
//   - ZATCA VAT Registration Certificate
//   - ISO certificates issued to Gulf Fast Trading Company by ARS Assessment
//     Private Limited under UAF accreditation
//
// Do not edit these values without checking the source certificate first.

export const CREDENTIALS = {
  crNumber: '2051256547',
  vatNumber: '311441936900003',
  unifiedNationalNumber: '7040543790'
} as const;

export interface IsoCertificate {
  standard: string;
  scope: string;
  certificateNumber: string;
}

export const ISO_CERTIFICATES: IsoCertificate[] = [
  { standard: 'ISO 9001:2015', scope: 'Quality Management', certificateNumber: '100726019607' },
  { standard: 'ISO 14001:2015', scope: 'Environmental Management', certificateNumber: '100726029608' },
  { standard: 'ISO 45001:2018', scope: 'Occupational Health & Safety', certificateNumber: '100726039609' }
];

export const ISO_CERTIFYING_BODY = 'ARS Assessment Private Limited, under UAF accreditation';
export const ISO_VALID_UNTIL = '9 July 2029';
