import { create } from "zustand";
import { getChatData } from "@/app/shared/api/conversations/getChatData";
import Conversation from "@/app/shared/entities/Conversation";
import ConversationMessage from "@/app/shared/entities/ConversationMessage";
import initConversation from "../helpers/initConversationById";
interface DiscoverChatState {
  userInputData: string;
  assistantData: string;
  conversation: Conversation | null;
  locked: boolean;
}

interface DiscoverChatActions {
  setInputData: (newInputData: string) => void;
  addUserMessage: (newMessage: ConversationMessage) => void;
  initConversation: (
    conversation_id: string,
    user_roadmap_id: string,
    node_title: string
  ) => void;
  getChatData: (id: string) => Promise<Conversation | undefined>;
  setLocked: (newValue: boolean) => void;
  updateLastAssistantMessage: (newValue: string) => void;
}

const useDiscoverChat = create<DiscoverChatActions & DiscoverChatState>(
  (set, get) => ({
    conversation: null,
    userInputData: "",
    locked: true,
    setLocked(newValue) {
      set({ locked: newValue });
    },
    assistantData: "g",
    setInputData: (newInputData) => set({ userInputData: newInputData }),
    addUserMessage(content) {
      const conversation = get().conversation;
    },
    updateLastAssistantMessage(newValue) {
      let conversation = get().conversation;
      const lastMessage = conversation?.messages.pop();
      if (lastMessage?.role === "assistant") {
        conversation?.messages.push({
          role: "assistant",
          content: newValue,
        });
      } else {
        conversation?.messages.push(lastMessage as ConversationMessage);
        conversation?.messages.push({
          role: "assistant",
          content: newValue,
        });
      }
      set({ conversation: conversation });
    },

    async getChatData(id) {
      const chat = await getChatData(id);
      set({ conversation: chat });
      const newChat = get().conversation;
      set({ locked: newChat?.messages.length ? false : true });

      return chat;
    },
    initConversation: async (conversation_id, user_roadmap_id, node_title) => {
      await initConversation(conversation_id, user_roadmap_id, node_title);
    },
  })
);

export default useDiscoverChat;
