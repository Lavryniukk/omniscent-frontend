import Conversation, {
  ConversationMessage,
} from "@/app/shared/entities/Conversation";

export default function changeLastMessage(
  newValue: string,
  conversation: Conversation | undefined
) {
  if (!conversation) {
    throw new Error("Conversation is undefined");
  }
  const lastMessage = conversation.messages?.pop();
  if (lastMessage?.role === "assistant") {
    conversation.messages.push({
      role: "assistant",
      content: newValue,
    });
  } else {
    conversation.messages.push(lastMessage as ConversationMessage);
    conversation.messages.push({
      role: "assistant",
      content: newValue,
    });
    return conversation;
  }
}
