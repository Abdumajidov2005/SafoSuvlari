import { Link } from "react-router-dom";
import { products, services, clients, certifications } from "../data/products";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import AnimatedSection from "../components/AnimatedSection";
import CountUp from "../components/CountUp";
import ParallaxSection from "../components/ParallaxSection";
import Newsletter from "../components/Newsletter";
import TypingEffect from "../components/TypingEffect";
import { IoDiamondOutline } from "react-icons/io5";

const Home = () => {
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const newsData = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div className="home">
      {/* Hero Section - Cinematic Redesign */}
      <section className="hero-premium">
        <div className="hero-cinematic-bg"></div>

        {/* Animated Bubbles */}
        <div className="bubbles-container">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bubble"></div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="hero-content-premium">
            <AnimatedSection animation="fade-down" delay={0}>
              <div className="hero-badge-cinematic">
                <span className="animate-pulse">
                  <IoDiamondOutline style={{ fontSize: "20px" }} />
                </span>
                {t("hero.badge")}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={100}>
              <h1 className="hero-title-premium">
                <TypingEffect
                  text={t("hero.typing_text")}
                  speed={80}
                  delay={200}
                  key={t("hero.typing_text")}
                />
              </h1>
              <p className="text-[20px] text-blue-200/80 mb-8 font-light">
                {t("hero.sub_text")}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <p className="hero-description-premium">
                {t("hero.description")
                  .split("bepul yetkazib berish")
                  .map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <span className="text-blue-400 font-bold">
                          {t("hero.free_delivery")}
                        </span>
                      </span>
                    ) : (
                      part
                    ),
                  )}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="hero-actions-premium">
                <Link
                  to="/products"
                  className="btn btn-primary btn-large btn-glow text-lg"
                >
                  {t("hero.cta_primary")}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link to="/contact" className="btn btn-glass btn-large text-lg">
                  {t("hero.cta_secondary")}
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
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="stat-number-professional">
                  <CountUp end={5000} suffix="+" />
                </div>
                <div className="stat-label-professional">
                  {t("stats.clients")}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="stat-item-professional">
                <div className="stat-icon-professional">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="stat-number-professional">
                  <CountUp end={15} suffix="+" />
                </div>
                <div className="stat-label-professional">
                  {t("stats.certificates")}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="stat-item-professional">
                <div className="stat-icon-professional">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="stat-number-professional">24/7</div>
                <div className="stat-label-professional">
                  {t("stats.support")}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="stat-item-professional">
                <div className="stat-icon-professional">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div className="stat-number-professional">
                  <CountUp end={100} suffix="%" />
                </div>
                <div className="stat-label-professional">
                  {t("stats.quality")}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-premium">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section-header-premium">
              <h2>{t("services.title")}</h2>
              <p>{t("services.subtitle")}</p>
            </div>
          </AnimatedSection>

          <div className="services-grid">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                animation="scale-in"
                delay={index * 100}
              >
                <div className="service-card-premium">
                  <div className="service-icon-premium">
                    {service.icon === "truck" && (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                        />
                      </svg>
                    )}
                    {service.icon === "tools" && (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                    {service.icon === "support" && (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    )}
                    {service.icon === "certificate" && (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    )}
                  </div>
                  {/* Dynamic translation based on map index keys in translations.js, mapped manually for better control */}
                  <h3 className="text-xl font-bold mb-3">
                    {index === 0
                      ? t("services.items.delivery.title")
                      : index === 1
                        ? t("services.items.installation.title")
                        : index === 2
                          ? t("services.items.call_center.title")
                          : t("services.items.guarantee.title")}
                  </h3>
                  <p className="text-secondary">
                    {index === 0
                      ? t("services.items.delivery.desc")
                      : index === 1
                        ? t("services.items.installation.desc")
                        : index === 2
                          ? t("services.items.call_center.desc")
                          : t("services.items.guarantee.desc")}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-professional">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section-header-professional">
              <h2>{t("clients_section.title")}</h2>
              <p>{t("clients_section.subtitle")}</p>
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
              <h2>{t("cert_section.title")}</h2>
              <p>{t("cert_section.subtitle")}</p>
            </div>
          </AnimatedSection>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <AnimatedSection
                key={index}
                animation="scale-in"
                delay={index * 80}
              >
                <div className="certification-card">
                  <div className="certification-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h4>{cert.name}</h4>
                  <p>{t(`data.certs.${index + 1}.desc`)}</p>
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
              <h2>{t("cta_section.title")}</h2>
              <p>{t("cta_section.subtitle")}</p>
              <div className="cta-buttons-professional">
                <Link to="/contact" className="btn btn-primary btn-large">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {t("cta_section.btn_consult")}
                </Link>
                <Link to="/products" className="btn btn-secondary btn-large">
                  {t("cta_section.btn_catalog")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* News Section */}
      <section className="news-section-premium">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="section-header-premium">
              <h2>{t("news_section.title")}</h2>
              <p>{t("news_section.subtitle")}</p>
            </div>
          </AnimatedSection>

          <div className="news-grid">
            {newsData.map((item, index) => (
              <AnimatedSection
                key={item.id}
                animation="fade-up"
                delay={index * 100}
              >
                <article className="news-card-premium">
                  <div className="news-image">
                    <span className="news-category">
                      {t(`data.news.${item.id}.category`)}
                    </span>
                  </div>
                  <div className="news-content">
                    <div className="news-date">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {new Date().toLocaleDateString()}
                    </div>
                    <h3 className="news-title">
                      {t(`data.news.${item.id}.title`)}
                    </h3>
                    <p className="news-excerpt">
                      {t(`data.news.${item.id}.excerpt`)}
                    </p>
                    <a href="#" className="news-link">
                      {t("news_section.read_more")}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Home;
