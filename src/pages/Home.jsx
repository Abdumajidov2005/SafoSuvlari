import { Link } from 'react-router-dom';
import { products, promotions, services, clients, certifications } from '../data/products';
import { useCart } from '../context/CartContext';
import AnimatedSection from '../components/AnimatedSection';
import CountUp from '../components/CountUp';
import ParallaxSection from '../components/ParallaxSection';

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div className="home">
      {/* Hero Section - Professional */}
      <section className="hero-professional">
        <div className="container">
          <div className="hero-content-professional">
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="hero-badge-professional">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                ISO 9001:2015 Sertifikatlangan
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="hero-title-professional">
                Professional Suv Yechimlari<br/>
                <span className="text-gradient">Korporativ Mijozlar Uchun</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="hero-description-professional">
                O'zbekistonda yetakchi suv ta'minoti kompaniyasi. 5000+ korporativ mijoz, 
                xalqaro sertifikatlar va 24/7 professional xizmat. Biznesingiz uchun ishonchli hamkor.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="hero-actions-professional">
                <Link to="/products" className="btn btn-primary btn-large">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Korporativ Yechimlar
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-large">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Konsultatsiya
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section - Professional */}
      <section className="stats-professional">
        <div className="container">
          <div className="stats-grid-professional">
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="stat-item-professional">
                <div className="stat-icon-professional">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <div className="stat-number-professional">
                  <CountUp end={5000} suffix="+" />
                </div>
                <div className="stat-label-professional">Korporativ Mijozlar</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="stat-item-professional">
                <div className="stat-icon-professional">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div className="stat-number-professional">
                  <CountUp end={15} suffix="+" />
                </div>
                <div className="stat-label-professional">Xalqaro Sertifikatlar</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="stat-item-professional">
                <div className="stat-icon-professional">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="stat-number-professional">24/7</div>
                <div className="stat-label-professional">Texnik Qo'llab-quvvatlash</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="stat-item-professional">
                <div className="stat-icon-professional">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <div className="stat-number-professional">
                  <CountUp end={100} suffix="%" />
                </div>
                <div className="stat-label-professional">Sifat Kafolati</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-professional">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section-header-professional">
              <h2>Professional Xizmatlar</h2>
              <p>Biznesingiz uchun to'liq yechimlar majmuasi</p>
            </div>
          </AnimatedSection>

          <div className="services-grid">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} animation="scale-in" delay={index * 100}>
                <div className="service-card-professional">
                  <div className="service-icon-professional">
                    {service.icon === 'truck' && (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>
                      </svg>
                    )}
                    {service.icon === 'tools' && (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    )}
                    {service.icon === 'support' && (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                      </svg>
                    )}
                    {service.icon === 'certificate' && (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                      </svg>
                    )}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ParallaxSection speed={0.2}>
        <section className="products-section-professional">
          <div className="container">
            <AnimatedSection animation="fade-up">
              <div className="section-header-professional">
                <h2>Bizning Yechimlarimiz</h2>
                <p>Har qanday biznes ehtiyojlari uchun professional mahsulotlar</p>
              </div>
            </AnimatedSection>

            <div className="products-grid-professional">
              {products.slice(0, 3).map((product, index) => (
                <AnimatedSection key={product.id} animation="scale-in" delay={index * 100}>
                  <div className="product-card-professional">
                    <div className="product-image-professional">
                      <div className="product-icon-large">
                        <svg width="80" height="80" viewBox="0 0 40 40" fill="none">
                          <path d="M20 5C20 5 12 12 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20C28 12 20 5 20 5Z" fill="currentColor" opacity="0.2"/>
                          <path d="M20 5C20 5 12 12 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20C28 12 20 5 20 5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                        </svg>
                      </div>
                      {product.size && (
                        <div className="product-badge-professional">{product.size}</div>
                      )}
                      <div className="product-certification">{product.certification}</div>
                    </div>
                    <div className="product-info-professional">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <ul className="product-features">
                        {product.features.map((feature, idx) => (
                          <li key={idx}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="product-footer-professional">
                        <div className="product-price-professional">
                          {product.price.toLocaleString()} so'm
                        </div>
                        <button 
                          className="btn btn-primary"
                          onClick={() => addToCart(product)}
                        >
                          Buyurtma
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="section-cta-professional">
                <Link to="/products" className="btn btn-outline btn-large">
                  Barcha Yechimlar
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </ParallaxSection>

      {/* Clients Section */}
      <section className="clients-professional">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section-header-professional">
              <h2>Bizga Ishongan Kompaniyalar</h2>
              <p>O'zbekistonning yetakchi kompaniyalari bizning mijozlarimiz</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="clients-grid">
              {clients.map((client, index) => (
                <div key={index} className="client-logo">
                  <div className="client-placeholder">{client.name}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-professional">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section-header-professional">
              <h2>Sertifikatlar va Standartlar</h2>
              <p>Xalqaro sifat standartlariga mos</p>
            </div>
          </AnimatedSection>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 80}>
                <div className="certification-card">
                  <div className="certification-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  </div>
                  <h4>{cert.name}</h4>
                  <p>{cert.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Professional */}
      <AnimatedSection animation="fade-up">
        <section className="cta-professional">
          <div className="container">
            <div className="cta-content-professional">
              <h2>Biznes Uchun Professional Yechim Kerakmi?</h2>
              <p>Mutaxassislarimiz bilan bog'laning va maxsus taklif oling</p>
              <div className="cta-buttons-professional">
                <Link to="/contact" className="btn btn-primary btn-large">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Konsultatsiya Olish
                </Link>
                <Link to="/products" className="btn btn-secondary btn-large">
                  Katalog Ko'rish
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Home;
