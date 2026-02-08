import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useLanguage } from '../context/LanguageContext';
import { Heart } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Toast from '../components/Toast';
import Confetti from '../components/Confetti';
import ProductReviews from '../components/ProductReviews';

const Products = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  const filteredProducts = products
    .filter(p => filter === 'all' || p.category === filter)
    .filter(p => t(`data.products.${p.id}.name`).toLowerCase().includes(searchQuery.toLowerCase()));

  const handleAddToCart = (product) => {
    addToCart(product);
    setIsConfettiActive(true);
    showToast(`${t(`data.products.${product.id}.name`)} ${t('products.messages.added_to_cart')}`);
  };

  const handleWishlistToggle = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      showToast(`${t(`data.products.${product.id}.name`)} ${t('products.messages.removed_from_wishlist')}`, 'info');
    } else {
      addToWishlist(product);
      showToast(`${t(`data.products.${product.id}.name`)} ${t('products.messages.added_to_wishlist')}`);
    }
  };

  return (
    <div className="products-page">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <h1>{t('products.page_title')}</h1>
        </AnimatedSection>
        
        {/* Search */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="search-bar">
            <input
              type="text"
              placeholder={t('products.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </AnimatedSection>
        
        {/* Filter */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'active' : ''} 
              onClick={() => setFilter('all')}
            >
              {t('products.filter.all')}
            </button>
            <button 
              className={filter === 'water' ? 'active' : ''} 
              onClick={() => setFilter('water')}
            >
              {t('products.filter.water')}
            </button>
            <button 
              className={filter === 'filter' ? 'active' : ''} 
              onClick={() => setFilter('filter')}
            >
              {t('products.filter.filters')}
            </button>
          </div>
        </AnimatedSection>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.length === 0 ? (
            <AnimatedSection animation="fade-up" className="no-results">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.35-4.35"/>
              </svg>
              <p>{t('products.no_results')}</p>
            </AnimatedSection>
          ) : (
            filteredProducts.map((product, index) => (
              <AnimatedSection key={product.id} animation="scale-in" delay={index * 50}>
                <div className="product-item">
                <button 
                  className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                  onClick={() => handleWishlistToggle(product)}
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                </button>
                <div className="product-image">
                  <div className="product-icon-bg">
                    <svg width="80" height="80" viewBox="0 0 40 40" fill="none">
                      <path d="M20 5C20 5 12 12 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20C28 12 20 5 20 5Z" fill="url(#gradient-product)" />
                      <defs>
                        <linearGradient id="gradient-product" x1="12" y1="5" x2="28" y2="28">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  {product.size && (
                    <div className="product-size-badge">{product.size}</div>
                  )}
                </div>
                <h3>{t(`data.products.${product.id}.name`)}</h3>
                <p className="product-desc">{t(`data.products.${product.id}.desc`)}</p>
                <div className="product-price">{product.price.toLocaleString()} so'm</div>
                <div className="product-actions">
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    {t('products.card.details')}
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="9" cy="21" r="1" strokeWidth="2"/>
                      <circle cx="20" cy="21" r="1" strokeWidth="2"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                    {t('products.card.add_to_cart')}
                  </button>
                </div>
                </div>
              </AnimatedSection>
            ))
          )}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="modal" onClick={() => setSelectedProduct(null)}>
            <div className="modal-content product-modal" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
              
              <div className="modal-image">
                <svg width="120" height="120" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5C20 5 12 12 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20C28 12 20 5 20 5Z" fill="url(#gradient-modal)" />
                  <defs>
                    <linearGradient id="gradient-modal" x1="12" y1="5" x2="28" y2="28">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              <h2>{t(`data.products.${selectedProduct.id}.name`)}</h2>
              
              <div className="product-details">
                <div className="detail-item">
                  <span className="detail-label">{t('products.modal.category')}:</span>
                  <span className="detail-value">
                    {selectedProduct.category === 'water' ? t('products.filter.water') : t('products.filter.filters')}
                  </span>
                </div>
                {selectedProduct.size && (
                  <div className="detail-item">
                    <span className="detail-label">{t('products.modal.size')}:</span>
                    <span className="detail-value">{selectedProduct.size}</span>
                  </div>
                )}
                <div className="detail-item">
                  <span className="detail-label">{t('products.modal.price')}:</span>
                  <span className="detail-value price-highlight">
                    {selectedProduct.price.toLocaleString()} so'm
                  </span>
                </div>
              </div>
              
              <p className="modal-description">{t(`data.products.${selectedProduct.id}.desc`)}</p>
              
              <div className="modal-features">
                <h4>{t('products.modal.features')}:</h4>
                <ul>
                  <li>{t('products.modal.features_list.certified')}</li>
                  <li>{t('products.modal.features_list.delivery')}</li>
                  <li>{t('products.modal.features_list.quality')}</li>
                  <li>{t('products.modal.features_list.support')}</li>
                </ul>
              </div>

              <ProductReviews productId={selectedProduct.id} />
              
              <button 
                className="btn btn-primary btn-block btn-large"
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="9" cy="21" r="1" strokeWidth="2"/>
                  <circle cx="20" cy="21" r="1" strokeWidth="2"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                {t('products.modal.add_to_cart')}
              </button>
            </div>
          </div>
        )}
      </div>

      {toast.show && <Toast message={toast.message} type={toast.type} />}
      <Confetti active={isConfettiActive} onComplete={() => setIsConfettiActive(false)} />

      <style>{`
        .wishlist-btn {
          position: absolute;
          top: 16px;
          left: 16px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
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

        [data-theme="dark"] .wishlist-btn {
          background: var(--bg-tertiary);
        }

        .wishlist-btn:hover {
          transform: scale(1.1);
          border-color: var(--primary);
          color: var(--primary);
        }

        .wishlist-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
        }

        .wishlist-btn.active:hover {
          background: var(--primary-dark);
        }

        .product-item {
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default Products;
