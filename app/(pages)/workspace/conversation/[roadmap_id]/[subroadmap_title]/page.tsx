"use client";

import { ConversationRoadmap, ConversationWindow } from "@/app/modules";
type ConversationPageProps = {
  params: {
    roadmap_id: string;
    subroadmap_title: string;
  };
};

function Conversation({ params }: ConversationPageProps) {
  return (
    <div
      className={`select-none overflow-x-hidden overflow-auto fullheight w-full h-full flex flex-row overflow-y-auto bg-transparent mx-auto box-border`}
    >
      <ConversationRoadmap
        roadmapId={params.roadmap_id}
        subroadmapTitle={params.subroadmap_title}
      />
      <ConversationWindow roadmapId={params.roadmap_id} />
    </div>
  );
}

export default Conversation;
