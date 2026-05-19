import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types/user.types';
import { storage } from '../utils/storage';

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
}

interface AuthContextType extends AuthState {
  login: (user: User, token: string) => Promise<void>;
  logout: () => Promise<void>;
  setLoading: (isLoading: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>({
    user: null, // Initialized from async storage if available
    token: null,
    isLoading: true,
  });

  useEffect(() => {
    // Check for token on mount
    const loadAuth = async () => {
      try {
        const token = await storage.getToken();
        if (token) {
          // Typically we would fetch the user profile here with the token
          // For now, we mock the user if token exists
          setState({
            user: {
              id: '1',
              email: 'user@example.com',
              name: 'John Doe',
              createdAt: new Date().toISOString(),
            },
            token,
            isLoading: false,
          });
        } else {
          setState((prev) => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    };

    loadAuth();
  }, []);

  const login = async (user: User, token: string) => {
    await storage.setToken(token);
    setState({ user, token, isLoading: false });
  };

  const logout = async () => {
    await storage.removeToken();
    setState({ user: null, token: null, isLoading: false });
  };

  const setLoading = (isLoading: boolean) => {
    setState((prev) => ({ ...prev, isLoading }));
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
