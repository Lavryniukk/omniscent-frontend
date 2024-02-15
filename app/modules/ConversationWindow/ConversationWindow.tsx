"use client";
import Messages from "./components/Messages/Messages";
import InitConversationButton from "./components/InitConversationButton/InitConversationButton";
import useConversationStorage from "./storage/ConversationStorage";
import ConversationInput from "./components/ConversationInput/ConversationInput";
import { useEffect } from "react";

import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import FeedbackForm from "@/app/components/FeedbackForm,tsx/FeedbackForm";
type QueryParams = {
  queryParams: {
    roadmapId: string;
    conversationId: string;
  };
};
export default function ConversationWindow({ queryParams }: QueryParams) {
  const { conversation, setConversation } = useConversationStorage();
  const { roadmapId, conversationId } = queryParams;
  useEffect(() => {
    setConversation(conversationId);
  }, []);
  const isEmpty = !conversation?.messages?.length;
  return (
    <div
      className={`w-full flex items-center flex-1 flex-col h-full border-accent bg-azure-50/80 dark:bg-azure-50/10 relative overflow-hidden `}
    >
      <div className="w-full rounded-b-lg top-0 left-0 text-text tracking-widest py-4 flex items-center justify-center text-xl font-bold text-center">
        {true ? (
          conversation?.node_title
        ) : (
          <Skeleton width="50%" height="5px" />
        )}
      </div>
      <div className="flex w-full flex-col h-full max-h-full overflow-y-auto">
        {true && <Messages conversation={conversation} />}
      </div>
      {isEmpty && (
        <InitConversationButton
          nodeTitle={conversation?.node_title}
          roadmapId={roadmapId}
        />
      )}
      {!isEmpty && <FeedbackForm  conversationId={conversationId} />}
      {!isEmpty && <ConversationInput roadmapId={roadmapId} />}
    </div>
  );
}
