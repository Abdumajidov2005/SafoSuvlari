import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <Mail size={48} />
          </div>
          <h2>{t('newsletter.title')}</h2>
          <p>{t('newsletter.subtitle')}</p>
          
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="newsletter-input-wrapper">
              <Mail size={20} className="input-icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')}
                required
                disabled={isSubscribed}
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubscribed}>
              {isSubscribed ? (
                <>
                  <Check size={20} />
                  {t('newsletter.success')}
                </>
              ) : (
                t('newsletter.button')
              )}
            </button>
          </form>

          {isSubscribed && (
            <p className="success-message">
              {t('newsletter.success')}
            </p>
          )}
        </div>
      </div>

      <style>{`
        .newsletter-section {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          padding: 80px 0;
          margin: 80px 0;
          border-radius: var(--radius-lg);
          position: relative;
          overflow: hidden;
        }

        .newsletter-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: float 15s ease-in-out infinite;
        }

        .newsletter-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .newsletter-icon {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: white;
          animation: bounce 2s ease-in-out infinite;
        }

        .newsletter-section h2 {
          color: white;
          margin-bottom: 16px;
        }

        .newsletter-section p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 18px;
          margin-bottom: 32px;
        }

        .newsletter-form {
          display: flex;
          gap: 12px;
          max-width: 500px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .newsletter-input-wrapper {
          flex: 1;
          min-width: 250px;
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-secondary);
        }

        .newsletter-input-wrapper input {
          width: 100%;
          padding: 16px 16px 16px 48px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: var(--radius-sm);
          font-size: 16px;
          background: rgba(255, 255, 255, 0.95);
          color: var(--text-primary);
          transition: all 0.3s;
        }

        .newsletter-input-wrapper input:focus {
          outline: none;
          border-color: white;
          background: white;
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
        }

        .newsletter-input-wrapper input:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .newsletter-form .btn {
          padding: 16px 32px;
          background: white;
          color: var(--primary);
          font-weight: 600;
          white-space: nowrap;
        }

        .newsletter-form .btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
        }

        .newsletter-form .btn:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .success-message {
          margin-top: 16px;
          color: white;
          font-weight: 500;
          animation: fadeIn 0.5s;
        }

        @media (max-width: 768px) {
          .newsletter-section {
            padding: 60px 24px;
            margin: 60px 16px;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-input-wrapper {
            min-width: 100%;
          }

          .newsletter-form .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
