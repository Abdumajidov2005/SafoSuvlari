import { useState, useEffect } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../components/Toast';
import SearchBar from '../components/SearchBar';
import FadeIn from '../components/FadeIn';
import { ProductSkeleton } from '../components/Skeleton';

const Products = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const filteredProducts = products
    .filter(p => filter === 'all' || p.category === filter)
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleAddToCart = (product) => {
    addToCart(product);
    addToast(`${product.name} savatga qo'shildi!`, 'success');
  };

  return (
    <div className="products-page">
      <div className="container">
        <FadeIn>
          <h1>Mahsulotlar</h1>
        </FadeIn>
        
        <FadeIn delay={100}>
          <SearchBar 
            onSearch={setSearchQuery}
            placeholder="Mahsulot qidirish..."
          />
        </FadeIn>
        
        {/* Filter */}
        <FadeIn delay={200}>
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
            Suvlar
          </button>
          <button 
            className={filter === 'filter' ? 'active' : ''} 
            onClick={() => setFilter('filter')}
          >
            Filtrlar
          </button>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => <ProductSkeleton key={i} />)
          ) : filteredProducts.length === 0 ? (
            <div className="no-results">
              <p>🔍 Hech narsa topilmadi</p>
            </div>
          ) : (
            filteredProducts.map((product, index) => (
              <FadeIn key={product.id} delay={index * 50}>
                <div className="product-item">
                  <div className="product-image">
                    {product.category === 'water' ? '💧' : '🔧'}
                  </div>
                  <h3>{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-price">{product.price.toLocaleString()} so'm</div>
                  <div className="product-actions">
                    <button 
                      className="btn btn-secondary"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Batafsil
                    </button>
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      🛒 Savatga
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))
          )}
        </div>
        </FadeIn>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="modal" onClick={() => setSelectedProduct(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
              <div className="modal-image">
                {selectedProduct.category === 'water' ? '💧' : '🔧'}
              </div>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <div className="modal-price">{selectedProduct.price.toLocaleString()} so'm</div>
              <button 
                className="btn btn-primary btn-block"
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
              >
                🛒 Savatga qo'shish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
