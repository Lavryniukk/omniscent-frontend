"use client";
import { fetchRoadmap } from "@/app/entities/roadmap-node/api";
import { DeleteRoadmapButton } from "@/app/features";
import RoadmapNodeComponent from "@/app/widgets/roadmap/ui/RoadmapNode";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

export default function Roadmap({ id }: { id: string }) {
  const {
    data: roadmap,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["roadmap", id],
    queryFn: () => {
      return fetchRoadmap(id);
    },
  });
  if (isLoading) return <LoadingAnimation />;
  if (error || !roadmap || !roadmap.children) return <div>Not found</div>;
  return (
    <div className="w-fit mx-auto relative space-y-8">
      <article className="text-2xl text-center font-bold flex justify-between items-center ">
        <h2>{roadmap.title}</h2>
        <DeleteRoadmapButton id={roadmap._id} />
      </article>
      <ul className="text-text mx-auto  w-fit h-fit  flex items-center justify-center flex-col">
        {roadmap.children.map((node, index, arr) => {
          const isLast = index === arr.length - 1;
          return (
            <motion.li
              animate={{
                opacity: 1,
                y: 0,
              }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=" items-center justify-center w-full flex flex-col "
              key={roadmap._id}
            >
              <RoadmapNodeComponent isLast={isLast} node={node} />
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
const LoadingAnimation = () => {
  return (
    <div className="animate-spin mx-auto border-2 border-slate-400 dark:border-slate-500 rounded-full aspect-square w-8 border-t-slate-700 dark:border-t-slate-400"></div>
  );
};
