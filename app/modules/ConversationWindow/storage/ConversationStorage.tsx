import { create } from "zustand";
import { getConversationData } from "@/app/shared/api/conversations/fetchConversationData";
import Conversation, {
  ConversationMessage,
} from "@/app/shared/entities/Conversation";
import listenForUpdates from "../helpers/listenToEvent";
import sendUserMessage from "../api/sendUserMessage";
import listenToSse from "../helpers/listenToEvent";
import toggleIsCompleted from "@/app/shared/api/roadmaps/toggleIsCompleted";
import getToken from "../api/getToken";
import fetchConversationInit from "../helpers/fetchConversationInit";
import { SubroadmapNode } from "@/app/shared/entities/Roadmap";
interface ConversationStorageState {
  userInputData: string;
  assistantData: string;
  conversation: Conversation | undefined;
  tech: SubroadmapNode | null;
  isLocked: boolean;
  isStreaming: boolean;
}

interface ConversationStorageActions {
  setInputData: (newInputData: string) => void;
  addUserMessage: (roadmapId: string) => void;
  selectConversation: (
    tech: SubroadmapNode
  ) => Promise<Conversation | undefined>;
  initConversation: (
    user_roadmap_id: string | undefined,
    node_title: string | undefined,
    language: string | undefined
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
  conversation: undefined,
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
      set({ tech: tech, isLocked: true });
      const conversation = await getConversationData(tech.conversation_id);
      set({ conversation });

      return conversation;
    } else {
      return get().conversation;
    }
  },

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

    const callback = get().updateLastAssistantMessage;

    listenToSse(conversation._id, token, callback, get().lock, () => {});

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

  initConversation: async (userRoadmapId, noteTitle, language) => {
    let newConversation = get().conversation;
    const conversationId = newConversation?._id;
    newConversation?.messages.push({
      role: "assistant",
      content: "",
    });
    set({
      conversation: newConversation,
    });
    noteTitle?.replaceAll("%20", " ");
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
    await fetchConversationInit(
      conversationId,
      userRoadmapId,
      noteTitle,
      language
    );
  },
}));

export default useConversationStorage;
