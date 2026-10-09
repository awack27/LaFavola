export const settings = {
  restaurant: {
    name: 'La Favola',
    email: 'info@lafavolajs.de',
    phone: '+49 172 4674159',
    website: 'www.lafavolajs.de',
    address: 'Eisenbahnstraße 32 A, 93049 Regensburg, Deutschland',
    instagram: '@lafavola.js',
  },
  impressum: {
    company: 'Stadler Corfariu UG (haftungsbeschränkt)',
    vatId: 'DE 000 000 000',
    managingDirector: 'Andreas Wack',
    commercialRegister: 'HRB 123456',
    responsibleForContent: 'Andreas Wack',
    supervisoryAuthority: 'zuständige Aufsichtsbehörde',
    disputeResolution: 'Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil.',
  },
  gallery: {
    // Add gallery images under this folder. They are discovered and sorted by filename.
    folder: '/src/assets/gallery',
    supportedExtensions: ['jpg', 'jpeg', 'png', 'webp'] as const,
  },
} as const;
