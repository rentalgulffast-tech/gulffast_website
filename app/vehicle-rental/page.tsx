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
    <div className="py-10 bg-[#F5F2EB] text-[#1E293B] min-h-screen">
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
          <span className="text-[#C2410C] font-bold text-xs uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Transport Logistics Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] mt-2">
            Heavy Vehicle &amp; Transport Fleet in Saudi Arabia
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            GulfFast operates a modern heavy logistics transport fleet fitted with IVMS GPS tracking, speed governors, and site access clearance for Saudi Aramco, SABIC, SEC, and major construction projects in KSA.
          </p>
        </div>

        {/* Category Hub with Sidebar Filter */}
        <CategoryHubWithSidebar
          title="Heavy Vehicle Categories"
          subtitle="Filter heavy transport trucks, lowbeds, trailers, tankers, and crew buses."
          badgeText="IVMS Equipped"
          categories={categories}
          basePath="/vehicle-rental"
        />

        {/* Callout */}
        <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 text-center my-10 space-y-3 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#0F2942]">Require Over-Dimensional Highway Heavy Haulage Permits?</h2>
          <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
            Our logistics desk handles Ministry of Transport overload permits, police escort planning, and site gate passes for heavy machinery transport.
          </p>
          <a
            href="tel:+966568676710"
            className="inline-block px-6 py-2.5 bg-[#0F2942] hover:bg-[#C2410C] text-white font-bold text-xs rounded-xl transition-colors mt-2 shadow-sm"
          >
            Call Transport Desk: +966 56 867 6710
          </a>
        </div>

      </div>
    </div>
  );
}
