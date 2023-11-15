export default interface ConversationMessage {
  role: "user" | "assistant" | "system";
  content: string;
}
