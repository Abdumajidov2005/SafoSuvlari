import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <a href="/" className="logo">
            <span className="logo-icon">💧</span>
            <span className="logo-text">Safo Suvlari</span>
          </a>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="/">Bosh sahifa</a>
            <a href="/products">Mahsulotlar</a>
            <a href="/about">Biz haqimizda</a>
            <a href="/contact">Aloqa</a>
            <a href="/cart" className="cart-link">
              🛒 Savat {itemCount > 0 && <span className="badge">{itemCount}</span>}
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
