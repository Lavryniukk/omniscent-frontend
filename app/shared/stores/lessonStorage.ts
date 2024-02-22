//TODO - this shit must be refactored

import { create } from "zustand";
import listenForUpdates from "../../modules/Lesson/helpers/listenToEvent";
import sendUserMessage from "../../modules/Lesson/api/sendUserMessage";
import listenToSse from "../../modules/Lesson/helpers/listenToEvent";
import getToken from "../../modules/Lesson/api/getToken";
import { Lesson, LessonMessage } from "@/app/shared/entities";
import fetchLessonInit from "@/app/modules/Lesson/api/fetchLessonInit";
import { fetchLesson } from "../api/lessons/fetchLesson";

interface LessonStorageState {
  userInputData: string;
  assistantData: string;
  lesson: Lesson | undefined;
  isLocked: boolean;
  isStreaming: boolean;
}

interface LessonStorageActions {
  setInputData: (newInputData: string) => void;
  addUserMessage: (roadmapId: string) => void;
  setLesson: (newLessonId: string) => void;
  initLesson: (
    user_roadmap_id: string | undefined,
    language: string | undefined
  ) => void;
  lock: () => void;
  unlock: () => void;
  setStreaming: (value: boolean) => void;
  updateLastAssistantMessage: (newValue: string) => void;
}

const useLessonStorage = create<LessonStorageActions & LessonStorageState>(
  (set, get) => ({
    lesson: undefined,
    async setLesson(newLessonId) {
      const newLesson = await fetchLesson(newLessonId);
      set({
        lesson: newLesson,
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
      let lesson = get().lesson as Lesson;
      const message = get().userInputData;

      lesson.messages.push({
        role: "user",
        content: message,
      });
      set({
        lesson: lesson,
      });
      const token = await getToken();

      listenToSse(
        lesson._id,
        token,
        get().updateLastAssistantMessage,
        get().lock,
        () => {}
      );

      await sendUserMessage(message, lesson._id, roadmapId);
      set({ userInputData: "" });
    },

    updateLastAssistantMessage(newValue) {
      let lesson = get().lesson;
      const lastMessage = lesson?.messages.pop();
      if (lastMessage?.role === "assistant") {
        lesson?.messages.push({
          role: "assistant",
          content: newValue,
        });
      } else {
        lesson?.messages.push(lastMessage as LessonMessage);
        lesson?.messages.push({
          role: "assistant",
          content: newValue,
        });
      }
      set({ lesson: lesson });
    },

    initLesson: async (userRoadmapId, language) => {
      let lesson = get().lesson;
      if (!lesson) return;
      const lessonId = lesson._id;
      console.log(lesson.test_id);
      lesson.messages.push({
        role: "assistant",
        content: "isLoading",
      });
      set({
        lesson: lesson,
      });

      const accessToken = await getToken();
      listenForUpdates(
        lessonId,
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

      await fetchLessonInit({
        lessonId,
        roadmapId: userRoadmapId,
        language,
      });
    },
  })
);

export default useLessonStorage;
