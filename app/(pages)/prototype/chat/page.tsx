"use client";

import Messages from "@/app/modules/prototype/chat/Message";
import ChatInput from "@/app/modules/prototype/chat/ChatInput";
const Chat = () => {
  return (
    <div
      className="select-none overflow-x-hidden flex items-center  flex-col overflow-y-auto  px-10 bg-transparent mx-auto box-border max-w-10xl
w-full my-20 h-fit"
    >
      <Messages />
      <ChatInput />
    </div>
  );
};

export default Chat;
