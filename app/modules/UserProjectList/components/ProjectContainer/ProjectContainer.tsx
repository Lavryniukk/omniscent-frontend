"use client";
import Link from "next/link";
import fetchDelete from "./fetchDelete";
import Button from "@/app/UI/buttons/Button";
import { Trash, X } from "lucide-react";
import { RoadmapNode } from "@/app/shared/entities";
import useOutsideClick from "@/app/shared/hooks/useOutsideClick";
import { useState } from "react";

export default function ProjectContainer({
  roadmap,
}: {
  roadmap: RoadmapNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { title, _id } = roadmap;

  const togglePopup = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleDelete = async () => {
    setIsOpen(false);
    await fetchDelete(_id);
    location.reload();
  };

  useOutsideClick("popup", () => setIsOpen(false));

  return (
    <>
      <Link
        href={`/workspace/roadmap/${_id}`}
        className={`py-5 hover:scale-105 transition-transform duration-100 hover:text-accent border block border-accent bg-secondary rounded-lg text-base text-center text-text px-7 relative w-full ${
          isOpen ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        {title}
        <Trash
          onClick={togglePopup}
          size={22}
          className="absolute text-accent top-5 right-5"
        />
      </Link>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute text-text border flex-col gap-5 border-accent top-[45%] mx-auto h-fit p-5 rounded-lg z-10 w-fit backdrop-blur-lg popup`}
      >
        <p className="text-text text-lg text-center">{`Are you sure you want to delete '${title}'?`}</p>
        <div className="flex items-center justify-center mx-auto gap-5 w-11/12">
          <Button callback={togglePopup} size="sm" variant="outline">
            {`Cancel`}
          </Button>
          <Button callback={handleDelete} size="sm" variant="danger">
            {`Confirm`}
          </Button>
        </div>
        <X
          onClick={togglePopup}
          className="absolute text-accent top-1 right-1 cursor-pointer"
        />
      </div>
    </>
  );
}
