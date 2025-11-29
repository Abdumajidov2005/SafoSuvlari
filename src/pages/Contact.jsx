import { useToast } from '../components/Toast';
import FadeIn from '../components/FadeIn';

const Contact = () => {
  const { addToast } = useToast();
  
  return (
    <div className="contact-page">
      <div className="container">
        <FadeIn>
          <h1>Aloqa</h1>
        </FadeIn>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Biz bilan bog'laning</h2>
            
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h3>Telefon</h3>
                <p>+998 90 123 45 67</p>
                <p>+998 91 234 56 78</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h3>Email</h3>
                <p>info@safosuvlari.uz</p>
                <p>support@safosuvlari.uz</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Manzil</h3>
                <p>Toshkent shahar, Chilonzor tumani</p>
                <p>Bunyodkor ko'chasi, 1-uy</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <h3>Ish vaqti</h3>
                <p>Dushanba - Shanba: 9:00 - 18:00</p>
                <p>Yakshanba: Dam olish</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Xabar yuborish</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              addToast('Xabaringiz yuborildi! Tez orada javob beramiz.', 'success');
              e.target.reset();
            }}>
              <input type="text" placeholder="Ismingiz" required />
              <input type="tel" placeholder="Telefon" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Xabar matni" rows="5" required></textarea>
              <button type="submit" className="btn btn-primary btn-block">
                Yuborish
              </button>
            </form>
          </div>
        </div>
        
        {/* Google Maps */}
        <div className="map-container">
          <h2>Bizning joylashuv</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzU4LjIiTiA2OcKwMTQnMjQuNCJF!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
