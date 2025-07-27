import React from 'react';
import { Lightbulb, Users, Trophy, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Hub",
      description: "Cutting-edge technology showcases"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Bringing together 10,000+ students and professionals"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Competitions",
      description: "Multiple events with prizes worth ₹5 Lakhs"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Entertainment",
      description: "Celebrity performances and cultural shows"
    }
  ];

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-4">
            About Parivartan 2K25
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A two-day extravaganza celebrating the spirit of change, innovation, and technological advancement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Where Technology Meets Entertainment
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Parivartan 2K25 is CGC Landran's flagship annual festival that brings together the brightest minds 
              in technology, innovation, and entertainment. This year's theme focuses on embracing change and 
              transformation in the digital age.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              From cutting-edge tech competitions to spectacular cultural performances, Parivartan offers a 
              platform for students to showcase their talents, learn from industry experts, and network with 
              like-minded individuals.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">2</div>
                <div className="text-slate-400">Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">30+</div>
                <div className="text-slate-400">Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-slate-400">Speakers</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;