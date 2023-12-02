"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import fetchUserData from "../../api/fetchUserData";
import useConversationStorage from "../../storage/ConversationStorage";

interface InitConversationButtonProps {
  conversation_id: string;
  user_roadmap_id: string;
  node_title: string;
}

export default function InitConversationButton({
  conversation_id,
  user_roadmap_id,
  node_title,
}: InitConversationButtonProps) {
  const isLoading = true;
  // const { user } = useUser();
  // const { data, isLoading } = useQuery({
  //   queryKey: ["initConversationUser"],
  //   queryFn: async () => await fetchUserData(user?.sub as string),
  // });
  // console.log(data && data.user_metadata.bio.language);
  // const initConversation = useConversationStorage(
  //   (state) => state.initConversation
  // );
  return !isLoading ? (
    // <button
    //   onClick={async () => {
    //     initConversation(
    //       conversation_id,
    //       user_roadmap_id,
    //       node_title,
    //       data.user_metadata.bio.language
    //     );
    //   }}
    //   className=" border-text bg-text hover:bg-background text-background absolute top-[calc(50%-62px)] left-[calc(50%-90px)]  hover:text-text py-4 rounded-md font-semibold px-7 text-xl text-center border transition-color duration-150"
    // >
    //   Start learning
    // </button>
    <></>
  ) : (
    <div className="border-text w-[180px] bg-text text-background absolute top-[calc(50%-62px)] left-[calc(50%-90px)] py-4 rounded-md px-7 text-xl border flex items-center justify-center">
      <div className="h-[40px] aspect-square border-2 border-background/60 border-t-background animate-spin rounded-full py-2" />
    </div>
  );
}
