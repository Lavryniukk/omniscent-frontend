"use client"; // An environment-specific directive or comment, not part of the logic.

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

let ProfileLink = () => {
  let user = useUser(); // Use the useUser hook to retrieve user information.
  let pic: string = user.user?.picture as string; // Extract the user's profile picture URL.

  return (
    <div className="mx-auto">
      <Link href={`/profile/${user.user?.sub}`}>
        <picture>
          <img
            src={`${pic}`}
            alt=""
            width={50}
            height={50}
            className="h-11 w-11 mx-auto rounded-full border-2 border-accent-700 hover:border-accent transition-colors duration-200"
          />
        </picture>
      </Link>
    </div>
  );
};

export default ProfileLink;
