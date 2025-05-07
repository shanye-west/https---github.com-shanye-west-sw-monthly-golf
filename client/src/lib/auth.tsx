import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: number;
  username: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, pin: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('token');
    if (token) {
      // TODO: Validate token with backend
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (username: string, pin: string) => {
    try {
      console.log('Attempting login with:', { username, pin });
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, pin }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        throw new Error(errorData.message || 'Invalid credentials');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      localStorage.setItem('token', data.token);
      setUser(data.user);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 