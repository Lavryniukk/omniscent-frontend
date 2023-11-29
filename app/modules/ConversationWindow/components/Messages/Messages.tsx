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
      className=" overflow-y-auto  w-full  py-10   flex-col"
    >
      {messages?.map((message, index) => (
        <Message content={message.content} role={message.role} key={index} />
      ))}
    </div>
  );
}
