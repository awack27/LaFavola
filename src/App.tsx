import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Gallery from '@/components/Gallery';
import EventRequest from '@/components/EventRequest';
import Events from '@/components/Events';
import Services from '@/components/Services';
import Ingredients from '@/components/Ingredients';
import ImpressumPage from '@/components/ImpressumPage';
import EventGalleryPage from '@/components/EventGalleryPage';
import Footer from '@/components/Footer';
import CaptchaModal, { hasCaptchaCookie } from '@/components/CaptchaModal';
import { LanguageProvider, useLang } from '@/LanguageContext';

function Site() {
  const { t } = useLang();
  const [path] = useState(window.location.pathname);
  const isImpressum = path === '/impressum';
  const [captchaOpen, setCaptchaOpen] = useState(() => !hasCaptchaCookie() || isImpressum);
  const galleryEvent = path.match(/^\/galerie\/([^/]+)$/)?.[1];
  const isGallery = path === '/galerie';
  const isHome = path === '/' || path === '';
  const page = isImpressum ? <ImpressumPage /> : galleryEvent ? <EventGalleryPage eventId={galleryEvent} /> : isGallery ? <Gallery page /> : <><Hero /><Story /><Services /><Ingredients /><Gallery /><EventRequest /><Events /></>;

  return <div className="min-h-screen bg-[#172111] bg-no-repeat bg-[length:100%_100%] text-bronze-100 overflow-x-hidden" ><div className="min-h-screen bg-charcoal-950/75"><div className="relative z-10"><Navbar /><main>{page}</main>{isHome && <Footer />}</div></div><CaptchaModal open={captchaOpen} message={isImpressum ? t.captcha.impressum : t.captcha.initial} onVerified={() => setCaptchaOpen(false)} /></div>;
}

export default function App() {
  return <LanguageProvider><Site /></LanguageProvider>;
}
