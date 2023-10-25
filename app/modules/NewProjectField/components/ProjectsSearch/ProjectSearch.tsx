"use client";
import ProjectContainer from "@/app/modules/ProjectList/components/ProjectContainer/ProjectContainer";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
let arr = [
  { title: "React front-end developer", _id: "1" },
  { title: "Nest js back-end developer", _id: "2" },
  { title: "Python back-end developer", _id: "3" },
  { title: "Marketing scientist", _id: "4" },
  { title: "Data scientist", _id: "5" },
  { title: "DevOps", _id: "6" },
];
export default function ProjectSearch() {
  const [text, setText] = useState("Front-end");
  const [filteredArray, setFilteredArray] = useState(arr);

  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);

    const regex = new RegExp(e.target.value, "i");
    const filtered = arr.filter((item) => regex.test(item.title));
    setFilteredArray(filtered);
  };

  const highlightText = (str: string, term: string) => {
    const splitText = str.split(new RegExp(`(${term})`, "gi"));
    return splitText.map((chunk, index) =>
      chunk.toLowerCase() === term.toLowerCase() ? (
        <span key={index} className="bg-primary-800">
          {chunk}
        </span>
      ) : (
        chunk
      )
    );
  };

  return (
    <div className=" py-20">
      <div className="relative h-10 w-full mx-auto items-center flex">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            handleChange(e);
          }}
          className=" bg-secondary focus:outline-none h-full focus:border-text w-full rounded-lg border-accent-600 text-accent pl-3 border mx-auto "
        />
        <AiOutlineSearch
          size={20}
          className="absolute text-accent bg-secondary right-3"
        />
      </div>
      <div className="w-full h-fit space-y-3 overflow-hidden mt-10">
        {filteredArray.length ? (
          filteredArray.map(
            (item, index) =>
              index <= 4 && (
                <ProjectContainer
                  title={highlightText(item.title, text)}
                  key={item._id}
                ></ProjectContainer>
              )
          )
        ) : (
          <div className="text-accent text-lg  mx-auto text-center ">
            Whoops, seems like nothing was found
          </div>
        )}
      </div>
    </div>
  );
}
