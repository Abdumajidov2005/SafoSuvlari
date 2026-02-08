import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer-premium">
      <div className="footer-gradient"></div>
      <div className="container relative z-10">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="text-gradient text-3xl font-bold mb-4">Safo Suvlari</h3>
            <p className="text-secondary max-w-md">
              {t('footer.desc')}
            </p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>{t('footer.pages')}</h4>
              <Link to="/" className="footer-link">{t('nav.home')}</Link>
              <Link to="/products" className="footer-link">{t('nav.products')}</Link>
              <Link to="/orders" className="footer-link">{t('nav.orders')}</Link>
            </div>
            
            <div className="footer-column">
              <h4>{t('footer.company')}</h4>
              <Link to="/about" className="footer-link">{t('nav.about')}</Link>
              <Link to="/contact" className="footer-link">{t('nav.contact')}</Link>
              <Link to="/privacy" className="footer-link">{t('footer.privacy')}</Link>
            </div>
            
            <div className="footer-column">
              <h4>{t('footer.contact')}</h4>
              <a href="tel:+998901234567" className="footer-contact">+998 90 123 45 67</a>
              <a href="mailto:info@safosuvlari.uz" className="footer-contact">info@safosuvlari.uz</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <div className="social-links">
             <a href="#" className="social-icon">Telegram</a>
             <a href="#" className="social-icon">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
