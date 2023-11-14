"use client";

import Hints from "@/app/UI/static/Coversations/Hints/ConvoHints";
import DiscoverChat from "@/app/modules/DiscoverChat/DiscoverChat";

const Chat = () => {
  return (
    <div className="select-none overflow-x-hidden flex lg:flex-row flex-col overflow-y-auto px-10 bg-transparent mx-auto box-border max-w-10xl w-full my-20 h-fit">
      <DiscoverChat />
      <Hints />
    </div>
  );
};

export default Chat;
