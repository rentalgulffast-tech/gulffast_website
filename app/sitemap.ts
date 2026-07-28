import { MetadataRoute } from 'next';
import { getEquipmentCategories, getVehicleCategories, getJobTitles, getBlogPosts } from '@/lib/data';
import { SITE_CONFIG } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/equipment-rental`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/vehicle-rental`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/manpower-supply`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/request-a-quote`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 }
  ];

  // Dynamic Equipment Category routes
  const equipmentRoutes: MetadataRoute.Sitemap = getEquipmentCategories().map((cat) => ({
    url: `${baseUrl}/equipment-rental/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85
  }));

  // Dynamic Vehicle Category routes
  const vehicleRoutes: MetadataRoute.Sitemap = getVehicleCategories().map((cat) => ({
    url: `${baseUrl}/vehicle-rental/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85
  }));

  // Dynamic Job Title / Manpower Trade routes
  const manpowerRoutes: MetadataRoute.Sitemap = getJobTitles().map((trade) => ({
    url: `${baseUrl}/manpower-supply/${trade.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85
  }));

  // Dynamic Blog Post routes
  const blogRoutes: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.75
  }));

  return [
    ...staticRoutes,
    ...equipmentRoutes,
    ...vehicleRoutes,
    ...manpowerRoutes,
    ...blogRoutes
  ];
}
