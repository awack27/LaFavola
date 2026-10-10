import { useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { useLang } from '@/LanguageContext';

type CaptchaModalProps = {
  open: boolean;
  message?: string;
  onVerified: () => void;
  onClose?: () => void;
};

export const captchaCookie = 'lafavola_captcha_verified';

export function hasCaptchaCookie() {
  return document.cookie.split('; ').some((cookie) => cookie.startsWith(`${captchaCookie}=`));
}

export default function CaptchaModal({ open, message, onVerified, onClose }: CaptchaModalProps) {
  const { t } = useLang();
  const [challenge] = useState(() => {
    const left = Math.floor(Math.random() * 7) + 2;
    const right = Math.floor(Math.random() * 7) + 1;
    return { left, right, result: left + right };
  });
  const [answer, setAnswer] = useState('');
  const [invalid, setInvalid] = useState(false);

  if (!open) return null;

  const verify = () => {
    if (Number(answer) !== challenge.result) {
      setInvalid(true);
      setAnswer('');
      return;
    }
    document.cookie = `${captchaCookie}=1; max-age=3600; path=/; SameSite=Lax`;
    onVerified();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal-950/85 p-6 backdrop-blur-md">
      <div className="relative w-full max-w-md rounded-2xl border border-bronze-400/25 bg-charcoal-900 p-7 shadow-bronze-glow">
        {onClose && (
          <button onClick={onClose} className="absolute right-5 top-5 text-bronze-200/50 hover:text-bronze-200" aria-label={t.captcha.close}>
            <X className="w-5 h-5" />
          </button>
        )}
        <ShieldCheck className="mb-5 h-10 w-10 text-bronze-300" strokeWidth={1.2} />
        <h2 className="font-serif text-3xl text-gradient-gold">{t.captcha.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-bronze-200/60">{message ?? t.captcha.description}</p>
        <div className="mt-6 rounded-xl border border-bronze-400/15 bg-charcoal-950/50 p-5">
          <p className="text-center font-serif text-3xl text-bronze-100">{challenge.left} + {challenge.right} = ?</p>
          <label className="mt-4 block text-xs uppercase tracking-wider text-bronze-300/70">
            {t.captcha.answer}
            <input
              type="number"
              inputMode="numeric"
              autoFocus
              value={answer}
              onChange={(event) => { setAnswer(event.target.value); setInvalid(false); }}
              onKeyDown={(event) => { if (event.key === 'Enter') verify(); }}
              className="mt-2 w-full rounded-xl border border-bronze-400/20 bg-charcoal-900 px-4 py-3 text-bronze-100 outline-none focus:border-bronze-400/70"
            />
          </label>
        </div>
        {invalid && <p className="mt-3 text-sm text-red-300">{t.captcha.invalid}</p>}
        <button onClick={verify} className="mt-5 w-full rounded-full bg-gradient-to-r from-bronze-400 via-gold-400 to-bronze-500 px-6 py-3.5 text-sm font-medium uppercase tracking-wider text-charcoal-950 hover:shadow-bronze-glow">
          {t.captcha.verify}
        </button>
      </div>
    </div>
  );
}
