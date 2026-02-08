import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  const onAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setTransitionStage('fadeIn');
      setDisplayLocation(location);
    }
  };

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={onAnimationEnd}
    >
      <Routes location={displayLocation}>
         {/* This approach is tricky with standard children. 
             Ideally, we should wrap the Routes in App.jsx.
             Let's use a simpler CSS keyframe approach on the main wrapper instead.
         */}
      </Routes>
       {/* React Router v6 usually handles transitions with <AnimatePresence> from Framer Motion.
           Since we are avoiding external heavy libs, let's just apply a key key to a div wrapper.
       */}
    </div>
  );
};

/* 
   BETTER APPROACH WITHOUT COMPLEX STATE:
   Just wrap the content in a div with a key based on location.
*/

const SimplePageTransition = ({ children }) => {
  const location = useLocation();
  
  // We trigger animation by changing the key
  return (
    <div key={location.pathname} className="page-animate-wrapper">
      {children}
      <style>{`
        .page-animate-wrapper {
          animation: pageFadeIn 0.5s ease-out;
          width: 100%;
        }
        
        @keyframes pageFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SimplePageTransition;
