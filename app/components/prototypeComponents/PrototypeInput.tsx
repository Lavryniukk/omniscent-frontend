"use client";
import { ChangeEvent, useState } from "react";
let Input = () => {
  let [value, setValue] = useState<string>("");
  let dataYES = { data: value };
  const handleSubmit = async () => {
    let res = await fetch("/chat", {
      method: "POST",
      body: JSON.stringify(dataYES),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className=" w-8/12 max-w-[400px] h-10 pt-box-shadow select-none flex items-center mt-10  overflow-hidden  outline-none rounded-lg transition-shadow duration-150  mx-auto ">
      <input
        onChange={(event) => {
          handleInputChange(event);
        }}
        value={value}
        type="text"
        placeholder="I want to learn..."
        className="bg-transparent w-9/12 h-full px-2 text-accent border-accent box-border outline-none focus:border-text"
      />
      <button
        onClick={() => handleSubmit()}
        type="submit"
        className="text-text bg-secondary duration-200 border border-accent opacity-70 hover:opacity-100 transition-all px-4 py rounded-lg box-border"
      >
        Send
      </button>
    </div>
  );
};
export default Input;
