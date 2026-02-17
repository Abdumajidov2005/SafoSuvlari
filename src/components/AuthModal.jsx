import { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    full_name: '',
    phone: ''
  });
  const [formError, setFormError] = useState('');
  
  const { login, register, loading, error, clearError } = useAuth();
  const { t } = useLanguage();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setFormError('');
    clearError();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    try {
      if (isLogin) {
        await login({
          email: formData.email,
          password: formData.password
        });
        onClose();
        // Reset form
        setFormData({
          email: '',
          password: '',
          full_name: '',
          phone: ''
        });
      } else {
        await register({
          email: formData.email,
          password: formData.password,
          full_name: formData.full_name,
          phone: formData.phone || undefined
        });
        // Switch to login after successful registration
        setIsLogin(true);
        setFormData({
          email: formData.email,
          password: '',
          full_name: '',
          phone: ''
        });
      }
    } catch (err) {
      setFormError(err.message);
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormError('');
    clearError();
    setFormData({
      email: '',
      password: '',
      full_name: '',
      phone: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="auth-modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="auth-modal-content">
          <div className="auth-header">
            <div className="auth-icon">
              {isLogin ? <LogIn size={32} /> : <UserPlus size={32} />}
            </div>
            <h2>{isLogin ? t('auth.login') : t('auth.register')}</h2>
            <p>
              {isLogin 
                ? 'Hisobingizga kiring' 
                : 'Yangi hisob yarating'
              }
            </p>
          </div>

          {/* Error Messages */}
          {(error || formError) && (
            <div className="auth-error">
              ❌ {error || formError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="full_name">
                  <User size={16} />
                  {t("auth.full_name")}
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  placeholder={t("auth.full_name_placeholder")}
                  required={!isLogin}
                />
              </div>
            )}

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="phone">
                  <Mail size={16} />
                  {t("auth.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t("auth.phone_placeholder")}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">
                <Mail size={16} />
                {t("auth.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t("auth.email_placeholder")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <Lock size={16} />
                {t("auth.password")}
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder={t("auth.password_placeholder")}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="auth-submit-btn"
              disabled={loading}
            >
              {loading ? (
                <div className="loading-spinner"></div>
              ) : isLogin ? (
                <>
                  <LogIn size={16} />
                  {t("auth.login")}
                </>
              ) : (
                <>
                  <UserPlus size={16} />
                  {t("auth.register")}
                </>
              )}
            </button>
          </form>

          <div className="auth-switch">
            <span>
              {isLogin ? t("auth.no_account") : t("auth.has_account")}
            </span>
            <button type="button" onClick={switchMode} className="switch-btn">
              {isLogin ? t("auth.register") : t("auth.login")}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .auth-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          animation: fadeIn 0.3s ease-out;
        }

        .auth-modal {
          background: var(--bg-primary);
          border-radius: 16px;
          width: 90%;
          max-width: 480px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          animation: slideUp 0.3s ease-out;
          position: relative;
        }

        .auth-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: var(--bg-secondary);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-secondary);
          transition: all 0.2s;
          z-index: 1;
        }

        .auth-modal-close:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
          transform: scale(1.1);
        }

        .auth-modal-content {
          padding: 32px;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .auth-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          color: white;
        }

        .auth-header h2 {
          margin: 0 0 8px;
          color: var(--text-primary);
          font-size: 24px;
          font-weight: 600;
        }

        .auth-header p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 14px;
        }

        .auth-error {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 24px;
          font-size: 14px;
          font-weight: 500;
          animation: shake 0.5s ease-in-out;
        }

        .auth-form {
          margin-bottom: 24px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          color: var(--text-primary);
          font-weight: 500;
          font-size: 14px;
        }

        .form-group input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid var(--border);
          border-radius: 8px;
          font-size: 16px;
          background: var(--bg-secondary);
          color: var(--text-primary);
          transition: all 0.2s;
        }

        .form-group input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
        }

        .password-input-wrapper {
          position: relative;
        }

        .password-toggle {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: color 0.2s;
        }

        .password-toggle:hover {
          color: var(--text-primary);
        }

        .auth-submit-btn {
          width: 100%;
          padding: 14px 16px;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s;
          min-height: 48px;
        }

        .auth-submit-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 10px 20px -5px rgba(0, 102, 255, 0.3);
        }

        .auth-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .auth-switch {
          text-align: center;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .auth-switch span {
          color: var(--text-secondary);
          font-size: 14px;
          margin-right: 8px;
        }

        .switch-btn {
          background: none;
          border: none;
          color: var(--primary);
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
          font-size: 14px;
        }

        .switch-btn:hover {
          color: var(--primary-dark);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 480px) {
          .auth-modal {
            width: 95%;
            margin: 16px;
          }
          
          .auth-modal-content {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthModal;
