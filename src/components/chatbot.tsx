import React, { useState, useEffect, useRef } from 'react';
import { Send, X, Bot,} from 'lucide-react';

// Define the structure for a chat message
interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Pre-fed commands and responses
  const predefinedResponses: { [key: string]: string | string[] } = {
    "hello": "Hi there! How can I help you with Parivartan 2K25 today? Try asking about 'event details', 'timings', or 'event rulebook'.",
    "hi": "Hello! How can I assist you today? Feel free to ask about 'event details', 'timings', 'event rulebook', 'registration', 'prizes', or 'location'.",
    "event details": "Parivartan 2K25 features several exciting events including HackFest, Design Championship, Battle of Bands, Gaming Arena, Tech Expo, and Photography Contest. Which one interests you the most?",
    "timings": "The main events of Parivartan 2K25 are scheduled for November 6-7, 2025. Detailed minute-to-minute timings for each event are available in the official rulebook. Would you like to know more about the 'event rulebook'?",
    "minute to minute details": "For precise minute-to-minute schedules, please refer to the official event rulebook. This document provides comprehensive details for all competitions and activities. You can access it via the 'event rulebook' command.",
    "event rulebook": "The event rulebook contains all the specific details for each competition, including rules, judging criteria, and exact schedules. It's available for download on the official Parivartan 2K25 website. Would you like me to provide a link (if available)?",
    "registration": "You can register for any event directly on the 'Events' section of our main website. Simply navigate to the event you're interested in and click the 'Register' button.",
    "prizes": "The prize pools vary for each event. For instance, HackFest offers a prize of ₹1,00,000. Please check the 'Events' section on the website for detailed prize information for all competitions.",
    "location": "Parivartan 2K25 is proudly hosted at the CGC Landran Campus, located in Sector 112, Mohali, Punjab 140307.",
    "contact": "You can find our contact information including address, phone, and email in the 'Contact' section of the website. For urgent queries, please use the provided phone number.",
    "about": "Parivartan 2K25 is the ultimate celebration of technology, innovation, and entertainment, organized by CGC Landran. It's a platform for students to showcase their talents and learn from experts.",
    "default": "I'm sorry, I couldn't find an answer to that. Please try rephrasing your question or ask about 'event details', 'timings', 'event rulebook', 'registration', 'prizes', 'location', 'contact', or 'about'."
  };

  // Scroll to the bottom of the messages div
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const userMessage: ChatMessage = { text: input.trim(), sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const lowerCaseInput = input.trim().toLowerCase();
    let botResponseText = predefinedResponses["default"] as string;

    // Check for predefined commands
    for (const command in predefinedResponses) {
      if (lowerCaseInput.includes(command)) {
        const response = predefinedResponses[command];
        botResponseText = Array.isArray(response) ? response.join('\n') : response;
        break;
      }
    }

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: ChatMessage = { text: botResponseText, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 500); // 0.5 second delay for bot response

    setInput(''); // Clear input field
  };

  // Handle key press for sending message (e.g., Enter key)
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Initial bot greeting when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ text: "Hello! I'm your Parivartan 2K25 AI Assistant. How can I help you today?", sender: 'bot' }]);
    }
  }, [isOpen, messages.length]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Toggle Button (Robot Head) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? <X size={28} /> : <Bot size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-slate-800 border border-slate-700 rounded-2xl shadow-xl flex flex-col max-h-[70vh] overflow-hidden">
          {/* Chat Header */}
          <div className="bg-slate-900 p-4 rounded-t-2xl flex items-center justify-between border-b border-slate-700">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Bot className="w-6 h-6 text-blue-400" /> Primo AI
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 p-3 rounded-lg max-w-[85%] ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white ml-auto rounded-br-none'
                    : 'bg-slate-700 text-white rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Scroll anchor */}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-slate-900 border-t border-slate-700 flex items-center rounded-b-2xl">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="flex-1 p-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="ml-3 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Style for Chat Messages */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2D3748; /* secondary-dark */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4A5568; /* slightly lighter than secondary-dark */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #636B7A;
        }
      `}</style>
    </div>
  );
};

export default ChatBot;
