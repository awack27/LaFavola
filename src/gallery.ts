import { settings } from '@/settings';

const galleryModules = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export const galleryImages = Object.entries(galleryModules)
  .filter(([path]) => path.startsWith(settings.gallery.folder))
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map(([path, src]) => ({
    src,
    name: path.split('/').pop()?.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ') ?? 'La Favola',
  }));
