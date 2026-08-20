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
    <div className="flex flex-col overflow-hidden rounded-[10px] border border-[#DED7CB] bg-[#FAF6EF] card-hover-lift">
      <div className="relative aspect-[4/3]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${name} available for rent from GulfFast in Saudi Arabia`}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
            className="object-cover"
          />
        ) : (
          <EquipmentPlaceholder cluster={cluster} />
        )}

        {ownedCount > 0 && (
          <span className="absolute left-2.5 top-2.5 rounded bg-[#C0714A] px-2 py-1 text-[11px] font-bold tracking-wide text-white">
            GulfFast Owned
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 text-base font-bold tracking-tight text-[#2B2620]">{name}</h3>

        {specSummary && (
          <p className="mb-3 flex-1 text-[13px] leading-relaxed text-[#6B6257]">{specSummary}</p>
        )}

        <div className="mt-auto flex items-center gap-2.5 border-t border-[#DED7CB] pt-3">
          <Link
            href={`/equipment/${slug}`}
            className="text-[13px] font-semibold text-[#C0714A] hover:underline"
          >
            {cityCount > 0 ? `${cityCount} cities →` : 'View details →'}
          </Link>
          <Link
            href={`/request-a-quote?equipment=${slug}`}
            className="ml-auto rounded-md border border-[#DED7CB] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#2B2620] transition-colors hover:border-[#C0714A] hover:text-[#C0714A]"
          >
            Request
          </Link>
        </div>
      </div>
    </div>
  );
}
