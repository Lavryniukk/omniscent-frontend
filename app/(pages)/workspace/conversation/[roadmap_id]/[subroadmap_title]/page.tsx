"use client";

import ConversationRoadmap from "@/app/modules/ConversationRoadmap/ConversationRoadmap";
import ConversationWindow from "@/app/modules/ConversationWindow/ConversationWindow";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
interface ConversationPageProps {
  params: {
    roadmap_id: string;
    subroadmap_title: string;
  };
}

export default withPageAuthRequired(
  function Conversation({ params }: ConversationPageProps) {
    return (
      <div className="select-none overflow-x-hidden h-screen w-screen flex flex-row overflow-y-auto bg-transparent mx-auto box-border   ">
        <ConversationRoadmap
          roadmap_id={params.roadmap_id}
          subroadmap_title={params.subroadmap_title}
        />
        <ConversationWindow roadmap_id={params.roadmap_id} />
        {/* <Hints /> */}
      </div>
    );
  },
  { returnTo: `/workspace` }
);
