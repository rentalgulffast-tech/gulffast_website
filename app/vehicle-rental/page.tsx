import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryHubWithSidebar from '@/components/CategoryHubWithSidebar';
import { getVehicleCategories } from '@/lib/data';
import { generateServiceSchema } from '@/lib/seo';

export const metadata = {
  title: 'Heavy Vehicle & Fleet Rental Services in Saudi Arabia | GulfFast',
  description: 'Heavy transport trucks, 40ft/50ft flatbed trailers, 100T lowbeds, fuel/water tankers, crew AC buses, and 4x4 double cabin pickups across Saudi Arabia.',
  alternates: {
    canonical: '/vehicle-rental'
  }
};

export default function VehicleRentalHubPage() {
  const categories = getVehicleCategories();
  const serviceSchema = generateServiceSchema(
    'Heavy Vehicle & Fleet Rental Services in Saudi Arabia',
    'Heavy transport trucks, flatbed trailers, lowbeds, fuel/water tankers, crew buses, and pickup trucks rental in Saudi Arabia.',
    '/vehicle-rental'
  );

  return (
    <div className="py-10 bg-[#F0EBE3] text-[#2B2620] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Vehicle Rental Hub', url: '/vehicle-rental' }
          ]}
        />

        <div className="my-6 border-b border-[#E2DED4] pb-6">
          <span className="text-[#C0714A] font-bold text-xs uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Heavy Transport &amp; Fleet Logistics Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
            Vehicle Fleet Rental Services in Saudi Arabia
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            GulfFast operates heavy tractor trucks, flatbeds, lowbeds, fuel tankers, and site crew buses equipped with IVMS GPS tracking and certified professional drivers for Aramco and Kingdom-wide highway operations.
          </p>
        </div>

        {/* Interactive Hub with Sidebar Filter */}
        <CategoryHubWithSidebar
          title="Vehicle Fleet Categories"
          subtitle="Filter heavy transport trucks, flatbeds, lowbeds, and buses by location."
          badgeText="MOT & IVMS Certified"
          categories={categories}
          basePath="/vehicle-rental"
        />

        {/* Informational Callout */}
        <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 text-center my-10 space-y-3 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#0F172A]">Require Over-Dimensional Highway Heavy Haulage Permits?</h2>
          <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
            Our Al Khobar transport dispatch desk manages route surveys, Ministry of Transport highway permits, and escort vehicles for heavy equipment mobilization.
          </p>
          <a
            href="tel:+966568676710"
            className="inline-block px-6 py-2.5 bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold text-xs rounded-xl transition-colors mt-2 shadow-sm"
          >
            Call Direct Transport Desk: +966 56 867 6710
          </a>
        </div>

      </div>
    </div>
  );
}
