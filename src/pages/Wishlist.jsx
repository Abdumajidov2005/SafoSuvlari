import { useWishlist } from "../context/WishlistContext";

import { useCart } from "../context/CartContext";

import { useLanguage } from "../context/LanguageContext";

import {
  Heart,
  ShoppingCart,
  Trash2,
  Sparkles,
  Package,
  ArrowRight,
} from "lucide-react";

import { useState } from "react";

import { Link } from "react-router-dom";

import Toast from "../components/Toast";

import AnimatedSection from "../components/AnimatedSection";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart, loading, error, loadWishlist } = useWishlist();

  const { t, language } = useLanguage();

  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const [isConfettiActive, setIsConfettiActive] = useState(false);

  // Tilga mos mahsulot ma'lumotlarini tanlash

  const getLocalizedProduct = (product) => {
    const nameKey = `name_${language}`;

    const descKey = `description_${language}`;

    return {
      ...product,

      name: product[nameKey] || product.name_uz,

      description: product[descKey] || product.description_uz,
    };
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });

    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const handleAddToCart = (product) => {
    addToCart(product);

    // Agar mahsulot wishlistda bo'lsa, wishlistdan olib tashlaymiz

    removeFromWishlist(product.id);

    showToast(
      `${product.name || product.name_uz} ${t("messages.added_to_cart")}`,
    );
  };

  const handleRemove = (productId, productName) => {
    removeFromWishlist(productId);

    showToast(`${productName} ${t("messages.removed_from_wishlist")}`, "info");
  };

  const handleAddAllToCart = () => {
    wishlist.forEach((product) => addToCart(product));

    showToast(`${wishlist.length} ta mahsulot ${t("messages.added_to_cart")}`);
  };

  const totalPrice = wishlist.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="wishlist-page-ultra">
      <div className="container">
        {/* Hero Section */}

        <AnimatedSection animation="fade-up">
          <div className="wishlist-hero">
            <div className="hero-icon-group">
              <div className="hero-icon-main">
                <Heart
                  size={32}
                  fill={wishlist.length > 0 ? "currentColor" : "none"}
                />
              </div>

              {wishlist.length > 0 && (
                <div className="hero-badge-floating">
                  <Sparkles size={16} />

                  <span>{wishlist.length}</span>
                </div>
              )}
            </div>

            <h1>{t("wishlist.title")}</h1>

            <p className="hero-description">
              {wishlist.length > 0
                ? t("wishlist.count_text", { count: wishlist.length }).replace(
                    "{{count}}",
                    wishlist.length,
                  )
                : t("wishlist.default_desc")}
            </p>
          </div>
        </AnimatedSection>

        {loading ? (
          /* Loading State */
          <AnimatedSection animation="fade-up">
            <div className="wishlist-loading">
              <div className="loading-spinner">
                <div className="spinner"></div>
              </div>
              <h2>Wishlist yuklanmoqda...</h2>
            </div>
          </AnimatedSection>
        ) : error ? (
          /* Error State */
          <AnimatedSection animation="fade-up">
            <div className="wishlist-error">
              <div className="error-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h2>Xatolik yuz berdi</h2>
              <p>{error}</p>
              <button onClick={loadWishlist} className="btn-ultra btn-ultra-primary">
                Qayta urinish
              </button>
            </div>
          </AnimatedSection>
        ) : wishlist.length === 0 ? (
          /* Empty State */

          <AnimatedSection animation="scale-in" delay={200}>
            <div className="wishlist-empty-ultra">
              <div className="empty-illustration">
                <div className="empty-circle circle-1"></div>

                <div className="empty-circle circle-2"></div>

                <div className="empty-circle circle-3"></div>

                <Heart size={80} strokeWidth={1.5} />
              </div>

              <h2>{t("wishlist.empty_title")}</h2>

              <p>{t("wishlist.empty_desc")}</p>

              <div className="empty-actions">
                <Link to="/products" className="btn-ultra btn-ultra-primary">
                  <Package size={20} />

                  <span>{t("wishlist.view_products")}</span>

                  <ArrowRight size={18} />
                </Link>

                <Link to="/" className="btn-ultra btn-ultra-secondary">
                  {t("wishlist.home")}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        ) : (
          <>
            {/* Actions Bar */}

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="wishlist-toolbar">
                <div className="toolbar-info">
                  <div className="info-item">
                    <span className="info-label">{t("wishlist.products")}</span>

                    <span className="info-value">{wishlist.length} ta</span>
                  </div>

                  <div className="info-divider"></div>

                  <div className="info-item">
                    <span className="info-label">{t("wishlist.total")}</span>

                    <span className="info-value">
                      {totalPrice.toLocaleString()} so'm
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleAddAllToCart}
                  className="btn-ultra btn-ultra-primary"
                >
                  <ShoppingCart size={18} />

                  <span>{t("wishlist.add_all")}</span>
                </button>
              </div>
            </AnimatedSection>

            {/* Products Grid */}

            <div className="wishlist-grid-ultra">
              {wishlist.map((product, index) => (
                <AnimatedSection
                  key={product.id}
                  animation="fade-up"
                  delay={index * 50}
                >
                  <div className="wishlist-card-ultra">
                    <button
                      onClick={() => handleRemove(product.id, product.name)}
                      className="card-remove-btn"
                      aria-label="Ochirish"
                      title={t("wishlist.remove")}
                    >
                      <Trash2 size={16} />
                    </button>

                    <div className="card-image-section">
                      <div className="image-bg"></div>

                      {product.image_url ? (
                        <img
                          src={`https://safo.onrender.com${product.image_url}`}
                          alt={product.name_uz || product.name}
                          className="product-image"
                        />
                      ) : (
                        <div className="product-icon-display">
                          <svg
                            width="64"
                            height="64"
                            viewBox="0 0 40 40"
                            fill="none"
                          >
                            <path
                              d="M20 5C20 5 12 12 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20C28 12 20 5 20 5Z"
                              fill="url(#gradient-card)"
                            />

                            <defs>
                              <linearGradient
                                id="gradient-card"
                                x1="12"
                                y1="5"
                                x2="28"
                                y2="28"
                              >
                                <stop offset="0%" stopColor="#06b6d4" />

                                <stop offset="100%" stopColor="#3b82f6" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      )}

                      {product.size && (
                        <div className="size-badge">{product.size}</div>
                      )}
                    </div>

                    <div className="card-content-section">
                      <div className="product-meta">
                        <span className="product-category">
                          {product.category === "water"
                            ? `💧 ${t("wishlist.water")}`
                            : `🔧 ${t("wishlist.filter")}`}
                        </span>
                      </div>

                      <h3 className="product-title">
                        {getLocalizedProduct(product).name}
                      </h3>

                      <p className="product-desc">
                        {getLocalizedProduct(product).description}
                      </p>

                      <div className="card-footer">
                        <div className="price-display">
                          <span className="price-amount">
                            {product.price.toLocaleString()}
                          </span>

                          <span className="price-currency">so'm</span>
                        </div>

                        <button
                          onClick={() => handleAddToCart(product)}
                          className="btn-add-cart-ultra"
                          title={t("wishlist.add_to_cart")}
                        >
                          <ShoppingCart size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </>
        )}
      </div>

      {toast.show && <Toast message={toast.message} type={toast.type} />}

      <style>{`

        .wishlist-loading {
          text-align: center;
          padding: 80px 20px;
        }

        .wishlist-loading h2 {
          margin-top: 24px;
          color: var(--text-primary);
          font-size: 20px;
        }

        .wishlist-error {
          text-align: center;
          padding: 80px 20px;
        }

        .wishlist-error .error-icon {
          color: #ef4444;
          margin-bottom: 24px;
        }

        .wishlist-error h2 {
          color: var(--text-primary);
          margin-bottom: 12px;
          font-size: 24px;
        }

        .wishlist-error p {
          color: var(--text-secondary);
          margin-bottom: 24px;
          font-size: 16px;
        }

        /* ========== WISHLIST PAGE ========== */

        .wishlist-page-ultra {

          min-height: 100vh;

          padding: 100px 0 80px;

          background: var(--bg-primary);

        }



        /* Hero Section */

        .wishlist-hero {

          text-align: center;

          margin-bottom: 48px;

        }



        .hero-icon-group {

          position: relative;

          display: inline-flex;

          margin-bottom: 20px;

        }



        .hero-icon-main {

          width: 64px;

          height: 64px;

          background: var(--bg-secondary);

          border-radius: 16px;

          display: flex;

          align-items: center;

          justify-content: center;

          color: var(--primary);

          border: 1px solid var(--border);

        }



        .hero-badge-floating {

          position: absolute;

          top: -6px;

          right: -6px;

          background: var(--primary);

          color: white;

          padding: 4px 10px;

          border-radius: 12px;

          font-size: 13px;

          font-weight: 600;

          box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);

        }



        .wishlist-hero h1 {

          font-size: 36px;

          font-weight: 600;

          margin-bottom: 12px;

          color: var(--text-primary);

        }



        .hero-description {

          font-size: 16px;

          color: var(--text-secondary);

        }



        /* Empty State */

        .wishlist-empty-ultra {

          text-align: center;

          padding: 60px 24px;

          max-width: 500px;

          margin: 0 auto;

        }



        .empty-illustration {

          position: relative;

          width: 120px;

          height: 120px;

          margin: 0 auto 32px;

          display: flex;

          align-items: center;

          justify-content: center;

        }



        .empty-circle {

          position: absolute;

          border-radius: 50%;

          background: var(--bg-secondary);

        }



        .empty-circle.circle-1 {

          width: 120px;

          height: 120px;

        }



        .empty-circle.circle-2 {

          width: 90px;

          height: 90px;

        }



        .empty-circle.circle-3 {

          width: 60px;

          height: 60px;

        }



        .empty-illustration svg {

          position: relative;

          z-index: 1;

          color: var(--text-tertiary);

        }



        .wishlist-empty-ultra h2 {

          font-size: 24px;

          font-weight: 600;

          margin-bottom: 12px;

          color: var(--text-primary);

        }



        .wishlist-empty-ultra p {

          font-size: 15px;

          color: var(--text-secondary);

          line-height: 1.6;

          margin-bottom: 32px;

        }



        .empty-actions {

          display: flex;

          gap: 12px;

          justify-content: center;

          flex-wrap: wrap;

        }



        /* Buttons */

        .btn-ultra {

          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding: 12px 20px;

          border-radius: var(--radius-sm);

          font-size: 15px;

          font-weight: 500;

          cursor: pointer;

          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

          border: none;

        }



        .btn-ultra-primary {

          background: var(--primary);

          color: white;

        }



        .btn-ultra-primary:hover {

          background: var(--primary-dark);

          transform: translateY(-2px);

          box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);

        }



        .btn-ultra-secondary {

          background: var(--bg-secondary);

          color: var(--text-primary);

          border: 1px solid var(--border);

        }



        .btn-ultra-secondary:hover {

          background: var(--bg-tertiary);

        }



        /* Toolbar */

        .wishlist-toolbar {

          display: flex;

          justify-content: space-between;

          align-items: center;

          padding: 20px;

          background: var(--bg-secondary);

          border: 1px solid var(--border);

          border-radius: var(--radius);

          margin-bottom: 32px;

        }



        .toolbar-info {

          display: flex;

          align-items: center;

          gap: 24px;

        }



        .info-item {

          display: flex;

          flex-direction: column;

          gap: 4px;

        }



        .info-label {

          font-size: 13px;

          color: var(--text-secondary);

        }



        .info-value {

          font-size: 18px;

          font-weight: 600;

          color: var(--text-primary);

        }



        .info-divider {

          width: 1px;

          height: 32px;

          background: var(--border);

        }



        /* Grid */

        .wishlist-grid-ultra {

          display: grid;

          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

          gap: 24px;

        }



        /* Card */

        .wishlist-card-ultra {

          background: var(--bg-primary);

          border: 1px solid var(--border);

          border-radius: var(--radius);

          overflow: hidden;

          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

          position: relative;

        }



        .wishlist-card-ultra:hover {

          transform: translateY(-4px);

          box-shadow: var(--shadow-lg);

          border-color: var(--primary);

        }



        .card-remove-btn {

          position: absolute;

          top: 12px;

          right: 12px;

          width: 32px;

          height: 32px;

          border-radius: var(--radius-sm);

          background: white;

          border: 1px solid var(--border);

          display: flex;

          align-items: center;

          justify-content: center;

          cursor: pointer;

          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

          z-index: 10;

          color: var(--text-secondary);

        }



        [data-theme="dark"] .card-remove-btn {

          background: var(--bg-tertiary);

        }



        .card-remove-btn:hover {

          background: #fee2e2;

          border-color: #ef4444;

          color: #ef4444;

        }



        [data-theme="dark"] .card-remove-btn:hover {

          background: rgba(239, 68, 68, 0.2);

        }



        /* Card Image */

        .card-image-section {

          aspect-ratio: 4/3;

          position: relative;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 32px;

        }



        .image-bg {

          position: absolute;

          inset: 0;

          background: var(--bg-secondary);

        }



        .product-icon-display {

          position: absolute;

          top: 50%;

          left: 50%;

          transform: translate(-50%, -50%);

          z-index: 1;

        }



        .product-image {

          width: 100%;

          height: 100%;

          object-fit: cover;

          border-radius: 16px;

          position: relative;

          z-index: 2;

        }



        .wishlist-card-ultra:hover .product-icon-display {

          transform: scale(1.05);

        }



        .size-badge {

          position: absolute;

          bottom: 12px;

          right: 12px;

          background: white;

          color: var(--primary);

          padding: 4px 10px;

          border-radius: var(--radius-sm);

          font-weight: 600;

          font-size: 12px;

          box-shadow: var(--shadow-md);

          z-index: 2;

        }



        [data-theme="dark"] .size-badge {

          background: var(--bg-tertiary);

        }



        /* Card Content */

        .card-content-section {

          padding: 20px;

        }



        .product-meta {

          margin-bottom: 8px;

        }



        .product-category {

          display: inline-block;

          font-size: 12px;

          font-weight: 500;

          color: var(--text-secondary);

          background: var(--bg-secondary);

          padding: 4px 10px;

          border-radius: var(--radius-sm);

        }



        .product-title {

          font-size: 18px;

          font-weight: 600;

          margin-bottom: 8px;

          color: var(--text-primary);

        }



        .product-desc {

          font-size: 14px;

          color: var(--text-secondary);

          line-height: 1.5;

          margin-bottom: 16px;

          display: -webkit-box;

          -webkit-line-clamp: 2;

          -webkit-box-orient: vertical;

          overflow: hidden;

        }



        /* Card Footer */

        .card-footer {

          display: flex;

          justify-content: space-between;

          align-items: center;

          padding-top: 16px;

          border-top: 1px solid var(--border);

        }



        .price-display {

          display: flex;

          align-items: baseline;

          gap: 4px;

        }



        .price-amount {

          font-size: 20px;

          font-weight: 700;

          color: var(--text-primary);

        }



        .price-currency {

          font-size: 14px;

          color: var(--text-secondary);

        }



        .btn-add-cart-ultra {

          width: 40px;

          height: 40px;

          border-radius: var(--radius-sm);

          background: var(--primary);

          color: white;

          border: none;

          display: flex;

          align-items: center;

          justify-content: center;

          cursor: pointer;

          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        }



        .btn-add-cart-ultra:hover {

          background: var(--primary-dark);

          transform: scale(1.05);

        }



        /* Responsive */

        @media (max-width: 768px) {

          .wishlist-page-ultra {

            padding: 90px 0 60px;

          }



          .wishlist-hero h1 {

            font-size: 28px;

          }



          .wishlist-toolbar {

            flex-direction: column;

            gap: 16px;

          }



          .toolbar-info {

            width: 100%;

            justify-content: space-around;

          }



          .wishlist-toolbar .btn-ultra {

            width: 100%;

            justify-content: center;

          }



          .wishlist-grid-ultra {

            grid-template-columns: 1fr;

          }



          .empty-actions {

            flex-direction: column;

          }



          .empty-actions .btn-ultra {

            width: 100%;

            justify-content: center;

          }

        }

      `}</style>
    </div>
  );
};

export default Wishlist;
