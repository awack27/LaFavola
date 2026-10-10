import gallerySettings from '../Settings/Gallery/settings.json';

const galleryModules = import.meta.glob('/Settings/Gallery/images/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export const galleryImages = Object.entries(galleryModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map(([path, src]) => ({
    src,
    name: path.split('/').pop()?.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ') ?? 'La Favola',
  }));

export const galleryFolder = gallerySettings.imageFolder;
