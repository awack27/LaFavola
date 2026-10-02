import { useState, type FormEvent } from 'react';
import { CalendarDays, Mail, Send, Users } from 'lucide-react';
import { settings } from '@/settings';
import { useLang } from '@/LanguageContext';

export default function EventRequest() {
  const { t } = useLang();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    people: '',
    message: '',
  });
  const [error, setError] = useState('');

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError('');
  };

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.firstName || !form.lastName || !form.email || !form.people || !form.message) {
      setError(t.request.required);
      return;
    }

    const subject = `${t.request.eyebrow}: ${form.firstName} ${form.lastName}`;
    const body = [
      `${t.request.firstName}: ${form.firstName}`,
      `${t.request.lastName}: ${form.lastName}`,
      `${t.request.email}: ${form.email}`,
      `${t.request.people}: ${form.people}`,
      '',
      `${t.request.message}:`,
      form.message,
    ].join('\n');

    window.location.href = `mailto:${settings.restaurant.email}?cc=${encodeURIComponent(form.email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass = 'w-full rounded-xl border border-bronze-400/20 bg-charcoal-950/40 px-4 py-3 text-bronze-100 placeholder:text-bronze-200/30 outline-none transition-colors focus:border-bronze-400/70';

  return (
    <section id="order" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-bronze-400" />
            <span className="text-bronze-300 text-sm tracking-[0.3em] uppercase font-light">
              {t.request.eyebrow}
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-bronze-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gradient-gold mb-4">
            {t.request.title}
          </h2>
          <p className="text-bronze-200/60 max-w-2xl mx-auto">{t.request.description}</p>
        </div>

        <form
          onSubmit={submitRequest}
          className="max-w-3xl mx-auto rounded-2xl border border-bronze-400/15 bg-charcoal-900/65 backdrop-blur-sm p-6 md:p-10 shadow-bronze-glow"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <label className="block">
              <span className="block text-xs uppercase tracking-wider text-bronze-300/70 mb-2">{t.request.firstName} *</span>
              <input className={inputClass} value={form.firstName} onChange={(e) => updateField('firstName', e.target.value)} required />
            </label>
            <label className="block">
              <span className="block text-xs uppercase tracking-wider text-bronze-300/70 mb-2">{t.request.lastName} *</span>
              <input className={inputClass} value={form.lastName} onChange={(e) => updateField('lastName', e.target.value)} required />
            </label>
            <label className="block">
              <span className="block text-xs uppercase tracking-wider text-bronze-300/70 mb-2">{t.request.email} *</span>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-bronze-300/50" />
                <input type="email" className={`${inputClass} pl-11`} value={form.email} onChange={(e) => updateField('email', e.target.value)} required />
              </div>
            </label>
            <label className="block">
              <span className="block text-xs uppercase tracking-wider text-bronze-300/70 mb-2">{t.request.people} *</span>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-bronze-300/50" />
                <input type="number" min="1" className={`${inputClass} pl-11`} value={form.people} onChange={(e) => updateField('people', e.target.value)} required />
              </div>
            </label>
          </div>

          <label className="block mt-5">
            <span className="block text-xs uppercase tracking-wider text-bronze-300/70 mb-2">{t.request.message} *</span>
            <textarea
              className={`${inputClass} min-h-36 resize-y`}
              placeholder={t.request.messagePlaceholder}
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
              required
            />
          </label>

          {error && <p className="mt-4 text-sm text-red-300">{error}</p>}

          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-5">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-bronze-400 via-gold-400 to-bronze-500 px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-charcoal-950 transition-all hover:scale-[1.02] hover:shadow-bronze-glow"
            >
              <Send className="w-4 h-4" />
              {t.request.submit}
            </button>
            <p className="flex items-start gap-2 text-xs leading-relaxed text-bronze-200/40">
              <CalendarDays className="mt-0.5 w-4 h-4 shrink-0 text-bronze-300/60" />
              {t.request.mailNote}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
