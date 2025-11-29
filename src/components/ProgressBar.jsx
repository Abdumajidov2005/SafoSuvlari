import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.pageYOffset / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="progress-bar-container">
      <div 
        className="progress-bar-fill"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
