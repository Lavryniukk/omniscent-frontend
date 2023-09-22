"use client";
type Chat = { answer: string; question: string };
import { useState, Fragment } from "react";
const Chat = () => {
  const [question, setQuestion] = useState<string>("");

  const [chat, setChat] = useState<Array<Chat>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = () => {
    if (question.length > 0) {
      const newItem = question;

      console.log("work");

      setChat([...chat, { answer: sendData(newItem), question: newItem }]);
    }
  };

  const sendData = (data: string) => {
    console.log(data);

    const answer = "answer";

    return answer;
  };
  return (
    <div
      className="space-y-10 select-none overflow-x-hidden px-10 bg-transparent mx-auto box-border max-w-10xl
w-full my-32 h-fit"
    >
      <div className="text-accent h-[60vh] w-full">
        <div className=" rounded-lg space-y-4">
          {chat.map((item: Chat, index: number) => {
            return (
              <Fragment key={index}>
                <div className="bg-secondary">{item.question}</div>
                <div className="bg-secondary">{item.answer}</div>
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="w-10/12 h-10 select-none flex items-center mt-10 overflow-hidden border border-accent outline-none rounded-lg mx-auto ">
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          value={question}
          placeholder="I want to learn..."
          className="bg-transparent w-10/12 h-full px-2 text-accent box-border outline-none focus:border-text"
        />
        <button
          onClick={handleSubmit}
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
