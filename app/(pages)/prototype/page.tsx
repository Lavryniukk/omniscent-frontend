"use client";
import { GoPlus } from "react-icons/go";
let roadmaps = [
  {
    title: "Become a Full-Stack Developer",
    user_context:
      "I want to become a full-stack programmer. Tech stack is JavaScript/TypeScript, and as frontend framework I want to learn only Next.js, but in detail.",
    id: "123e4567-e89b-12d3-a456-426614174000",
    json_syllabus: "123e4567-e89b-12d3-a456-426614174000",
  },
  {
    title: "Become a shvaine",
    user_context:
      "I want to become a full-stack programmer. Tech stack is JavaScript/TypeScript, and as frontend framework I want to learn only Next.js, but in detail.",
    id: "123e4567-e89b-12d3-a456-426614174000",
    json_syllabus: "123e4567-e89b-12d3-a456-426614174000",
  },
  {
    title: "Become a zhopa",
    user_context:
      "I want to become a full-stack programmer. Tech stack is JavaScript/TypeScript, and as frontend framework I want to learn only Next.js, but in detail.",
    id: "123e4567-e89b-12d3-a456-426614174000",
    json_syllabus: "123e4567-e89b-12d3-a456-426614174000",
  },
];
let PrototypePage = () => {
  return (
    <div className="flex h-screen border-accent items-center">
      <div className="mx-auto w-1/4 p-2 rounded-xl space-y-3 bg-secondary border-2 border-accent ">
        <div className="w-full flex items-center hover:cursor-pointer text-xl justify-center text-accent select-none border h-20 rounded-lg border-dashed border-accent">
          <GoPlus />
        </div>
        <div className="w-full flex items-center hover:cursor-pointer text-xl justify-center text-accent select-none border h-20 rounded-lg border-dashed border-accent">
          <GoPlus />
        </div>
        <div className="w-full flex items-center hover:cursor-pointer text-xl justify-center text-accent select-none border h-20 rounded-lg border-dashed border-accent">
          <GoPlus />
        </div>
      </div>
    </div>
  );
};
export default PrototypePage;
