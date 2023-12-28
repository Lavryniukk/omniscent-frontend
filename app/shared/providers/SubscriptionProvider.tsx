"use client";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect, useState } from "react";
import fetchSubscription from "../api/fetchSubscription";
import { Subscription } from "../entities";
// Create a new context
const SubscriptionContext = createContext<any>(null);
export const useSubscription = (): {
  subscription: Subscription;
  isLoading: boolean;
} => {
  return useContext(SubscriptionContext);
};

const SubscriptionProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    data: subscription,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["subscription"],
    queryFn: async () => {
      return await fetchSubscription();
    },
  });

  return (
    <SubscriptionContext.Provider value={{ subscription, isLoading }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export default SubscriptionProvider;
