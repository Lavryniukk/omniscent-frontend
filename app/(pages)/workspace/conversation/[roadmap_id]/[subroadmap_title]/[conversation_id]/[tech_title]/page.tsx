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
      <div className="select-none overflow-x-hidden gap-5 flex lg:flex-row flex-col overflow-y-auto px-1 md:px-10 bg-transparent mx-auto box-border max-w-10xl w-full my-20 h-fit">
        <ConversationWindow
          roadmap_id={params.roadmap_id}
          conversation_id={params.conversation_id}
          tech_title={params.tech_title}
        />
        <Hints />
      </div>
    );
  },
  { returnTo: `/workspace` }
);
