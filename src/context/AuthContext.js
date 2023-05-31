import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");

  const [token, setToken] = useState(encodedToken || "");
  const [profile, setProfile] = useState({
    firstName: "",
    email: "",
    lastName: "",
  });

  return (
    <AuthContext.Provider value={{ token, setToken, profile, setProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
