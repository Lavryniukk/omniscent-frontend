"use client";
import Conversation, {
  ConversationMessage,
} from "@/app/shared/entities/Conversation";
import Messages from "./components/Messages/Messages";
import InitConversationButton from "./components/InitConversationButton/InitConversationButton";
import useConversationStorage from "./storage/ConversationStorage";
import ConversationInput from "./components/ConversationInput/ConversationInput";
import { useEffect } from "react";
import { getConversationData } from "@/app/shared/api/conversations/fetchConversationData";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";

export default function ConversationWindow({
  roadmapId,
  conversationId,
}: {
  roadmapId: string;
  conversationId: string;
}) {
  const setConversation = useConversationStorage(
    (state) => state.setConversation
  );
  const { data, isLoading } = useQuery(
    ["conversation"],
    async () => {
      const newConversation = await getConversationData(conversationId);
      newConversation && setConversation(newConversation);
      return newConversation;
    },
    { refetchInterval: 20000 }
  );

  useEffect(() => {
    try {
      const handleResize = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      };

      handleResize(); // Set the initial value
      window.addEventListener("resize", handleResize);

      // Cleanup function to remove the event listener
      return () => window.removeEventListener("resize", handleResize);
    } catch (e) {
      console.log(e);
    }
  }, []);
  const messages = data?.messages as ConversationMessage[];

  return (
    <div
      className={`w-full flex items-center flex-1 flex-col h-full border-accent bg-secondary relative overflow-hidden `}
    >
      <div className="w-full rounded-b-lg top-0 left-0 text-text tracking-widest py-4 flex items-center justify-center text-xl font-bold text-center bg-background">
        {!isLoading ? data?.node_title : <Skeleton width="50%" height="5px" />}
      </div>
      <div className="flex  w-full flex-col h-full max-h-full overflow-y-auto">
        <Messages conversation={data as Conversation} />
      </div>
      {!messages?.length && (
        <InitConversationButton
          nodeTitle={data?.node_title}
          roadmapId={roadmapId}
        />
      )}
      <ConversationInput roadmapId={roadmapId} />
    </div>
  );
}
