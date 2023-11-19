import { create } from "zustand";
import { getConversationData } from "@/app/shared/api/conversations/getConversationData";
import Conversation from "@/app/shared/entities/Conversation";
import ConversationMessage from "@/app/shared/entities/ConversationMessage";
import initConversation from "../helpers/initConversationById";
import listenForUpdates from "../helpers/listenToEvent";
import { getAccessToken } from "@auth0/nextjs-auth0";
import sendUserMessage from "../api/sendUserMessage";
import listenToSse from "../helpers/listenToEvent";
interface ConversationStorageState {
  userInputData: string;
  assistantData: string;
  conversation: Conversation | null;
  locked: boolean;
}

interface ConversationStorageActions {
  setInputData: (newInputData: string) => void;
  addUserMessage: (newMessage: string, conversation_id: string) => void;
  initConversation: (
    conversation_id: string,
    user_roadmap_id: string,
    node_title: string
  ) => void;
  getConversation: (id: string) => Promise<Conversation>;
  setLocked: (newValue: boolean) => void;
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

  locked: true,

  setLocked(newValue) {
    set({ locked: newValue });
  },

  assistantData: "g",

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

  async getConversation(id) {
    const conversation = (await getConversationData(id)) as Conversation;
    set({ conversation: conversation });
    set({ locked: conversation.messages.length ? false : true });
    return conversation;
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
    const callback = get().updateLastAssistantMessage;

    listenForUpdates(conversation_id, token as string, callback);
  },
}));

export default useConversationStorage;
