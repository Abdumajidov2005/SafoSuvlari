import React, { useEffect, useRef, useState } from 'react';

const ParallaxSection = ({ 
  children, 
  bgImage, 
  speed = 0.5, 
  className = '',
  overlayColor = 'rgba(0, 0, 0, 0.3)',
  height = '400px'
}) => {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.pageYOffset;
      // Calculate offset based on scroll position relative to the section
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setOffset(window.scrollY * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const style = bgImage ? {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: `center ${offset * 0.5}px`, // Slower movement for background
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: height,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-position 0.1s ease-out'
  } : {};

  return (
    <div 
      ref={sectionRef} 
      className={`parallax-section ${className}`} 
      style={bgImage ? style : { height, position: 'relative', overflow: 'hidden' }}
    >
      {bgImage && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: overlayColor,
            zIndex: 1
          }} 
        />
      )}
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
