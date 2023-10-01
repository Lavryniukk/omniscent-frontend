import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  const login = () => {}; // auth login function
  const logout = () => {}; // auth logout function

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
