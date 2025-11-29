const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>💧 Safo Suvlari</h3>
            <p>Toza va sog'lom suv - sog'lom hayot!</p>
          </div>
          
          <div className="footer-section">
            <h4>Aloqa</h4>
            <p>📞 +998 90 123 45 67</p>
            <p>📧 info@safosuvlari.uz</p>
            <p>📍 Toshkent, O'zbekiston</p>
          </div>
          
          <div className="footer-section">
            <h4>Havolalar</h4>
            <a href="/products">Mahsulotlar</a>
            <a href="/about">Biz haqimizda</a>
            <a href="/contact">Aloqa</a>
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
