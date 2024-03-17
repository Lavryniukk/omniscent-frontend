import { create } from "zustand";
import type { Lesson } from "@/app/entities";
import listenForUpdates from "../helpers/listen-to-sse";
import {
  fetchInitLesson,
  fetchLesson,
  fetchSendMessage,
} from "@/app/entities/lesson/api";

import { Message } from "../../../shared/entities";
import Cookies from "js-cookie";

const getToken = () => {
  return Cookies.get("access_token") as string;
};

interface LessonStorageState {
  userInputData: string;
  assistantData: string;
  lesson?: Lesson;
  isLocked: boolean;
  isStreaming: boolean;
}

interface LessonStorageActions {
  setInputData: (newInputData: string) => void;
  addUserMessage: (roadmapId: string) => Promise<void>;
  setLesson: (lesson: Lesson) => void;
  initLesson: (user_roadmap_id: string) => Promise<void>;
  lock: () => void;
  unlock: () => void;
  setStreaming: (value: boolean) => void;
  updateLastAssistantMessage: (newValue: string) => void;
}

const useLessonStorage = create<LessonStorageActions & LessonStorageState>(
  (set, get) => ({
    // Initial state
    lesson: undefined,
    userInputData: "",
    assistantData: "",
    isLocked: true,
    isStreaming: false,

    // Actions
    setInputData: (newInputData) => set({ userInputData: newInputData }),

    setLesson: (lesson) =>
      set({
        lesson,
      }),

    addUserMessage: async (roadmapId) => {
      const { lesson, userInputData, updateLastAssistantMessage } = get();
      if (!lesson) return;

      const updatedMessages: Message[] = [
        ...lesson.messages,
        { role: "user", content: userInputData },
      ];
      set({
        lesson: { ...lesson, messages: updatedMessages },
      });

      try {
        listenForUpdates(lesson._id, updateLastAssistantMessage, () => {
          set({
            isStreaming: true,
          });
        });

        await fetchSendMessage({
          content: userInputData,
          lessonId: lesson._id,
          roadmapId,
        });
        set({ userInputData: "" });
      } catch (error) {
        console.error("Failed to add user message", error);
      }
    },

    updateLastAssistantMessage: (newValue) => {
      set((state) => {
        if (!state.lesson) return {};
        const lastMessage =
          state.lesson.messages[state.lesson.messages.length - 1];
        const updatedMessages =
          lastMessage?.role === "assistant"
            ? [
                ...state.lesson.messages.slice(0, -1),
                { ...lastMessage, content: newValue },
              ]
            : [
                ...state.lesson.messages,
                { role: "assistant", content: newValue },
              ];
        return {
          ...state,
          lesson: { ...state.lesson, messages: updatedMessages },
        };
      });
    },

    initLesson: async (roadmapId) => {
      const { lesson, updateLastAssistantMessage } = get();
      if (!lesson) return;

      try {
        listenForUpdates(lesson._id, updateLastAssistantMessage, () => {
          set({ isStreaming: false });
        });

        set({
          isStreaming: true,
          lesson: {
            ...lesson,
            messages: [
              ...lesson.messages,
              { role: "assistant", content: "isLoading" },
            ],
          },
        });
        void fetchInitLesson({ lessonId: lesson._id, roadmapId });
      } catch (error) {
        console.error("Failed to initialize lesson", error);
        set({ isStreaming: false });
      }
    },

    lock: () => set({ isLocked: true }),
    unlock: () => set({ isLocked: false }),
    setStreaming: (value) => set({ isStreaming: value }),
  })
);
export default useLessonStorage;
