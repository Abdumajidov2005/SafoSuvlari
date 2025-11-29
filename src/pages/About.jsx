import FadeIn from '../components/FadeIn';
import AnimatedCounter from '../components/AnimatedCounter';
import Accordion from '../components/Accordion';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <FadeIn>
          <h1>Biz haqimizda</h1>
        </FadeIn>
        
        <section className="about-intro">
          <h2>💧 Safo Suvlari - Sog'lom hayot uchun toza suv</h2>
          <p>
            Biz 2020-yildan beri O'zbekiston bozorida faoliyat yuritib kelamiz. 
            Maqsadimiz - har bir oilaga eng sifatli va toza ichimlik suvini yetkazib berishdir.
          </p>
        </section>

        <section className="about-features">
          <h2>Bizning afzalliklarimiz</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🔬</span>
              <h3>Zamonaviy Texnologiya</h3>
              <p>Eng so'nggi suv tozalash texnologiyalaridan foydalanamiz</p>
            </div>
            
            <div className="feature-card">
              <span className="feature-icon">✅</span>
              <h3>Sertifikatlangan</h3>
              <p>Barcha mahsulotlarimiz xalqaro standartlarga mos</p>
            </div>
            
            <div className="feature-card">
              <span className="feature-icon">🚚</span>
              <h3>Tez Yetkazib Berish</h3>
              <p>Toshkent bo'ylab 24 soat ichida yetkazib beramiz</p>
            </div>
            
            <div className="feature-card">
              <span className="feature-icon">💰</span>
              <h3>Qulay Narxlar</h3>
              <p>Eng sifatli mahsulotlarni hamyonbop narxlarda</p>
            </div>
            
            <div className="feature-card">
              <span className="feature-icon">🛠️</span>
              <h3>Professional Xizmat</h3>
              <p>Filtrlarni o'rnatish va texnik xizmat ko'rsatish</p>
            </div>
            
            <div className="feature-card">
              <span className="feature-icon">📞</span>
              <h3>24/7 Qo'llab-quvvatlash</h3>
              <p>Har qanday savolingizga javob berishga tayyormiz</p>
            </div>
          </div>
        </section>

        <section className="about-process">
          <h2>Bizning jarayonimiz</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Suv manbai</h3>
              <p>Ekologik toza hududlardan suv olish</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Tozalash</h3>
              <p>5 bosqichli professional tozalash tizimi</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Sifat nazorati</h3>
              <p>Har bir partiya laboratoriyada tekshiriladi</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Qadoqlash</h3>
              <p>Zamonaviy qadoqlash uskunalari</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Yetkazib berish</h3>
              <p>Tez va xavfsiz yetkazib berish xizmati</p>
            </div>
          </div>
        </section>

        <section className="about-stats">
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
                  <AnimatedCounter end={5} />
                </div>
                <div className="stat-label">Yillik tajriba</div>
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
        </section>

        <section className="about-faq">
          <FadeIn>
            <h2>Ko'p so'raladigan savollar</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <Accordion items={faqItems} />
          </FadeIn>
        </section>
      </div>
    </div>
  );
};

const faqItems = [
  {
    title: "Suvingiz qanday tozalanadi?",
    content: "Bizning suvimiz 5 bosqichli professional tozalash tizimidan o'tadi: mexanik filtrlash, faol uglerod filtri, ion almashinuvi, ultrafiolet tozalash va ozon bilan tozalash."
  },
  {
    title: "Yetkazib berish qancha vaqt oladi?",
    content: "Toshkent shahar bo'ylab buyurtmalar 24 soat ichida yetkazib beriladi. Tezkor yetkazish xizmati ham mavjud (2-4 soat ichida)."
  },
  {
    title: "Filtrlarni o'rnatish xizmati bormi?",
    content: "Ha, biz professional o'rnatish xizmatini taqdim etamiz. Filtr sotib olganingizda o'rnatish bepul amalga oshiriladi."
  },
  {
    title: "To'lov usullari qanday?",
    content: "Biz naqd pul, plastik karta, Click va Payme orqali to'lovni qabul qilamiz. Onlayn to'lov xavfsiz va qulay."
  },
  {
    title: "Qaytarish siyosati qanday?",
    content: "Agar mahsulot sifatsiz bo'lsa, 7 kun ichida qaytarishingiz mumkin. To'liq pul qaytariladi yoki mahsulot almashtiriladi."
  }
];

export default About;
