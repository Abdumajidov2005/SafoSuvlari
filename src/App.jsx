import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleNavigation = (e) => {
      if (e.target.tagName === 'A' && e.target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = e.target.pathname.slice(1) || 'home';
        setCurrentPage(path);
        window.history.pushState({}, '', e.target.pathname);
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('click', handleNavigation);
    
    const path = window.location.pathname.slice(1) || 'home';
    setCurrentPage(path);

    return () => document.removeEventListener('click', handleNavigation);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'products': return <Products />;
      case 'cart': return <Cart />;
      case 'orders': return <Orders />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <OrderProvider>
        <CartProvider>
          <div className="app">
            <Navbar />
            <main className="main-content">
              {renderPage()}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </OrderProvider>
    </ThemeProvider>
  );
}

export default App;
