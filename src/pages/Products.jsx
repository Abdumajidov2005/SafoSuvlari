import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products
    .filter(p => filter === 'all' || p.category === filter)
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} savatga qo'shildi!`);
  };

  return (
    <div className="products-page">
      <div className="container">
        <h1>Mahsulotlar</h1>
        
        {/* Search */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Mahsulot qidirish..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Filter */}
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            Barchasi
          </button>
          <button 
            className={filter === 'water' ? 'active' : ''} 
            onClick={() => setFilter('water')}
          >
            💧 Suvlar
          </button>
          <button 
            className={filter === 'filter' ? 'active' : ''} 
            onClick={() => setFilter('filter')}
          >
            🔧 Filtrlar
          </button>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.35-4.35"/>
              </svg>
              <p>Hech narsa topilmadi</p>
            </div>
          ) : (
            filteredProducts.map(product => (
              <div key={product.id} className="product-item">
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
                <h3>{product.name}</h3>
                <p className="product-desc">{product.description}</p>
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
                    Batafsil
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
                    Savatga
                  </button>
                </div>
              </div>
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
              
              <h2>{selectedProduct.name}</h2>
              
              <div className="product-details">
                <div className="detail-item">
                  <span className="detail-label">Kategoriya:</span>
                  <span className="detail-value">
                    {selectedProduct.category === 'water' ? '💧 Suv' : '🔧 Filtr'}
                  </span>
                </div>
                {selectedProduct.size && (
                  <div className="detail-item">
                    <span className="detail-label">Hajm:</span>
                    <span className="detail-value">{selectedProduct.size}</span>
                  </div>
                )}
                <div className="detail-item">
                  <span className="detail-label">Narx:</span>
                  <span className="detail-value price-highlight">
                    {selectedProduct.price.toLocaleString()} so'm
                  </span>
                </div>
              </div>
              
              <p className="modal-description">{selectedProduct.description}</p>
              
              <div className="modal-features">
                <h4>Xususiyatlar:</h4>
                <ul>
                  <li>✓ Sertifikatlangan mahsulot</li>
                  <li>✓ Tez yetkazib berish</li>
                  <li>✓ Sifat kafolati</li>
                  <li>✓ 24/7 qo'llab-quvvatlash</li>
                </ul>
              </div>
              
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
                Savatga qo'shish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
