"use client";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { useAuth } from "..";

export function SignedOut({ children }: { children: React.ReactNode }) {
  const { data: isAuthorized, isLoading } = useAuth();

  return (
    <>
      {isLoading && <Skeleton className="w-full h-full" />}
      {!isAuthorized && children}
    </>
  );
}
