import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import PerformersSection from './components/PerformersSection';
import GlimpsesSection from './components/GlimpsesSection';
import DignitariesSection from './components/DignitariesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatBot from './components/chatbot'; // Import the ChatBot component

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Smooth scroll behavior
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <PerformersSection />
        <GlimpsesSection />
        <DignitariesSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ChatBot /> {/* Render the ChatBot component here */}
    </div>
  );
}

export default App;
