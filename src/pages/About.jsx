import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import CountUp from '../components/CountUp';
import ParallaxSection from '../components/ParallaxSection';

const About = () => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: 'Zamonaviy Texnologiya',
      description: 'Eng so\'nggi suv tozalash texnologiyalari'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      title: 'Sertifikatlangan',
      description: 'Xalqaro standartlarga mos mahsulotlar'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: 'Tez Yetkazish',
      description: '24 soat ichida yetkazib berish'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: 'Qulay Narxlar',
      description: 'Hamyonbop narxlarda sifatli mahsulotlar'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: 'Professional Xizmat',
      description: 'Malakali mutaxassislar xizmati'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      title: '24/7 Qo\'llab-quvvatlash',
      description: 'Doimo aloqada va yordam berishga tayyor'
    }
  ];

  const processSteps = [
    { number: 1, title: 'Suv Manbai', description: 'Ekologik toza hududlardan' },
    { number: 2, title: 'Tozalash', description: '5 bosqichli tizim' },
    { number: 3, title: 'Sifat Nazorati', description: 'Laboratoriya testlari' },
    { number: 4, title: 'Qadoqlash', description: 'Zamonaviy uskunalar' },
    { number: 5, title: 'Yetkazish', description: 'Tez va xavfsiz' }
  ];

  return (
    <div className="about-page-pro">
      {/* Hero Section - Unique Design */}
      <section className="about-hero-pro">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <AnimatedSection animation="fade-up">
                <div className="about-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  2020-yildan beri bozorda
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <h1>O'zbekistonda Yetakchi<br/>Suv Ta'minoti Kompaniyasi</h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <p className="about-hero-desc">
                  Biz har bir oilaga va biznesga eng sifatli, toza ichimlik suvini yetkazib beramiz. 
                  Professional yondashuv, xalqaro standartlar va mijozlarga g'amxo'rlik - bizning asosiy qadriyatlarimiz.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <div className="about-hero-actions">
                  <Link to="/products" className="btn btn-primary">
                    Mahsulotlar
                  </Link>
                  <Link to="/contact" className="btn btn-outline">
                    Bog'lanish
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <div className="about-hero-visual">
              <AnimatedSection animation="scale-in" delay={400}>
                <div className="about-visual-card">
                  <div className="visual-icon">
                    <svg width="64" height="64" viewBox="0 0 40 40" fill="none">
                      <path d="M20 5C20 5 12 12 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20C28 12 20 5 20 5Z" fill="currentColor" opacity="0.2"/>
                      <path d="M20 5C20 5 12 12 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20C28 12 20 5 20 5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <h3>100% Toza Suv</h3>
                  <p>Xalqaro standartlarga mos</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-pro">
        <div className="container">
          <div className="stats-grid-compact">
            {[
              { end: 5000, suffix: '+', label: 'Korporativ Mijozlar' },
              { end: 50000, suffix: '+', label: 'Yetkazilgan Buyurtmalar' },
              { end: 5, suffix: '', label: 'Yillik Tajriba' },
              { end: 100, suffix: '%', label: 'Sifat Kafolati' }
            ].map((stat, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 80}>
                <div className="stat-card-compact">
                  <div className="stat-number-compact">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="stat-label-compact">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features-pro">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section-header-compact">
              <h2>Bizning Afzalliklarimiz</h2>
              <p>Professional xizmat va yuqori sifat</p>
            </div>
          </AnimatedSection>

          <div className="features-grid-compact">
            {features.map((feature, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 60}>
                <div className="feature-card-compact">
                  <div className="feature-icon-compact">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ParallaxSection speed={0.2}>
        <section className="about-process-pro">
          <div className="container">
            <AnimatedSection animation="fade-up">
              <div className="section-header-compact">
                <h2>Bizning Jarayonimiz</h2>
                <p>5 bosqichli professional yondashuv</p>
              </div>
            </AnimatedSection>

            <div className="process-timeline">
              {processSteps.map((step, index) => (
                <AnimatedSection key={index} animation="slide-in-left" delay={index * 80}>
                  <div className="process-step-compact">
                    <div className="step-number-compact">{step.number}</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Values Section */}
      <section className="about-values-pro">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section-header-compact">
              <h2>Bizning Qadriyatlarimiz</h2>
            </div>
          </AnimatedSection>

          <div className="values-grid-compact">
            {[
              { icon: '⭐', title: 'Sifat', description: 'Har bir tomchi eng yuqori standartlarga javob beradi' },
              { icon: '🤝', title: 'Ishonch', description: 'Mijozlarimiz bilan uzoq muddatli munosabatlar' },
              { icon: '💡', title: 'Innovatsiya', description: 'Doimiy ravishda yangi texnologiyalar' },
              { icon: '🌱', title: 'Mas\'uliyat', description: 'Atrof-muhitga g\'amxo\'rlik' }
            ].map((value, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 80}>
                <div className="value-card-compact">
                  <div className="value-icon-compact">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection animation="fade-up">
        <section className="about-cta-pro">
          <div className="container">
            <div className="cta-content-compact">
              <h2>Bizga Qo'shiling</h2>
              <p>Sog'lom hayot uchun toza suv tanlang</p>
              <div className="cta-buttons-compact">
                <Link to="/products" className="btn btn-primary">Mahsulotlar</Link>
                <Link to="/contact" className="btn btn-secondary">Bog'lanish</Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default About;
