import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    const navigate = useNavigate(); // ✅ Moved useNavigate inside function
    navigate("/profile"); 
  };

  const logout = () => {
    setIsAuthenticated(false);
    const navigate = useNavigate(); // ✅ Moved useNavigate inside function
    navigate("/login"); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
