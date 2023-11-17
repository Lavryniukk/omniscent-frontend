import ConversationMessage from "@/app/shared/entities/ConversationMessage";
import DiscoverInput from "./components/DiscoverInput/DiscoverInput";
import useDiscoverChat from "./storage/DiscoverChatStorage";
import { useQuery } from "@tanstack/react-query";
import Conversation from "@/app/shared/entities/Conversation";
import Messages from "./components/Messages/Messages";
import InitConversationButton from "./components/InitConversationButton/InitConversationButton";
interface CoversationChatProps {
  conversation_id: string;
  roadmap_id: string;
  tech_title: string;
}
export default function DiscoverChat({
  conversation_id,
  roadmap_id,
  tech_title,
}: CoversationChatProps) {
  const { conversation, getChatData } = useDiscoverChat();

  const { isLoading, error } = useQuery(["conversation"], async () => {
    return getChatData(conversation_id);
  });
  const messages = conversation?.messages as ConversationMessage[];
  return (
    <div className="mx-auto border container min-h-[80vh] max-h-[950px] h-full w-full border-accent rounded-lg md:rounded-2xl max-w-[1200px] relative overflow-hidden pt-[5vh]">
      <div className="w-full absolute text-text tracking-widest py-4 text-xl font-bold text-center bg-secondary-900 top-0 left-0">
        {conversation?.node_title}
      </div>
      <Messages
        conversation={conversation as Conversation}
        error={error}
        isLoading={isLoading}
      />
      {!messages?.length && (
        <InitConversationButton
          node_title={tech_title}
          user_roadmap_id={roadmap_id}
          isLoading={isLoading}
          conversation_id={conversation_id}
        />
      )}
      <DiscoverInput />
    </div>
  );
}
