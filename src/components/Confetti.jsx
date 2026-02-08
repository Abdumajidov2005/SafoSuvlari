import React, { useEffect, useRef } from 'react';

const Confetti = ({ active, duration = 2000, onComplete }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#0066FF', '#3385FF', '#00CCFF', '#FFD700', '#FF5733'];
    
    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        vx: (Math.random() - 0.5) * 20,
        vy: (Math.random() - 0.5) * 20 - 5,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        friction: 0.95,
        gravity: 0.5,
        opacity: 1
      });
    }
    
    let animationId;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed > duration) {
        if (onComplete) onComplete();
        return;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= p.friction;
        p.rotation += p.rotationSpeed;
        p.opacity = Math.max(0, 1 - elapsed / duration);
        
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [active, duration, onComplete]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 99999
      }}
    />
  );
};

export default Confetti;
