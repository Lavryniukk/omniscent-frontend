import PrimaryBtn from "@/app/UI/buttons/primaryBtn/PrimaryBtn";
import Link from "next/link";

export default function ProjectsNotFound() {
  return (
    <PrimaryBtn
      text={"Create"}
      height={"70px"}
      href="/workspace/create"
      classname="text-xl mt-20"
      width="100%"
    />
  );
}
