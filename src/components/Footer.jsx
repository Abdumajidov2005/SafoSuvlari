import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Safo Suvlari</h3>
            <p>Toza va sog'lom suv - sog'lom hayot!</p>
          </div>
          
          <div className="footer-section">
            <h4>Sahifalar</h4>
            <Link to="/">Bosh sahifa</Link>
            <Link to="/products">Mahsulotlar</Link>
            <Link to="/orders">Buyurtmalar</Link>
            <Link to="/about">Biz haqimizda</Link>
            <Link to="/contact">Aloqa</Link>
          </div>
          
          <div className="footer-section">
            <h4>Aloqa</h4>
            <p>+998 90 123 45 67</p>
            <p>info@safosuvlari.uz</p>
            <p>Toshkent, O'zbekiston</p>
          </div>
          
          <div className="footer-section">
            <h4>Ijtimoiy tarmoqlar</h4>
            <a href="#" aria-label="Telegram">Telegram</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Safo Suvlari. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
