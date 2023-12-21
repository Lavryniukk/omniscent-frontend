"use client";

import { ConversationRoadmap, ConversationWindow } from "@/app/modules";
type ConversationPageProps = {
  params: {
    roadmap_id: string;
    subroadmap_id: string;
    conversation_id: string;
  };
};

function Conversation({ params }: ConversationPageProps) {
  try {
    function handleResize() {
      let vh = window && window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    window && window.addEventListener("resize", handleResize);
  } catch {}
  return (
    <div
      className={`select-none overflow-x-hidden overflow-auto fullheight  w-full h-full flex flex-row overflow-y-auto bg-transparent mx-auto box-border`}
    >
      <ConversationRoadmap
        conversationId={params.conversation_id}
        roadmapId={params.roadmap_id}
        subroadmapId={params.subroadmap_id}
      />
      <ConversationWindow
        roadmapId={params.roadmap_id}
        conversationId={params.conversation_id}
      />
    </div>
  );
}

export default Conversation;
