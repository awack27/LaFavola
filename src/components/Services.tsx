import { ArrowRight } from 'lucide-react';
import { settings } from '@/settings';
import { useLang } from '@/LanguageContext';

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-bronze-400" />
            <span className="text-bronze-300 text-sm tracking-[0.3em] uppercase font-light">{t.services.eyebrow}</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-bronze-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gradient-gold mb-4">{t.services.title}</h2>
          <p className="text-bronze-200/50 max-w-xl mx-auto">{t.services.description}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {settings.services.items.map((service, index) => (
            <article key={service.id} className={`group relative overflow-hidden rounded-2xl border border-bronze-400/10 hover:border-bronze-400/30 transition-all duration-500 ${index % 2 === 1 ? 'md:mt-12' : ''}`}>
              <div className="relative h-72 overflow-hidden">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />
              </div>
              <div className="relative -mt-20 bg-gradient-to-t from-charcoal-950 to-transparent p-6">
                <h3 className="mb-3 font-serif text-2xl font-medium text-bronze-100">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-bronze-200/60">{service.description}</p>
                <a href={`/?event=${encodeURIComponent(service.requestEvent)}#order`} className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-bronze-300 hover:text-bronze-100">
                  {t.services.request}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
