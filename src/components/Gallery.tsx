import { Image as ImageIcon } from 'lucide-react';
import { galleryImages } from '@/gallery';
import { useLang } from '@/LanguageContext';

export default function Gallery() {
  const { lang, t } = useLang();

  return (
    <section id="menu" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-bronze-400" />
            <span className="text-bronze-300 text-sm tracking-[0.3em] uppercase font-light">
              {t.menu.eyebrow}
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-bronze-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gradient-gold mb-4">
            {t.menu.title}
          </h2>
          <p className="text-bronze-200/50 max-w-xl mx-auto">{t.menu.description}</p>
        </div>

        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-bronze-400/15 bg-charcoal-900/50"
              >
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-charcoal-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <figcaption className="text-sm text-bronze-100 capitalize">{image.name}</figcaption>
                </div>
              </figure>
            ))}
          </div>
        ) : (
          <div className="max-w-xl mx-auto rounded-2xl border border-dashed border-bronze-400/25 bg-charcoal-900/40 backdrop-blur-sm p-12 text-center">
            <ImageIcon className="w-10 h-10 mx-auto mb-4 text-bronze-300/50" strokeWidth={1.2} />
            <p className="text-bronze-100/70">
              {lang === 'de'
                ? 'Sobald Bilder im eingestellten Galerieordner liegen, werden sie hier alphabetisch angezeigt.'
                : 'Images added to the configured gallery folder will appear here in alphabetical order.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
