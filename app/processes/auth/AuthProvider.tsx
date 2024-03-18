"use client";
import { User } from "@/app/entities";
import useAsync, { UseAsyncReturnType } from "@/app/shared/hooks/useAsync";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import isAuthorized from "./api/fetch-is-authorized";
import { useRouter, useSearchParams } from "next/navigation";

type AuthContextType = UseAsyncReturnType<boolean>;

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const authorized = searchParams.get("authorized");

  const auth = useAsync(isAuthorized);

  useEffect(() => {
    if (authorized) {
      auth.refetch();
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorized]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { useAuth, AuthProvider };
