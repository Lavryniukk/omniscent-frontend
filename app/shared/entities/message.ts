export type Message = {
  role: MessageRole;
  content: string;
};

export type MessageRole = "user" | "model" | "system";
