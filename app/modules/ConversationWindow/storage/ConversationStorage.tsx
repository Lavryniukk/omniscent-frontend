import { create } from "zustand";
import { getConversationData } from "@/app/shared/api/conversations/getConversationData";
import Conversation from "@/app/shared/entities/Conversation";
import ConversationMessage from "@/app/shared/entities/ConversationMessage";
import listenForUpdates from "../helpers/listenToEvent";
import sendUserMessage from "../api/sendUserMessage";
import listenToSse from "../helpers/listenToEvent";
import SubroadmapNodeInterface from "@/app/shared/entities/SubroadmapNode";
import toggleIsCompleted from "@/app/shared/api/roadmaps/toggleIsCompleted";
import getToken from "../api/getToken";
import fetchConversationInit from "../helpers/fetchConversationInit";
interface ConversationStorageState {
  userInputData: string;
  assistantData: string;
  conversation: Conversation | null;
  tech: SubroadmapNodeInterface | null;
  isLocked: boolean;
  isStreaming: boolean;
}

interface ConversationStorageActions {
  setInputData: (newInputData: string) => void;
  addUserMessage: (newMessage: string, conversation_id: string) => void;
  selectConversation: (tech: SubroadmapNodeInterface) => Promise<Conversation>;
  initConversation: (
    conversation_id: string,
    user_roadmap_id: string,
    node_title: string,
    language: string
  ) => void;
  lock: () => void;
  unlock: () => void;
  setStreaming: (value: boolean) => void;
  toggleIsCompleted: (roadmapId: string, tech_title: string) => void;
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

  tech: null,
  async toggleIsCompleted(roadmapId, tech_title) {
    await toggleIsCompleted(roadmapId, tech_title);
    get().lock();
  },

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

  async selectConversation(tech) {
    if (!get().isStreaming) {
      set({ tech: tech });
      const conversation = (await getConversationData(
        tech.conversation_id
      )) as Conversation;
      set({ conversation: conversation });
      set({
        isLocked: true,
      });
      return conversation;
    } else {
      return get().conversation as Conversation;
    }
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
    const res = (await sendUserMessage(content, conversation_id)) as string;
    const callback = get().updateLastAssistantMessage;
    set({ userInputData: "" });
    listenToSse(conversation_id, res, callback, get().lock, () => {});
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

  initConversation: async (
    conversationId,
    userRoadmapId,
    noteTitle,
    language
  ) => {
    let newConversation = get().conversation as Conversation;
    newConversation.messages.push({
      role: "assistant",
      content: "",
    });
    set({
      conversation: newConversation,
    });
    noteTitle = noteTitle.replaceAll("%20", " ");
    const token = await getToken();
    listenForUpdates(
      conversationId,
      token,
      get().updateLastAssistantMessage,
      () => {
        get().lock;
        set({ isStreaming: true });
      },
      () => {
        set({ isStreaming: false });
      }
    );
    let res = await fetchConversationInit(
      conversationId,
      userRoadmapId,
      noteTitle,
      language
    );
    if (!res) {
      alert("an error occurred, please retry");
    }
  },
}));

export default useConversationStorage;
