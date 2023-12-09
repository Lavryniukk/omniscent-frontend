import Conversation, {
  ConversationMessage,
} from "@/app/shared/entities/Conversation";
import Messages from "./components/Messages/Messages";
import InitConversationButton from "./components/InitConversationButton/InitConversationButton";
import useConversationStorage from "./storage/ConversationStorage";
import ConversationInput from "./components/ConversationInput/ConversationInput";
interface ConversationChatProps {
  roadmap_id: string;
}
export default function ConversationWindow({
  roadmapId,
}: {
  roadmapId: string;
}) {
  const { conversation } = useConversationStorage();

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  const messages = conversation?.messages as ConversationMessage[];

  return (
    <div
      className={`w-full flex items-center flex-1 flex-col h-full border-accent bg-secondary relative overflow-hidden `}
    >
      <div className="w-full rounded-b-lg top-0 left-0 text-text tracking-widest py-4 flex items-center justify-center text-xl font-bold text-center bg-background">
        {conversation?.node_title}
      </div>
      <div className="flex  w-full flex-col h-full max-h-full overflow-y-auto">
        <Messages conversation={conversation as Conversation} />
      </div>
      {!messages?.length && (
        <InitConversationButton
          nodeTitle={conversation?.node_title}
          roadmapId={roadmapId}
        />
      )}
      <ConversationInput roadmapId={roadmapId} />
    </div>
  );
}
