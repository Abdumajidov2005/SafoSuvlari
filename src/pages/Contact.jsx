import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import { sendContactMessage } from '../services/contactService';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await sendContactMessage(formData);
      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (err) {
      setError(err.message || 'Xatolik yuz berdi. Iltimos, qayta urining.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      title: t('contact.info.phone.title'),
      items: ['+998 90 123 45 67', '+998 91 234 56 78', '+998 71 200 00 00']
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: t('contact.info.email.title'),
      items: ['info@safosuvlari.uz', 'support@safosuvlari.uz', 'sales@safosuvlari.uz']
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: t('contact.info.address.title'),
      /* Use fallback if array is missing or empty, though translations should exist */
      items: t('contact.info.address.lines', { returnObjects: true }) || []
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/>
        </svg>
      ),
      title: t('contact.info.hours.title'),
      items: t('contact.info.hours.lines', { returnObjects: true }) || []
    }
  ];

  const socialMedia = [
    {
      name: 'Telegram',
      icon: '📱',
      link: 'https://t.me/safosuvlari',
      followers: '10K+'
    },
    {
      name: 'Instagram',
      icon: '📷',
      link: 'https://instagram.com/safosuvlari',
      followers: '15K+'
    },
    {
      name: 'Facebook',
      icon: '👥',
      link: 'https://facebook.com/safosuvlari',
      followers: '8K+'
    },
    {
      name: 'YouTube',
      icon: '🎥',
      link: 'https://youtube.com/safosuvlari',
      followers: '5K+'
    }
  ];

  /* Retrieve FAQ items as an array of objects */
  const faqItems = t('contact.faq.items', { returnObjects: true }) || [];

  return (
    <div className="contact-page">
      <div className="container">
        {/* Hero */}
        <AnimatedSection animation="fade-up">
          <div className="contact-hero">
            <h1>{t('contact.title')}</h1>
            <p>{t('contact.subtitle')}</p>
          </div>
        </AnimatedSection>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info-section">
            <AnimatedSection animation="fade-up" delay={100}>
              <h2>{t('contact.info.title')}</h2>
            </AnimatedSection>
            
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={index * 100 + 200}>
                  <div className="contact-card">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      {Array.isArray(info.items) && info.items.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="contact-form-section">
              <h2>{t('contact.form.title')}</h2>
              <form 
                className="contact-form"
                onSubmit={handleSubmit}
              >
                {/* Success Message */}
                {success && (
                  <div className="form-success">
                    ✅ Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="form-error">
                    ❌ {error}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.name_placeholder')}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t('contact.form.phone')}</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+998 90 123 45 67" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.email_placeholder')} 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.form.message')}</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.message_placeholder')} 
                    rows="5"
                    required 
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-block btn-large"
                  disabled={loading}
                >
                  {loading ? 'Yuborilmoqda...' : t('contact.form.submit')}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>

        {/* Map Section */}
        <AnimatedSection animation="fade-up" delay={400}>
          <section className="map-section">
            <h2>{t('contact.map.title')}</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzU4LjIiTiA2OcKwMTQnMjQuNCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Safo Suvlari Location"
              ></iframe>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection animation="fade-up" delay={500}>
          <section className="contact-faq">
            <h2>{t('contact.faq.title')}</h2>
            <div className="faq-grid">
              {faqItems.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;

<style>{`
  .form-success {
    background: #10b981;
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 16px;
    font-weight: 500;
  }

  .form-error {
    background: #ef4444;
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 16px;
    font-weight: 500;
  }

  .form-success, .form-error {
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .contact-form input:disabled,
  .contact-form textarea:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`}</style>
