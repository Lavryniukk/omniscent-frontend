import Conversation from "@/app/shared/entities/Conversation";
import Message from "./components/Message";
import SubroadmapNodeInterface from "@/app/shared/entities/SubroadmapNode";
import useConversationStorage from "../../storage/ConversationStorage";
export default function Messages({
  conversation,
  roadmapId,
  tech,
}: {
  roadmapId: string;
  conversation: Conversation;
  tech: SubroadmapNodeInterface;
}) {
  const messages = conversation && conversation.messages;

  return (
    <div
      role="presentation"
      className="overflow-auto w-full py-5 h-auto max-h-full min-w-[350px] flex-col"
    >
      {messages?.map((message, index) => {
        return (
          <Message content={message.content} role={message.role} key={index} />
        );
      })}
    </div>
  );
}
