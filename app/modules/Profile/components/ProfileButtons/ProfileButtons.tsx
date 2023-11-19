import Link from "next/link";
import useProfileStorage from "../../storage/ProfileStorage";

export default function ProfileButtons() {
  const {
    isEditMode,
    userDataBio,
    userDataName,
    userDataNickname,
    setInputData,
    setisEditMode,
  } = useProfileStorage();
  const handleEdit = () => {
    setisEditMode(true);

    setInputData(userDataBio as string, "bioInputData");
    setInputData(userDataName as string, "nameInputData");
    setInputData(userDataNickname as string, "nicknameInputData");
  };

  return (
    <div className="flex gap-4 w-full">
      {isEditMode ? (
        <>
          <div
            onClick={() => setisEditMode(false)}
            className="text-text cursor-pointer bg-red-800 font-medium border w-1/2 border-secondary box-border p-2 rounded mx-auto block text-center hover:bg-background hover:text-red-800 hover:border-red-800 transition duration-300"
          >
            Cancel
          </div>

          <button
            type="submit"
            className="text-background font-medium bg-text border w-1/2 border-text p-2 rounded mx-auto block text-center hover:bg-background hover:text-text transition duration-300"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <div
            onClick={() => handleEdit()}
            className="text-text cursor-pointer bg-background border w-1/2 border-secondary box-border p-2 rounded mx-auto block text-center hover:bg-secondary transition duration-300"
          >
            Edit
          </div>

          <Link
            href={"/api/auth/logout"}
            className="text-text bg-background border w-1/2 border-secondary p-2 rounded mx-auto block text-center hover:bg-secondary transition duration-300"
          >
            Sign out
          </Link>
        </>
      )}
    </div>
  );
}
