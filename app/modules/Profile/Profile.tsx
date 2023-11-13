import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Achivements from "./components/Achivements/Achivements";
import Bio from "./components/Bio/Bio";
import OngoingProjects from "./components/OngoingProjects/OngoingProjects";
import PersonalData from "./components/PersonalData/PersonalData";
import useProfileStorage from "./storage/ProfileStorage";

export default function ProfilePage() {
  const {
    setisEditMode,
    fetchData,
    isEditMode,
    userDataBio,
    userDataName,
    userDataNickname,
    setInputData,
    sendData,
  } = useProfileStorage();

  useQuery({
    queryKey: ["profileData"],
    queryFn: async () => fetchData(),
  });

  const handleEdit = () => {
    setisEditMode(true);

    setInputData(userDataBio as string, "bioInputData");
    setInputData(userDataName as string, "nameInputData");
    setInputData(userDataNickname as string, "nicknameInputData");
  };

  const handleSave = () => {
    setisEditMode(false);

    sendData();
  };
  return (
    <div
      className={`bg-background mx-auto mt-20 md:h-screen 
      sm:min-w-[420px] sm:container w-full flex flex-col gap-10 sm:flex-row justify-between sm:gap-4`}
    >
      <div className="space-y-8 sm:min-w-[300px] w-full mx-auto sm:w-1/4 h-fit border-2 border-secondary rounded-lg p-8">
        <PersonalData />

        <Bio />

        <Achivements />

        <div className="flex gap-4 w-full">
          {isEditMode ? (
            <>
              <button
                onClick={() => setisEditMode(false)}
                className="text-text bg-red-800 border w-1/2 border-secondary box-border p-2 rounded mx-auto block text-center hover:opacity-80 transition duration-300"
              >
                Cancel
              </button>

              <button
                onClick={() => handleSave()}
                className="text-text bg-background border w-1/2 border-secondary p-2 rounded mx-auto block text-center hover:bg-secondary transition duration-300"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleEdit()}
                className="text-text bg-background border w-1/2 border-secondary box-border p-2 rounded mx-auto block text-center hover:bg-secondary transition duration-300"
              >
                Edit
              </button>

              <Link
                href={"/api/auth/logout"}
                className="text-text bg-background border w-1/2 border-secondary p-2 rounded mx-auto block text-center hover:bg-secondary transition duration-300"
              >
                Sign out
              </Link>
            </>
          )}
        </div>
      </div>

      <OngoingProjects />
    </div>
  );
}
