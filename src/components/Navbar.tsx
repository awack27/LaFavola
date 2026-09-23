import { useEffect, useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { useLang } from '@/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.story, href: '#story' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.events, href: '#events' },
    { label: t.nav.impressum, href: '#impressum' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-950/95 backdrop-blur-md py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <Flame
              className="w-8 h-8 text-bronze-400 transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1.5}
            />
            <div className="absolute inset-0 blur-md text-bronze-400 opacity-40">
              <Flame className="w-8 h-8" strokeWidth={1.5} />
            </div>
          </div>
          <span className="font-serif text-2xl font-medium tracking-wide text-gradient-gold whitespace-nowrap">
            La Favola
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium tracking-wider uppercase text-bronze-100/80 hover:text-bronze-300 transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-bronze-400 to-gold-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#order"
            className="relative px-6 py-2.5 text-sm font-medium tracking-wider uppercase text-charcoal-950 bg-gradient-to-r from-bronze-300 via-gold-300 to-bronze-400 rounded-full hover:shadow-bronze-glow transition-all duration-300 hover:scale-105"
          >
            {t.nav.order}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-bronze-200 p-1"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-4 pb-6 flex flex-col gap-4 bg-charcoal-950/98 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-wider uppercase text-bronze-100/80 hover:text-bronze-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={() => setOpen(false)}
            className="text-center px-6 py-2.5 text-sm font-medium tracking-wider uppercase text-charcoal-950 bg-gradient-to-r from-bronze-300 via-gold-300 to-bronze-400 rounded-full"
          >
            {t.nav.order}
          </a>
        </div>
      </div>
    </header>
  );
}
