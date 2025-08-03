import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import WavyText from './WavyText';
import TypingText from './TypingText'; // Import the new component

const HeroSection: React.FC = () => {
  const taglineLines = [
    "The Ultimate Celebration of Technology, Innovation & Entertainment",
    "A Fusion of Cutting-Edge Ideas and Creative Minds",
    "Experience the Future, One Innovation at a Time",
    "Your Gateway to Limitless Possibilities",
    "Where Code Meets Creativity and Fun"
  ];
  
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
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-orange-500 animate-wavy">
            <WavyText text="PARIVARTAN" />
          </h1>
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
            2K25
          </div>
        </div>

        {/* Replaced the static p tag with the new TypingText component */}
        <div className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            <TypingText lines={taglineLines} />
        </div>

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
            <a
            href="#events"
            className="group relative px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center"
            >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-100">View Events</span>
            </a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-30px) rotate(180deg); }
        }

      @keyframes wavy {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* This controls the wave height */
  }
}

.animate-wavy {
  animation: wavy 1s ease-in-out infinite; /* This controls the wave speed */
  display: inline-block;
}

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        .animate-blink {
            animation: blink 1s step-end infinite;
        }

        .cursor {
            font-size: 1.25em; /* Match cursor size to text */
            font-weight: 300;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;