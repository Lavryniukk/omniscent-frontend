"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchRoadmap } from "../api/roadmaps/fetchRoadmapById";

export function useRoadmap(id: string, key: string) {
  const query = useQuery({
    queryKey: [key],
    queryFn: async () => {
      return await fetchRoadmap(id);
    },
  });
  return query;
}
