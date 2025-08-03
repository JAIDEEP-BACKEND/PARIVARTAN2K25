import React from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "CGC Landran, Sector 112, Mohali, Punjab 140307",
      color: "text-orange-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 98765 43210",
      color: "text-blue-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "parivartan2k25@cgc.edu.in",
      color: "text-purple-400"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Event Dates",
      details: "November 6-7, 2025",
      color: "text-green-400"
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, name: "Instagram", color: "hover:text-pink-400", href: "https://www.instagram.com/dsw.cgc/" },
    { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", color: "hover:text-blue-600", href: "https://in.linkedin.com/school/cgcpunjab/" }
  ];

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Have questions? We're here to help make your Parivartan 2K25 experience unforgettable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-orange-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className={`${info.color} group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    <p className="text-slate-300">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href} // Corrected href to use the social.href property
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer" // Security best practice
                    className={`w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 ${social.color} hover:border-orange-400/50 transition-all duration-300 hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-orange-400/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-orange-400 focus:outline-none transition-colors duration-300"
                    placeholder="Jai"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-orange-400 focus:outline-none transition-colors duration-300"
                    placeholder="Deep"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-orange-400 focus:outline-none transition-colors duration-300"
                  placeholder="jai.deep@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-orange-400 focus:outline-none transition-colors duration-300"
                  placeholder="Event Inquiry"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-orange-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group relative w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
