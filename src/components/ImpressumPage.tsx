import { useEffect } from 'react';
import Impressum from '@/components/Impressum';
import { useLang } from '@/LanguageContext';

export default function ImpressumPage() {
  const { t } = useLang();
  useEffect(() => { document.title = `${t.impressum.eyebrow} · La Favola`; }, [t]);

  return (
    <main className="min-h-screen pt-24">
      <Impressum />
    </main>
  );
}
