import Conversation from "@/app/shared/entities/Conversation";
import Message from "./components/Message";

export default function Messages({
  conversation,
}: {
  conversation: Conversation;
}) {
  const messages = conversation && conversation.messages;

  return (
    <div className="overflow-y-auto relative w-full min-h-[83%] items-center justify-center max-h-[83%]   flex-col">
      {messages?.map((message, index) => (
        <Message content={message.content} role={message.role} key={index} />
      ))}
    </div>
  );
}
