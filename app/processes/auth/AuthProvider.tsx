import { User } from "@/app/entities";
import { fetchUser } from "@/app/entities/user/api";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

const AuthContext = createContext<UseQueryResult<User>>(
  {} as UseQueryResult<User>
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const user = useQuery(["user"], fetchUser);

  console.log("user", user);

  return (
    <AuthContext.Provider value={{ ...user }}>{children}</AuthContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { useUser, AuthProvider };
