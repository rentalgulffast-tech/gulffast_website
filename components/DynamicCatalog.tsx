'use client';

import { useState, useMemo } from 'react';
import { EquipmentCategory } from '@/lib/equipment-categories';
import { ManpowerCategory } from '@/lib/manpower-categories';
import CategoryCard from '@/components/CategoryCard';

interface DynamicCatalogProps {
  equipmentCategories: EquipmentCategory[];
  manpowerCategories: ManpowerCategory[];
}

type CatalogTab = 'equipment' | 'manpower';

export default function DynamicCatalog({
  equipmentCategories,
  manpowerCategories,
}: DynamicCatalogProps) {
  const [activeTab, setActiveTab] = useState<CatalogTab>('equipment');
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const activeDataset = useMemo(() => {
    switch (activeTab) {
      case 'equipment':
        return { items: equipmentCategories, basePath: '/equipment', label: 'Equipment' };
      case 'manpower':
        return { items: manpowerCategories, basePath: '/manpower', label: 'Manpower' };
    }
  }, [activeTab, equipmentCategories, manpowerCategories]);

  const filteredItems = useMemo(() => {
    return activeDataset.items.filter((item) => {
      const matchesSearch =
        searchQuery === '' || item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTier = !featuredOnly || item.tier === 1;
      return matchesSearch && matchesTier;
    });
  }, [activeDataset, searchQuery, featuredOnly]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setFeaturedOnly(false);
  };

  return (
    <section className="bg-white border border-[#E2DED4] rounded-2xl p-6 sm:p-8 shadow-sm my-8">

      {/* Header & Main Catalog Control Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E2DED4]">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C0714A] bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Live Inventory Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2">
            Interactive Fleet &amp; Workforce Dispatch
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Toggle between service lines, search by category, and request immediate site quotations.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="bg-[#F0EBE3] p-1.5 rounded-2xl border border-[#E2DED4] flex items-center gap-1.5 self-start lg:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab('equipment')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'equipment'
                ? 'bg-[#0F172A] text-white shadow-md'
                : 'text-slate-700 hover:text-[#0F172A] hover:bg-white/60'
            }`}
          >
            <span>🏗️</span>
            <span>Equipment ({equipmentCategories.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('manpower')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'manpower'
                ? 'bg-[#0F172A] text-white shadow-md'
                : 'text-slate-700 hover:text-[#0F172A] hover:bg-white/60'
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
        <div className="sm:col-span-8 relative">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            Search Category
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search crane, generator, welder, rigger..."
              className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl bg-white border border-[#E2DED4] text-[#0F172A] font-medium focus:outline-none focus:ring-2 focus:ring-[#0F172A] shadow-sm"
            />
            <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Featured Toggle */}
        <div className="sm:col-span-2 flex flex-col justify-end">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            Featured Only
          </label>
          <button
            type="button"
            onClick={() => setFeaturedOnly((v) => !v)}
            className={`w-full py-2.5 rounded-xl text-xs font-bold border transition-colors ${
              featuredOnly
                ? 'bg-[#0F172A] text-white border-[#0F172A]'
                : 'bg-white text-slate-600 border-[#E2DED4]'
            }`}
          >
            {featuredOnly ? 'Featured ✓' : 'All Categories'}
          </button>
        </div>

        {/* Counter & Reset Button */}
        <div className="sm:col-span-2 flex flex-col justify-end">
          {(searchQuery || featuredOnly) ? (
            <button
              onClick={handleResetFilters}
              className="w-full py-2.5 bg-[#FFF7ED] hover:bg-[#FFEDD5] border border-[#FFEDD5] text-[#C0714A] font-bold text-xs rounded-xl transition-colors"
            >
              Reset Filters
            </button>
          ) : (
            <div className="text-right text-xs font-semibold text-slate-500">
              <span className="font-bold text-[#0F172A]">{filteredItems.length}</span> items
            </div>
          )}
        </div>

      </div>

      {/* Animated Card Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-[#F9F8F5] border border-[#E2DED4] rounded-2xl p-12 text-center my-6">
          <div className="w-12 h-12 rounded-full bg-[#F0EBE3] text-[#C0714A] flex items-center justify-center text-xl font-bold mx-auto mb-3">
            🔍
          </div>
          <h4 className="text-lg font-bold text-[#0F172A] mb-1">No Matching Items Found</h4>
          <p className="text-slate-600 text-xs mb-4 max-w-md mx-auto">
            No items in {activeDataset.label} match your filter parameters. Try clearing your search term.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 bg-[#0F172A] text-white font-bold text-xs rounded-xl hover:bg-[#C0714A] transition-colors shadow-sm"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div key={`${activeTab}-${featuredOnly}-${searchQuery}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeInScale">
          {filteredItems.map((item) => (
            <CategoryCard
              key={item.slug}
              name={item.name}
              slug={item.slug}
              tier={item.tier}
              basePath={activeDataset.basePath}
            />
          ))}
        </div>
      )}

    </section>
  );
}
