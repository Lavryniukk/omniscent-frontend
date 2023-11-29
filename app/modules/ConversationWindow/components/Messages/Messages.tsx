import Conversation from "@/app/shared/entities/Conversation";
import Message from "./components/Message";

export default function Messages({
  conversation,
}: {
  conversation: Conversation;
}) {
  const messages = conversation && conversation.messages;

  return (
    <div className="overflow-y-auto relative lg:w-auto w-fit items-center justify-center max-h-[90vh] pb-40 flex-col lg:ml-0 ml-12">
      {messages?.map((message, index) => (
        <Message content={message.content} role={message.role} key={index} />
      ))}
    </div>
  );
}
