import React from 'react';
import { Award, Briefcase, GraduationCap, Users, Star } from 'lucide-react';

const DignitariesSection: React.FC = () => {
  const dignitaries = [
    {
      name: "Satnam Singh Sandhu",
      position: "Chairman, CGC Landran",
      image: "/sss.jpeg", // Added leading slash
      description: "Visionary leader guiding the institution's growth and success.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      name: "Rashpal Singh Dhaliwal",
      position: "President",
      image: "/rsd.jpeg", // Added leading slash
      description: "Driving force behind strategic initiatives and partnerships.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      name: "Dr. Rajdeep Singh",
      position: "Campus Director",
      image: "/drs.jpeg", // Added leading slash
      description: "Overseeing daily operations and academic excellence.",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "Dr. Gagandeep Bhullar",
      position: "Dean Student Welfare & Alumni Affairs",
      image: "/gbmam.jpeg", // Added leading slash
      description: "Fostering student well-being and alumni engagement.",
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <section id="dignitaries" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Esteemed Dignitaries
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Distinguished personalities who inspire and guide our festival
          </p>
        </div>

        {/* Added justify-items-center to center cards, especially the last one */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {dignitaries.map((dignitary, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-orange-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-6">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-slate-600 group-hover:border-orange-400 transition-colors duration-300">
                    <img
                      src={dignitary.image}
                      alt={dignitary.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {dignitary.icon}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                    {dignitary.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-3 text-sm">
                    {dignitary.position}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {dignitary.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Us in This Grand Celebration
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              These distinguished personalities, along with many other industry experts and academic leaders, 
              will be sharing their insights and inspiring the next generation of innovators at Parivartan 2K25.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"> {/* justify-center will center the single button */}
              <button className="group relative px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                <Users className="inline-block w-5 h-5 mr-2" />
                <span>Meet the Speakers</span>
              </button>
              {/* Removed Academic Partners button */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DignitariesSection;
