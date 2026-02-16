import { API_URL } from '../config/constants';

// Send contact message
export const sendContactMessage = async (contactData) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to send contact message');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Send contact message error:', error);
    throw error;
  }
};

// Get all contact messages (Admin only)
export const getContactMessages = async () => {
  try {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('Authentication required');
    }
    
    const response = await fetch(`${API_URL}/contact`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch contact messages');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Get contact messages error:', error);
    throw error;
  }
};

// Mark contact message as read (Admin only)
export const markAsRead = async (contactId) => {
  try {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('Authentication required');
    }
    
    const response = await fetch(`${API_URL}/contact/${contactId}/read`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to mark as read');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Mark as read error:', error);
    throw error;
  }
};
