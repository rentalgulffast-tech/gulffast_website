import Image from 'next/image';
import Link from 'next/link';
import EquipmentPlaceholder from '@/components/EquipmentPlaceholder';
import { hasEquipmentImage, equipmentImageSrc } from '@/lib/equipment-images';

interface EquipmentCardProps {
  name: string;
  slug: string;
  cluster: string;
  specSummary?: string;
  cityCount: number;
  ownedCount: number;
}

export default function EquipmentCard({ name, slug, cluster, specSummary, cityCount, ownedCount }: EquipmentCardProps) {
  const imageSrc = hasEquipmentImage(slug) ? equipmentImageSrc(slug) : null;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-card-background shadow-[0_2px_10px_-4px_rgba(20,34,74,0.1)] card-hover-lift">
      <div className="relative aspect-[3/2] overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${name} available for rent from GulfFast in Saudi Arabia`}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(.22,.8,.3,1)] group-hover:scale-[1.09]"
          />
        ) : (
          <EquipmentPlaceholder cluster={cluster} />
        )}

        {ownedCount > 0 && (
          <span className="absolute left-3.5 top-3.5 rounded-full bg-accent-strong px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.11em] text-white">
            Owned
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-semibold tracking-tight text-primary">{name}</h3>

        {specSummary && (
          <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{specSummary}</p>
        )}

        <div className="mt-auto flex items-center border-t border-border pt-4">
          <Link
            href={`/equipment/${slug}`}
            className="text-[13px] font-bold tracking-[0.02em] text-primary"
          >
            {cityCount > 0 ? `${cityCount} cities` : 'View details'}
            <span className="ml-1.5 inline-block text-accent transition-transform duration-200 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
          <Link
            href={`/request-a-quote?equipment=${slug}`}
            className="ml-auto text-xs font-semibold text-faint transition-colors group-hover:text-accent-ink hover:text-accent-ink"
          >
            Request
          </Link>
        </div>
      </div>
    </div>
  );
}
