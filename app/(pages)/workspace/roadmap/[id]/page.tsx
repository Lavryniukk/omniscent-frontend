"use client";

import Roadmap from "@/app/modules/Roadmap/PrimaryRoadmap/Roadmap";
import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/md";
export default function RoadmapPage({ params }: { params: { id: string } }) {
  return (
    <div className="h-full min-h-screen w-auto">
      <Link
        href="/workspace"
        className="flex items-center justify-center p-2  w-fit text-accent fixed left-10 top-10 hover:opacity-80"
      >
        <MdOutlineArrowBack />
        To workspace
      </Link>
      <Roadmap id={params.id} />
    </div>
  );
}
