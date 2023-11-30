import Conversation from "@/app/shared/entities/Conversation";
import Message from "./components/Message";

export default function Messages({
  conversation,
}: {
  conversation: Conversation;
}) {
  const messages = conversation && conversation.messages;

  return (
    <div
      role="presentation"
      className="overflow-auto w-full py-5 h-auto max-h-full min-w-[350px] flex-col"
    >
      {messages?.map((message, index) => (
        <Message content={message.content} role={message.role} key={index} />
      ))}
    </div>
  );
}
