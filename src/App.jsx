import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import { WishlistProvider } from "./context/WishlistContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MouseFollower from "./components/MouseFollower";
import ScrollToTop from "./components/ScrollToTop";
import LiveChat from "./components/LiveChat";
import FloatingButton from "./components/FloatingButton";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import "./styles/cart-orders.css";

import { LanguageProvider } from "./context/LanguageContext";
import PageTransition from "./components/PageTransition";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <WishlistProvider>
          <OrderProvider>
            <CartProvider>
              <Router>
              <ScrollToTop />
              <div className="app">
                <MouseFollower />
                <Navbar />
                <main className="main-content">
                  <PageTransition>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/orders" element={<Orders />} />
                      <Route path="/wishlist" element={<Wishlist />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </PageTransition>
                </main>
                <Footer />
                <LiveChat />
                <FloatingButton />
              </div>
            </Router>
          </CartProvider>
        </OrderProvider>
      </WishlistProvider>
    </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
