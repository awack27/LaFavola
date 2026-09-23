import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLang } from '@/LanguageContext';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-bronze-400" />
            <span className="text-bronze-300 text-sm tracking-[0.3em] uppercase font-light">
              {t.hero.since}
            </span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-bronze-400" />
          </div>

          <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide mb-4 text-gradient-gold leading-none">
            {t.hero.title}
          </h1>

          <p className="font-serif text-2xl md:text-3xl text-bronze-100/90 italic font-light mb-3">
            {t.hero.subtitle}
          </p>
          <p className="text-base md:text-lg text-bronze-200/60 font-light tracking-wide mb-10 max-w-xl mx-auto">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#order"
              className="group relative px-10 py-4 overflow-hidden rounded-full bg-gradient-to-r from-bronze-400 via-gold-400 to-bronze-500 text-charcoal-950 font-medium tracking-wider uppercase text-sm transition-all duration-500 hover:shadow-bronze-glow hover:scale-105"
            >
              <span className="relative z-10">{t.hero.order}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-300 via-bronze-300 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              href="#story"
              className="px-10 py-4 rounded-full border border-bronze-400/40 text-bronze-100 font-medium tracking-wider uppercase text-sm hover:bg-bronze-400/10 hover:border-bronze-400/70 transition-all duration-500"
            >
              {t.hero.story}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#story"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-bronze-300/60 hover:text-bronze-300 transition-colors animate-bounce"
        aria-label={t.hero.scroll}
      >
        <ChevronDown className="w-8 h-8" strokeWidth={1} />
      </a>
    </section>
  );
}
