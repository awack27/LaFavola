export const settings = {
  restaurant: {
    name: 'La Favola',
    email: 'info@lafavolajs.de',
    phone: '+49 000 000000',
    website: 'www.lafavolajs.de',
    address: 'Deutschland',
    instagram: '@lafavola.js',
    openingHours: [
      { day: 'Montag', time: 'Geschlossen' },
      { day: 'Dienstag – Donnerstag', time: '12:00 – 22:30' },
      { day: 'Freitag – Samstag', time: '12:00 – 23:30' },
      { day: 'Sonntag', time: '12:00 – 22:00' },
    ],
  },
  impressum: {
    company: 'La Favola GmbH',
    vatId: 'DE 000 000 000',
    managingDirector: 'Marco Esposito',
    commercialRegister: 'HRB 123456',
    responsibleForContent: 'Marco Esposito',
    supervisoryAuthority: 'zuständige Aufsichtsbehörde',
    disputeResolution: 'Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil.',
  },
  gallery: {
    // Add gallery images under this folder. They are discovered and sorted by filename.
    folder: '/src/assets/gallery',
    supportedExtensions: ['jpg', 'jpeg', 'png', 'webp'] as const,
  },
} as const;
