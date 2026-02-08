import { Link } from 'react-router-dom';
import { useOrders } from '../context/OrderContext';
import { useLanguage } from '../context/LanguageContext';

const Orders = () => {
  const { orders } = useOrders();
  const { t } = useLanguage();

  const getStatusInfo = (status) => {
    const statuses = {
      pending: { label: t('orders.status.pending'), color: '#f59e0b', icon: '⏳' },
      confirmed: { label: t('orders.status.confirmed'), color: '#3b82f6', icon: '✓' },
      preparing: { label: t('orders.status.preparing'), color: '#8b5cf6', icon: '📦' },
      on_delivery: { label: t('orders.status.on_delivery'), color: '#06b6d4', icon: '🚚' },
      delivered: { label: t('orders.status.delivered'), color: '#10b981', icon: '✓' },
      cancelled: { label: t('orders.status.cancelled'), color: '#ef4444', icon: '✕' }
    };
    return statuses[status] || statuses.pending;
  };

  const getProgress = (status) => {
    const progress = {
      pending: 20,
      confirmed: 40,
      preparing: 60,
      on_delivery: 80,
      delivered: 100,
      cancelled: 0
    };
    return progress[status] || 0;
  };

  if (orders.length === 0) {
    return (
      <div className="orders-page">
        <div className="container">
          <h1>{t('orders.title')}</h1>
          <div className="empty-orders">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
            <p>{t('orders.empty')}</p>
            <Link to="/products" className="btn btn-primary">{t('orders.shop_now')}</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="container">
        <h1>{t('orders.title')}</h1>

        <div className="orders-list">
          {orders.map(order => {
            const statusInfo = getStatusInfo(order.status);
            const progress = getProgress(order.status);

            return (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-id">
                    <span className="order-label">{t('orders.label')}</span>
                    <span className="order-number">{order.id}</span>
                  </div>
                  <div className="order-status" style={{ color: statusInfo.color }}>
                    <span className="status-icon">{statusInfo.icon}</span>
                    <span>{statusInfo.label}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="order-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${progress}%`,
                        background: statusInfo.color
                      }}
                    ></div>
                  </div>
                  
                  <div className="progress-steps">
                    <div className={`step ${['pending', 'confirmed', 'preparing', 'on_delivery', 'delivered'].includes(order.status) ? 'active' : ''}`}>
                      <div className="step-icon">📝</div>
                      <div className="step-label">{t('orders.steps.received')}</div>
                    </div>
                    <div className={`step ${['confirmed', 'preparing', 'on_delivery', 'delivered'].includes(order.status) ? 'active' : ''}`}>
                      <div className="step-icon">✓</div>
                      <div className="step-label">{t('orders.steps.confirmed')}</div>
                    </div>
                    <div className={`step ${['preparing', 'on_delivery', 'delivered'].includes(order.status) ? 'active' : ''}`}>
                      <div className="step-icon">📦</div>
                      <div className="step-label">{t('orders.steps.preparing')}</div>
                    </div>
                    <div className={`step ${['on_delivery', 'delivered'].includes(order.status) ? 'active' : ''}`}>
                      <div className="step-icon">🚚</div>
                      <div className="step-label">{t('orders.steps.courier')}</div>
                    </div>
                    <div className={`step ${order.status === 'delivered' ? 'active' : ''}`}>
                      <div className="step-icon">✓</div>
                      <div className="step-label">{t('orders.steps.delivered')}</div>
                    </div>
                  </div>
                </div>

                {/* Order Details */}
                <div className="order-details">
                  <div className="order-items">
                    <h4>{t('orders.products')}:</h4>
                    {order.items.map((item, idx) => (
                      <div key={idx} className="order-item">
                        <span>{item.name} x {item.quantity}</span>
                        <span>{(item.price * item.quantity).toLocaleString()} so'm</span>
                      </div>
                    ))}
                  </div>

                  <div className="order-info">
                    <div className="info-row">
                      <span>{t('orders.customer')}:</span>
                      <strong>{order.customerName}</strong>
                    </div>
                    <div className="info-row">
                      <span>{t('orders.phone')}:</span>
                      <strong>{order.phone}</strong>
                    </div>
                    <div className="info-row">
                      <span>{t('orders.address')}:</span>
                      <strong>{order.address}</strong>
                    </div>
                    <div className="info-row">
                      <span>{t('orders.payment')}:</span>
                      <strong>{order.paymentMethod}</strong>
                    </div>
                    <div className="info-row total">
                      <span>{t('orders.total')}:</span>
                      <strong>{order.total.toLocaleString()} so'm</strong>
                    </div>
                  </div>
                </div>

                {order.status === 'on_delivery' && (
                  <div className="delivery-info">
                    <div className="delivery-icon">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                      </svg>
                    </div>
                    <div className="delivery-text">
                      <strong>{t('orders.courier_on_way')}</strong>
                      <p>{t('orders.estimated_time')}: {new Date(order.estimatedDelivery).toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                  </div>
                )}

                <div className="order-date">
                  {new Date(order.createdAt).toLocaleString('uz-UZ')}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
