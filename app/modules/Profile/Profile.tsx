import Link from "next/link";
import Achivements from "./components/Achivements/Achivements";
import Bio from "./components/Bio/Bio";
import OngoingProjects from "./components/OngoingProjects/OngoingProjects";
import PersonalData from "./components/PersonalData/PersonalData";

export default function ProfilePage() {
  return (
    <div
      className={`bg-background mx-auto mt-20 h-screen 
      sm:min-w-[420px] sm:container w-full flex flex-col gap-10 sm:flex-row justify-between sm:gap-4`}
    >
      <div className="space-y-8 sm:min-w-[300px] w-full mx-auto sm:w-1/4 h-fit border-2 border-secondary rounded-lg p-8">
        <PersonalData />

        <Bio />

        <Achivements />

        <div className="flex gap-4 w-full">
          <Link
            href={"/api/auth/logout"}
            className="text-text bg-background border w-1/2 border-secondary box-border p-2 rounded mx-auto block text-center hover:bg-secondary transition duration-300"
          >
            Edit
          </Link>

          <Link
            href={"/api/auth/logout"}
            className="text-text bg-background border w-1/2 border-secondary p-2 rounded mx-auto block text-center hover:bg-secondary transition duration-300"
          >
            Sign out
          </Link>
        </div>
      </div>

      <OngoingProjects />
    </div>
  );
}
