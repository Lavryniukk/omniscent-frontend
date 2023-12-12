"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import fetchDelete from "./fetchDelete";
import Roadmap from "@/app/shared/entities/Roadmap";
import { useUser } from "@clerk/nextjs";

export default function ProjectContainer({ roadmap }: { roadmap: Roadmap }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { title, _id, owner_id } = roadmap;

  const { user, isLoaded } = useUser();

  let url: string = "/";

  if (isLoaded && user) {
    if (user.id === owner_id) {
      url = `/workspace/roadmap/${_id}`;
    }
  } else {
    url = "/workspace/restricted";
  }

  const handleClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();

    e.stopPropagation();

    setIsOpen((prev) => !prev);
  };

  const handleDelete = async ({ id }: { id: string }) => {
    setIsOpen(false);

    await fetchDelete(id);

    location.reload();
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target && !(event.target as Element).closest(".popup")) {
        isOpen && setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  return (
    <>
      <Link
        href={url}
        className={`py-5 hover:scale-105 transition-transform duration-100 hover:text-text border block border-accent bg-secondary rounded-lg text-base text-center text-accent px-7 relative w-full ${
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
        } absolute text-text border flex-col gap-4
          border-accent top-[45%] h-fit p-5 rounded-lg z-10 w-fit backdrop-blur-lg popup`}
      >
        <p className="text-accent text-base text-center">{`Are you sure you want to delete '${title}'?`}</p>

        <div className="flex items-center justify-between mx-auto gap-4 w-11/12">
          <button
            onClick={() => setIsOpen(false)}
            className={`block  w-full mx-auto rounded box-border cursor-pointer text-sm font-medium py-1 h-fit text-text border-2 bg-background pointer-events-auto hover:opacity-80 duration-300 transition `}
          >
            {`Cancel`}
          </button>

          <button
            onClick={async () => handleDelete({ id: _id })}
            className={`block text-text w-full mx-auto rounded box-border cursor-pointer text-sm font-medium py-1 h-fit bg-red-500 pointer-events-auto hover:opacity-80 duration-300 transition `}
          >
            {`Confirm`}
          </button>
        </div>

        <AiOutlineClose
          onClick={(e) => handleClick(e)}
          className="absolute top-1 right-1 cursor-pointer"
        />
      </div>
    </>
  );
}
