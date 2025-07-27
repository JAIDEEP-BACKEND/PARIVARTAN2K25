import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import ScrambleText from './ScrambleText';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-900/90 z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-96 h-96 rounded-full opacity-10"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#FF6B35' : '#0EA5E9'} 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 4}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4">
            <ScrambleText 
              text="PARIVARTAN" 
              className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent"
              delay={1000}
            />
          </h1>
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
            2K25
          </div>
        </div>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          The Ultimate Celebration of Technology, Innovation & Entertainment
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 text-slate-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-orange-400" />
            <span className="text-lg">November 6-7, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-400" />
            <span className="text-lg">CGC Landran Campus</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-400" />
            <span className="text-lg">2,000+ Participants</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Events</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-30px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;