"use client";

import Subroadmap from "@/app/modules/Roadmap/Subroadmap/Subroadmap";

export default function RoadmapPage({
  params,
}: {
  params: { title: string; id: string };
}) {
  return <Subroadmap id={params.id} title={params.title} />;
}
