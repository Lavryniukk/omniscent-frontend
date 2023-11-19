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
  const initConversation = useConversationStorage(
    (state) => state.initConversation
  );
  return (
    <button
      onClick={async () => {
        initConversation(conversation_id, user_roadmap_id, node_title);
      }}
      className=" border-text bg-text hover:bg-background text-background absolute top-[calc(50%-62px)] left-[calc(50%-90px)]  hover:text-text py-4 rounded-md font-semibold px-7 text-xl text-center border transition-color duration-150"
    >
      Start learning
    </button>
  );
}
