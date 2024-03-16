"use client";
import { User } from "@/app/entities";
import { fetchUser } from "@/app/entities/user/api";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  auth: UseQueryResult<User>;
  isAuth: boolean;
};
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);
  const auth = useQuery({
    queryKey: ["auth"],
    queryFn: () => {
      return fetchUser();
    },
    refetchOnMount: true,
  });
  const handleAuthData = useCallback(() => {
    if (auth.data) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [auth.data]);

  useEffect(() => {
    
    handleAuthData();
  }, [auth.data, auth.error, handleAuthData]);

  return (
    <AuthContext.Provider value={{ auth, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return { ...context.auth, isAuth: context.isAuth };
};

export { useAuth, AuthProvider };
