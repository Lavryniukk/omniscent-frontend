"use client";

import { fetchRoadmap } from "@/app/entities/roadmap-node/api";
import { useQuery } from "@tanstack/react-query";

export default function useRoadmap(id: string) {
  return useQuery({
    queryKey: ["roadmap", id],
    queryFn: () => {
      return fetchRoadmap(id);
    },
  });
}
