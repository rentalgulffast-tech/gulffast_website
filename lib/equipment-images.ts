import fs from 'node:fs';
import path from 'node:path';

const EQUIPMENT_IMAGE_DIR = path.join(process.cwd(), 'public', 'equipment');
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

function readEquipmentImageMap(): Map<string, string> {
  const map = new Map<string, string>();
  let files: string[] = [];

  try {
    files = fs.readdirSync(EQUIPMENT_IMAGE_DIR);
  } catch {
    return map;
  }

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!SUPPORTED_EXTENSIONS.includes(ext)) continue;
    const slug = file.slice(0, -ext.length);
    if (!map.has(slug)) {
      map.set(slug, `/equipment/${file}`);
    }
  }

  return map;
}

// Read once at module load — the file list doesn't change while the server is running.
const equipmentImageMap = readEquipmentImageMap();

export function hasEquipmentImage(slug: string): boolean {
  return equipmentImageMap.has(slug);
}

export function equipmentImageSrc(slug: string): string | null {
  return equipmentImageMap.get(slug) ?? null;
}
