import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import CountUp from '../components/CountUp';
import ParallaxSection from '../components/ParallaxSection';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: t('about.features.items.tech.title'),
      description: t('about.features.items.tech.desc')
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      title: t('about.features.items.cert.title'),
      description: t('about.features.items.cert.desc')
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: t('about.features.items.delivery.title'),
      description: t('about.features.items.delivery.desc')
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: t('about.features.items.price.title'),
      description: t('about.features.items.price.desc')
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: t('about.features.items.service.title'),
      description: t('about.features.items.service.desc')
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      title: t('about.features.items.support.title'),
      description: t('about.features.items.support.desc')
    }
  ];

  const processSteps = [
    { number: 1, title: t('about.process.steps.1.title'), description: t('about.process.steps.1.desc') },
    { number: 2, title: t('about.process.steps.2.title'), description: t('about.process.steps.2.desc') },
    { number: 3, title: t('about.process.steps.3.title'), description: t('about.process.steps.3.desc') },
    { number: 4, title: t('about.process.steps.4.title'), description: t('about.process.steps.4.desc') },
    { number: 5, title: t('about.process.steps.5.title'), description: t('about.process.steps.5.desc') }
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
                  {t('about.hero.badge')}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <h1>{t('about.hero.title')}</h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <p className="about-hero-desc">
                  {t('about.hero.desc')}
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <div className="about-hero-actions">
                  <Link to="/products" className="btn btn-primary">
                    {t('about.hero.products')}
                  </Link>
                  <Link to="/contact" className="btn btn-outline">
                    {t('about.hero.contact')}
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
                  <h3>{t('about.visual.title')}</h3>
                  <p>{t('about.visual.subtitle')}</p>
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
              { end: 5000, suffix: '+', label: t('about.stats.clients') },
              { end: 50000, suffix: '+', label: t('about.stats.orders') },
              { end: 5, suffix: '', label: t('about.stats.experience') },
              { end: 100, suffix: '%', label: t('about.stats.quality') }
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
              <h2>{t('about.features.title')}</h2>
              <p>{t('about.features.subtitle')}</p>
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
                <h2>{t('about.process.title')}</h2>
                <p>{t('about.process.subtitle')}</p>
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
              <h2>{t('about.values.title')}</h2>
            </div>
          </AnimatedSection>

          <div className="values-grid-compact">
            {[
              { icon: '⭐', title: t('about.values.items.quality.title'), description: t('about.values.items.quality.desc') },
              { icon: '🤝', title: t('about.values.items.trust.title'), description: t('about.values.items.trust.desc') },
              { icon: '💡', title: t('about.values.items.innovation.title'), description: t('about.values.items.innovation.desc') },
              { icon: '🌱', title: t('about.values.items.responsibility.title'), description: t('about.values.items.responsibility.desc') }
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
              <h2>{t('about.cta.title')}</h2>
              <p>{t('about.cta.subtitle')}</p>
              <div className="cta-buttons-compact">
                <Link to="/products" className="btn btn-primary">{t('about.cta.products')}</Link>
                <Link to="/contact" className="btn btn-secondary">{t('about.cta.contact')}</Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default About;
