"use client"; // An environment-specific directive or comment, not part of the logic.
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import ProfileLinkSkeleton from "../ProfileLinkSkeleton/ProfileLinkSkeleton";

let ProfileLink = () => {
  let { user, isLoading } = useUser(); // Use the useUser hook to retrieve user information.
  let pic = user?.picture ?? ""; // Extract the user's profile picture URL.
  let picture = pic;

  console.log(user);

  return isLoading ? (
    <ProfileLinkSkeleton />
  ) : user ? (
    <div className="mx-auto h-fit">
      <a href={`/profile/${user.sub}`}>
        <picture>
          <img
            src={pic}
            alt=""
            width={50}
            height={50}
            className="h-11 w-11 mx-auto rounded-full border-2 border-accent-700 hover:border-accent transition-colors duration-200"
          />
        </picture>
      </a>
    </div>
  ) : (
    <Link
      href="/api/auth/login" // Create a link to the authentication login endpoint.
      className="text-text font-inter font-medium hover:text-background transition-colors duration-200 mx-auto w-fit px-4 border-text border-2 p-1 rounded-md hover:bg-text  bg-background flex justify-around space-x-3 items-center"
    >
      Sign in
    </Link>
  );
};

export default ProfileLink;
