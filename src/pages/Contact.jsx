import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      title: 'Telefon',
      items: ['+998 90 123 45 67', '+998 91 234 56 78', '+998 71 200 00 00']
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: 'Email',
      items: ['info@safosuvlari.uz', 'support@safosuvlari.uz', 'sales@safosuvlari.uz']
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: 'Manzil',
      items: ['Toshkent shahar, Chilonzor tumani', 'Bunyodkor ko\'chasi, 1-uy', 'Metro: Chilonzor']
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/>
        </svg>
      ),
      title: 'Ish vaqti',
      items: ['Dushanba - Shanba: 9:00 - 18:00', 'Yakshanba: 10:00 - 16:00', '24/7 Qo\'llab-quvvatlash']
    }
  ];

  const departments = [
    {
      name: 'Savdo bo\'limi',
      phone: '+998 90 123 45 67',
      email: 'sales@safosuvlari.uz',
      description: 'Yangi buyurtmalar va mahsulot ma\'lumotlari'
    },
    {
      name: 'Texnik yordam',
      phone: '+998 91 234 56 78',
      email: 'support@safosuvlari.uz',
      description: 'Texnik muammolar va o\'rnatish xizmatlari'
    },
    {
      name: 'Korporativ bo\'lim',
      phone: '+998 71 200 00 00',
      email: 'corporate@safosuvlari.uz',
      description: 'Korporativ mijozlar va ommaviy buyurtmalar'
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

  return (
    <div className="contact-page">
      <div className="container">
        {/* Hero */}
        <AnimatedSection animation="fade-up">
          <div className="contact-hero">
            <h1>Aloqa</h1>
            <p>Biz bilan bog'laning va savollaringizga javob oling</p>
          </div>
        </AnimatedSection>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info-section">
            <AnimatedSection animation="fade-up" delay={100}>
              <h2>Biz bilan bog'laning</h2>
            </AnimatedSection>
            
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={index * 100 + 200}>
                  <div className="contact-card">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      {info.items.map((item, idx) => (
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
              <h2>Xabar yuborish</h2>
              <form 
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Xabaringiz yuborildi! Tez orada javob beramiz.');
                  e.target.reset();
                }}
              >
                <div className="form-group">
                  <label htmlFor="name">Ismingiz</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Ismingizni kiriting" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder="+998 90 123 45 67" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="email@example.com" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Xabar</label>
                  <textarea 
                    id="message"
                    placeholder="Xabaringizni yozing..." 
                    rows="5" 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block btn-large">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Yuborish
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>

        {/* Map Section */}
        <AnimatedSection animation="fade-up" delay={400}>
          <section className="map-section">
            <h2>Bizning Joylashuv</h2>
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
            <h2>Tez-tez so'raladigan savollar</h2>
            <div className="faq-grid">
              {[
                {
                  q: 'Yetkazib berish qancha vaqt oladi?',
                  a: 'Toshkent shahar bo\'ylab buyurtmalar 24 soat ichida yetkazib beriladi.'
                },
                {
                  q: 'To\'lov usullari qanday?',
                  a: 'Naqd pul, plastik karta, Click va Payme orqali to\'lov qabul qilamiz.'
                },
                {
                  q: 'Minimal buyurtma miqdori bormi?',
                  a: 'Yo\'q, siz istalgan miqdorda buyurtma berishingiz mumkin.'
                },
                {
                  q: 'Filtrlarni o\'rnatish xizmati bormi?',
                  a: 'Ha, biz professional o\'rnatish xizmatini bepul taqdim etamiz.'
                }
              ].map((faq, index) => (
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
