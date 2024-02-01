"use client";
import Button from "@/app/UI/buttons/Button";
import useConversationStorage from "../../storage/ConversationStorage";
import { useUser } from "@clerk/nextjs";

interface InitConversationButtonProps {
  roadmapId: string;
  nodeTitle: string | undefined;
}

export default function InitConversationButton({
  roadmapId,
  nodeTitle,
}: InitConversationButtonProps) {
  const { user, isLoaded } = useUser();

  const initConversation = useConversationStorage(
    (state) => state.initConversation
  );

  return (
    <div className="absolute top-[45%]">
      <Button
        disabled={!isLoaded}
        callback={async () => {
          isLoaded &&
            initConversation(
              roadmapId,
              user?.unsafeMetadata.language as string
            );
        }}
        size="lg"
      >
        Start learning
      </Button>
    </div>
  );
}
