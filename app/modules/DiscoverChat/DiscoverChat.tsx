"use client";
import ConversationMessage from "@/app/shared/entities/ConversationMessage";
import DiscoverInput from "./components/DiscoverInput/DiscoverInput";
import Message from "./components/Message/Message";
import useDiscoverChat from "./storage/DiscoverChatStorage";
import { getChatData } from "@/app/shared/api/conversations/getChatData";
import { useQuery } from "@tanstack/react-query";
import Conversation from "@/app/shared/entities/Conversation";
interface CoversationChatProps {
  conversation_id: string;
}
export default function DiscoverChat({
  conversation_id,
}: CoversationChatProps) {
  const { chat, getChatData } = useDiscoverChat();

  const { data, isLoading, error } = useQuery(["conversation"], async () => {
    return getChatData(conversation_id);
  });
  console.log(error);
  const messages = chat?.messages as ConversationMessage[];
  return (
    <div className="mx-auto border container min-h-[80vh] max-h-[950px] h-full border-accent rounded-2xl max-w-[1200px] relative overflow-hidden pt-[5vh]">
      <div className="w-full absolute text-text tracking-widest py-4 text-xl font-bold text-center bg-secondary-900 top-0 left-0">
        {chat?.node_title}
      </div>

      <div className="overflow-y-auto relative max-h-[63vh] w-full p-0 m-0 flex items-center justify-center  h-fit flex-col">
        {chat &&
          !isLoading &&
          messages.map((item, index) => (
            <Message key={index} type={item.role} content={item.content} />
          ))}
      </div>
      {messages && !messages.length && !isLoading && (
        <button
          onClick={async () => {
            const res = await getChatData(conversation_id);
            console.log(res);
          }}
          className=" border-text bg-text hover:bg-background text-background absolute top-[calc(50%-62px)] left-[calc(50%-90px)]  hover:text-text py-4 rounded-md font-semibold px-7 text-xl text-center border transition-color duration-150"
        >
          Start learning
        </button>
      )}
      <DiscoverInput />
    </div>
  );
}
