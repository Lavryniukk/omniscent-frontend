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
  return isLoaded ? (
    <div className="absolute top-[45%]">
      <Button
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
  ) : (
    <div className="border-text w-[180px] bg-text text-background absolute top-[calc(50%-62px)] left-[calc(50%-90px)] py-4 rounded-md px-7 text-xl border flex items-center justify-center">
      <div className="h-[40px] aspect-square border-2 border-background/60 border-t-background animate-spin rounded-full py-2" />
    </div>
  );
}
