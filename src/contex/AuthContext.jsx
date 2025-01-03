import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isOwn, setIsOwn] = useState(false);
  const navigation = useNavigate();

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("ref_token");
    setIsLoggedIn(false);
    setIsOwn(false);
    navigation("/login");
  };

  // console.log("🚀 ~ AuthProvider ~ isOwn:", isOwn);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, isOwn, setIsOwn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => useContext(AuthContext);
