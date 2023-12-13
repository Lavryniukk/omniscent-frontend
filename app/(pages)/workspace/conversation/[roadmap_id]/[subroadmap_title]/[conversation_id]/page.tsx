"use client";

import { ConversationRoadmap, ConversationWindow } from "@/app/modules";
type ConversationPageProps = {
  params: {
    roadmap_id: string;
    subroadmap_title: string;
    conversation_id: string;
  };
};

function Conversation({ params }: ConversationPageProps) {
  function handleResize() {
    let vh = window && window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  window && window.addEventListener("resize", handleResize);
  return (
    <div
      className={`select-none overflow-x-hidden overflow-auto fullheight  w-full h-full flex flex-row overflow-y-auto bg-transparent mx-auto box-border`}
    >
      <ConversationRoadmap
        conversationId={params.conversation_id}
        roadmapId={params.roadmap_id}
        subroadmapTitle={params.subroadmap_title}
      />
      <ConversationWindow
        roadmapId={params.roadmap_id}
        conversationId={params.conversation_id}
      />
    </div>
  );
}

export default Conversation;
