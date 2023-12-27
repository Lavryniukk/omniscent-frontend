"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import fetchDelete from "./fetchDelete";
import Roadmap from "@/app/shared/entities/Roadmap";
import { useUser } from "@clerk/nextjs";
import Button from "@/app/UI/buttons/Button";
import { Trash, X } from "lucide-react";

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

  const handleDelete = async () => {
    setIsOpen(false);

    await fetchDelete(_id);

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
        className={`py-5  hover:scale-105 transition-transform duration-100 hover:text-text border block border-accent bg-secondary rounded-lg text-base text-center text-accent px-7 relative w-full ${
          isOpen ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        {title}
        <Trash
          onClick={handleClick}
          size={22}
          className="absolute text-accent top-5 right-5"
        />
      </Link>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute text-text border flex-col gap-5
          border-accent top-[45%] mx-auto h-fit p-5 rounded-lg z-10 w-fit backdrop-blur-lg popup`}
      >
        <p className="text-text text-lg text-center">{`Are you sure you want to delete '${title}'?`}</p>

        <div className="flex items-center justify-center mx-auto gap-5 w-11/12">
          <Button callback={() => setIsOpen(false)} size="sm" variant="outline">
            {`Cancel`}
          </Button>

          <Button callback={handleDelete} size="sm" variant="danger">
            {`Confirm`}
          </Button>
        </div>

        <X
          onClick={(e) => handleClick(e)}
          className="absolute text-accent top-1 right-1 cursor-pointer"
        />
      </div>
    </>
  );
}
