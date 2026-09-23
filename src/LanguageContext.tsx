import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Language, type Copy } from '@/translations';

type LangContextValue = {
  lang: Language;
  setLang: (l: Language) => void;
  t: Copy;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('de');
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
