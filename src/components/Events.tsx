import { Calendar, ArrowRight } from 'lucide-react';
import { events } from '@/data';
import { useLang } from '@/LanguageContext';
import { eventCopy } from '@/translations';

export default function Events() {
  const { lang, t } = useLang();
  const copy = eventCopy[lang];

  return (
    <section id="events" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-bronze-400" />
            <span className="text-bronze-300 text-sm tracking-[0.3em] uppercase font-light">
              {t.events.eyebrow}
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-bronze-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gradient-gold mb-4">
            {t.events.title}
          </h2>
          <p className="text-bronze-200/50 max-w-xl mx-auto">
            {t.events.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, i) => {
            const c = copy[event.id as keyof typeof copy];
            return (
              <article
                key={event.id}
                className={`group relative overflow-hidden rounded-2xl border border-bronze-400/10 hover:border-bronze-400/30 transition-all duration-500 ${
                  i % 2 === 0 ? 'md:mt-0' : 'md:mt-12'
                }`}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={event.image}
                    alt={c?.title ?? event.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-950/80 backdrop-blur-sm border border-bronze-400/20">
                    <Calendar className="w-4 h-4 text-bronze-300" />
                    <span className="text-xs text-bronze-100 tracking-wider uppercase">
                      {c?.date ?? event.date}
                    </span>
                  </div>
                </div>

                <div className="relative -mt-20 p-6 bg-gradient-to-t from-charcoal-950 to-transparent">
                  <h3 className="font-serif text-2xl font-medium text-bronze-100 mb-3">
                    {c?.title ?? event.title}
                  </h3>
                  <p className="text-sm text-bronze-200/50 leading-relaxed mb-4">
                    {c?.description ?? event.description}
                  </p>
                  <div className="flex items-center gap-2 text-bronze-300 text-sm tracking-wider uppercase group-hover:text-bronze-200 transition-colors">
                    <span>{t.events.gallery}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
