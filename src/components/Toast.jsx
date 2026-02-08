const Toast = ({ message, type = 'success' }) => {
  return (
    <div className="toast-container">
      <div className={`toast toast-${type}`}>
        <span className="toast-icon">
          {type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}
        </span>
        <span>{message}</span>
      </div>

      <style>{`
        .toast-container {
          position: fixed;
          top: 24px;
          right: 24px;
          z-index: 9999;
          animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .toast {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: var(--shadow-lg);
          min-width: 300px;
          animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        [data-theme="dark"] .toast {
          background: var(--bg-secondary);
        }

        .toast-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
          flex-shrink: 0;
        }

        .toast-success {
          border-left: 4px solid #10b981;
        }

        .toast-success .toast-icon {
          background: #d1fae5;
          color: #10b981;
        }

        .toast-error {
          border-left: 4px solid #ef4444;
        }

        .toast-error .toast-icon {
          background: #fee2e2;
          color: #ef4444;
        }

        .toast-info {
          border-left: 4px solid var(--primary);
        }

        .toast-info .toast-icon {
          background: rgba(0, 102, 255, 0.1);
          color: var(--primary);
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 480px) {
          .toast-container {
            top: 16px;
            right: 16px;
            left: 16px;
          }

          .toast {
            min-width: auto;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Toast;
