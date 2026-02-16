import { createContext, useContext, useState, useEffect } from 'react';
import { 
  getWishlist, 
  addToWishlistAPI, 
  removeFromWishlistAPI, 
  clearWishlistAPI 
} from '../services/wishlistService';
import { getProductsData } from '../data/products';

const WishlistContext = createContext();

export { WishlistContext };

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load wishlist from API on mount
  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Check if user is logged in
      const token = localStorage.getItem('access_token');
      if (!token) {
        // If not logged in, load from localStorage
        const saved = localStorage.getItem('wishlist');
        setWishlist(saved ? JSON.parse(saved) : []);
        return;
      }
      
      // If logged in, load from API
      const wishlistData = await getWishlist();
      
      // Get full product details
      const products = await getProductsData();
      const wishlistWithProducts = wishlistData.map(item => {
        const product = products.find(p => p.id === item.product_id);
        return product || null;
      }).filter(Boolean);
      
      setWishlist(wishlistWithProducts);
    } catch (error) {
      console.error('Load wishlist error:', error);
      setError(error.message);
      // Fallback to localStorage
      const saved = localStorage.getItem('wishlist');
      setWishlist(saved ? JSON.parse(saved) : []);
    } finally {
      setLoading(false);
    }
  };

  const addToWishlist = async (product) => {
    try {
      setError(null);
      
      // Check if already in wishlist
      if (wishlist.some(item => item.id === product.id)) {
        return;
      }
      
      const token = localStorage.getItem('access_token');
      if (token) {
        // Add to API
        await addToWishlistAPI(product.id);
      }
      
      // Update local state
      setWishlist(prev => [...prev, product]);
      
      // Update localStorage as fallback
      const saved = localStorage.getItem('wishlist');
      const localWishlist = saved ? JSON.parse(saved) : [];
      localStorage.setItem('wishlist', JSON.stringify([...localWishlist, product]));
      
    } catch (error) {
      console.error('Add to wishlist error:', error);
      setError(error.message);
      // Still add locally even if API fails
      setWishlist(prev => [...prev, product]);
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      setError(null);
      
      const token = localStorage.getItem('access_token');
      if (token) {
        // Remove from API
        await removeFromWishlistAPI(productId);
      }
      
      // Update local state
      setWishlist(prev => prev.filter(item => item.id !== productId));
      
      // Update localStorage
      const saved = localStorage.getItem('wishlist');
      const localWishlist = saved ? JSON.parse(saved) : [];
      const updatedLocal = localWishlist.filter(item => item.id !== productId);
      localStorage.setItem('wishlist', JSON.stringify(updatedLocal));
      
    } catch (error) {
      console.error('Remove from wishlist error:', error);
      setError(error.message);
      // Still remove locally even if API fails
      setWishlist(prev => prev.filter(item => item.id !== productId));
    }
  };

  const clearWishlist = async () => {
    try {
      setError(null);
      
      const token = localStorage.getItem('access_token');
      if (token) {
        // Clear from API
        await clearWishlistAPI();
      }
      
      // Clear local state
      setWishlist([]);
      
      // Clear localStorage
      localStorage.setItem('wishlist', JSON.stringify([]));
      
    } catch (error) {
      console.error('Clear wishlist error:', error);
      setError(error.message);
      // Still clear locally even if API fails
      setWishlist([]);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlist, 
      loading,
      error,
      addToWishlist, 
      removeFromWishlist,
      clearWishlist,
      isInWishlist,
      loadWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};
