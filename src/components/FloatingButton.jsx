import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="floating-scroll-btn"
          aria-label="Yuqoriga"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <style>{`
        .floating-scroll-btn {
          position: fixed;
          bottom: 100px;
          right: 24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--primary);
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 999;
          animation: slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .floating-scroll-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 102, 255, 0.4);
        }

        .floating-scroll-btn:active {
          transform: translateY(-2px);
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .floating-scroll-btn {
            bottom: 80px;
            right: 16px;
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingButton;
