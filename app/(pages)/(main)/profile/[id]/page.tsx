/* eslint-disable @next/next/no-img-element */
"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Image from "next/image";
export default function Profile() {
  const { user } = useUser();
  const pic = user?.picture ?? ""; // Fallback to an empty string if picture is not available.

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-background mx-auto mt-20 px-2 h-screen min-w-[420px] sm:container ">
      <div className="h-fit w-full flex justify-between">
        <div className="space-y-10 min-w-[400px] w-1/4">
          <div className="flex flex-col items-start bg-secondary p-6 rounded-lg shadow-lg">
            <img
              src={pic}
              alt="User profile"
              className="rounded-full border-4 border-accent w-40 h-40"
            />
            <h2 className="mt-4 text-3xl font-bold text-text">{user.name}</h2>
            <p className="text-sm text-accent">@{user.nickname}</p>
          </div>
          <div className=" w-full max-w-xl">
            <form className="bg-secondary p-4 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="bio" className="block text-lg text-text mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={3}
                  className="w-full p-2 rounded min-h-[40px] h-fit max-h-[150px] bg-background text-text"
                  placeholder="A bit about yourself..."
                ></textarea>
              </div>
            </form>
          </div>
          <div className=" p-6 bg-secondary  rounded-lg">
            <h2 className="text-text text-lg mb-2">Achievments</h2>
            <div className="h-20 bg-background rounded w-full flex "></div>
          </div>
        </div>
        <div className="w-8/12 border border-secondary flex flex-col overflow-hidden rounded-lg">
          <div className="h-20 w-full bg-secondary text-accent flex items-center justify-center text-center text-xl">
            {user.name} has no projects yet
          </div>
        </div>
      </div>
    </div>
  );
}
