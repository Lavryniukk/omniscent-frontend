"use client"; // An environment-specific directive or comment, not part of the logic.
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import ProfileLinkSkeleton from "../ProfileLinkSkeleton/ProfileLinkSkeleton";

let ProfileLink = () => {
  let { user, isLoading } = useUser(); // Use the useUser hook to retrieve user information.
  let pic: string = user?.picture ?? ""; // Extract the user's profile picture URL.
  console.log(user);
  return isLoading ? (
    <ProfileLinkSkeleton />
  ) : user ? (
    <div className="mx-auto h-fit">
      <a href={`/profile/${user.sub}`}>
        <picture>
          <Image
            src={`${pic}`}
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
      className="text-text-300 font-inter font-light hover:text-text-50 transition-colors duration-200 mx-auto w-fit px-4 border-secondary border-2 p-1 rounded-lg hover:border-accent-700  bg-secondary-900 flex justify-around space-x-3 items-center"
    >
      Sign in
    </Link>
  );
};

export default ProfileLink;
