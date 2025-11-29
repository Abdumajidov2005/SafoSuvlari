import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './components/Toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProgressBar from './components/ProgressBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
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
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <ToastProvider>
      <CartProvider>
        <div className="app">
          <ProgressBar />
          <Navbar />
          <main className="main-content">
            {renderPage()}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
