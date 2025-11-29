import { promotions } from '../data/products';
import FadeIn from '../components/FadeIn';
import AnimatedCounter from '../components/AnimatedCounter';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Banner */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>💧 Safo Suvlari</h1>
            <p className="hero-subtitle">Toza va sog'lom suv - sog'lom hayot!</p>
            <p className="hero-description">
              Biz zamonaviy texnologiyalar yordamida eng sifatli va toza ichimlik suvini 
              taqdim etamiz. Har bir tomchi sog'ligingiz uchun!
            </p>
            <a href="/products" className="btn btn-primary">Mahsulotlarni ko'rish</a>
          </div>
        </div>
      </section>

      {/* Asosiy Mahsulotlar */}
      <section className="products-preview">
        <div className="container">
          <FadeIn>
            <h2>Asosiy Mahsulotlarimiz</h2>
          </FadeIn>
          <div className="product-grid">
            <FadeIn delay={100}>
              <div className="product-card">
                <div className="product-icon">💧</div>
                <h3>5L Suv</h3>
                <p>Oila uchun ideal hajm</p>
                <span className="price">8,000 so'm</span>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="product-card">
                <div className="product-icon">💦</div>
                <h3>10L Suv</h3>
                <p>Katta oilalar uchun</p>
                <span className="price">15,000 so'm</span>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="product-card">
                <div className="product-icon">🌊</div>
                <h3>19L Suv</h3>
                <p>Ofis va korxonalar uchun</p>
                <span className="price">25,000 so'm</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Aksiyalar */}
      <section className="promotions">
        <div className="container">
          <FadeIn>
            <h2>🎉 Aksiyalar</h2>
          </FadeIn>
          <div className="promo-grid">
            {promotions.map((promo, index) => (
              <FadeIn key={promo.id} delay={index * 100}>
                <div className="promo-card">
                  <div className="promo-badge">{promo.discount}</div>
                  <h3>{promo.title}</h3>
                  <p className="promo-valid">Amal qiladi: {promo.validUntil}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Filtrlar haqida */}
      <section className="filters-info">
        <div className="container">
          <FadeIn>
            <h2>Suv Filtrlari</h2>
          </FadeIn>
          <div className="info-grid">
            <FadeIn delay={100}>
              <div className="info-card">
                <span className="info-icon">🔬</span>
                <h3>5 Bosqichli Tozalash</h3>
                <p>Zamonaviy texnologiya bilan to'liq tozalash</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="info-card">
                <span className="info-icon">✅</span>
                <h3>Sertifikatlangan</h3>
                <p>Xalqaro standartlarga mos</p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="info-card">
                <span className="info-icon">🛠️</span>
                <h3>Bepul O'rnatish</h3>
                <p>Professional o'rnatish xizmati</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <FadeIn>
            <h2>Raqamlarda</h2>
          </FadeIn>
          <div className="stats-grid">
            <FadeIn delay={100}>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={5000} suffix="+" />
                </div>
                <div className="stat-label">Doimiy mijozlar</div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={50000} suffix="+" />
                </div>
                <div className="stat-label">Yetkazilgan buyurtmalar</div>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={5} suffix=" yil" />
                </div>
                <div className="stat-label">Tajriba</div>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="stat-label">Sifat kafolati</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
