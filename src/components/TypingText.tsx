import React, { useEffect, useState } from 'react';

interface TypingTextProps {
    lines: string[];
    className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({ lines, className = '' }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [lineIndex, setLineIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        // Typing logic
        if (isTyping) {
            if (displayedText.length < lines[lineIndex].length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(lines[lineIndex].slice(0, displayedText.length + 1));
                }, 20); // Faster typing speed
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 800); // Shorter pause after typing
                return () => clearTimeout(timeout);
            }
        } 
        // Erasing logic
        else {
            if (displayedText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayedText(lines[lineIndex].slice(0, displayedText.length - 1));
                }, 10); // Faster erasing speed
                return () => clearTimeout(timeout);
            } else {
                setIsTyping(true);
                setLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
            }
        }
    }, [displayedText, isTyping, lineIndex, lines]);

    return (
        <div className={`flex justify-center ${className}`}>
            <span>{displayedText}</span>
            <span className="animate-blink cursor">|</span>
        </div>
    );
};

export default TypingText;