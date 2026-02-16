import { useEffect, useState } from "react";
import { getProductsData } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useLanguage } from "../context/LanguageContext";
import { Heart } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import Toast from "../components/Toast";
import Confetti from "../components/Confetti";
import ProductReviews from "../components/ProductReviews";
import "../styles/products.css";

const Products = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart, itemCount } = useCart();
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const { t, language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProductsData();
      console.log("Fetched data:", data);
      setProducts(data);
      setError("");
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Mahsulotlarni yuklashda xatolik: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const filteredProducts = products
    .filter((p) => filter === "all" || p.category === filter)
    .filter((p) => {
      const localizedProduct = getLocalizedProduct(p);
      return localizedProduct.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });

  const handleAddToCart = (product) => {
    const localizedProduct = getLocalizedProduct(product);
    addToCart(product);
    // Agar mahsulot wishlistda bo'lsa, wishlistdan olib tashlaymiz
    if (wishlist.some((item) => item.id === product.id)) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
    }
    setIsConfettiActive(true);
    setToast({
      message: `${localizedProduct.name} savatchaga qo'shildi!`,
      type: "success",
    });
  };

  const handleWishlistToggle = (product) => {
    const localizedProduct = getLocalizedProduct(product);
    if (wishlist.some((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
      setToast({
        message: `${localizedProduct.name} wishlistdan olib tashlandi`,
        type: "info",
      });
    } else {
      addToWishlist(product);
      setToast({
        message: `${localizedProduct.name} wishlistga qo'shildi`,
        type: "success",
      });
    }
  };

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductsData()?.then(setProductData);
  }, []);

  return (
    <div className="products-page">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <h1>{t("products.page_title")}</h1>
          {itemCount > 0 && (
            <div className="products-counter">
              <span className="counter-number">{itemCount}</span>
              <span className="counter-text">{t("nav.cart")}</span>
            </div>
          )}
        </AnimatedSection>

        {/* Search */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="search-bar">
            <input
              type="text"
              placeholder={t("products.search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </AnimatedSection>

        {/* Filter */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="filter-buttons">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              {t("products.filter.all")}
            </button>
            <button
              className={filter === "water" ? "active" : ""}
              onClick={() => setFilter("water")}
            >
              {t("products.filter.water")}
            </button>
            <button
              className={filter === "filter" ? "active" : ""}
              onClick={() => setFilter("filter")}
            >
              {t("products.filter.filters")}
            </button>
          </div>
        </AnimatedSection>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.length === 0 ? (
            <AnimatedSection animation="fade-up" className="no-results">
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35"
                />
              </svg>
              <p>{t("products.no_results")}</p>
            </AnimatedSection>
          ) : (
            products.map((product, index) => (
              <AnimatedSection
                key={product.id}
                animation="scale-in"
                delay={index * 50}
              >
                <div className="product-item">
                  <button
                    className={`wishlist-btn ${isInWishlist(product.id) ? "active" : ""}`}
                    onClick={() => handleWishlistToggle(product)}
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      size={20}
                      fill={isInWishlist(product.id) ? "currentColor" : "none"}
                    />
                  </button>
                  <div className="product-image">
                    {product.image_url ? (
                      <img
                        src={`https://safo.onrender.com${product.image_url}`}
                        alt={product.name_uz}
                        className="product-img"
                      />
                    ) : (
                      <div className="product-icon-bg">
                        <svg
                          width="80"
                          height="80"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M20 5C20 5 12 12 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20C28 12 20 5 20 5Z"
                            fill="url(#gradient-product)"
                          />
                          <defs>
                            <linearGradient
                              id="gradient-product"
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
                      <div className="product-size-badge">{product.size}</div>
                    )}
                  </div>
                  <h3>{getLocalizedProduct(product).name}</h3>
                  <p className="product-desc">
                    {getLocalizedProduct(product).description}
                  </p>
                  <div className="product-price">
                    {product.price.toLocaleString()} so'm
                  </div>
                  <div className="product-actions">
                    <button
                      className="btn btn-secondary"
                      onClick={() => setSelectedProduct(product)}
                    >
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
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      {t("products.card.details")}
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="9" cy="21" r="1" strokeWidth="2" />
                        <circle cx="20" cy="21" r="1" strokeWidth="2" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                        />
                      </svg>
                      {t("products.card.add_to_cart")}
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="modal" onClick={() => setSelectedProduct(null)}>
          <div
            className="modal-content product-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="modal-image">
              {selectedProduct.image_url ? (
                <img
                  src={
                    selectedProduct.image_url.startsWith("http")
                      ? selectedProduct.image_url
                      : `https://safo.onrender.com${selectedProduct.image_url}`
                  }
                  alt={selectedProduct.name || "Mahsulot rasmi"}
                  className="modal-img"
                  width="400"
                  height="300"
                  onLoad={(e) => {
                    console.log("Image loaded successfully:", e.target.src);
                  }}
                  onError={(e) => {
                    console.log("Image load error:", e.target.src);
                    console.log("Product data:", selectedProduct);
                    e.target.style.display = "none";
                  }}
                />
              ) : (
                <div className="product-icon-bg">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11V4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11l4 4"
                    />
                  </svg>
                </div>
              )}
            </div>

            <h2>{getLocalizedProduct(selectedProduct).name}</h2>

            <div className="product-details">
              <div className="detail-item">
                <span className="detail-label">Kategoriya:</span>
                <span className="detail-value">
                  {selectedProduct.category === "water" ? "Suv" : "Filtr"}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Hajm:</span>
                <span className="detail-value">{selectedProduct.size}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Narx:</span>
                <span className="detail-value">
                  {selectedProduct.price.toLocaleString()} so'm
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Tavsif:</span>
                <span className="detail-value">
                  {getLocalizedProduct(selectedProduct).description}
                </span>
              </div>
            </div>

            <div className="modal-actions">
              <button
                className="btn btn-secondary"
                onClick={() => setSelectedProduct(null)}
              >
                Yopish
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleAddToCart(selectedProduct);
                }}
              >
                Savatga qo'shish
              </button>
            </div>
          </div>
        </div>
      )}

      {toast.message && <Toast message={toast.message} type={toast.type} />}
      <Confetti
        active={isConfettiActive}
        onComplete={() => setIsConfettiActive(false)}
      />
    </div>
  );
};

export default Products;
