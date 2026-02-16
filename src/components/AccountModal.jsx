import { useState } from 'react';
import { X, User, Mail, Phone, Calendar, LogOut, Package, Heart, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AccountModal = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();

  if (!isOpen) return null;

  const handleLogout = () => {
    logout();
    onClose();
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Noma\'lum';
    return new Date(dateString).toLocaleDateString('uz-UZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="account-modal-overlay" onClick={onClose}>
      <div className="account-modal" onClick={(e) => e.stopPropagation()}>
        <button className="account-modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="account-header">
          <div className="account-avatar">
            <User size={32} />
          </div>
          <div className="account-info">
            <h3>{user?.full_name || 'Foydalanuvchi'}</h3>
            <p>{user?.email || 'email@example.com'}</p>
          </div>
        </div>

        <div className="account-details">
          <div className="detail-item">
            <Mail size={16} />
            <div>
              <label>Email</label>
              <span>{user?.email || 'Kiritilmagan'}</span>
            </div>
          </div>

          <div className="detail-item">
            <Phone size={16} />
            <div>
              <label>Telefon</label>
              <span>{user?.phone || 'Kiritilmagan'}</span>
            </div>
          </div>

          <div className="detail-item">
            <Calendar size={16} />
            <div>
              <label>Ro'yxatdan o'tgan sana</label>
              <span>{formatDate(user?.created_at)}</span>
            </div>
          </div>
        </div>

        <div className="account-actions">
          <button className="action-btn">
            <Package size={16} />
            Buyurtmalarim
          </button>
          
          <button className="action-btn">
            <Heart size={16} />
            Sevimlilar
          </button>
          
          <button className="action-btn">
            <Settings size={16} />
            Sozlamalar
          </button>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={16} />
          Chiqish
        </button>

        <style>{`
          .account-modal-overlay {
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

          .account-modal {
            background: var(--bg-primary);
            border-radius: 16px;
            width: 90%;
            max-width: 400px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            animation: slideUp 0.3s ease-out;
            position: relative;
          }

          .account-modal-close {
            position: absolute;
            top: 16px;
            right: 16px;
            background: var(--bg-secondary);
            border: none;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--text-secondary);
            transition: all 0.2s;
            z-index: 1;
          }

          .account-modal-close:hover {
            background: var(--bg-tertiary);
            color: var(--text-primary);
            transform: scale(1.1);
          }

          .account-header {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 24px;
            border-bottom: 1px solid var(--border);
          }

          .account-avatar {
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            flex-shrink: 0;
          }

          .account-info h3 {
            margin: 0 0 4px;
            color: var(--text-primary);
            font-size: 18px;
            font-weight: 600;
          }

          .account-info p {
            margin: 0;
            color: var(--text-secondary);
            font-size: 14px;
          }

          .account-details {
            padding: 24px;
          }

          .detail-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 20px;
          }

          .detail-item:last-child {
            margin-bottom: 0;
          }

          .detail-item svg {
            color: var(--primary);
            margin-top: 2px;
            flex-shrink: 0;
          }

          .detail-item div {
            flex: 1;
          }

          .detail-item label {
            display: block;
            font-size: 12px;
            color: var(--text-secondary);
            margin-bottom: 4px;
            font-weight: 500;
          }

          .detail-item span {
            display: block;
            color: var(--text-primary);
            font-size: 14px;
          }

          .account-actions {
            padding: 0 24px 24px;
          }

          .action-btn {
            width: 100%;
            padding: 12px 16px;
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: 8px;
            color: var(--text-primary);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s;
            margin-bottom: 8px;
          }

          .action-btn:last-child {
            margin-bottom: 0;
          }

          .action-btn:hover {
            background: var(--bg-tertiary);
            border-color: var(--primary);
            transform: translateY(-1px);
          }

          .logout-btn {
            width: 100%;
            padding: 14px 16px;
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: white;
            border: none;
            border-radius: 0 0 16px 16px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.2s;
            margin-top: auto;
          }

          .logout-btn:hover {
            background: linear-gradient(135deg, #dc2626, #b91c1c);
            transform: translateY(-1px);
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

          @media (max-width: 480px) {
            .account-modal {
              width: 95%;
              margin: 16px;
            }
            
            .account-header {
              padding: 20px;
            }
            
            .account-details {
              padding: 20px;
            }
            
            .account-actions {
              padding: 0 20px 20px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AccountModal;
