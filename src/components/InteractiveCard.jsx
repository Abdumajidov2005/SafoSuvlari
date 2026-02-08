import { useState } from 'react';

const InteractiveCard = ({ children, className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });

    // Tilt calculations
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg rotation
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className={`interactive-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
        transform: isHovered 
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.02)`
          : 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
      }}
    >
      {isHovered && (
        <div
          className="interactive-glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        />
      )}
      {children}

      <style>{`
        .interactive-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.1s ease-out;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .interactive-card:hover {
          z-index: 10;
        }

        .interactive-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.2) 0%,
            transparent 70%
          );
          transform: translate(-50%, -50%);
          pointer-events: none;
          transition: opacity 0.3s;
          mix-blend-mode: overlay;
        }
      `}</style>
    </div>
  );
};

export default InteractiveCard;
