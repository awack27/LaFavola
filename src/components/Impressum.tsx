import { restaurant } from '@/data';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLang } from '@/LanguageContext';

export default function Impressum() {
  const { lang, t } = useLang();

  return (
    <section id="impressum" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-bronze-400" />
            <span className="text-bronze-300 text-sm tracking-[0.3em] uppercase font-light">
              {t.impressum.eyebrow}
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-bronze-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gradient-gold">
            {t.impressum.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-charcoal-900/60 backdrop-blur-sm rounded-2xl border border-bronze-400/15 p-8">
            <h3 className="font-serif text-2xl text-bronze-100 mb-6">{t.impressum.find}</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-bronze-400/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-bronze-300" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-bronze-300/60 tracking-wider uppercase mb-1">{t.impressum.address}</div>
                  <p className="text-bronze-100/80">{restaurant.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-bronze-400/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-bronze-300" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-bronze-300/60 tracking-wider uppercase mb-1">{t.impressum.phone}</div>
                  <a href={`tel:${restaurant.phone}`} className="text-bronze-100/80 hover:text-bronze-300 transition-colors">
                    {restaurant.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-bronze-400/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-bronze-300" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-bronze-300/60 tracking-wider uppercase mb-1">{t.impressum.email}</div>
                  <a href={`mailto:${restaurant.email}`} className="text-bronze-100/80 hover:text-bronze-300 transition-colors">
                    {restaurant.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-charcoal-900/60 backdrop-blur-sm rounded-2xl border border-bronze-400/15 p-8">
            <h3 className="font-serif text-2xl text-bronze-100 mb-6">{t.impressum.hours}</h3>

            <div className="space-y-3">
              {restaurant.hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between py-2 border-b border-bronze-400/10 last:border-0">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-bronze-300/50" strokeWidth={1.5} />
                    <span className="text-bronze-100/80 text-sm">{h.day}</span>
                  </div>
                  <span className={`text-sm ${h.time === t.impressum.closed ? 'text-red-400/60' : 'text-bronze-300'}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-charcoal-900/40 backdrop-blur-sm rounded-2xl border border-bronze-400/10 p-8">
          <h3 className="font-serif text-xl text-bronze-200 mb-4">{t.impressum.legal}</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-bronze-200/40 leading-relaxed">
            <div>
              <p className="mb-2"><span className="text-bronze-300/70">{t.impressum.company}:</span> La Favola GmbH</p>
              <p className="mb-2"><span className="text-bronze-300/70">USt-IdNr.:</span> DE 000 000 000</p>
              <p className="mb-2"><span className="text-bronze-300/70">{t.impressum.director}:</span> Marco Esposito</p>
              <p><span className="text-bronze-300/70">{t.impressum.register}:</span> HRB 123456</p>
            </div>
            <div>
              <p className="mb-2"><span className="text-bronze-300/70">{t.impressum.responsible}:</span> Marco Esposito</p>
              <p className="mb-2"><span className="text-bronze-300/70">{t.impressum.authority}:</span> zuständige Aufsichtsbehörde</p>
              <p className="mb-2"><span className="text-bronze-300/70">{t.impressum.dispute}:</span> Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
