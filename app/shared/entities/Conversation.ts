import ConversationMessage from "./ConversationMessage";

export default interface Conversation {
  _id: string;
  owner_id: string;
  node_title: string;
  messages: ConversationMessage[];
}
