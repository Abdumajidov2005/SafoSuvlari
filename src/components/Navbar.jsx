import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { FaCartShopping } from "react-icons/fa6";
import { Heart, Globe } from "lucide-react";

const Navbar = () => {
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-cinematic ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <svg width="40" height="40" viewBox="0 0 30 30" fill="none">
                <path
                  d="M20 5C20 5 12 12 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20C28 12 20 5 20 5Z"
                  fill="url(#gradient)"
                />
                <defs>
                  <linearGradient id="gradient" x1="12" y1="5" x2="28" y2="28">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="logo-text">Safo Suvlari</span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/products"
              className={location.pathname === "/products" ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.products")}
            </Link>
            <Link
              to="/orders"
              className={location.pathname === "/orders" ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.orders")}
            </Link>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Theme toggle"
            >
              {isDark ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="5" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  />
                </svg>
              )}
            </button>
            <button className="lang-toggle" onClick={toggleLanguage}>
              <Globe size={18} />
              <span>{language.toUpperCase()}</span>
            </button>

            <Link
              to="/wishlist"
              className={`nav-icon-link wishlist-link ${location.pathname === "/wishlist" ? "active" : ""}`}
              title={t("nav.wishlist")}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="icon-wrapper">
                <Heart
                  size={20}
                  fill={wishlist.length > 0 ? "currentColor" : "none"}
                />
                {wishlist.length > 0 && (
                  <span className="badge badge-wishlist">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </Link>

            <Link
              to="/cart"
              className={`nav-icon-link cart-link ${location.pathname === "/cart" ? "active" : ""}`}
              title={t("nav.cart")}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="icon-wrapper">
                <FaCartShopping size={20} />
                {itemCount > 0 && (
                  <span className="badge badge-cart">{itemCount}</span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// ... (existing content)
export default Navbar;
/* ... */
