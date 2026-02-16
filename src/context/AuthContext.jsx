import { createContext, useContext, useState, useEffect } from 'react';
import { login, register, getCurrentUser, logout, isAuthenticated } from '../services/authService';

const AuthContext = createContext();

export { AuthContext };

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check authentication on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      if (isAuthenticated()) {
        const userData = await getCurrentUser();
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
      }
    } catch (error) {
      console.error('Check auth error:', error);
      // Clear invalid token
      logout();
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      
      const authData = await login(credentials);
      const userData = await getCurrentUser();
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      
      return authData;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (userData) => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await register(userData);
      
      // Don't auto-login after registration, let user login manually
      return result;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    logout();
    setUser(null);
    setError(null);
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      error,
      isAuthenticated: !!user,
      login: loginUser,
      register: registerUser,
      logout: logoutUser,
      clearError,
      checkAuth
    }}>
      {children}
    </AuthContext.Provider>
  );
};
