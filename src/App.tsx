import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Events from '@/components/Events';
import Impressum from '@/components/Impressum';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen text-bronze-100 overflow-x-hidden">
        {/* Fixed background image */}
        <div className="fixed inset-0 z-0">
          <img
            src="/images/LaFavola.jpeg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        {/* Dark overlay for readability */}
        <div className="fixed inset-0 z-0 bg-charcoal-950/80" />

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Story />
            <div id="order" />
            <Menu />
            <Events />
            <Impressum />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
