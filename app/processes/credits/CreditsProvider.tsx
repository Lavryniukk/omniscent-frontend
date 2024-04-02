"use client";
import { useQuery } from "@tanstack/react-query";
import React, { ReactNode, createContext, useState } from "react";
import fetchCredits from "./api/fetch-credits";

interface CreditsContextType {
  credits: number | undefined;
  isLoading: boolean;
  error: unknown;
}

export const CreditsContext = createContext<CreditsContextType>({
  credits: 0,
  isLoading: false,
  error: null,
});

const CreditsProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: credits,
    error,
    isLoading,
  } = useQuery(["credits"], () => fetchCredits());
  return (
    <CreditsContext.Provider value={{ credits, error, isLoading }}>
      {children}
    </CreditsContext.Provider>
  );
};

export const useCredits = () => {
  const context = React.useContext(CreditsContext);
  if (context === undefined) {
    throw new Error("useCredits must be used within a CreditsProvider");
  }
  return context;
};

export default CreditsProvider;
