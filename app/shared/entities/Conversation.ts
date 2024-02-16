export type ConversationMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

type Conversation = {
  _id: string;
  owner_id: string;
  node_title: string;
  test_id?: string;
  node_id?: string;
  messages: ConversationMessage[];
};
export default Conversation;
