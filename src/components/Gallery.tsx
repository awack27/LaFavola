import { Image as ImageIcon } from 'lucide-react';
import { galleryImages } from '@/gallery';
import { useLang } from '@/LanguageContext';

type GalleryProps = { page?: boolean };

export default function Gallery({ page = false }: GalleryProps) {
  const { t } = useLang();
  return (
    <section id="gallery" className={`relative overflow-hidden ${page ? 'min-h-screen pt-32 pb-32' : 'py-24 md:py-32'}`}>
      <div className="relative max-w-7xl mx-auto px-6"><div className="text-center mb-12"><div className="flex items-center justify-center gap-3 mb-4"><span className="h-px w-12 bg-gradient-to-r from-transparent to-bronze-400" /><span className="text-bronze-300 text-sm tracking-[0.3em] uppercase font-light">{t.gallery.eyebrow}</span><span className="h-px w-12 bg-gradient-to-l from-transparent to-bronze-400" /></div><h1 className="font-serif text-4xl md:text-5xl font-light text-gradient-gold mb-4">{t.gallery.title}</h1><p className="text-bronze-200/50 max-w-xl mx-auto">{t.gallery.description}</p></div>{galleryImages.length > 0 ? <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{galleryImages.map((image) => <figure key={image.src} className="group relative aspect-square overflow-hidden rounded-2xl border border-bronze-400/15 bg-charcoal-900/50"><img src={image.src} alt={image.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /><figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-charcoal-950/90 to-transparent text-sm text-bronze-100 capitalize opacity-0 group-hover:opacity-100 transition-opacity">{image.name}</figcaption></figure>)}</div> : <div className="max-w-xl mx-auto rounded-2xl border border-dashed border-bronze-400/25 bg-charcoal-900/40 p-12 text-center"><ImageIcon className="w-10 h-10 mx-auto mb-4 text-bronze-300/50" strokeWidth={1.2} /><p className="text-bronze-100/70">{t.gallery.empty}</p></div>}{!page && <a href="/galerie" className="mt-8 mx-auto flex w-fit rounded-full border border-bronze-400/30 px-6 py-3 text-sm uppercase tracking-wider text-bronze-200 hover:border-bronze-400/70 hover:text-bronze-100">{t.events.gallery}</a>}</div>{page && <a href="/#order" className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 rounded-full bg-gradient-to-r from-bronze-400 via-gold-400 to-bronze-500 px-8 py-4 text-sm font-medium uppercase tracking-wider text-charcoal-950 shadow-bronze-glow">{t.gallery.request}</a>}</section>
  );
}
