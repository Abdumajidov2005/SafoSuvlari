import React, { useState, useEffect } from 'react';
import api from '../services/api.js';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchProducts();
  }, [searchTerm, selectedCategory]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = {};
      if (searchTerm) params.search = searchTerm;
      if (selectedCategory !== 'all') params.category = selectedCategory;
      
      const data = await api.getProducts(params);
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('Mahsulotlarni yuklashda xatolik: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToWishlist = async (productId) => {
    try {
      await api.addToWishlist(productId);
      alert('Mahsulot wishlistga qo\'shildi!');
    } catch (err) {
      alert('Xatolik: ' + err.message);
    }
  };

  const handleCreateOrder = async (product) => {
    try {
      const orderData = {
        customer_name: 'Test User',
        customer_phone: '+998901234567',
        delivery_address: 'Test address',
        payment_method: 'cash',
        items: [
          {
            product_id: product.id,
            quantity: 1
          }
        ]
      };
      
      const order = await api.createOrder(orderData);
      alert(`Buyurtma #${order.id} yaratildi!`);
    } catch (err) {
      alert('Xatolik: ' + err.message);
    }
  };

  if (loading) {
    return <div className="loading">Yuklanmoqda...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="product-list">
      <div className="filters">
        <input
          type="text"
          placeholder="Qidirish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="all">Barchasi</option>
          <option value="water">Suvlar</option>
          <option value="filter">Filtrlar</option>
        </select>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {product.image_url && (
              <img 
                src={product.image_url} 
                alt={product.name_uz} 
                className="product-image"
              />
            )}
            
            <div className="product-info">
              <h3 className="product-name">{product.name_uz}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-price">{product.price.toLocaleString()} UZS</p>
              {product.size && (
                <p className="product-size">Hajmi: {product.size}</p>
              )}
              {product.stock > 0 ? (
                <p className="product-stock">Soni: {product.stock}</p>
              ) : (
                <p className="product-out-of-stock">Sotuvda yo'q</p>
              )}
            </div>

            <div className="product-actions">
              <button 
                onClick={() => handleAddToWishlist(product.id)}
                className="wishlist-btn"
                disabled={!product.is_active}
              >
                ❤️ Wishlist
              </button>
              
              <button 
                onClick={() => handleCreateOrder(product)}
                className="order-btn"
                disabled={!product.is_active || product.stock === 0}
              >
                🛒 Buyurtma berish
              </button>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="no-products">
          Mahsulotlar topilmadi
        </div>
      )}
    </div>
  );
};

export default ProductList;
