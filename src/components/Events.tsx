import { Calendar, ArrowRight } from 'lucide-react';
import { settings } from '@/settings';
import { useLang } from '@/LanguageContext';

export default function Events() {
  const { t } = useLang();
  return (
    <section id="events" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14"><div className="flex items-center justify-center gap-3 mb-4"><span className="h-px w-12 bg-gradient-to-r from-transparent to-bronze-400" /><span className="text-bronze-300 text-sm tracking-[0.3em] uppercase font-light">{t.events.eyebrow}</span><span className="h-px w-12 bg-gradient-to-l from-transparent to-bronze-400" /></div><h2 className="font-serif text-4xl md:text-5xl font-light text-gradient-gold mb-4">{settings.previousEvents.title}</h2><p className="text-bronze-200/50 max-w-xl mx-auto">{settings.previousEvents.description}</p></div>
        <div className="grid md:grid-cols-2 gap-8">{settings.previousEvents.items.map((event, i) => <article key={event.id} className={`group relative overflow-hidden rounded-2xl border border-bronze-400/10 hover:border-bronze-400/30 transition-all duration-500 ${i % 2 === 1 ? 'md:mt-12' : ''}`}><div className="relative h-72 overflow-hidden"><img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" /><div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-950/80 backdrop-blur-sm border border-bronze-400/20"><Calendar className="w-4 h-4 text-bronze-300" /><span className="text-xs text-bronze-100 tracking-wider uppercase">{event.date}</span></div></div><div className="relative -mt-20 p-6 bg-gradient-to-t from-charcoal-950 to-transparent"><h3 className="font-serif text-2xl font-medium text-bronze-100 mb-3">{event.title}</h3><p className="text-sm text-bronze-200/50 leading-relaxed mb-4">{event.description}</p><a href={`/galerie/${event.id}`} className="inline-flex items-center gap-2 text-bronze-300 text-sm tracking-wider uppercase hover:text-bronze-100">{t.events.gallery}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></a></div></article>)}</div>
      </div>
    </section>
  );
}
