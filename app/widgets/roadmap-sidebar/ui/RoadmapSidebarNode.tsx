"use client";
import { RoadmapNode } from "@/app/entities";
import useLessonStorage from "@/app/widgets/lesson/storage/lesson-storage";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronDownIcon, Milestone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LessonRoadmapNodeComponent({
  tech,
  roadmapId,
  isCurrentLesson,
}: {
  tech: RoadmapNode;
  roadmapId: string;
  isCurrentQuiz: boolean;
  isCurrentLesson: boolean;
}) {
  const { isStreaming } = useLessonStorage();
  return (
    <li className={`lesson-roadmap-node  transition-all duration-200    group`}>
      <Link
        href={`/workspace/r/${roadmapId}/l/${tech.lesson_id}`}
        aria-disabled={isStreaming}
        className={`w-fit ${isCurrentLesson && "underline"} hover:underline font-semibold ${
          isStreaming && "hover:cursor-not-allowed"
        } ${tech.is_completed && "line-through"} 
  		  `}
      >
        {tech.title}
      </Link>
    </li>
  );
}
