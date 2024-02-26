"use client";

import { fetchDeleteRoadmap } from "@/app/entities/roadmap-node/api";
import useOutsideClick from "@/app/shared/hooks/useOutsideClick";
import { Button } from "@/app/shared/ui";
import { Trash, X } from "lucide-react";
import { title } from "process";
import { useState } from "react";

export default function DeleteRoadmapButton({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const fetchDeleteRoadmapWithId = fetchDeleteRoadmap.bind(null, id);

  const togglePopup = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  useOutsideClick("popup", () => setIsOpen(false));
  return (
    <>
      <Trash
        onClick={togglePopup}
        size={22}
        className="absolute hover:opacity-80 dark:text-azure-300 text-azure-950/70  top-5 right-5"
      />
      <dialog open={isOpen} className="p-4 rounded-md">
        <p>Are you sure?</p>
        <form className="flex gap-2" method="dialog" action={fetchDeleteRoadmapWithId}>
          <Button variant="outline">No, cancel</Button>
          <Button type="submit" variant="danger">Yes, i am</Button>
        </form>
      </dialog>
    </>
  );
}
