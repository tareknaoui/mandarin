import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MethodologySection from './components/MethodologySection';
import AboutCoachSection from './components/AboutCoachSection';
import PricingSection from './components/PricingSection';
import TestimonialsBookingSection from './components/TestimonialsBookingSection';
import BookPromoSection from './components/BookPromoSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background-light relative overflow-x-hidden font-display text-gray-800 selection:bg-primary/30">
      {/* Global Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-paper-texture opacity-60"></div>

      <Navbar scrolled={scrolled} />

      <main className="relative z-10">
        <HeroSection />
        <MethodologySection />
        <BookPromoSection />
        <AboutCoachSection />
        <PricingSection />
        <TestimonialsBookingSection />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Retour en haut"
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary text-white rounded-full shadow-lg
           shadow-primary/30 flex items-center justify-center transition-all duration-300
           hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-xl
           ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <span className="material-icons-round">keyboard_arrow_up</span>
      </button>
    </div>
  );
};

export default App;