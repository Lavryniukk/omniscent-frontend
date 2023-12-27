"use client";

import Link from "next/link";
import useProfileStorage from "../../storage/ProfileStorage";
import { useState } from "react";
import { fetchDeleteUser } from "../../api/fetchDeleteUser";
import { useRouter } from "next/navigation";

export default function ProfileButtons() {
  const [isDanger, setIsDanger] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const {
    isEditMode,
    userDataBio,
    userDataName,
    userDataNickname,
    setInputData,
    setIsEditMode,
  } = useProfileStorage();
  const handleEdit = () => {
    setIsEditMode(true);

    setInputData(userDataBio as string, "bioInputData");
    setInputData(userDataName as string, "nameInputData");
    setInputData(userDataNickname as string, "nicknameInputData");
  };
  const handleCancel = () => {
    setIsEditMode(false);
    setIsOpen(false);
    setIsDanger(false);
  };

  return (
    <div className="flex gap-4 w-full">
      {isEditMode ? (
        <div className="flex flex-col w-full gap-4">
          <div className="w-full flex gap-4">
            <div
              onClick={() => handleCancel()}
              className="text-text cursor-pointer bg-red-800 font-medium border w-1/2 box-border p-2 rounded mx-auto block text-center hover:bg-background hover:text-red-800 border-red-800 transition duration-300"
            >
              Cancel
            </div>

            <button
              type="submit"
              className="text-background font-medium bg-text border w-1/2 border-text p-2 rounded mx-auto block text-center hover:bg-background hover:text-text transition duration-300"
            >
              Save
            </button>
          </div>

          <div
            className={`overflow-hidden flex flex-col gap-2 items-center justify-start ${
              isOpen ? "h-16" : "h-4 "
            } transition-all duration-500 relative`}
          >
            <BsChevronDown
              onClick={() => {
                setIsOpen(!isOpen);
                setIsDanger(false);
              }}
              className={`text-accent cursor-pointer absolute w-full bg-background bottom-0 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
            <div
              onClick={async () => {
                setIsDanger(true);
                if (isDanger) {
                  await fetchDeleteUser();
                  // router.push("/");
                  location.assign("/");
                }
              }}
              className={`p-2 ${
                !isDanger
                  ? " text-orange-500 bg-orange-200 hover:bg-background border-orange-200 hover:text-orange-200"
                  : "bg-red-800 hover:bg-background hover:text-red-800 border-red-800 text-text"
              } border cursor-pointer w-full font-medium rounded flex items-center justify-center gap-1 transition duration-300 `}
            >
              {!isDanger ? (
                <>
                  <CgDanger className="h-fit" />
                  Danger
                </>
              ) : (
                <>Delete my account</>
              )}
            </div>
          </div>
        </div>
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
