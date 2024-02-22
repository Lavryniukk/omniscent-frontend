// "use client";
// import { fetchLesson } from "@/app/shared/api/lessons/fetchLesson";
// import { fetchRoadmap } from "@/app/shared/api/roadmaps/fetchRoadmapById";
// import { Lesson } from "@/app/shared/entities";
// import Roadmap from "@/app/shared/entities/Roadmap";
// import { useQuery } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";
// import {
//   createContext,
//   ReactNode,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// type RoadmapContextType = {
//   roadmap: Roadmap | undefined;
//   lesson: Lesson | undefined;
//   isLoading: boolean;
// };

// const RoadmapContext = createContext<RoadmapContextType | undefined>(undefined);
// export const useRoadmap = () => {
//   const context = useContext(RoadmapContext);
//   if (!context) {
//     throw new Error("useRoadmap must be used within a RoadmapProvider");
//   }
//   return context;
// };
// type RoadmapProviderProps = {
//   roadmapId: string;
//   children: ReactNode;
//   lessonId: string;
// };

// export const RoadmapProvider = ({
//   roadmapId,
//   children,
//   lessonId,
// }: RoadmapProviderProps) => {
//   const { data: roadmap, isLoading: isRoadmapLoading } = useQuery({
//     queryKey: ["roadmap", roadmapId],
//     queryFn: async () => {
//       return await fetchRoadmap(roadmapId);
//     },
//   });
//   const { data: lesson, isLoading: isLessonLoading } = useQuery({
//     queryKey: ["lesson", lessonId],
//     queryFn: async () => {
//       return await fetchLesson(roadmap?.children[0].lesson_id);
//     },
//   });
//   const isLoading = isRoadmapLoading || isLessonLoading;
//   return (
//     <RoadmapContext.Provider value={{ roadmap, lesson, isLoading }}>
//       {children}
//     </RoadmapContext.Provider>
//   );
// };

