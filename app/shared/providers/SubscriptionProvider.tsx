import React, { createContext, useState } from "react";

// Create a new context
const SubscriptionContext = createContext<any>(null);

// Create a provider component
const SubscriptionProvider = ({ children }: { children: React.ReactNode }) => {
  // Define state variables or any other necessary data
  const [subscription, setSubscription] = useState<string>("");

  //How do i manage the state of subscription? I use nest js backend and stripe
	  //I want to be able to access the subscription state in the whole app/
  return (
    <SubscriptionContext.Provider value={{ subscription, setSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export default SubscriptionProvider;
