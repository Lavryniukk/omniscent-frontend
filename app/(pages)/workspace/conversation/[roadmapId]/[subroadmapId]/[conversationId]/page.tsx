"use client";
import { ConversationRoadmap, ConversationWindow } from "@/app/modules";

type ConversationPageProps = {
  params: {
    roadmapId: string;
    subroadmapId: string;
    conversationId: string;
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
      <ConversationRoadmap queryParams={params} />
      <ConversationWindow
        queryParams={{
          conversationId: params.conversationId,
          roadmapId: params.roadmapId,
        }}
      />
    </div>
  );
}

export default Conversation;
