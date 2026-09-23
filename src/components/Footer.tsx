import { Flame, Instagram, Facebook, Twitter, Globe } from 'lucide-react';
import { restaurant } from '@/data';
import { useLang } from '@/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative border-t border-bronze-400/15 bg-charcoal-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Flame className="w-7 h-7 text-bronze-400" strokeWidth={1.5} />
            <span className="font-serif text-xl text-gradient-gold tracking-wide">
              La Favola
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#home" className="text-bronze-200/50 hover:text-bronze-300 transition-colors tracking-wider uppercase">{t.nav.home}</a>
            <a href="#story" className="text-bronze-200/50 hover:text-bronze-300 transition-colors tracking-wider uppercase">{t.footer.story}</a>
            <a href="#menu" className="text-bronze-200/50 hover:text-bronze-300 transition-colors tracking-wider uppercase">{t.footer.menu}</a>
            <a href="#events" className="text-bronze-200/50 hover:text-bronze-300 transition-colors tracking-wider uppercase">{t.footer.events}</a>
            <a href="#impressum" className="text-bronze-200/50 hover:text-bronze-300 transition-colors tracking-wider uppercase">{t.nav.impressum}</a>
          </nav>

          <div className="flex items-center gap-4">
            {restaurant.website && (
              <a
                href={`https://${restaurant.website}`}
                className="w-10 h-10 rounded-full border border-bronze-400/20 flex items-center justify-center text-bronze-300/60 hover:text-bronze-300 hover:border-bronze-400/50 hover:bg-bronze-400/10 transition-all duration-300"
                aria-label={restaurant.website}
                title={restaurant.website}
              >
                <Globe className="w-4 h-4" strokeWidth={1.5} />
              </a>
            )}
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-bronze-400/20 flex items-center justify-center text-bronze-300/60 hover:text-bronze-300 hover:border-bronze-400/50 hover:bg-bronze-400/10 transition-all duration-300"
                aria-label={t.footer.social}
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-bronze-400/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-bronze-200/30 tracking-wider">
            &copy; {new Date().getFullYear()} {restaurant.name}. {t.footer.rights}
          </p>
          <p className="text-xs text-bronze-200/30 tracking-wider">
            {t.footer.crafted}
          </p>
        </div>
      </div>
    </footer>
  );
}
