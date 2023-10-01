"use client";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext({});
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    let userToken = Cookies.get("token");
    console.log(userToken);
  }, []);
  const login = (accessToken: string) => {
    setUser({ token: accessToken });
  }; // auth login function
  const logout = () => {
    redirect("https://omniscient-backend.onrender.com/user/logout");
  }; // auth logout function

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
