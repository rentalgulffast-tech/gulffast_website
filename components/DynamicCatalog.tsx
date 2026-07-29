'use client';

import { useState, useMemo } from 'react';
import { CategoryItem } from '@/lib/data';
import CategoryCard from '@/components/CategoryCard';

interface DynamicCatalogProps {
  equipmentCategories: CategoryItem[];
  vehicleCategories: CategoryItem[];
  manpowerCategories: CategoryItem[];
}

type CatalogTab = 'equipment' | 'vehicle' | 'manpower';

export default function DynamicCatalog({
  equipmentCategories,
  vehicleCategories,
  manpowerCategories,
}: DynamicCatalogProps) {
  const [activeTab, setActiveTab] = useState<CatalogTab>('equipment');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');

  // Determine current active dataset and base path
  const activeDataset = useMemo(() => {
    switch (activeTab) {
      case 'equipment':
        return { items: equipmentCategories, basePath: '/equipment-rental', label: 'Equipment Rental' };
      case 'vehicle':
        return { items: vehicleCategories, basePath: '/vehicle-rental', label: 'Vehicle Rental' };
      case 'manpower':
        return { items: manpowerCategories, basePath: '/manpower-supply', label: 'Manpower Supply' };
    }
  }, [activeTab, equipmentCategories, vehicleCategories, manpowerCategories]);

  // Aggregate unique KSA cities across all datasets for universal filtering
  const allCities = useMemo(() => {
    const set = new Set<string>();
    const allItems = [...equipmentCategories, ...vehicleCategories, ...manpowerCategories];
    allItems.forEach((item) => {
      if (item.cityCoverage) {
        item.cityCoverage.forEach((city) => set.add(city));
      }
    });
    return ['All', ...Array.from(set).sort()];
  }, [equipmentCategories, vehicleCategories, manpowerCategories]);

  // Filter items in current active tab
  const filteredItems = useMemo(() => {
    return activeDataset.items.filter((item) => {
      const matchesSearch =
        searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCity =
        selectedCity === 'All' || (item.cityCoverage && item.cityCoverage.includes(selectedCity));

      return matchesSearch && matchesCity;
    });
  }, [activeDataset, searchQuery, selectedCity]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCity('All');
  };

  return (
    <section className="bg-white border border-[#E2DED4] rounded-2xl p-6 sm:p-8 shadow-sm my-8">
      
      {/* Header & Main Catalog Control Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E2DED4]">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C] bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Live Inventory Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2942] mt-2">
            Interactive Fleet &amp; Workforce Dispatch
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Toggle between service lines, filter by city or keyword, and request immediate site quotations.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="bg-[#F5F2EB] p-1.5 rounded-2xl border border-[#E2DED4] flex items-center gap-1.5 self-start lg:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab('equipment')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'equipment'
                ? 'bg-[#0F2942] text-white shadow-md'
                : 'text-slate-700 hover:text-[#0F2942] hover:bg-white/60'
            }`}
          >
            <span>🏗️</span>
            <span>Equipment ({equipmentCategories.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('vehicle')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'vehicle'
                ? 'bg-[#0F2942] text-white shadow-md'
                : 'text-slate-700 hover:text-[#0F2942] hover:bg-white/60'
            }`}
          >
            <span>🚛</span>
            <span>Vehicles ({vehicleCategories.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('manpower')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'manpower'
                ? 'bg-[#0F2942] text-white shadow-md'
                : 'text-slate-700 hover:text-[#0F2942] hover:bg-white/60'
            }`}
          >
            <span>👷</span>
            <span>Manpower ({manpowerCategories.length})</span>
          </button>
        </div>
      </div>

      {/* Interactive Filter Toolbar */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 my-6 bg-[#F9F8F5] p-4 rounded-xl border border-[#E2DED4] items-center">
        
        {/* Search Input */}
        <div className="sm:col-span-6 relative">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            Search Spec / Trade
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search generator, 60T crane, 6G welder..."
              className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl bg-white border border-[#E2DED4] text-[#0F2942] font-medium focus:outline-none focus:ring-2 focus:ring-[#0F2942] shadow-sm"
            />
            <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* KSA City Filter Dropdown */}
        <div className="sm:col-span-4">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            KSA Location Filter
          </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border border-[#E2DED4] text-[#0F2942] font-bold focus:outline-none focus:ring-2 focus:ring-[#0F2942] shadow-sm"
          >
            {allCities.map((city) => (
              <option key={city} value={city}>
                {city === 'All' ? 'All KSA Cities (Nationwide)' : `📍 ${city}`}
              </option>
            ))}
          </select>
        </div>

        {/* Counter & Reset Button */}
        <div className="sm:col-span-2 flex flex-col justify-end">
          {(searchQuery || selectedCity !== 'All') ? (
            <button
              onClick={handleResetFilters}
              className="w-full py-2.5 bg-[#FFF7ED] hover:bg-[#FFEDD5] border border-[#FFEDD5] text-[#C2410C] font-bold text-xs rounded-xl transition-colors mt-5 sm:mt-0"
            >
              Reset Filters
            </button>
          ) : (
            <div className="text-right text-xs font-semibold text-slate-500 pt-5 sm:pt-0">
              Showing <span className="font-bold text-[#0F2942]">{filteredItems.length}</span> items
            </div>
          )}
        </div>

      </div>

      {/* Active Filter Badges */}
      {(selectedCity !== 'All' || searchQuery) && (
        <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
          <span className="text-slate-500 font-medium">Active Filters:</span>
          {selectedCity !== 'All' && (
            <span className="bg-[#FFF7ED] text-[#C2410C] border border-[#FFEDD5] px-3 py-1 rounded-full font-bold">
              City: {selectedCity}
            </span>
          )}
          {searchQuery && (
            <span className="bg-[#FFF7ED] text-[#C2410C] border border-[#FFEDD5] px-3 py-1 rounded-full font-bold">
              Query: &quot;{searchQuery}&quot;
            </span>
          )}
        </div>
      )}

      {/* Animated Card Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-[#F9F8F5] border border-[#E2DED4] rounded-2xl p-12 text-center my-6">
          <div className="w-12 h-12 rounded-full bg-[#F5F2EB] text-[#C2410C] flex items-center justify-center text-xl font-bold mx-auto mb-3">
            🔍
          </div>
          <h4 className="text-lg font-bold text-[#0F2942] mb-1">No Matching Items Found</h4>
          <p className="text-slate-600 text-xs mb-4 max-w-md mx-auto">
            No items in {activeDataset.label} match your filter parameters. Try clearing your search term or choosing another city.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 bg-[#0F2942] text-white font-bold text-xs rounded-xl hover:bg-[#C2410C] transition-colors shadow-sm"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div key={`${activeTab}-${selectedCity}-${searchQuery}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeInScale">
          {filteredItems.map((item) => (
            <CategoryCard key={item.id} category={item} basePath={activeDataset.basePath} />
          ))}
        </div>
      )}

    </section>
  );
}
