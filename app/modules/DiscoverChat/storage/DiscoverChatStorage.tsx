import { create } from "zustand";
import { getChatData } from "@/app/shared/api/conversations/getChatData";
import Conversation from "@/app/shared/entities/Conversation";
import ConversationMessage from "@/app/shared/entities/ConversationMessage";
interface DiscoverChatState {
  userInputData: string;
  assistantData: string;
  conversation: Conversation | null;
  locked: boolean;
}

interface DiscoverChatActions {
  setInputData: (newInputData: string) => void;
  pushMessage: (newMessage: ConversationMessage) => void;
  initConversation: () => void;
  getChatData: (id: string) => Promise<Conversation | undefined>;
  setLocked: (newValue: boolean) => void;
}

const useDiscoverChat = create<DiscoverChatActions & DiscoverChatState>(
  (set, get) => ({
    conversation: null,
    userInputData: "",
    locked: true,
    setLocked(newValue) {
      set({ locked: newValue });
    },
    assistantData:
      "wadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadwwadfawdawdadw",
    setInputData: (newInputData) => set({ userInputData: newInputData }),
    pushMessage: ({ role, content }) => {
      const newMessage = { role: role, content: content };
      // set((state) => ({
      //   chat: [...state.chat, newMessage],
      // }));
    },

    async getChatData(id) {
      const chat = await getChatData(id);
      set({ conversation: chat });
      const newChat = get().conversation;
      set({ locked: newChat?.messages.length ? false : true });
      return chat;
    },
    initConversation: () => {},
  })
);

export default useDiscoverChat;
