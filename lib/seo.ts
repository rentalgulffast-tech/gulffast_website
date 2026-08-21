export const SITE_CONFIG = {
  name: 'GulfFast Rentals & Manpower',
  companyLegal: 'GulfFast Trading & Industrial Supply',
  parentDomain: 'https://www.gulffast.co',
  url: 'https://rental.gulffast.co',
  phoneNumbers: ['+966 56 867 6710', '+966 53 832 1732'],
  email: 'sales@gulffast.co',
  foundingYear: '1999',
  address: {
    street: 'Building No.6623, Prince Abdulmohsin Ibn Abdulaziz Street, Madinat Al Ummal Dist.',
    city: 'Al Khobar',
    region: 'Eastern Province',
    postalCode: '34442',
    country: 'SA'
  },
  geoCoordinates: {
    latitude: 26.2842,
    longitude: 50.2083
  }
};

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.companyLegal,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.svg`,
    sameAs: [SITE_CONFIG.parentDomain],
    foundingDate: SITE_CONFIG.foundingYear,
    contactPoint: SITE_CONFIG.phoneNumbers.map((phone) => ({
      '@type': 'ContactPoint',
      telephone: phone,
      contactType: 'sales',
      areaServed: 'SA',
      availableLanguage: ['English', 'Arabic']
    }))
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/logo.svg`,
    telephone: SITE_CONFIG.phoneNumbers[0],
    email: SITE_CONFIG.email,
    url: SITE_CONFIG.url,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geoCoordinates.latitude,
      longitude: SITE_CONFIG.geoCoordinates.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '07:30',
        closes: '17:30'
      }
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Eastern Province, Saudi Arabia' },
      { '@type': 'AdministrativeArea', name: 'Riyadh Region, Saudi Arabia' },
      { '@type': 'AdministrativeArea', name: 'Western Province, Saudi Arabia' }
    ]
  };
}

export function generateServiceSchema(title: string, description: string, urlPath: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phoneNumbers[0],
      email: SITE_CONFIG.email
    },
    areaServed: {
      '@type': 'Country',
      name: 'Saudi Arabia'
    },
    url: `${SITE_CONFIG.url}${urlPath}`
  };
}

export function generateFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`
    }))
  };
}
