import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, total, clearCart } = useCart();
  const { createOrder } = useOrders();
  const { t } = useLanguage();
  const [showCheckout, setShowCheckout] = useState(false);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1>{t("cart.title")}</h1>
          <div className="empty-cart">
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="9" cy="21" r="1" strokeWidth="1.5" />
              <circle cx="20" cy="21" r="1" strokeWidth="1.5" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
              />
            </svg>
            <p>{t("cart.empty_title")}</p>
            <Link to="/products" className="btn btn-primary">
              {t("cart.shop_now")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleCheckout = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    createOrder({
      items: cart,
      total,
      customerName: formData.get("name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      paymentMethod: formData.get("payment"),
      notes: formData.get("notes"),
    });

    clearCart();
    setShowCheckout(false);

    setTimeout(() => {
      window.location.href = "/orders";
    }, 100);
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1>{t("cart.title")}</h1>

        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">
                  {item.price.toLocaleString()} so'm
                </p>
              </div>

              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  {(item.price * item.quantity).toLocaleString()} so'm
                </div>

                <button
                  className="btn-remove"
                  onClick={() => removeFromCart(item.id)}
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>{t("cart.total")}:</span>
            <strong>{total.toLocaleString()} so'm</strong>
          </div>
          <button
            className="btn btn-primary btn-block"
            onClick={() => setShowCheckout(true)}
          >
            {t("cart.checkout")}
          </button>
        </div>

        {showCheckout && (
          <div className="modal" onClick={() => setShowCheckout(false)}>
            <div
              className="modal-content checkout-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setShowCheckout(false)}
              >
                ×
              </button>
              <h2>{t("cart.modal.title")}</h2>
              <form onSubmit={handleCheckout}>
                <input
                  type="text"
                  name="name"
                  placeholder={t("cart.modal.name")}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("cart.modal.phone")}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder={t("cart.modal.address")}
                  required
                />
                <select name="payment" required>
                  <option value="">
                    {t("cart.modal.payment.placeholder")}
                  </option>
                  <option value="Naqd pul">
                    {t("cart.modal.payment.cash")}
                  </option>
                  <option value="Plastik karta">
                    {t("cart.modal.payment.card")}
                  </option>
                  <option value="Click">{t("cart.modal.payment.click")}</option>
                  <option value="Payme">{t("cart.modal.payment.payme")}</option>
                </select>
                <textarea
                  type="text"
                  name="notes"
                  placeholder={t("cart.modal.notes")}
                  rows="3"
                ></textarea>
                <button
                  onClick={() => {
                    // Buyurtmani yaratish va cartni tozalash
                    const orderData = {
                      id: Date.now().toString(),
                      items: cart,
                      total: total,
                      status: 'confirmed',
                      date: new Date().toISOString()
                    };
                    
                    // Buyurtmani yaratish
                    createOrder(orderData);
                    
                    // Cartni tozalash
                    clearCart();
                    
                    // Modalni yopish
                    setShowCheckout(false);
                    
                    // Orders ga o'tish
                    navigate("/orders");
                  }}
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  {t("cart.modal.confirm")} ({total.toLocaleString()} so'm)
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
