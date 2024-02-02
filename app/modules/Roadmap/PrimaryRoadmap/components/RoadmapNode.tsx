"use client";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import useConversationStorage from "@/app/modules/ConversationWindow/storage/ConversationStorage";
import Button from "@/app/UI/buttons/Button";
import { Check, Trash } from "lucide-react";
import { RoadmapNode } from "@/app/shared/entities";
import Link from "next/link";
export default function RoadmapNodeComponent({
  id,
  current,
  subroadmap,
  isLast,
}: {
  id: string;
  current: boolean;
  subroadmap: RoadmapNode;
  isLast: boolean;
}) {
  const { title, children, is_completed, _id } = subroadmap;
  return (
    <li className="w-full flex relative  items-center justify-center flex-col min-w-[200px]">
      <Link
        className={`roadmap-node hover:scale-105 transition-all duration-200 ${is_completed && "line-through"}`}
        href={`/workspace/conversation/${id}/${_id}/${children[0]?.conversation_id}`}
      >
        {title}
      </Link>
      <AFuckingRoadmapStick isLast={isLast} isCompleted={is_completed} />
    </li>
  );
}
function AFuckingRoadmapStick({
  isLast,
  isCompleted,
}: {
  isLast: boolean;
  isCompleted: boolean;
}) {
  return (
    !isLast && (
      <div
        className={`block w-0.5 select-none h-20 bg-azure-400 dark:bg-azure-600 ${isCompleted && "opacity-60"}`}
      />
    )
  );
}
