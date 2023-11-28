import PrimaryBtn from "@/app/UI/buttons/primaryBtn/PrimaryBtn";
import Link from "next/link";

export default function ProjectsNotFound() {
  return (
    <div className="w-3/4 mt-10 mx-auto flex flex-col justify-between items-center h-3/4">
      <PrimaryBtn
        text={"Create"}
        height={"70px"}
        classname="text-xl"
        width="100%"
      />
    </div>
  );
}
