"use client";
import Link from "next/link";
import Button from "@/app/shared/ui/buttons/Button";
import { Trash, X } from "lucide-react";
import useOutsideClick from "@/app/shared/hooks/useOutsideClick";
import { useState } from "react";
import { RoadmapNode } from "@/app/entities";
import { fetchDeleteRoadmap } from "@/app/entities/roadmap-node/api";
import DeleteRoadmapButton from "@/app/features/delete-roadmap-button/DeleteRoadmapButton";
export default function RoadmapContainer({
  roadmap,
}: {
  roadmap: RoadmapNode;
}) {
  const { title, _id } = roadmap;

  return (
    <>
      <Link
        href={`/workspace/r/${_id}`}
        className={`py-5  transition-transform duration-100 hover:opacity-80 dark:border block dark:bg-azure-900 dark:border-azure-700 hover:bg-azure-50 bg-azure-100 shadow-xl rounded-lg font-semibold text-lg   text-center text-azure-950  dark:text-azure-50 px-7 relative w-full 
        }`}
      >
        <p className="">{title}</p>
        <DeleteRoadmapButton id={_id} />
      </Link>
    </>
  );
}
