import React, { useEffect, useRef } from 'react';
import {Music} from 'lucide-react'; // Removed Play as it's no longer needed

const PerformersSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const performers = [
    {
      name: "Milind Gaba",
      genre: "Singer",
      image: "/mg.jpeg",
    },
    {
      name: "Jassi Gill",
      genre: "Singer",
      image: "/jg.jpeg",
    },
    {
      name: "Gurnaam Bhullar",
      genre: "Singer",
      image: "/gbs.jpeg",
    },
    {
      name: "Ammy Virk",
      genre: "Renowned Singer",
      image: "/img01.webp",
    },
    {
      name: "Jaswinder Bhalla",
      genre: "Comedian & Actor",
      image: "/img02.webp",
    },
    {
      name: "Sharry Maan",
      genre: "Singer & Actor",
      image: "/img11.webp",
    },
    {
      name: "B Praak",
      genre: "Singer",
      image: "/img12.webp",
    },
    {
      name: "Singga",
      genre: "Singer & Songwriter",
      image: "/img21.webp",
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      // If it scrolls past the beginning (left end), jump to the middle of the duplicated content
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
      } else {
        // Otherwise, continue scrolling left
        scrollContainer.scrollLeft -= 2; // Changed to decrement for opposite direction
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="performers" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Previous Starcast Performers
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Legendary artists who have graced our stage over the years
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden pb-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate performers for seamless loop */}
            {[...performers, ...performers].map((performer, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-80 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-orange-400/50 transition-all duration-500 hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={performer.image}
                    alt={performer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  {/* Removed Year Badge */}
                  {/* Removed Play button */}
                </div>

                <div className="p-6">
                  {/* Removed achievement/star rating */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                    {performer.name}
                  </h3>
                  <p className="text-slate-300 mb-4">{performer.genre}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-400">Live Performance</span>
                    </div>
                    {/* Removed 5 stars */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">15+</div>
              <div className="text-slate-400">Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">50K+</div>
              <div className="text-slate-400">Audience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">5</div>
              <div className="text-slate-400">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformersSection;
