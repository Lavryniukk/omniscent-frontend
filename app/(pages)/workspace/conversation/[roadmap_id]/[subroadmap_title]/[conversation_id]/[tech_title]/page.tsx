"use client";

import Hints from "@/app/UI/static/Coversations/Hints/ConvoHints";
import ConversationWindow from "@/app/modules/ConversationWindow/ConversationWindow";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
interface ConversationPageProps {
  params: {
    roadmap_id: string;
    subroadmap_title: string;
    conversation_id: string;
    tech_title: string;
  };
}

export default withPageAuthRequired(
  function Conversation({ params }: ConversationPageProps) {
    return (
      <div className="select-none overflow-x-hidden h-screen flex lg:flex-row flex-col overflow-y-auto bg-transparent mx-auto box-border max-w-10xl w-full  ">
        <div className="w-[20vw] block border"></div>
        <ConversationWindow
          roadmap_id={params.roadmap_id}
          conversation_id={params.conversation_id}
          tech_title={params.tech_title}
        />
        {/* <Hints /> */}
      </div>
    );
  },
  { returnTo: `/workspace` }
);
