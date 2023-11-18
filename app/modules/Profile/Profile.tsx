"use client";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { useQuery } from "@tanstack/react-query";
import Achivements from "./components/Achivements/Achivements";
import Bio from "./components/Bio/Bio";
import OngoingProjects from "./components/OngoingProjects/OngoingProjects";
import PersonalData from "./components/PersonalData/PersonalData";
import ProfileButtons from "./components/ProfileButtons/ProfileButtons";
import useProfileStorage from "./storage/ProfileStorage";
export default function ProfilePage({ id }: { id: string }) {
  const { fetchData, setisEditMode, sendData } = useProfileStorage();
  const { isLoading } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => fetchData(id),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setisEditMode(false);

    sendData();

    location.reload();
  };
  return (
    <div
      className={`bg-background mx-auto mt-20 md:h-screen 
      sm:min-w-[420px] sm:container w-full flex flex-col gap-10 sm:flex-row justify-between sm:gap-4`}
    >
      {!isLoading ? (
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="space-y-8 sm:min-w-[300px] w-full mx-auto sm:w-1/4 h-fit border-2 border-secondary rounded-lg p-6"
        >
          <PersonalData />

          <Bio />

          <Achivements />

          <ProfileButtons />
        </form>
      ) : (
        <div className="flex flex-col gap-4 sm:min-w-[300px] w-full mx-auto sm:w-1/4 h-fit border-2 border-secondary rounded-lg p-8">
          <div className="flex flex-col gap-2 justify-start">
            <Skeleton width="200px" height="200px" rounded="100%" noMargin />
            <Skeleton width="200px" height="20px" rounded="4px" noMargin />
            <Skeleton width="150px" height="20px" rounded="4px" noMargin />
          </div>

          <div className="flex flex-col gap-2">
            <Skeleton width="200px" height="20px" rounded="4px" noMargin />
            <Skeleton width="100%" height="100px" rounded="8px" noMargin />
          </div>

          <div className="flex flex-col gap-2">
            <Skeleton width="200px" height="20px" rounded="4px" noMargin />
            <Skeleton width="100%" height="100px" rounded="8px" noMargin />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Skeleton width="100%" height="40px" rounded="4px" noMargin />
            <Skeleton width="100%" height="40px" rounded="4px" noMargin />
          </div>
        </div>
      )}

      <OngoingProjects />
    </div>
  );
}
