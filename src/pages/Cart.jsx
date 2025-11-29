import { useCart } from '../context/CartContext';
import { useToast } from '../components/Toast';
import { useState } from 'react';
import FadeIn from '../components/FadeIn';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, total, clearCart } = useCart();
  const { addToast } = useToast();
  const [showCheckout, setShowCheckout] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1>Savat</h1>
          <div className="empty-cart">
            <p>🛒 Savatingiz bo'sh</p>
            <a href="/products" className="btn btn-primary">Xarid qilish</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Savat</h1>
        
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">{item.price.toLocaleString()} so'm</p>
              </div>
              
              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                
                <div className="cart-item-total">
                  {(item.price * item.quantity).toLocaleString()} so'm
                </div>
                
                <button 
                  className="btn-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>Jami:</span>
            <strong>{total.toLocaleString()} so'm</strong>
          </div>
          <button 
            className="btn btn-primary btn-block"
            onClick={() => setShowCheckout(true)}
          >
            Buyurtma berish
          </button>
        </div>

        {showCheckout && (
          <div className="modal" onClick={() => setShowCheckout(false)}>
            <div className="modal-content checkout-modal" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setShowCheckout(false)}>×</button>
              <h2>Buyurtma berish</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                addToast('Buyurtma qabul qilindi! Tez orada siz bilan bog\'lanamiz.', 'success');
                clearCart();
                setShowCheckout(false);
              }}>
                <input type="text" placeholder="Ismingiz" required />
                <input type="tel" placeholder="Telefon raqam" required />
                <input type="text" placeholder="Manzil" required />
                <select required>
                  <option value="">To'lov turini tanlang</option>
                  <option value="cash">Naqd pul</option>
                  <option value="card">Plastik karta</option>
                  <option value="click">Click</option>
                  <option value="payme">Payme</option>
                </select>
                <textarea placeholder="Izoh (ixtiyoriy)" rows="3"></textarea>
                <button type="submit" className="btn btn-primary btn-block">
                  Tasdiqlash ({total.toLocaleString()} so'm)
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
