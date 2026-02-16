import { API_URL } from '../config/constants';

// Get auth token from localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

// Get user's wishlist
export const getWishlist = async () => {
  try {
    const response = await fetch(`${API_URL}/wishlist/`, {
      method: 'GET',
      headers: getAuthHeaders()
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch wishlist');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Get wishlist error:', error);
    throw error;
  }
};

// Add product to wishlist
export const addToWishlistAPI = async (productId) => {
  try {
    const response = await fetch(`${API_URL}/wishlist/`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ product_id: productId })
    });
    
    if (!response.ok) {
      throw new Error('Failed to add to wishlist');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Add to wishlist error:', error);
    throw error;
  }
};

// Remove product from wishlist
export const removeFromWishlistAPI = async (productId) => {
  try {
    const response = await fetch(`${API_URL}/wishlist/${productId}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    
    if (!response.ok) {
      throw new Error('Failed to remove from wishlist');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Remove from wishlist error:', error);
    throw error;
  }
};

// Clear entire wishlist
export const clearWishlistAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/wishlist/`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    
    if (!response.ok) {
      throw new Error('Failed to clear wishlist');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Clear wishlist error:', error);
    throw error;
  }
};
