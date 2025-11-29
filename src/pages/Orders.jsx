import { useOrders } from '../context/OrderContext';

const Orders = () => {
  const { orders } = useOrders();

  const getStatusInfo = (status) => {
    const statuses = {
      pending: { label: 'Kutilmoqda', color: '#f59e0b', icon: '⏳' },
      confirmed: { label: 'Tasdiqlandi', color: '#3b82f6', icon: '✓' },
      preparing: { label: 'Tayyorlanmoqda', color: '#8b5cf6', icon: '📦' },
      on_delivery: { label: 'Yo\'lda', color: '#06b6d4', icon: '🚚' },
      delivered: { label: 'Yetkazildi', color: '#10b981', icon: '✓' },
      cancelled: { label: 'Bekor qilindi', color: '#ef4444', icon: '✕' }
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
          <h1>Buyurtmalarim</h1>
          <div className="empty-orders">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
            <p>Hozircha buyurtmalar yo'q</p>
            <a href="/products" className="btn btn-primary">Xarid qilish</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="container">
        <h1>Buyurtmalarim</h1>

        <div className="orders-list">
          {orders.map(order => {
            const statusInfo = getStatusInfo(order.status);
            const progress = getProgress(order.status);

            return (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-id">
                    <span className="order-label">Buyurtma #</span>
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
                      <div className="step-label">Qabul qilindi</div>
                    </div>
                    <div className={`step ${['confirmed', 'preparing', 'on_delivery', 'delivered'].includes(order.status) ? 'active' : ''}`}>
                      <div className="step-icon">✓</div>
                      <div className="step-label">Tasdiqlandi</div>
                    </div>
                    <div className={`step ${['preparing', 'on_delivery', 'delivered'].includes(order.status) ? 'active' : ''}`}>
                      <div className="step-icon">📦</div>
                      <div className="step-label">Tayyorlanmoqda</div>
                    </div>
                    <div className={`step ${['on_delivery', 'delivered'].includes(order.status) ? 'active' : ''}`}>
                      <div className="step-icon">🚚</div>
                      <div className="step-label">Kuryerda</div>
                    </div>
                    <div className={`step ${order.status === 'delivered' ? 'active' : ''}`}>
                      <div className="step-icon">✓</div>
                      <div className="step-label">Yetkazildi</div>
                    </div>
                  </div>
                </div>

                {/* Order Details */}
                <div className="order-details">
                  <div className="order-items">
                    <h4>Mahsulotlar:</h4>
                    {order.items.map((item, idx) => (
                      <div key={idx} className="order-item">
                        <span>{item.name} x {item.quantity}</span>
                        <span>{(item.price * item.quantity).toLocaleString()} so'm</span>
                      </div>
                    ))}
                  </div>

                  <div className="order-info">
                    <div className="info-row">
                      <span>Mijoz:</span>
                      <strong>{order.customerName}</strong>
                    </div>
                    <div className="info-row">
                      <span>Telefon:</span>
                      <strong>{order.phone}</strong>
                    </div>
                    <div className="info-row">
                      <span>Manzil:</span>
                      <strong>{order.address}</strong>
                    </div>
                    <div className="info-row">
                      <span>To'lov:</span>
                      <strong>{order.paymentMethod}</strong>
                    </div>
                    <div className="info-row total">
                      <span>Jami:</span>
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
                      <strong>Kuryer yo'lda!</strong>
                      <p>Taxminiy yetkazish vaqti: {new Date(order.estimatedDelivery).toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })}</p>
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
