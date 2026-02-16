import { API_URL } from '../config/constants';

// Subscribe to newsletter
export const subscribeNewsletter = async (email) => {
  try {
    const response = await fetch(`${API_URL}/newsletter/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    
    if (!response.ok) {
      throw new Error('Failed to subscribe to newsletter');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Subscribe newsletter error:', error);
    throw error;
  }
};

// Unsubscribe from newsletter
export const unsubscribeNewsletter = async (email) => {
  try {
    const response = await fetch(`${API_URL}/newsletter/unsubscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to unsubscribe from newsletter');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Unsubscribe newsletter error:', error);
    throw error;
  }
};

// Get all subscribers (Admin only)
export const getSubscribers = async () => {
  try {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('Authentication required');
    }
    
    const response = await fetch(`${API_URL}/newsletter/subscribers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch subscribers');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Get subscribers error:', error);
    throw error;
  }
};
