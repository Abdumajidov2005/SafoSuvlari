import React, { useState } from 'react';
import api from '../services/api.js';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    full_name: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (isLogin) {
        // Login
        const response = await api.loginJson(formData.email, formData.password);
        setSuccess('Muvaffaqiyatli tizimga kirdingiz!');
        
        // Get current user info
        const user = await api.getCurrentUser();
        console.log('Current user:', user);
        
      } else {
        // Register
        await api.register({
          email: formData.email,
          password: formData.password,
          full_name: formData.full_name,
          phone: formData.phone
        });
        
        setSuccess('Ro\'yxatdan muvaffaqiyatli o\'tdingiz! Endi tizimga kiring.');
        setIsLogin(true);
        setFormData({
          email: formData.email,
          password: '',
          full_name: '',
          phone: ''
        });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess('');
    setFormData({
      email: '',
      password: '',
      full_name: '',
      phone: ''
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? 'Tizimga kirish' : 'Ro\'yxatdan o\'tish'}</h2>
        
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="full_name">To'liq ism</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required={!isLogin}
                className="form-input"
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Parol</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="+998901234567"
              />
            </div>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="auth-button"
          >
            {loading ? 'Yuklanmoqda...' : (isLogin ? 'Kirish' : 'Ro\'yxatdan o\'tish')}
          </button>
        </form>
        
        <div className="auth-toggle">
          <p>
            {isLogin ? 'Hisobingiz yo\'qmi?' : 'Allaqachon hisobingiz bormi?'}
            <button
              type="button"
              onClick={toggleMode}
              className="toggle-button"
            >
              {isLogin ? 'Ro\'yxatdan o\'ting' : 'Tizimga kiring'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
