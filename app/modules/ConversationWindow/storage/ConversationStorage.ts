import { create } from "zustand";
import { getConversationData } from "@/app/shared/api/conversations/fetchConversationData";

import listenForUpdates from "../helpers/listenToEvent";
import sendUserMessage from "../api/sendUserMessage";
import listenToSse from "../helpers/listenToEvent";
import getToken from "../api/getToken";
import fetchConversationInit from "../api/fetchConversationInit";
import { Conversation, ConversationMessage } from "@/app/shared/entities";
interface ConversationStorageState {
  userInputData: string;
  assistantData: string;
  conversation: Conversation | undefined;
  isLocked: boolean;
  isStreaming: boolean;
}

interface ConversationStorageActions {
  setInputData: (newInputData: string) => void;
  addUserMessage: (roadmapId: string) => void;
  setConversation: (newConversationId: string) => void;
  initConversation: (
    user_roadmap_id: string | undefined,
    language: string | undefined
  ) => void;
  lock: () => void;
  unlock: () => void;
  setStreaming: (value: boolean) => void;
  updateLastAssistantMessage: (newValue: string) => void;
}

const useConversationStorage = create<
  ConversationStorageActions & ConversationStorageState
>((set, get) => ({
  conversation: undefined,
  async setConversation(newConversationId) {
    const newConversation = await getConversationData(newConversationId);
    set({
      conversation: newConversation,
    });
  },
  userInputData: "",



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

  isStreaming: false,
  setStreaming(value) {
    set({ isStreaming: value });
  },

  assistantData: "",

  setInputData: (newInputData) => set({ userInputData: newInputData }),

  async addUserMessage(roadmapId) {
    let conversation = get().conversation as Conversation;
    const message = get().userInputData;

    conversation.messages.push({
      role: "user",
      content: message,
    });
    set({
      conversation: conversation,
    });
    const token = await getToken();

    listenToSse(
      conversation._id,
      token,
      get().updateLastAssistantMessage,
      get().lock,
      () => {}
    );

    await sendUserMessage(message, conversation._id, roadmapId);
    set({ userInputData: "" });
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

  initConversation: async (userRoadmapId, language) => {
    let newConversation = get().conversation as Conversation;
    const conversationId = newConversation._id;
    newConversation.messages.push({
      role: "assistant",
      content: "isLoading",
    });
    set({
      conversation: newConversation,
    });

    const accessToken = await getToken();
    listenForUpdates(
      conversationId,
      accessToken,
      get().updateLastAssistantMessage,
      () => {
        get().lock;
        set({ isStreaming: true });
      },
      () => {
        set({ isStreaming: false });
      }
    );

    void (await fetchConversationInit({
      conversationId,
      userRoadmapId,
      language,
    }));
  },
}));

export default useConversationStorage;
