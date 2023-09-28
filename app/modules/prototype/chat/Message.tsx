import useChatStore from "@/app/shared/storages/chatStorage";
import { message } from "@/app/shared/types/message";

let Messages = () => {
  const chat = useChatStore((state) => state.chat);
  const assistantData = useChatStore((state) => state.assistantData);
  let result = chat.map((message: message, index: number) => {
    switch (message.role) {
      case "user":
        return (
          <div
            key={index}
            className="w-full text-sm md:text-base lg:text-lg border-accent h-fit rounded-lg pr-2 text-accent py-4 lg:pl-8 pl-3 "
          >
            User: {message.content}
          </div>
        );
      case "assistant":
        return (
          <div
            key={index}
            className="w-full text-sm md:text-base lg:text-lg rounded-lg h-fit border-accent  pr-2  text-accent py-4 lg:pl-8 pl-3 bg-secondary"
          >
            Assistant:{" "}
            {chat[chat.length - 1] === message
              ? assistantData
              : message.content}
          </div>
        );
    }
  });
  return (
    <div className="text-accent flex-col border bg-transparent w-full h-fit max-w-[800px] mx-auto">
      {result}
    </div>
  );
};
export default Messages;
