import { create } from "zustand";
import { getConversationData } from "@/app/shared/api/conversations/getConversationData";
import Conversation from "@/app/shared/entities/Conversation";
import ConversationMessage from "@/app/shared/entities/ConversationMessage";
import initConversation from "../helpers/initConversationById";
import listenForUpdates from "../helpers/listenToEvent";
import sendUserMessage from "../api/sendUserMessage";
import listenToSse from "../helpers/listenToEvent";
interface ConversationStorageState {
  userInputData: string;
  assistantData: string;
  conversation: Conversation | null;
  conversation_id: string | undefined;
  isLocked: boolean;
  tech_title: string;
}

interface ConversationStorageActions {
  setInputData: (newInputData: string) => void;
  addUserMessage: (newMessage: string, conversation_id: string) => void;
  selectConversation: (id: string, title: string) => Promise<Conversation>;
  initConversation: (
    conversation_id: string,
    user_roadmap_id: string,
    node_title: string
  ) => void;
  lock: () => void;
  unlock: () => void;

  updateLastAssistantMessage: (newValue: string) => void;
}

const useConversationStorage = create<
  ConversationStorageActions & ConversationStorageState
>((set, get) => ({
  conversation: null,
  // {
  //   _id: "d",
  //   owner_id: "dd",
  //   messages: [{ role: "user", content: "ddddd" }],
  //   node_title: "hi",
  // },
  userInputData: "",

  conversation_id: "",

  isLocked: true,
  lock() {
    set({
      isLocked: true,
    });
  },
  unlock() {
    set({
      isLocked: false,
    });
  },

  tech_title: "",

  assistantData: "",

  async selectConversation(id, title) {
    set({ conversation_id: id, tech_title: title });
    const conversation = (await getConversationData(id)) as Conversation;
    set({ conversation: conversation });
    set({ isLocked: conversation?.messages.length ? false : true });
    return conversation;
  },

  setInputData: (newInputData) => set({ userInputData: newInputData }),

  async addUserMessage(content, conversation_id) {
    let conversation = get().conversation as Conversation;
    conversation.messages.push({
      role: "user",
      content: content,
    });
    set({
      conversation: conversation,
    });
    const res = await sendUserMessage(content, conversation_id);
    const callback = get().updateLastAssistantMessage;
    listenToSse(conversation_id, res as string, callback);
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

  initConversation: async (conversation_id, user_roadmap_id, node_title) => {
    let newconversation = get().conversation as Conversation;
    newconversation.messages.push({
      role: "assistant",
      content: "",
    });
    set({
      conversation: newconversation,
    });
    node_title = node_title.replaceAll("%20", " ");

    const token = await initConversation(
      conversation_id,
      user_roadmap_id,
      node_title
    );
    const callback = () => {
      get().updateLastAssistantMessage;
      set({
        isLocked: true,
      });
    };

    listenForUpdates(conversation_id, token as string, callback);
  },
}));

export default useConversationStorage;
