export type ConversationMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

type Conversation = {
  _id: string;
  owner_id: string;
  node_title: string;
  messages: ConversationMessage[];
};
export default Conversation;
