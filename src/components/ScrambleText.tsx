import React, { useEffect, useState } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = '', delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

  useEffect(() => {
    const startAnimation = () => {
      setIsAnimating(true);
      let iteration = 0;
      
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((_letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsAnimating(false);
        }

        iteration += 1 / 3;
      }, 50);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(startAnimation, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span className={`${className} ${isAnimating ? 'text-orange-400' : ''}`}>
      {displayText || text}
    </span>
  );
};

export default ScrambleText;