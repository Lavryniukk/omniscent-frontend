import { create } from "zustand";
import { message, roleType } from "../../prototype/chat/types/message";

interface DiscoverChatState {
  userInputData: string;
  assistantData: string;
  chat: Array<message>;
}

interface DiscoverChatActions {
  setInputData: (newInputData: string) => void;
  pushMessage: ({ role, content }: { role: roleType; content: string }) => void;
  sendData: () => void;
  initConversation: () => void;
}

const useDiscoverChat = create<DiscoverChatActions & DiscoverChatState>(
  (set, get) => ({
    chat: [],
    userInputData: "",
    assistantData:
      "wadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadw",
    setInputData: (newInputData) => set({ userInputData: newInputData }),
    pushMessage: ({ role, content }: { role: roleType; content: string }) => {
      const newMessage = { role: role, content: content };
      set((state) => ({
        chat: [...state.chat, newMessage],
      }));
    },

    sendData: async () => {
      const pushMessage = get().pushMessage;
      const userInputData = get().userInputData;
      const assistantData = get().assistantData;

      const res = await fetch("/chat/");
    },
    initConversation: () => {},
  })
);

export default useDiscoverChat;
