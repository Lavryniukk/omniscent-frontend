"use client";
import Messages from "./components/Messages/Messages";
import InitConversationButton from "./components/InitConversationButton/InitConversationButton";
import useConversationStorage from "./storage/ConversationStorage";
import ConversationInput from "./components/ConversationInput/ConversationInput";
import { useEffect } from "react";

import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
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

  return (
    <div
      className={`w-full flex items-center flex-1 flex-col h-full border-accent bg-secondary relative overflow-hidden `}
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
      {!conversation?.messages?.length && (
        <InitConversationButton
          nodeTitle={conversation?.node_title}
          roadmapId={roadmapId}
        />
      )}
      <ConversationInput roadmapId={roadmapId} />
    </div>
  );
}
