import { create } from "zustand";
import { message, roleType } from "../../prototype/chat/types/message";
import { getChatData } from "@/app/shared/api/conversations/getChatData";
import Conversation from "@/app/shared/entities/Conversation";
interface DiscoverChatState {
  userInputData: string;
  assistantData: string;
  chat: Conversation | null;
  locked: boolean;
}

interface DiscoverChatActions {
  setInputData: (newInputData: string) => void;
  pushMessage: ({ role, content }: { role: roleType; content: string }) => void;
  initConversation: () => void;
  getChatData: (id: string) => Promise<Conversation | undefined>;
  setLocked: (newValue: boolean) => void;
}

const useDiscoverChat = create<DiscoverChatActions & DiscoverChatState>(
  (set, get) => ({
    chat: null,
    userInputData: "",
    locked: true,
    setLocked(newValue) {
      set({ locked: newValue });
    },
    assistantData:
      "wadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadw",
    setInputData: (newInputData) => set({ userInputData: newInputData }),
    pushMessage: ({ role, content }: { role: roleType; content: string }) => {
      const newMessage = { role: role, content: content };
      // set((state) => ({
      //   chat: [...state.chat, newMessage],
      // }));
    },

    async getChatData(id) {
      const chat = await getChatData(id);
      set({ chat: chat });
      const newChat = get().chat;
      set({ locked: newChat?.messages.length ? false : true });
      return chat;
    },
    initConversation: () => {},
  })
);

export default useDiscoverChat;
