'use client';

import { useState, useMemo } from 'react';
import { CategoryItem } from '@/lib/data';
import CategoryCard from '@/components/CategoryCard';

interface CategoryHubWithSidebarProps {
  title: string;
  subtitle: string;
  badgeText: string;
  categories: CategoryItem[];
  basePath: string; // e.g. '/equipment-rental', '/vehicle-rental', '/manpower-supply'
}

export default function CategoryHubWithSidebar({
  title,
  subtitle,
  badgeText,
  categories,
  basePath,
}: CategoryHubWithSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');

  // Extract unique cities across all categories
  const citiesList = useMemo(() => {
    const set = new Set<string>();
    categories.forEach((cat) => {
      if (cat.cityCoverage) {
        cat.cityCoverage.forEach((city) => set.add(city));
      }
    });
    return ['All', ...Array.from(set).sort()];
  }, [categories]);

  // Filter logic
  const filteredCategories = useMemo(() => {
    return categories.filter((cat) => {
      // Search match
      const matchesSearch =
        searchQuery === '' ||
        cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.shortSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchQuery.toLowerCase());

      // City match
      const matchesCity =
        selectedCity === 'All' || (cat.cityCoverage && cat.cityCoverage.includes(selectedCity));

      return matchesSearch && matchesCity;
    });
  }, [categories, searchQuery, selectedCity]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCity('All');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
      {/* Sidebar Filter Panel */}
      <aside className="lg:col-span-3 space-y-6">
        <div className="bg-white border border-[#E2DED4] rounded-2xl p-5 shadow-sm sticky top-28">
          <div className="flex items-center justify-between pb-3 border-b border-[#E2DED4] mb-4">
            <h3 className="font-extrabold text-[#0F2942] text-xs uppercase tracking-wider">
              Category Filters
            </h3>
            {(searchQuery || selectedCity !== 'All') && (
              <button
                onClick={handleReset}
                className="text-[11px] font-bold text-[#C2410C] hover:underline"
              >
                Reset All
              </button>
            )}
          </div>

          {/* Keyword Search Input */}
          <div className="space-y-1.5 mb-5">
            <label className="block text-xs font-bold text-[#0F2942]">Search Category / Spec</label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search generator, crane, welder..."
                className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-[#F9F8F5] border border-[#E2DED4] text-[#0F2942] font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F2942]"
              />
              <svg className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Filter by City */}
          <div className="space-y-1.5 mb-5">
            <label className="block text-xs font-bold text-[#0F2942]">Filter by KSA City</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl bg-[#F9F8F5] border border-[#E2DED4] text-[#0F2942] font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F2942]"
            >
              {citiesList.map((city) => (
                <option key={city} value={city}>
                  {city === 'All' ? 'All KSA Cities' : city}
                </option>
              ))}
            </select>
          </div>

          {/* Compliance Info box */}
          <div className="pt-4 border-t border-[#E2DED4] text-[11px] text-slate-600 space-y-1 font-medium">
            <p className="font-bold text-[#0F2942]">✓ Saudi Aramco Approved</p>
            <p>All items listed are available for direct mobilization from our Al Khobar operations hub.</p>
          </div>
        </div>
      </aside>

      {/* Main Grid View */}
      <main className="lg:col-span-9">
        <div className="flex items-center justify-between pb-4 border-b border-[#E2DED4] mb-6">
          <p className="text-xs text-slate-600 font-medium">
            Showing <strong className="text-[#0F2942]">{filteredCategories.length}</strong> of{' '}
            <strong className="text-[#0F2942]">{categories.length}</strong> categories
          </p>
          {(selectedCity !== 'All' || searchQuery) && (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-medium">Active Filters:</span>
              {selectedCity !== 'All' && (
                <span className="bg-[#FFF7ED] text-[#C2410C] px-2.5 py-0.5 rounded-full border border-[#FFEDD5] font-bold">
                  City: {selectedCity}
                </span>
              )}
            </div>
          )}
        </div>

        {filteredCategories.length === 0 ? (
          <div className="bg-white border border-[#E2DED4] rounded-2xl p-12 text-center my-6">
            <h4 className="text-lg font-bold text-[#0F2942] mb-2">No Matching Categories Found</h4>
            <p className="text-slate-600 text-xs mb-4">
              Try adjusting your search query or city filter options.
            </p>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-[#0F2942] text-white font-bold text-xs rounded-xl hover:bg-[#C2410C] transition-colors shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeInScale">
            {filteredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} basePath={basePath} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
