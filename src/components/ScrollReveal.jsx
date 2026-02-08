import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ScrollReveal = ({ 
  children, 
  animation = 'fade-up', 
  duration = '0.8s', 
  delay = '0s', 
  threshold = 0.1,
  className = '' 
}) => {
  const [ref, isVisible] = useScrollReveal({ threshold });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up': return 'animate-fade-up';
      case 'fade-down': return 'animate-fade-down';
      case 'fade-left': return 'animate-fade-left';
      case 'fade-right': return 'animate-fade-right';
      case 'scale-in': return 'animate-scale-in';
      case 'slide-in-left': return 'animate-slide-in-left';
      case 'slide-in-right': return 'animate-slide-in-right';
      default: return 'animate-fade-up';
    }
  };

  const style = {
    animationDuration: duration,
    animationDelay: delay,
    opacity: isVisible ? 1 : 0,
    animationFillMode: 'forwards',
    visibility: isVisible ? 'visible' : 'hidden'
  };

  return (
    <div 
      ref={ref} 
      className={`${isVisible ? getAnimationClass() : 'animate-hidden'} ${className}`}
      style={isVisible ? style : { opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
