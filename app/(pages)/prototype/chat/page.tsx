"use client";
type message = {
  role: "user" | "assistant" | "system";
  content: string;
};
import { useState } from "react";

const Chat = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [chat, setChat] = useState<Array<message>>([
    { role: "system", content: "Speak italiano" },
    { role: "user", content: "Speak italiano" },
    { role: "assistant", content: "Ok, bozo" },
  ]);

  const addUserMessage = (content: string) => {
    setChat([...chat, { role: "user", content: content }]);
    console.log("Added user message: ", content);
  };
  const addAssistantMessage = (assData: string) => {
    setChat([...chat, { role: "assistant", content: assData }]);
    console.log("Added ass message: ", assData);
  };
  const sendChatData = async () => {
    let question = inputValue;
    addUserMessage(question);

    let res = await fetch("https://model-prototype.onrender.com/model", {
      method: "POST",
      body: JSON.stringify({ messages: chat }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.body) {
      let data: string = "";

      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          addAssistantMessage(data);

          break;
        }
        data += value;
        console.log(data);
        setInputValue(data);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  let result = chat.map((message: message, index: number) => {
    switch (message.role) {
      case "user":
        return (
          <div
            key={index}
            className="w-3/4 border rounded-lg text-text py-4 pl-8 flex items-center justify-start"
          >
            User: {message.content}
          </div>
        );
      case "assistant":
        return (
          <div
            key={index}
            className="w-3/4 border rounded-lg text-accent py-4 pl-8 flex items-center justify-start"
          >
            Assistant: {message.content}
          </div>
        );
    }
  });
  return (
    <div
      className="space-y-10 select-none overflow-x-hidden px-10 bg-transparent mx-auto box-border max-w-10xl
w-full my-32 h-fit"
    >
      <div className="text-accent border flex-col w-full">
        <div className=" rounded-lg space-y-4 border"> {result}</div>
      </div>
      <div className="w-10/12 h-10 select-none flex items-center mt-10 overflow-hidden border border-accent outline-none rounded-lg mx-auto ">
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          value={inputValue}
          placeholder="I want to learn..."
          className="bg-transparent w-10/12 h-full px-2 text-accent box-border outline-none focus:border-text"
        />
        <button
          onClick={sendChatData}
          type="submit"
          className="text-text bg-secondary duration-200 border border-accent opacity-70 hover:opacity-100 transition-all w-1/12 h-2/3 rounded-lg box-border"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
