"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Profile() {
  const { user } = useUser();
  const pic = user?.picture ?? ""; // Fallback to an empty string if picture is not available.

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 font-inter mt-20 ">
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-1/3 bg-secondary p-4 rounded-lg text-white">
          <img
            src={pic}
            alt="User profile"
            className="rounded-full w-32 h-32 mx-auto border-4 border-gray-600"
          />
          <h2 className="mt-4 text-text text-3xl font-bold">{user.name}</h2>
          <p className="text-accent">@{user.nickname}</p>
          <Link
            className="inline-block bg-red-500 mt-4 px-4 py-2 rounded text-white hover:bg-red-600"
            href="/api/auth/logout"
          >
            Logout
          </Link>
        </div>
        <div className="md:w-2/3 bg-background p-4">
          <div className="mb-4">
            <label htmlFor="bio" className="block text-text text-lg mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              rows={3}
              className="w-full min-h-[40px] max-h-[200px] text-accent bg-secondary p-2 rounded"
              placeholder="Tell us about yourself..."
            />
          </div>
          <div>
            <label htmlFor="interests" className="block text-text text-lg mb-2">
              Interests
            </label>
            <input
              id="interests"
              type="text"
              className="w-full p-2 bg-secondary text-accent rounded"
              placeholder="What are you interested in?"
            />
          </div>
          <div className="mt-4">
            <button className="bg-text text-background font-bold py-2 px-4 rounded">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
