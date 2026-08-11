import { MetadataRoute } from 'next';
import { getEquipmentCategories, getEquipmentLandingPages } from '@/lib/equipment';
import { getManpowerCategories, getManpowerLandingPages } from '@/lib/manpower';
import { cities } from '@/lib/cities';
import { industries } from '@/lib/industries';
import { getBlogPosts } from '@/lib/data';
import { SITE_CONFIG } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/equipment`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/manpower`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/request-a-quote`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/legal/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/legal/terms-and-conditions`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }
  ];

  // Industry sector routes (7)
  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  // Equipment category (85) and Tier 1 keyword x city (18 x 7 = 126) routes
  const equipmentCategoryRoutes: MetadataRoute.Sitemap = getEquipmentCategories().map((cat) => ({
    url: `${baseUrl}/equipment/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85
  }));

  const equipmentCityRoutes: MetadataRoute.Sitemap = getEquipmentLandingPages().flatMap((page) =>
    cities.map((city) => ({
      url: `${baseUrl}/equipment/${page.keywordSlug}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    }))
  );

  // Manpower category (22) and Tier 1 keyword x city (13 x 7 = 91) routes
  const manpowerCategoryRoutes: MetadataRoute.Sitemap = getManpowerCategories().map((cat) => ({
    url: `${baseUrl}/manpower/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85
  }));

  const manpowerCityRoutes: MetadataRoute.Sitemap = getManpowerLandingPages().flatMap((page) =>
    cities.map((city) => ({
      url: `${baseUrl}/manpower/${page.keywordSlug}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    }))
  );

  // Blog post routes
  const blogRoutes: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.75
  }));

  return [
    ...staticRoutes,
    ...industryRoutes,
    ...equipmentCategoryRoutes,
    ...equipmentCityRoutes,
    ...manpowerCategoryRoutes,
    ...manpowerCityRoutes,
    ...blogRoutes
  ];
}
