import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the User interface
interface User {
  name: string;
  email: string;
}

// Define the AuthContextProps interface
interface AuthContextProps {
  user: User | null;
  addUser: (userData: User) => void;
  logout: () => void;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

// Create the AuthContext with a proper default value
export const AuthContext = createContext<AuthContextProps>({
  user: null, // Default user is null
  addUser: () => {}, // Default no-op function
  logout: () => {},  // Default no-op function
});

// Define the AuthProviderProps interface
interface AuthProviderProps {
  children: ReactNode;
}

// Create the AuthProvider component
export const AuthProvider = ({ children }:AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const addUser = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, addUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
