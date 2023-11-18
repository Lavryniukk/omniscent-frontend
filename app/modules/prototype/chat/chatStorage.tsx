import { create } from "zustand";
import { message, roleType } from "@/app/modules/prototype/chat/types/message";

// Define the state structure of the store.
interface StoreState {
  userInputData: string; // User input data.
  isLoading: boolean; // Loading indicator.
  assistantData: string; // Data from the assistant.
  chat: Array<message>; // Array to store chat messages.
}

// Define the actions that can be used to modify the store.
interface StorageActions {
  setInputData: (newInputData: string) => void; // Set user input data.
  clearInputData: () => void; // Clear user input data.
  setLoading: (data: boolean) => void; // Set loading state.
  clearAssistantData: () => void; // Clear assistant data.
  updateAssistantData: (chunk: string) => void; // Update assistant data.
  updateLastMessage: (data: string) => void; // Update the last message in the chat.
  addMessage: (role: roleType, message: string) => void; // Add a message to the chat.
  sendData: () => void; // Send user input data to the server and manage responses.
}

// Create a Zustand store that combines the state and actions.
const useChatStore = create<StoreState & StorageActions>((set, get) => ({
  userInputData: "", // Initialize user input data.
  setInputData: (newInputData) => set({ userInputData: newInputData }), // Set user input data.
  clearInputData: () => set({ userInputData: "" }), // Clear user input data.
  isLoading: false, // Initialize loading state.
  setLoading: (value) => set({ isLoading: value }), // Set loading state.
  assistantData: "", // Initialize assistant data.
  clearAssistantData: () => {
    set({ assistantData: "" }); // Clear assistant data.
  },
  updateAssistantData: (chunk) =>
    set((state) => ({ assistantData: state.assistantData + chunk })), // Update assistant data.
  chat: [{ role: "system", content: "You are a helpful assistant" }], // Initialize chat with a system message.
  updateLastMessage: (data) => {
    const chat: Array<message> = get().chat;
    let lastMessage: message = chat[chat.length - 1];
    lastMessage.content = data; // Update the content of the last message in the chat.
    let newChat: Array<message> = chat;
    newChat.pop();
    newChat.push(lastMessage);
    set({ chat: newChat }); // Update the chat with the modified last message.
  },
  addMessage: (role, message) => {
    let newMessage = { role: role, content: message };
    set((state) => ({
      chat: [...state.chat, newMessage], // Add a new message to the chat.
    }));
  },
  sendData: async () => {
    const clearAssistantData = get().clearAssistantData;
    const updateAssistantData = get().updateAssistantData;
    const updateLastMessage = get().updateLastMessage;
    const clearInputData = get().clearInputData;

    clearAssistantData(); // Clear existing assistant data.
    get().addMessage("user", get().userInputData); // Add the user's message to the chat.
    clearInputData(); // Clear user input data.
    let res = await fetch(
      "https://omniscient-backend.onrender.com/chat/inference", // Define the server URL for inference.
      {
        method: "POST",
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          temperature: 0,
          messages: get().chat, // Send the chat history as messages to the server.
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res.ok && res.body) {
      clearInputData(); // Clear user input data.

      get().setLoading(true); // Set loading state to true.
      get().addMessage("assistant", get().assistantData); // Add the assistant's response to the chat.
      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          clearInputData; // Clear user input data.

          let saveData = get().assistantData; // Save assistant data.
          updateLastMessage(saveData); // Update the last message in the chat.
          get().setLoading(false); // Set loading state to false.
          break;
        }

        updateAssistantData(value); // Update assistant data.
        updateLastMessage(get().assistantData); // Update the last message in the chat.
      }
    }
  },
}));

export default useChatStore; // Export the useChatStore for use in other parts of the application.
