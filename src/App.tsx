import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Gallery from '@/components/Gallery';
import EventRequest from '@/components/EventRequest';
import Events from '@/components/Events';
import Impressum from '@/components/Impressum';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div
        className="min-h-screen bg-[#172111] bg-no-repeat bg-[length:100%_100%] text-bronze-100 overflow-x-hidden"
        style={{ backgroundImage: "url('/images/LaFavola.jpeg')" }}
      >
        <div className="min-h-screen bg-charcoal-950/75">
          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <Story />
              <Gallery />
              <EventRequest />
              <Events />
              <Impressum />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}
