import React from 'react';

// You will still need to define the @keyframes wavy and .animate-wavy in your CSS.

interface WavyTextProps {
  text: string;
}

const WavyText: React.FC<WavyTextProps> = ({ text }) => {
  return (
    <>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className="animate-wavy"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </>
  );
};

export default WavyText;