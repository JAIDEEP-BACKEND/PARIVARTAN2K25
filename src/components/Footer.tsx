import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-sm border-t border-slate-700 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Parivartan 2K25
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Celebrating innovation, technology, and the spirit of change. 
              Join us for an unforgettable journey of learning and entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {/* Added 'Developer' link */}
              {['About', 'Events', 'Performers', 'Contact', 'Developer'].map((link) => (
                <a
                  key={link}
                  href={link === 'Developer' ? '/developer.html' : `#${link.toLowerCase()}`}
                  className="block text-slate-400 hover:text-orange-400 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Event Details</h4>
            <div className="space-y-2 text-slate-300">
              <p>📅 November 6-7, 2025</p>
              <p>📍 CGC Landran, Punjab</p>
              <p>🎯 Technology & Entertainment</p>
              <p>👥 2,000+ Expected Participants</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-slate-400 mb-4 md:mb-0">
            <span>Made </span>
            <span>by Tech Amigos Team</span>
          </div>
          <div className="text-slate-400">
            © 2025 CGC Landran. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
