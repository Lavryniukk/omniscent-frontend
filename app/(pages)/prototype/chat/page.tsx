"use client";
type message = {
  role: "user" | "assistant" | "system";
  content: string;
};
import { useEffect, useRef, useState } from "react";
const Chat = () => {
  const [inputData, setInputData] = useState<string>("");
  const assistantDataRef = useRef<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rerender, setRerender] = useState<boolean>(false);
  const chatRef = useRef<Array<message>>([
    { role: "system", content: "Believe in god" },
  ]);

  const addMessage = (
    messageRole: "user" | "assistant" | "system",
    messageContent: string
  ) => {
    chatRef.current.push({ role: messageRole, content: messageContent });
  };
  let updateLastMessage = (messageContent: string) => {
    let lastMessage = chatRef.current[chatRef.current.length - 1];
    lastMessage.content = messageContent.repeat(1);
    chatRef.current[chatRef.current.length - 1] = lastMessage;
  };
  const sendChatData = async () => {
    assistantDataRef.current = "";

    addMessage("user", inputData);
    setInputData("");
    let res = await fetch("https://model-prototype.onrender.com/model", {
      method: "POST",
      body: JSON.stringify({ messages: chatRef.current }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.body) {
      setIsLoading(true);
      let rerender = setInterval(() => {
        setRerender((prev) => !prev);
      }, 50);

      addMessage("assistant", assistantDataRef.current);
      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          setInputData("");
          updateLastMessage(assistantDataRef.current);
          setIsLoading(false);
          clearInterval(rerender);
          break;
        }

        assistantDataRef.current += value;
        updateLastMessage(assistantDataRef.current);
      }
    }
  };

  let result = chatRef.current.map((message: message, index: number) => {
    switch (message.role) {
      case "user":
        return (
          <div
            key={index}
            className="w-`full  border-accent rounded-lg text-accent py-4 lg:pl-8 pl-3 "
          >
            User: {message.content}
          </div>
        );
      case "assistant":
        return (
          <div
            key={index}
            className="w-full rounded-lg  border-accent text-accent py-4 lg:pl-8 pl-3  bg-secondary"
          >
            Assistant:{" "}
            {chatRef.current[chatRef.current.length - 1] === message
              ? assistantDataRef.current
              : message.content}
          </div>
        );
    }
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the form from actually submitting and reloading the page
    !isLoading && sendChatData(); // Trigger the sendChatData function
  };
  return (
    <div
      className="space-y-10 select-none overflow-x-hidden  overflow-y-scroll px-10 bg-transparent mx-auto box-border max-w-10xl
w-full my-32 h-fit"
    >
      <div className="text-accent flex-col w-3/4 overflow-y-scroll mx-auto">
        {result}
      </div>
      <div className="w-10/12 h-10 select-none border backdrop-blur-md flex items-center overflow-hidden  border-accent outline-none rounded-lg absolute bottom-[10%] right-[8.3%]">
        <form className=" w-full h-full" onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => {
              setInputData(e.target.value);
            }}
            value={inputData}
            placeholder="I want to learn..."
            className="bg-transparent xl:w-10/12 md:w-[80%] lg:w-10/12 sm:w-9/12 w-8/12 h-full px-2 text-accent box-border outline-none focus:border-text"
          />
          <button
            type="submit"
            className="text-text bg-secondary  duration-200 border border-accent opacity-70 hover:opacity-100 transition-all w-[100px] xl:ml-6 lg:ml-4 md:ml-4 sm:text-sm h-2/3 rounded-lg box-border"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
