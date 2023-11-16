"use client";

import Hints from "@/app/UI/static/Coversations/Hints/ConvoHints";
import DiscoverChat from "@/app/modules/DiscoverChat/DiscoverChat";
interface ConversationPageProps {
  params: {
    roadmap_id: string;
    subroadmap_title: string;
    conversation_id: string;
    tech_title: string;
  };
}

const Chat = ({ params }: ConversationPageProps) => {
  return (
    <div className="select-none  overflow-x-hidden gap-5 flex lg:flex-row flex-col overflow-y-auto px-1 md:px-10 bg-transparent mx-auto box-border max-w-10xl w-full my-20 h-fit">
      <DiscoverChat
        roadmap_id={params.roadmap_id}
        conversation_id={params.conversation_id}
        tech_title={params.tech_title}
      />
      <Hints />
    </div>
  );
};

export default Chat;
