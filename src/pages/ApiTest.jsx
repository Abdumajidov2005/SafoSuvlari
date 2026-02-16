import React, { useState, useEffect } from 'react';
import api from '../services/api.js';
import ProductList from '../components/ProductList.jsx';
import Auth from '../components/Auth.jsx';
import '../styles/api-components.css';
import '../styles/api-test.css';

const ApiTest = () => {
  const [currentView, setCurrentView] = useState('products');
  const [apiStatus, setApiStatus] = useState('checking');
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    checkApiStatus();
    checkAuthStatus();
  }, []);

  const checkApiStatus = async () => {
    try {
      await api.healthCheck();
      setApiStatus('online');
    } catch (error) {
      setApiStatus('offline');
    }
  };

  const checkAuthStatus = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const user = await api.getCurrentUser();
        setUserInfo(user);
      } catch (error) {
        localStorage.removeItem('token');
        api.setToken(null);
      }
    }
  };

  const handleLogout = () => {
    api.setToken(null);
    setUserInfo(null);
  };

  const renderNavigation = () => (
    <nav className="test-nav">
      <div className="nav-header">
        <h1>Safo Suvlari API Test</h1>
        <div className={`api-status ${apiStatus}`}>
          API: {apiStatus === 'online' ? '🟢 Online' : '🔴 Offline'}
        </div>
      </div>
      
      <div className="nav-buttons">
        <button
          onClick={() => setCurrentView('products')}
          className={`nav-btn ${currentView === 'products' ? 'active' : ''}`}
        >
          📦 Mahsulotlar
        </button>
        
        <button
          onClick={() => setCurrentView('auth')}
          className={`nav-btn ${currentView === 'auth' ? 'active' : ''}`}
        >
          🔐 Autentifikatsiya
        </button>
        
        <button
          onClick={() => setCurrentView('orders')}
          className={`nav-btn ${currentView === 'orders' ? 'active' : ''}`}
          disabled={!userInfo}
        >
          🛒 Buyurtmalar
        </button>
        
        <button
          onClick={() => setCurrentView('wishlist')}
          className={`nav-btn ${currentView === 'wishlist' ? 'active' : ''}`}
          disabled={!userInfo}
        >
          ❤️ Wishlist
        </button>
        
        <button
          onClick={() => setCurrentView('contact')}
          className={`nav-btn ${currentView === 'contact' ? 'active' : ''}`}
        >
          📞 Aloqa
        </button>
      </div>
      
      <div className="user-info">
        {userInfo ? (
          <div className="user-details">
            <span>👤 {userInfo.full_name}</span>
            <button onClick={handleLogout} className="logout-btn">
              Chiqish
            </button>
          </div>
        ) : (
          <span className="guest-user">Mehmon</span>
        )}
      </div>
    </nav>
  );

  const renderOrdersTest = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchOrders = async () => {
      setLoading(true);
      try {
        const data = await api.getOrders();
        setOrders(data);
      } catch (error) {
        alert('Xatolik: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="test-section">
        <h2>Buyurtmalar Test</h2>
        <button onClick={fetchOrders} disabled={loading}>
          {loading ? 'Yuklanmoqda...' : 'Buyurtmalarni yuklash'}
        </button>
        
        {orders.length > 0 && (
          <div className="orders-list">
            {orders.map(order => (
              <div key={order.id} className="order-card">
                <h3>Buyurtma #{order.id}</h3>
                <p>Mijoz: {order.customer_name}</p>
                <p>Telefon: {order.customer_phone}</p>
                <p>Manzil: {order.delivery_address}</p>
                <p>Holat: {order.status}</p>
                <p>Summa: {order.total_amount.toLocaleString()} UZS</p>
                <p>Sana: {new Date(order.created_at).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderWishlistTest = () => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchWishlist = async () => {
      setLoading(true);
      try {
        const data = await api.getWishlist();
        setWishlist(data);
      } catch (error) {
        alert('Xatolik: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="test-section">
        <h2>Wishlist Test</h2>
        <button onClick={fetchWishlist} disabled={loading}>
          {loading ? 'Yuklanmoqda...' : 'Wishlistni yuklash'}
        </button>
        
        {wishlist.length > 0 && (
          <div className="wishlist-list">
            {wishlist.map(item => (
              <div key={item.id} className="wishlist-item">
                <p>Product ID: {item.product_id}</p>
                <p>Qo'shilgan sana: {new Date(item.created_at).toLocaleString()}</p>
                <button onClick={() => api.removeFromWishlist(item.product_id)}>
                  O'chirish
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderContactTest = () => {
    const [contactData, setContactData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await api.sendContactMessage(contactData);
        alert('Xabar muvaffaqiyatli yuborildi!');
        setContactData({ name: '', email: '', phone: '', message: '' });
      } catch (error) {
        alert('Xatolik: ' + error.message);
      }
    };

    return (
      <div className="test-section">
        <h2>Aloqa Test</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Ism"
            value={contactData.name}
            onChange={(e) => setContactData({...contactData, name: e.target.value})}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={contactData.email}
            onChange={(e) => setContactData({...contactData, email: e.target.value})}
          />
          <input
            type="tel"
            placeholder="Telefon"
            value={contactData.phone}
            onChange={(e) => setContactData({...contactData, phone: e.target.value})}
            required
          />
          <textarea
            placeholder="Xabar"
            value={contactData.message}
            onChange={(e) => setContactData({...contactData, message: e.target.value})}
            required
            rows={4}
          />
          <button type="submit">Yuborish</button>
        </form>
      </div>
    );
  };

  const renderContent = () => {
    switch (currentView) {
      case 'products':
        return <ProductList />;
      case 'auth':
        return <Auth />;
      case 'orders':
        return renderOrdersTest();
      case 'wishlist':
        return renderWishlistTest();
      case 'contact':
        return renderContactTest();
      default:
        return <ProductList />;
    }
  };

  return (
    <div className="api-test-container">
      {renderNavigation()}
      <main className="test-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default ApiTest;
