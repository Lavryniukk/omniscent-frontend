import useChatStore from "@/app/modules/prototype/chat/chatStorage";
import { message } from "@/app/modules/prototype/chat/types/message";

let Messages = () => {
  // Retrieve chat and assistantData from the chat storage.
  const chat = useChatStore((state) => state.chat);
  const assistantData = useChatStore((state) => state.assistantData);

  // Map through chat messages and render based on the message role.
  let result = chat.map((message: message, index: number) => {
    switch (message.role) {
      case "user":
        return (
          <div
            key={index}
            className="w-full text-sm md:text-base lg:text-lg border-accent bg-background h-fit rounded-lg pr-2 text-accent py-4 lg:pl-8 pl-3 "
          >
            User: {message.content}
            {/* Render user messages with their content. */}
          </div>
        );
      case "assistant":
        return (
          <div
            key={index}
            className="w-full text-sm md:text-base lg:text-lg rounded-lg h-fit border-secondary dark:bg-secondary pr-2 bg-secondary text-accent py-4 lg:pl-8 pl-3 border"
          >
            Assistant:
            {chat[chat.length - 1] === message
              ? assistantData // Render assistant's response or assistantData if it's the last message in the chat.
              : message.content}
            {/* Render assistant's message content. */}
          </div>
        );
    }
  });

  return (
    <div className="text-accent flex-col mb-32 bg-transparent w-full h-fit max-w-[800px] mx-auto">
      {result} {/* Render the chat messages here. */}
    </div>
  );
};

export default Messages;
