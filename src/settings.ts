export const settings = {
  restaurant: {
    name: 'La Favola',
    email: 'info@service.de',
    phone: '+49 172 12345678',
    website: 'www.lafavolajs.de',
    address: 'Musterstraße 22, 00000 Musterstadt, Deutschland',
    instagram: '@lafavola.js',
    openingHours: [
      { day: 'Montag - Sonntag', time: 'nach Absprache' },
    ],
  },
  impressum: {
    company: 'Max Mustermann GmbH',
    vatId: 'DE 000 000 000',
    managingDirector: 'Max Mustermann',
    commercialRegister: 'HRB 123456',
    responsibleForContent: 'Max Mustermann',
    supervisoryAuthority: 'zuständige Aufsichtsbehörde',
    disputeResolution: 'Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil.',
  },
  gallery: {
    // Add gallery images under this folder. They are discovered and sorted by filename.
    folder: '/src/assets/gallery',
    supportedExtensions: ['jpg', 'jpeg', 'png', 'webp'] as const,
  },
} as const;
