import { create } from "zustand";
import { message, roleType } from "@/app/shared/types/message";
interface StoreState {
  userInputData: string;
  isLoading: boolean;
  assistantData: string;
  chat: Array<message>;
}
interface StorageActions {
  setInputData: (newInputData: string) => void;
  clearInputData: () => void;
  setLoading: (data: boolean) => void;
  clearAssistantData: () => void;
  updateAssistantData: (chunk: string) => void;
  updateLastMessage: (data: string) => void;
  addMessage: (role: roleType, message: string) => void;
  sendData: () => void;
}

const useChatStore = create<StoreState & StorageActions>((set, get) => ({
  userInputData: "",
  setInputData: (newInputData) => set({ userInputData: newInputData }),
  clearInputData: () => set({ userInputData: "" }),
  isLoading: false,
  setLoading: (value) => set({ isLoading: value }),
  assistantData: "",
  clearAssistantData: () => {
    set({ assistantData: "" });
  },
  updateAssistantData: (chunk) =>
    set((state) => ({ assistantData: state.assistantData + chunk })),
  chat: [{ role: "system", content: "You are a helpful assistant" }],
  updateLastMessage: (data) => {
    const chat: Array<message> = get().chat;
    let lastMessage: message = chat[chat.length - 1];
    lastMessage.content = data;
    let newChat: Array<message> = chat;
    newChat.pop();
    newChat.push(lastMessage);
    set({ chat: newChat });
  },
  addMessage: (role, message) => {
    let newMessage = { role: role, content: message };
    console.log(get().chat);
    set((state) => ({
      chat: [...state.chat, newMessage],
    }));
    console.log(get().chat);
  },
  sendData: async () => {
    const clearAssistantData = get().clearAssistantData;
    const updateAssistantData = get().updateAssistantData;
    const updateLastMessage = get().updateLastMessage;
    const clearInputData = get().clearInputData;

    clearAssistantData();
    get().addMessage("user", get().userInputData);
    clearInputData();
    let res = await fetch(
      "https://omniscient-backend.onrender.com/chat/inference",
      {
        method: "POST",
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          temperature: 0,
          messages: get().chat,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res.ok && res.body) {
      clearInputData();

      get().setLoading(true);
      get().addMessage("assistant", get().assistantData);
      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          clearInputData;

          let saveData = get().assistantData;
          updateLastMessage(saveData);
          get().setLoading(false);
          break;
        }

        updateAssistantData(value);
        updateLastMessage(get().assistantData);
      }
    }
  },
}));
export default useChatStore;
