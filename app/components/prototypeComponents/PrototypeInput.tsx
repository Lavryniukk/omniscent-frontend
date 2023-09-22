"use client";
import { ChangeEvent, useState } from "react";

let Input = () => {
  let [value, setValue] = useState<string>("");
  type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  // const handleSubmit = () => {};
  return (
    <div className=" w-8/12 max-w-[400px] h-10 select-none flex items-center mt-10  overflow-hidden border border-accent outline-none rounded-lg mx-auto ">
      <input
        onChange={(event) => {
          handleInputChange(event);
        }}
        value={value}
        type="text"
        placeholder="I want to learn..."
        className="bg-transparent w-9/12 h-full px-2 text-accent box-border outline-none focus:border-text"
      />
      <button
        type="submit"
        className="text-text bg-secondary duration-200 border border-accent opacity-70 hover:opacity-100 transition-all w-2/12 h-2/3 rounded-lg box-border"
      >
        Send
      </button>
    </div>
  );
};
export default Input;
