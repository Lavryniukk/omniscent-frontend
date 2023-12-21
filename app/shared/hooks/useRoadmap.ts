"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchRoadmap } from "../api/roadmaps/fetchRoadmapById";

export function useRoadmap(id: string) {
  const query = useQuery({
    queryKey: ["roadmap"],
    queryFn: async () => {
      return await fetchRoadmap(id);
    },
  });
  return query;
}
