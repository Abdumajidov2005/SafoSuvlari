import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100, delay = 0, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset if text changes
    if (currentIndex === 0 && displayedText !== '') {
        setDisplayedText('');
    }
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, speed, text]);

  return (
    <span className={className}>
      {displayedText}
      <span className="cursor">|</span>
      <style>{`
        .cursor {
          animation: blink 1s step-end infinite;
          font-weight: 100;
          color: inherit;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default TypingEffect;
