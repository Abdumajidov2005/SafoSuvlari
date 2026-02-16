import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Heart, User, ShoppingCart } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import AuthModal from "./AuthModal.jsx";
import AccountModal from "./AccountModal.jsx";
import "../styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const { isDark, toggleTheme } = useTheme();
  const { cart, itemCount, clearCart } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout, isAuthenticated } = useAuth();
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESC tugmasi bilan modalni yopish
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && showCartModal) {
        setShowCartModal(false);
      }
    };

    if (showCartModal) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [showCartModal]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleCheckoutSuccess = () => {
    navigate("/orders");
  };

  const handleCheckoutConfirm = () => {
    // Buyurtma berish - bu yerda API ga buyurtma yuboriladi
    // Va cartni bo'sh qilish kerak
    clearCart(); // Cartni to'liq bo'sh qilish
    setShowCartModal(false); // Modalni yopish
    // navigate("/orders"); // Hozircha comment qilish - faqat modal yopish uchun
  };

  return (
    <>
      <nav className={`navbar-cinematic ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="nav-content">
            {/* Top Row */}
            <div className="nav-top">
              <Link to="/" className="logo">
                <div className="logo-icon">
                  <svg width="36" height="36" viewBox="0 0 30 30" fill="none">
                    <path
                      d="M15 2L2 9v12c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V9l-13-7z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                Safo Suvlari
              </Link>

              <div className="nav-actions">
                {/* Theme Toggle */}
                <button
                  className="theme-toggle"
                  onClick={toggleTheme}
                  aria-label="Theme toggle"
                >
                  {isDark ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                </button>

                {/* Wishlist */}
                <Link
                  to="/wishlist"
                  className="nav-icon-link"
                  title={t("nav.wishlist")}
                >
                  <div className="icon-wrapper">
                    <Heart
                      size={18}
                      fill={wishlist.length > 0 ? "currentColor" : "none"}
                    />
                    {wishlist.length > 0 && (
                      <span className="badge badge-wishlist">
                        {wishlist.length}
                      </span>
                    )}
                  </div>
                </Link>

                {/* Cart */}
                <Link
                  to="/cart"
                  className="nav-icon-link"
                  title={t("nav.cart")}
                  onClick={(e) => {
                    if (itemCount === 0) {
                      e.preventDefault();
                      alert("Savatingiz bo'sh! Mahsulot qo'shing.");
                    }
                  }}
                >
                  <div className="icon-wrapper">
                    <ShoppingCart size={18} />
                    {itemCount > 0 && (
                      <span className="badge badge-cart">{itemCount}</span>
                    )}
                  </div>
                </Link>

                {/* Account */}
                {isAuthenticated ? (
                  <button
                    className="account-icon-btn"
                    onClick={() => setShowAccountModal(true)}
                    title="Account"
                  >
                    <div className="account-avatar">
                      <User size={18} />
                    </div>
                  </button>
                ) : null}

                {/* Mobile Menu Toggle */}
                <button
                  className="mobile-menu-toggle"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Bottom Row */}
            <div className={`nav-bottom ${isMenuOpen ? "open" : ""}`}>
              <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                >
                  {t("nav.home")}
                </Link>
                <Link
                  to="/products"
                  className={`nav-link ${location.pathname === "/products" ? "active" : ""}`}
                >
                  {t("nav.products")}
                </Link>
                <Link
                  to="/orders"
                  className={`nav-link ${location.pathname === "/orders" ? "active" : ""}`}
                >
                  Buyurtmalar
                </Link>
                <Link
                  to="/about"
                  className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                >
                  {t("nav.about")}
                </Link>
                <Link
                  to="/contact"
                  className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
                >
                  {t("nav.contact")}
                </Link>
              </div>

              {!isAuthenticated && (
                <div className="auth-buttons">
                  <button
                    className="auth-btn login-btn"
                    onClick={() => setShowAuthModal(true)}
                  >
                    Kirish
                  </button>
                  <button
                    className="auth-btn register-btn"
                    onClick={() => setShowAuthModal(true)}
                  >
                    Ro'yxatdan o'tish
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
      <AccountModal
        isOpen={showAccountModal}
        onClose={() => setShowAccountModal(false)}
      />

      {/* Cart Modal */}
      {showCartModal && (
        <div className="modal-overlay" onClick={() => setShowCartModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Buyurtmani tasdiqlash</h3>
              <button
                className="modal-close"
                onClick={() => setShowCartModal(false)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Savatingizda <strong>{itemCount}</strong> ta mahsulot bor.
              </p>
              <p>Buyurtmani berishni tasdiqlaysizmi?</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn-secondary"
                onClick={() => setShowCartModal(false)}
              >
                Bekor qilish
              </button>
              <button className="btn-primary" onClick={handleCheckoutConfirm}>
                Buyurtmani berish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ESC tugmasi bilan yopish */}
      {showCartModal && (
        <div
          className="esc-hint"
          onClick={() => setShowCartModal(false)}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.8)",
            color: "white",
            padding: "8px 16px",
            borderRadius: "20px",
            fontSize: "12px",
            zIndex: 1001,
            cursor: "pointer",
          }}
        >
          ESC tugmasi bilan yopish
        </div>
      )}
    </>
  );
};

export default Navbar;
