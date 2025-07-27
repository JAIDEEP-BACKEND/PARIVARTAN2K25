import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(prev => {
        if (prev >= 100) {
          setTimeout(onComplete, 500);
          return 100;
        }
        // Changed from prev + 2 to prev + 4 to decrease loading time
        return prev + 4;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-400 via-blue-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
            Parivartan
          </h1>
          <p className="text-2xl md:text-4xl text-blue-300 mt-2">2K25</p>
        </div>
        
        <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-orange-400 to-blue-400 transition-all duration-300 ease-out"
            style={{ width: `${loading}%` }}
          />
        </div>
        <p className="text-slate-300 mt-4 text-lg">{loading}%</p>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;