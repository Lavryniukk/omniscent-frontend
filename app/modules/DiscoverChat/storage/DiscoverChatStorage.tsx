import { create } from "zustand";

interface DiscoverChatState {
  userInputData: string;
}

interface DiscoverChatActions {
  setInputData: (newInputData: string) => void; // Set user input data.
}

const useDiscoverChat = create<DiscoverChatActions & DiscoverChatState>(
  (set) => ({
    userInputData: "",
    setInputData: (newInputData) => set({ userInputData: newInputData }),
  })
);

export default useDiscoverChat;
