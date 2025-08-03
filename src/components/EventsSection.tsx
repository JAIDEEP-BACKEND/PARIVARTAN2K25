import React, { useState } from 'react';
import { Code, Palette, Music, Gamepad2, Cpu, Camera } from 'lucide-react';

// Define the Event type for better type safety
interface Event {
  icon: JSX.Element;
  image: string; // Added image property
  title: string;
  description: string;
  prize: string;
  color: string;
  participants: string;
}

// RegistrationForm Component
interface RegistrationFormProps {
  event: Event;
  onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ event, onClose }) => {
  const [teamName, setTeamName] = useState('');
  const [memberCount, setMemberCount] = useState<number>(1); // Default to 1 member
  const [whatsappContact, setWhatsappContact] = useState('');
  // Initialize with one empty string for the leader. The size will adjust dynamically.
  const [memberNames, setMemberNames] = useState<string[]>(Array(1).fill('')); 

  // Handle change in member count to dynamically update member name fields
  const handleMemberCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let count = parseInt(e.target.value);
    
    // Ensure count is a valid number and within bounds [1, 4]
    if (isNaN(count) || count < 1) {
      count = 1; // Default to 1 if invalid or less than 1
    } else if (count > 4) {
      count = 4; // Cap at 4 if greater than 4
    }
    
    setMemberCount(count);
    // Adjust the memberNames array size based on the new count
    setMemberNames(prevNames => {
      const newNames = Array(count).fill('');
      // Copy existing names if the new count is larger, or truncate if smaller
      for (let i = 0; i < Math.min(prevNames.length, count); i++) {
        newNames[i] = prevNames[i];
      }
      return newNames;
    });
  };

  const handleMemberNameChange = (index: number, name: string) => {
    setMemberNames(prevNames => {
      const newNames = [...prevNames];
      newNames[index] = name;
      return newNames;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation for required fields
    if (!teamName.trim() || !whatsappContact.trim() || memberCount < 1) {
      const messageBox = document.createElement('div');
      messageBox.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100]';
      messageBox.innerHTML = `
        <div class="bg-red-800 text-white p-6 rounded-lg shadow-xl max-w-sm text-center">
          <p class="text-xl font-bold mb-4">Error!</p>
          <p>Please fill in all required fields (Team Name, WhatsApp Contact, and ensure at least 1 member).</p>
          <button class="mt-4 px-4 py-2 bg-red-600 rounded-md hover:bg-red-700" onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
      `;
      document.body.appendChild(messageBox);
      return;
    }

    // Validate all member names are filled
    const allMembersFilled = memberNames.every(name => name.trim() !== '');
    if (!allMembersFilled) {
        const messageBox = document.createElement('div');
        messageBox.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100]';
        messageBox.innerHTML = `
          <div class="bg-red-800 text-white p-6 rounded-lg shadow-xl max-w-sm text-center">
            <p class="text-xl font-bold mb-4">Error!</p>
            <p>Please enter names for all team members.</p>
            <button class="mt-4 px-4 py-2 bg-red-600 rounded-md hover:bg-red-700" onclick="this.parentElement.parentElement.remove()">OK</button>
          </div>
        `;
        document.body.appendChild(messageBox);
        return;
    }

    console.log('Registration Data for', event.title, ':', {
      teamName,
      memberCount,
      leaderName: memberNames[0], // Leader is always the first member
      whatsappContact,
      memberNames, // Include all member names
    });
    // In a real application, you would send this data to a backend
    // and then potentially redirect to a payment gateway or a confirmation page.

    const messageBox = document.createElement('div');
    messageBox.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100]';
    messageBox.innerHTML = `
      <div class="bg-green-800 text-white p-6 rounded-lg shadow-xl max-w-sm text-center">
        <p class="text-xl font-bold mb-4">Success!</p>
        <p>Registration for ${event.title} submitted. (This is a demo, no actual payment processed)</p>
        <button class="mt-4 px-4 py-2 bg-green-600 rounded-md hover:bg-green-700" onclick="this.parentElement.parentElement.remove()">OK</button>
      </div>
    `;
    document.body.appendChild(messageBox);
    
    onClose(); // Close the form after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      {/* Added max-h-full and overflow-y-auto for scrollability */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full relative shadow-xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          aria-label="Close form"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-white mb-6 text-center">Register for {event.title}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="teamName" className="block text-slate-300 text-sm font-medium mb-2">Team Name</label>
            <input
              type="text"
              id="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your team name"
              required
            />
          </div>

          <div>
            <label htmlFor="memberCount" className="block text-slate-300 text-sm font-medium mb-2">Team Member Count (Max 4)</label>
            <input
              type="number"
              id="memberCount"
              value={memberCount}
              onChange={handleMemberCountChange}
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="e.g., 1"
              min="1" // Minimum 1 member
              max="4" // Maximum 4 members
              required
            />
          </div>

          {/* Dynamic Member Name Fields */}
          {Array.from({ length: memberCount }).map((_, index) => (
            <div key={index}>
              <label htmlFor={`memberName-${index}`} className="block text-slate-300 text-sm font-medium mb-2">
                {index === 0 ? 'Leader Name' : `Member ${index + 1} Name`}
              </label>
              <input
                type="text"
                id={`memberName-${index}`}
                value={memberNames[index] || ''} // Ensure value is not undefined
                onChange={(e) => handleMemberNameChange(index, e.target.value)}
                className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder={index === 0 ? "Enter leader's full name" : `Enter member ${index + 1}'s full name`}
                required
              />
            </div>
          ))}
          
          <div>
            <label htmlFor="whatsappContact" className="block text-slate-300 text-sm font-medium mb-2">Leader WhatsApp Contact</label>
            <input
              type="text"
              id="whatsappContact"
              value={whatsappContact}
              onChange={(e) => setWhatsappContact(e.target.value)}
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="e.g., +919876543210"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};


const EventsSection: React.FC = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleRegisterClick = (event: Event) => {
    setSelectedEvent(event);
    setShowRegistrationForm(true);
  };

  const events: Event[] = [
    {
      icon: <Code className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "HackFest 2K25",
      description: "24-hour coding marathon with innovative solutions",
      prize: "₹1,00,000",
      color: "from-orange-500 to-red-500",
      participants: "500+"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Design Championship",
      description: "UI/UX and graphic design competition",
      prize: "₹50,000",
      color: "from-blue-500 to-purple-500",
      participants: "300+"
    },
    {
      icon: <Music className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Battle of Bands",
      description: "Live music performances and competitions",
      prize: "₹75,000",
      color: "from-purple-500 to-pink-500",
      participants: "100+"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Gaming Arena",
      description: "Esports tournaments across multiple games",
      prize: "₹60,000",
      color: "from-green-500 to-teal-500",
      participants: "800+"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Tech Expo",
      description: "Showcase of latest technologies and innovations",
      prize: "₹40,000",
      color: "from-yellow-500 to-orange-500",
      participants: "200+"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Photography Contest",
      description: "Capture the essence of college life",
      prize: "₹25,000",
      color: "from-indigo-500 to-blue-500",
      participants: "150+"
    }
  ];

  return (
    <section id="events" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Festival Events
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Dive into a world of competitions, workshops, and entertainment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Floating particles */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-orange-400 rounded-full animate-ping"
                    style={{
                      left: `${Math.random() * 80}%`,
                      top: `${Math.random() * 80}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                {/* Event Image */}
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-40 object-cover rounded-lg mb-4 border border-slate-700 group-hover:border-orange-400 transition-colors duration-300" 
                />

                <div className="flex items-center justify-between mb-4">
                  <div className={`text-white p-3 rounded-xl bg-gradient-to-br ${event.color} group-hover:scale-110 transition-transform duration-300`}>
                    {event.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-400">{event.prize}</div>
                    <div className="text-sm text-slate-400">Prize Pool</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-slate-300 mb-4 group-hover:text-slate-200 transition-colors duration-300">
                  {event.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-slate-400">{event.participants} Participants</span>
                  </div>
                  <button 
                    onClick={() => handleRegisterClick(event)}
                    className="px-4 py-2 bg-gradient-to-r from-orange-500 to-blue-500 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
         
        </div>
      </div>

      {showRegistrationForm && selectedEvent && (
        <RegistrationForm
          event={selectedEvent}
          onClose={() => setShowRegistrationForm(false)}
        />
      )}
    </section>
  );
};

export default EventsSection;
