import { useLang } from '@/LanguageContext';
import type { Language } from '@/translations';

function FlagDE({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 5 3" preserveAspectRatio="none" aria-label="Deutsch">
      <rect width="5" height="3" fill="#000" />
      <rect width="5" height="2" y="1" fill="#DD0000" />
      <rect width="5" height="1" y="2" fill="#FFCE00" />
    </svg>
  );
}

function FlagGB({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 30" preserveAspectRatio="none" aria-label="English">
      <clipPath id="uk-clip">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="3" clipPath="url(#uk-clip)" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  const toggle = (l: Language) => setLang(l);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => toggle('de')}
        className={`relative overflow-hidden rounded-md transition-all duration-300 ${
          lang === 'de'
            ? 'ring-2 ring-bronze-400 scale-105 shadow-bronze-glow'
            : 'ring-1 ring-bronze-400/20 opacity-50 hover:opacity-80'
        }`}
        aria-label="Deutsch"
        title="Deutsch"
      >
        <FlagDE className="w-7 h-5 block" />
      </button>
      <button
        onClick={() => toggle('en')}
        className={`relative overflow-hidden rounded-md transition-all duration-300 ${
          lang === 'en'
            ? 'ring-2 ring-bronze-400 scale-105 shadow-bronze-glow'
            : 'ring-1 ring-bronze-400/20 opacity-50 hover:opacity-80'
        }`}
        aria-label="English"
        title="English"
      >
        <FlagGB className="w-7 h-5 block" />
      </button>
    </div>
  );
}
