import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { useLang } from '@/LanguageContext';
import { settings } from '@/settings';

const eventGalleryModules = import.meta.glob('/Settings/PreviousEvents/images/**/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

export default function EventGalleryPage({ eventId }: { eventId: string }) {
  const { t } = useLang();
  const event = settings.previousEvents.items.find((item) => item.id === eventId);
  const images = Object.entries(eventGalleryModules).filter(([path]) => path.toLowerCase().includes(eventId.toLowerCase())).sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  const displayImages = images.length > 0 ? images.map(([, src]) => src) : event ? [event.image] : [];

  if (!event) return <main className="min-h-screen px-6 pt-40 text-center text-bronze-100">Event nicht gefunden.</main>;

  return (
    <main className="min-h-screen px-6 pb-32 pt-32">
      <div className="mx-auto max-w-6xl">
        <a href="/#events" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-bronze-300 hover:text-bronze-100"><ArrowLeft className="h-4 w-4" /> {t.nav.events}</a>
        <div className="mt-8 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-bronze-300">{event.date}</p>
          <h1 className="mt-3 font-serif text-5xl text-gradient-gold">{event.title}</h1>
          <p className="mt-4 text-bronze-200/60">{event.description}</p>
        </div>
        {displayImages.length > 0 ? (
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
            {displayImages.map((src, index) => <img key={`${src}-${index}`} src={src} alt={`${event.title} ${index + 1}`} className="aspect-square w-full rounded-2xl object-cover" />)}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-bronze-400/20 p-12 text-center text-bronze-200/60"><ImageIcon className="mx-auto mb-4 h-10 w-10" />Noch keine Bilder vorhanden.</div>
        )}
      </div>
      <a href="/#order" className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 rounded-full bg-gradient-to-r from-bronze-400 via-gold-400 to-bronze-500 px-8 py-4 text-sm font-medium uppercase tracking-wider text-charcoal-950 shadow-bronze-glow">{t.gallery.request}</a>
    </main>
  );
}
