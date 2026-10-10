import { useEffect, useState, type FormEvent } from 'react';
import { CalendarDays, Mail, Send, Users } from 'lucide-react';
import { settings } from '@/settings';
import { useLang } from '@/LanguageContext';
import CaptchaModal from '@/components/CaptchaModal';

type RequestForm = {
  firstName: string;
  lastName: string;
  email: string;
  people: string;
  event: string;
  customEvent: string;
  message: string;
  website: string;
};

export default function EventRequest() {
  const { t } = useLang();
  const [form, setForm] = useState<RequestForm>({ firstName: '', lastName: '', email: '', people: '', event: '', customEvent: '', message: '', website: '' });
  const [error, setError] = useState('');
  const [captchaOpen, setCaptchaOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const selectedEvent = new URLSearchParams(window.location.search).get('event');
    if (selectedEvent) setForm((current) => ({ ...current, event: selectedEvent }));
  }, []);

  const updateField = (field: keyof RequestForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError('');
  };

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.people || !form.event || (form.event === t.request.customEvent && !form.customEvent) || !form.message) {
      setError(t.request.required);
      return;
    }
    setCaptchaOpen(true);
  };

  const sendRequest = async () => {
    setCaptchaOpen(false);
    setSending(true);
    setError('');
    const selectedEvent = form.event === t.request.customEvent ? form.customEvent : form.event;

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-event-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', apikey: import.meta.env.VITE_SUPABASE_ANON_KEY },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          people: Number(form.people),
          event: selectedEvent,
          message: form.message,
          website: form.website,
        }),
      });
      if (!response.ok) throw new Error('request_failed');
      setSent(true);
      setForm({ firstName: '', lastName: '', email: '', people: '', event: '', customEvent: '', message: '', website: '' });
    } catch {
      setError(t.request.error);
    } finally {
      setSending(false);
    }
  };

  const inputClass = 'w-full rounded-xl border border-bronze-400/20 bg-charcoal-950/40 px-4 py-3 text-bronze-100 placeholder:text-bronze-200/30 outline-none transition-colors focus:border-bronze-400/70';

  return (
    <section id="order" className="relative py-24 md:py-32 overflow-hidden">
      <CaptchaModal open={captchaOpen} message={t.request.captcha} onVerified={sendRequest} onClose={() => setCaptchaOpen(false)} />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4"><span className="h-px w-12 bg-gradient-to-r from-transparent to-bronze-400" /><span className="text-bronze-300 text-sm tracking-[0.3em] uppercase font-light">{t.request.eyebrow}</span><span className="h-px w-12 bg-gradient-to-l from-transparent to-bronze-400" /></div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gradient-gold mb-4">{t.request.title}</h2>
          <p className="text-bronze-200/60 max-w-2xl mx-auto">{t.request.description}</p>
        </div>

        {sent ? (
          <div className="mx-auto max-w-3xl rounded-2xl border border-bronze-400/20 bg-charcoal-900/70 p-12 text-center shadow-bronze-glow">
            <Send className="mx-auto mb-5 h-10 w-10 text-bronze-300" strokeWidth={1.2} />
            <h3 className="font-serif text-3xl text-gradient-gold">{t.request.successTitle}</h3>
            <p className="mt-3 text-bronze-200/60">{t.request.successText}</p>
          </div>
        ) : (
          <form onSubmit={submitRequest} className="max-w-3xl mx-auto rounded-2xl border border-bronze-400/15 bg-charcoal-900/65 backdrop-blur-sm p-6 md:p-10 shadow-bronze-glow">
            <div className="grid md:grid-cols-2 gap-5">
              <label className="block"><span className="field-label">{t.request.firstName} *</span><input className={inputClass} value={form.firstName} onChange={(e) => updateField('firstName', e.target.value)} required /></label>
              <label className="block"><span className="field-label">{t.request.lastName} *</span><input className={inputClass} value={form.lastName} onChange={(e) => updateField('lastName', e.target.value)} required /></label>
              <label className="block"><span className="field-label">{t.request.email} *</span><div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-bronze-300/50" /><input type="email" className={`${inputClass} pl-11`} value={form.email} onChange={(e) => updateField('email', e.target.value)} required /></div></label>
              <label className="block"><span className="field-label">{t.request.people} *</span><div className="relative"><Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-bronze-300/50" /><input type="number" min="1" className={`${inputClass} pl-11`} value={form.people} onChange={(e) => updateField('people', e.target.value)} required /></div></label>
              <label className="block md:col-span-2"><span className="field-label">{t.request.event} *</span><select className={inputClass} value={form.event} onChange={(e) => updateField('event', e.target.value)} required><option value="">—</option>{settings.request.eventOptions.map((option) => <option key={option} value={option}>{option}</option>)}<option value={t.request.customEvent}>{t.request.customEvent}</option></select></label>
              {form.event === t.request.customEvent && <label className="block md:col-span-2"><span className="field-label">{t.request.customEvent} *</span><input className={inputClass} placeholder={t.request.customPlaceholder} value={form.customEvent} onChange={(e) => updateField('customEvent', e.target.value)} required /></label>}
            </div>
            <label className="block mt-5"><span className="field-label">{t.request.message} *</span><textarea className={`${inputClass} min-h-36 resize-y`} placeholder={t.request.messagePlaceholder} value={form.message} onChange={(e) => updateField('message', e.target.value)} required /></label>
            <input tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-10000px] h-px w-px opacity-0" value={form.website} onChange={(e) => updateField('website', e.target.value)} />
            {error && <p className="mt-4 text-sm text-red-300">{error}</p>}
            <div className="mt-6 flex flex-col md:flex-row md:items-center gap-5"><button type="submit" disabled={sending} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-bronze-400 via-gold-400 to-bronze-500 px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-charcoal-950 transition-all hover:scale-[1.02] hover:shadow-bronze-glow disabled:cursor-wait disabled:opacity-60"><Send className="w-4 h-4" />{sending ? t.request.sending : t.request.submit}</button><p className="flex items-start gap-2 text-xs leading-relaxed text-bronze-200/40"><CalendarDays className="mt-0.5 w-4 h-4 shrink-0 text-bronze-300/60" />{t.request.mailNote}</p></div>
          </form>
        )}
      </div>
    </section>
  );
}
