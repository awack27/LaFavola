import { Flame, Instagram, Facebook, Twitter, Globe } from 'lucide-react';
import { settings } from '@/settings';
import { useLang } from '@/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  const homePrefix = window.location.pathname === '/' ? '' : '/';
  return (
    <footer className="relative border-t border-bronze-400/15 bg-charcoal-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href={`${homePrefix}#home`} className="flex items-center gap-3"><Flame className="w-7 h-7 text-bronze-400" strokeWidth={1.5} /><span className="font-serif text-xl text-gradient-gold tracking-wide">La Favola</span></a>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href={`${homePrefix}#home`} className="footer-link">{t.nav.home}</a>
            <a href={`${homePrefix}#story`} className="footer-link">{t.footer.story}</a>
            <a href={`${homePrefix}#gallery`} className="footer-link">{t.footer.gallery}</a>
            <a href={`${homePrefix}#events`} className="footer-link">{t.footer.events}</a>
            <a href="/impressum" className="footer-link">{t.nav.impressum}</a>
          </nav>
          <div className="flex items-center gap-4">
            {settings.restaurant.website && <a href={`https://${settings.restaurant.website}`} className="social-link" aria-label={settings.restaurant.website}><Globe className="w-4 h-4" /></a>}
            <a href={`https://instagram.com/${settings.restaurant.instagram.replace('@', '')}`} className="social-link" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="social-link" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="social-link" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-bronze-400/10 flex flex-col md:flex-row items-center justify-between gap-4"><p className="text-xs text-bronze-200/30 tracking-wider">&copy; {new Date().getFullYear()} {settings.restaurant.name}. {t.footer.rights}</p><p className="text-xs text-bronze-200/30 tracking-wider">{t.footer.crafted}</p></div>
      </div>
    </footer>
  );
}
