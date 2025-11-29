import { promotions, products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div className="home">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>100% Sifat Kafolati</span>
            </div>
            
            <h1 className="hero-title">
              Toza va Sog'lom Suv -<br/>
              <span className="gradient-text">Sog'lom Hayot!</span>
            </h1>
            
            <p className="hero-description">
              Zamonaviy texnologiyalar bilan tozalangan, sertifikatlangan ichimlik suvi. 
              Toshkent bo'ylab 24 soat ichida bepul yetkazib berish.
            </p>
            
            <div className="hero-actions">
              <a href="/products" className="btn btn-primary btn-large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="9" cy="21" r="1" strokeWidth="2"/>
                  <circle cx="20" cy="21" r="1" strokeWidth="2"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                Xarid qilish
              </a>
              <a href="/about" className="btn btn-secondary btn-large">
                Batafsil ma'lumot
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Mijozlar</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Buyurtmalar</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Xizmat</div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="floating-card card-1">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 5C20 5 12 12 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20C28 12 20 5 20 5Z" fill="url(#gradient1)" />
                <defs>
                  <linearGradient id="gradient1" x1="12" y1="5" x2="28" y2="28">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              <span>Toza Suv</span>
            </div>
            <div className="floating-card card-2">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Sertifikatlangan</span>
            </div>
            <div className="floating-card card-3">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span>Tez Yetkazish</span>
            </div>
          </div>
        </div>
      </section>

      {/* Asosiy Mahsulotlar */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2>Mashhur Mahsulotlar</h2>
            <p>Eng ko'p sotilgan va sevimli mahsulotlarimiz</p>
          </div>

          <div className="products-grid-modern">
            {products.slice(0, 3).map(product => (
              <div key={product.id} className="product-card-modern">
                <div className="product-image-modern">
                  <div className="product-icon-large">
                    <svg width="80" height="80" viewBox="0 0 40 40" fill="none">
                      <path d="M20 5C20 5 12 12 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20C28 12 20 5 20 5Z" fill="url(#gradient2)" />
                      <defs>
                        <linearGradient id="gradient2" x1="12" y1="5" x2="28" y2="28">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="product-badge">{product.size}</div>
                </div>
                <div className="product-info-modern">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-footer">
                    <div className="product-price-modern">{product.price.toLocaleString()} so'm</div>
                    <button 
                      className="btn-add-cart"
                      onClick={() => addToCart(product)}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta">
            <a href="/products" className="btn btn-outline">
              Barcha mahsulotlar
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Aksiyalar */}
      <section className="promotions-section">
        <div className="container">
          <div className="section-header">
            <h2>Maxsus Takliflar</h2>
            <p>Chegirmalar va aksiyalardan foydalaning</p>
          </div>

          <div className="promo-grid-modern">
            {promotions.map(promo => (
              <div key={promo.id} className="promo-card-modern">
                <div className="promo-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                  </svg>
                </div>
                <div className="promo-badge-modern">{promo.discount}</div>
                <h3>{promo.title}</h3>
                <p className="promo-valid">Amal qiladi: {promo.validUntil}</p>
                <a href="/products" className="promo-link">
                  Batafsil
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Nima uchun Safo Suvlari?</h2>
            <p>Bizning afzalliklarimiz</p>
          </div>

          <div className="features-grid-modern">
            <div className="feature-card-modern">
              <div className="feature-icon-modern">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3>Sifat Kafolati</h3>
              <p>Barcha mahsulotlarimiz xalqaro standartlarga mos va sertifikatlangan</p>
            </div>

            <div className="feature-card-modern">
              <div className="feature-icon-modern">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3>Tez Yetkazish</h3>
              <p>Toshkent bo'ylab 24 soat ichida bepul yetkazib berish xizmati</p>
            </div>

            <div className="feature-card-modern">
              <div className="feature-icon-modern">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3>Qulay Narxlar</h3>
              <p>Eng sifatli mahsulotlarni hamyonbop narxlarda taklif etamiz</p>
            </div>

            <div className="feature-card-modern">
              <div className="feature-icon-modern">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3>24/7 Qo'llab-quvvatlash</h3>
              <p>Har qanday vaqtda savollaringizga javob berishga tayyormiz</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Bugun Buyurtma Bering!</h2>
            <p>Birinchi buyurtmangizda 10% chegirma</p>
            <a href="/products" className="btn btn-primary btn-large">
              Xarid qilish
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
