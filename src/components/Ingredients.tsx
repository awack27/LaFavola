import { settings } from '@/settings';
import { useLang } from '@/LanguageContext';

export default function Ingredients() {
  const { t } = useLang();
  return (
    <section id="ingredients" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4"><span className="h-px w-12 bg-gradient-to-r from-transparent to-bronze-400" /><span className="text-bronze-300 text-sm tracking-[0.3em] uppercase font-light">{t.ingredients.eyebrow}</span><span className="h-px w-12 bg-gradient-to-l from-transparent to-bronze-400" /></div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gradient-gold mb-4">{t.ingredients.title}</h2>
          <p className="text-bronze-200/50 max-w-xl mx-auto">{t.ingredients.description}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">{settings.ingredients.items.map((ingredient) => <article key={ingredient.id} className="group overflow-hidden rounded-2xl border border-bronze-400/15 bg-charcoal-900/50"><div className="aspect-square overflow-hidden"><img src={ingredient.image} alt={ingredient.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" /></div><div className="p-5"><h3 className="font-serif text-xl text-bronze-100">{ingredient.title}</h3><p className="mt-2 text-sm leading-relaxed text-bronze-200/50">{ingredient.description}</p></div></article>)}</div>
      </div>
    </section>
  );
}
