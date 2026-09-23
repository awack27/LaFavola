import { heroImages } from '@/data';
import { useLang } from '@/LanguageContext';

export default function Story() {
  const { t } = useLang();

  return (
    <section id="story" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImages.dough}
                alt="Pizza maker stretching dough"
                className="w-full h-[500px] object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-bronze-400/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold-400/20 rounded-2xl -z-10" />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gradient-to-r from-bronze-400 to-transparent" />
              <span className="text-bronze-300 text-sm tracking-[0.3em] uppercase font-light">
                {t.story.eyebrow}
              </span>
            </div>

            <h2
              className="font-serif text-4xl md:text-5xl font-light text-gradient-bronze mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: t.story.title }}
            />

            <div className="space-y-4 text-bronze-100/70 text-base leading-relaxed">
              {t.story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <div className="font-serif text-4xl text-gradient-gold font-light">90s</div>
                <div className="text-xs text-bronze-300/60 tracking-wider uppercase mt-1">{t.story.oven}</div>
              </div>
              <div className="w-px h-12 bg-bronze-400/20" />
              <div className="text-center">
                <div className="font-serif text-4xl text-gradient-gold font-light">24h</div>
                <div className="text-xs text-bronze-300/60 tracking-wider uppercase mt-1">{t.story.rest}</div>
              </div>
              <div className="w-px h-12 bg-bronze-400/20" />
              <div className="text-center">
                <div className="font-serif text-4xl text-gradient-gold font-light">485&deg;</div>
                <div className="text-xs text-bronze-300/60 tracking-wider uppercase mt-1">{t.story.heat}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
