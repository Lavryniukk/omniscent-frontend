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
    <div className="select-none overflow-x-hidden flex lg:flex-row flex-col overflow-y-auto px-10 bg-transparent mx-auto box-border max-w-10xl w-full my-20 h-fit">
      <DiscoverChat conversation_id={params.conversation_id} />
      <Hints />
    </div>
  );
};

export default Chat;
