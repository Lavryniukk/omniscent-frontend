import ConversationMessage from "@/app/shared/entities/ConversationMessage";
import { useQuery } from "@tanstack/react-query";
import Conversation from "@/app/shared/entities/Conversation";
import Messages from "./components/Messages/Messages";
import InitConversationButton from "./components/InitConversationButton/InitConversationButton";
import useConversationStorage from "./storage/ConversationStorage";
import ConversationInput from "./components/ConversationInput/ConversationInput";
import { useEffect } from "react";
interface CoversationChatProps {
  roadmap_id: string;
}
export default function ConversationWindow({
  roadmap_id,
}: CoversationChatProps) {
  const { conversation, selectConversation, conversation_id, tech_title } =
    useConversationStorage();
  // const { isLoading, error } = useQuery(
  //   ["conversation"],
  //   async (): Promise<Conversation> => {
  //     return await getConversation(conversation_id as string);
  //   },
  //   {}
  // );
  const messages = conversation?.messages as ConversationMessage[];
  // return (
  //   <div className="w-full min-w-fit flex items-center flex-col h-full border-accent bg-secondary relative overflow-hidden ">
  //     <div className="w-full text-text tracking-widest py-4 text-xl font-bold text-center bg-secondary-900">
  //       {!error && conversation?.node_title}
  //     </div>
  //     {isLoading ? (
  //       <div className="aspect-square border-text border-t w-1/2 animate-spin top-[20%] rounded-full absolute left-[25%]"></div>
  //     ) : !error ? (
  //       <>
  //         <Messages conversation={conversation as Conversation} />
  //         {!messages?.length && (
  //           <InitConversationButton
  //             node_title={tech_title}
  //             user_roadmap_id={roadmap_id}
  //             conversation_id={conversation_id as string}
  //           />
  //         )}
  //         <ConversationInput conversation_id={conversation_id as string} />
  //       </>
  //     ) : (
  //       <div className="border-accent border rounded-lg mx-auto text-text h-fit space-y-2 py-2 text-lg text-center mt-20 w-80">
  //         <p>Whoops, an error occured during convresation loading</p>
  //         <button
  //           onClick={() => location.reload()}
  //           className="py-1 px-7 text-background bg-text transition-colors hover:text-text duration-200 hover:bg-background border-text border rounded-md"
  //         >
  //           Retry
  //         </button>
  //       </div>
  //     )}
  //   </div>
  // );
  return (
    <div className="w-full min-w-fit flex items-center border flex-col h-full border-accent bg-secondary relative overflow-hidden ">
      <div className="w-full text-text tracking-widest py-4 text-xl font-bold text-center bg-background">
        {conversation?.node_title}
      </div>
      <Messages conversation={conversation as Conversation} />
      {!messages?.length && (
        <InitConversationButton
          node_title={tech_title}
          user_roadmap_id={roadmap_id}
          conversation_id={conversation_id as string}
        />
      )}
      <ConversationInput conversation_id={conversation_id as string} />
    </div>
  );
}
