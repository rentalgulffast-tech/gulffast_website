'use client';

import { useMemo, useState, type ReactNode } from 'react';

export interface EquipmentListItem {
  name: string;
  slug: string;
  tier: 1 | 2;
  ownedCount: number;
  cityCount: number;
  clusterName: string;
  clusterSlug: string;
}

export interface EquipmentListEntry {
  item: EquipmentListItem;
  // Pre-rendered server component — EquipmentCard reads the local filesystem
  // (via lib/equipment-images.ts) and must never be imported into this client
  // module, so the parent server component renders it and hands us the node.
  card: ReactNode;
}

interface EquipmentClusterOption {
  name: string;
  slug: string;
}

interface EquipmentExplorerProps {
  entries: EquipmentListEntry[];
  clusters: EquipmentClusterOption[];
  tier1Count: number;
  totalOwnedUnits: number;
}

export default function EquipmentExplorer({ entries, clusters, tier1Count, totalOwnedUnits }: EquipmentExplorerProps) {
  const [search, setSearch] = useState('');
  const [ownedOnly, setOwnedOnly] = useState(false);
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null);

  const searchFiltered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return entries.filter(({ item }) => {
      if (ownedOnly && item.ownedCount <= 0) return false;
      if (query && !item.name.toLowerCase().includes(query)) return false;
      return true;
    });
  }, [entries, search, ownedOnly]);

  const visibleEntries = useMemo(
    () =>
      selectedCluster
        ? searchFiltered.filter(({ item }) => item.clusterSlug === selectedCluster)
        : searchFiltered,
    [searchFiltered, selectedCluster]
  );

  const clusterCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const { item } of searchFiltered) {
      counts.set(item.clusterSlug, (counts.get(item.clusterSlug) ?? 0) + 1);
    }
    return counts;
  }, [searchFiltered]);

  const groupedByCluster = useMemo(() => {
    const groups = new Map<string, EquipmentListEntry[]>();
    for (const entry of visibleEntries) {
      const list = groups.get(entry.item.clusterSlug) ?? [];
      list.push(entry);
      groups.set(entry.item.clusterSlug, list);
    }
    for (const list of groups.values()) {
      list.sort((a, b) => a.item.tier - b.item.tier);
    }
    return clusters
      .map((cluster) => ({ cluster, entries: groups.get(cluster.slug) ?? [] }))
      .filter((group) => group.entries.length > 0);
  }, [visibleEntries, clusters]);

  const ownedShown = visibleEntries.filter(({ item }) => item.ownedCount > 0).length;

  return (
    <div className="grid grid-cols-1 gap-9 pb-16 lg:grid-cols-[236px_1fr]">
      <aside>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search equipment…"
          className="mb-6 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
        />

        <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted">Categories</h3>
        <ul className="mb-6 text-sm">
          <li>
            <button
              type="button"
              onClick={() => setSelectedCluster(null)}
              className={`flex w-full items-center justify-between border-b border-transparent py-1.5 text-left ${
                selectedCluster === null ? 'font-semibold text-primary' : 'text-muted hover:text-primary'
              }`}
            >
              <span>All equipment</span>
              <span className="text-xs text-muted">{searchFiltered.length}</span>
            </button>
          </li>
          {clusters.map((cluster) => (
            <li key={cluster.slug}>
              <button
                type="button"
                onClick={() => setSelectedCluster(cluster.slug)}
                className={`flex w-full items-center justify-between border-b border-transparent py-1.5 text-left ${
                  selectedCluster === cluster.slug ? 'font-semibold text-primary' : 'text-muted hover:text-primary'
                }`}
              >
                <span>{cluster.name}</span>
                <span className="text-xs text-muted">{clusterCounts.get(cluster.slug) ?? 0}</span>
              </button>
            </li>
          ))}
        </ul>

        <label className="flex items-start gap-2.5 rounded-lg border border-border bg-card-background p-3 text-[13px]">
          <input
            type="checkbox"
            checked={ownedOnly}
            onChange={(e) => setOwnedOnly(e.target.checked)}
            className="mt-0.5"
          />
          <span>
            <span className="block font-bold text-foreground">GulfFast-owned only</span>
            <span className="text-xs leading-relaxed text-muted">
              {`Show only the ${totalOwnedUnits} units we own and dispatch ourselves`}
            </span>
          </span>
        </label>
      </aside>

      <main>
        <div className="mb-4 flex items-baseline">
          <div className="text-sm text-muted">
            {`${tier1Count} primary categories · ${totalOwnedUnits} owned units`}
            {(search.trim() || ownedOnly || selectedCluster) &&
              ` · ${visibleEntries.length} shown${ownedOnly ? ` (${ownedShown} owned)` : ''}`}
          </div>
        </div>

        {groupedByCluster.length === 0 && (
          <div className="rounded-2xl border border-border bg-white p-8 text-center text-sm text-muted">
            No equipment matches your search.
          </div>
        )}

        {groupedByCluster.map(({ cluster, entries: clusterEntries }) => (
          <section key={cluster.slug} className="mb-9">
            <h2 className="mb-4 border-b border-border pb-2 text-[13px] font-bold uppercase tracking-wider text-muted">
              {cluster.name}
            </h2>
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {clusterEntries.map(({ item, card }) => (
                <div key={item.slug}>{card}</div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
