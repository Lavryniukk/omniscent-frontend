"use client";
import { message } from "@/app/shared/types/message";
import useChatStore from "@/app/shared/storages/chatStorage";
const Chat = () => {
  const setInputData = useChatStore((state) => state.setInputData);
  const assistantData = useChatStore((state) => state.assistantData);
  const userInputData = useChatStore((state) => state.userInputData);
  const isLoading = useChatStore((state) => state.isLoading);
  const chat = useChatStore((state) => state.chat);
  const sendData = useChatStore((state) => state.sendData);

  let result = chat.map((message: message, index: number) => {
    switch (message.role) {
      case "user":
        return (
          <div
            key={index}
            className="w-full border-accent h-fit rounded-lg text-accent py-4 lg:pl-8 pl-3 "
          >
            User: {message.content}
          </div>
        );
      case "assistant":
        return (
          <div
            key={index}
            className="w-full rounded-lg h-fit border-accent text-accent py-4 lg:pl-8 pl-3 bg-secondary"
          >
            Assistant:{" "}
            {chat[chat.length - 1] === message
              ? assistantData
              : message.content}
          </div>
        );
    }
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the form from actually submitting and reloading the page
    !isLoading && sendData(); // Trigger the sendChatData function
  };
  return (
    <div
      className="space-y-10 select-none overflow-x-hidden overflow-y-scroll px-10 bg-transparent mx-auto box-border max-w-10xl
w-full my-32 h-fit"
    >
      <div className="text-accent flex-col bg-transparent w-3/4   mx-auto">
        {result}
      </div>
      <div className="w-10/12 h-10 select-none border backdrop-blur-md flex items-center overflow-hidden  border-accent outline-none rounded-lg absolute bottom-[10%] right-[8.3%]">
        <form className=" w-full h-full" onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => {
              setInputData(e.target.value);
            }}
            value={userInputData}
            placeholder="I want to learn..."
            className="bg-transparent xl:w-10/12 md:w-[80%] lg:w-10/12 sm:w-9/12 w-8/12 h-full px-2 text-accent box-border outline-none focus:border-text"
          />
          <button
            type="submit"
            className="text-text bg-secondary duration-200 border border-accent opacity-70 hover:opacity-100 transition-all w-[100px] xl:ml-6 lg:ml-4 md:ml-4 sm:text-sm h-2/3 rounded-lg box-border"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
