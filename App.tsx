
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ConsequencesSection } from './components/ConsequencesSection';
import { SolutionSection } from './components/SolutionSection';
import { PricingSection } from './components/PricingSection';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ExitIntentPopup, ScrollTriggeredPopup, TimedPopup, ContactFormPopup } from './components/Popups';
import { ContactSection } from './components/ContactSection';

const App: React.FC = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showScrollPopup, setShowScrollPopup] = useState(false);
  const [showTimedPopup, setShowTimedPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  // Helper to check if any popup is currently visible to avoid stacking
  const isAnyPopupVisible = showExitPopup || showScrollPopup || showTimedPopup || showContactPopup;

  useEffect(() => {
    // Exit intent logic
    const handleMouseLeave = (e: MouseEvent) => {
      const dismissed = localStorage.getItem('wp-shield-exit-dismissed');
      if (e.clientY < 0 && !dismissed && !isAnyPopupVisible) {
        setShowExitPopup(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    // Timed popup (45 seconds)
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('wp-shield-timed-dismissed');
      if (!dismissed && !isAnyPopupVisible) {
        setShowTimedPopup(true);
      }
    }, 45000);

    // Scroll trigger (60%)
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const dismissed = localStorage.getItem('wp-shield-scroll-dismissed');
      if (scrollPercent > 60 && !dismissed && !isAnyPopupVisible) {
        setShowScrollPopup(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isAnyPopupVisible]);

  const openContactPopup = (pkg?: string) => {
    if (pkg) setSelectedPackage(pkg);
    setShowContactPopup(true);
  };

  const closeContactPopup = () => {
    setShowContactPopup(false);
    setSelectedPackage(null);
  };

  const dismissPopup = (type: 'exit' | 'scroll' | 'timed') => {
    localStorage.setItem(`wp-shield-${type}-dismissed`, 'true');
    if (type === 'exit') setShowExitPopup(false);
    if (type === 'scroll') setShowScrollPopup(false);
    if (type === 'timed') setShowTimedPopup(false);
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero id="hero" />
        <ProblemSection />
        <ConsequencesSection />
        <SolutionSection />
        <PricingSection onOpenContact={openContactPopup} />
        <FAQ />
        <FinalCTA />

        <ContactSection onOpenContact={openContactPopup} />
      </main>
      <Footer />

      {/* Contact form popup */}
      {showContactPopup && <ContactFormPopup onClose={closeContactPopup} pkgName={selectedPackage} /> }

      {/* Popups */}
      {showExitPopup && <ExitIntentPopup onClose={() => dismissPopup('exit')} />}
      {showScrollPopup && <ScrollTriggeredPopup onClose={() => dismissPopup('scroll')} />}
      {showTimedPopup && <TimedPopup onClose={() => dismissPopup('timed')} />}
    </div>
  );
};

export default App;
