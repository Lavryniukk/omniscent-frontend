import { create } from "zustand";
import type { Quiz } from "@/app/entities";
import listenForSse from "../helpers/listen-to-sse";
import { fetchInitQuiz, fetchSendMessage } from "@/app/entities/quiz/api";

import { Message } from "../../../shared/entities";

interface QuizStorageState {
  userInputData: string;
  assistantData: string;
  quiz?: Quiz;
  isLocked: boolean;
  isStreaming: boolean;
}

interface QuizStorageActions {
  setInputData: (newInputData: string) => void;
  addUserMessage: (roadmapId: string) => Promise<void>;
  setQuiz: (quiz: Quiz) => void;
  initQuiz: (user_roadmap_id: string) => Promise<void>;
  lock: () => void;
  unlock: () => void;
  setStreaming: (value: boolean) => void;
  updateLastAssistantMessage: (newValue: string) => void;
}

const useQuizStorage = create<QuizStorageActions & QuizStorageState>(
  (set, get) => ({
    // Initial state
    quiz: undefined,
    userInputData: "",
    assistantData: "",
    isLocked: true,
    isStreaming: false,

    // Actions
    setInputData: (newInputData) => set({ userInputData: newInputData }),

    setQuiz: (quiz) =>
      set({
        quiz,
      }),

    addUserMessage: async (roadmapId) => {
      const { quiz, userInputData, updateLastAssistantMessage } = get();
      if (!quiz) return;

      const updatedMessages: Message[] = [
        ...quiz.messages,
        { role: "user", content: userInputData },
      ];
      set({
        quiz: { ...quiz, messages: updatedMessages },
      });

      try {
        listenForSse(quiz._id, updateLastAssistantMessage, () => {
          set({
            isStreaming: true,
          });
        });

        await fetchSendMessage({
          content: userInputData,
          quizId: quiz._id,
          roadmapId,
        });
        set({ userInputData: "" });
      } catch (error) {
        console.error("Failed to add user message", error);
      }
    },

    updateLastAssistantMessage: (newValue) => {
      set((state) => {
        if (!state.quiz) return {};
        const lastMessage = state.quiz.messages[state.quiz.messages.length - 1];
        const updatedMessages =
          lastMessage?.role === "assistant"
            ? [
                ...state.quiz.messages.slice(0, -1),
                { ...lastMessage, content: newValue },
              ]
            : [
                ...state.quiz.messages,
                { role: "assistant", content: newValue },
              ];
        return {
          ...state,
          quiz: { ...state.quiz, messages: updatedMessages },
        };
      });
    },

    initQuiz: async (roadmapId) => {
      const { quiz, updateLastAssistantMessage } = get();
      if (!quiz) return;

      try {
        listenForSse(quiz._id, updateLastAssistantMessage, () => {
          set({ isStreaming: false });
        });

        set({
          isStreaming: true,
          quiz: {
            ...quiz,
            messages: [
              ...quiz.messages,
              { role: "assistant", content: "isLoading" },
            ],
          },
        });
        void fetchInitQuiz({ quizId: quiz._id, roadmapId });
      } catch (error) {
        console.error("Failed to initialize quiz", error);
        set({ isStreaming: false });
      }
    },

    lock: () => set({ isLocked: true }),
    unlock: () => set({ isLocked: false }),
    setStreaming: (value) => set({ isStreaming: value }),
  })
);
export default useQuizStorage;
