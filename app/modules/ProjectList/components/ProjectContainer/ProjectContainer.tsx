"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import Roadmap from "../../types/Roadmap";
import fetchDelete from "./fetchDelete";

export default function ProjectContainer({ roadmap }: { roadmap: Roadmap }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(5);
  const { title, _id, owner_id, node_list } = roadmap;

  const { user, isLoading } = useUser();

  let url: string = "/";

  if (!isLoading && user) {
    if (user.sub === owner_id) {
      url = `/workspace/roadmap/${_id}`;
    }
  } else {
    url = "/workspace/restricted";
  }

  const handleClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();

    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setTimer(5); // Assuming you have a state variable [countdown, setCountdown] defined
    const intervalId = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          // If countdown is at 1, next tick will be 0, so clear interval
          clearInterval(intervalId);
          return 0; // Set countdown to 0 and stop
        } else {
          return prev - 1; // Otherwise, decrement countdown
        }
      });
    }, 1000);

    // Clear interval on component unmount or if isOpen changes to false
    // to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [isOpen]);

  return (
    <>
      <Link
        href={url}
        className={`py-5 border block border-secondary rounded-lg text-lg text-center text-accent px-3 relative ${
          isOpen ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        {title}
        <BiTrashAlt
          onClick={(e) => handleClick(e)}
          className="absolute text-accent top-[25px] right-3"
        />
      </Link>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute text-text border flex-col gap-4 left-[calc(50%-250px)]
         w-[500px] border-accent top-[45%] h-fit p-4 rounded-lg bg-background z-10`}
      >
        <p className="text-accent text-base text-center">{`Are you sure you want to delete ${title}?`}</p>

        <button
          onClick={() => fetchDelete(_id)}
          className={`block w-1/2 mx-auto rounded p-1 ${
            timer
              ? "cursor-default bg-red-900 pointer-events-none"
              : "cursor-pointer bg-red-800 pointer-events-auto hover:opacity-80 duration-300 transition"
          }`}
        >
          {`${timer ? `(${timer}) ` : ""}Confirm`}
        </button>

        <AiOutlineClose
          onClick={(e) => handleClick(e)}
          className="absolute top-2 right-2 cursor-pointer"
        />
      </div>
    </>
  );
}
