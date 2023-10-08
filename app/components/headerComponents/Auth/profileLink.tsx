"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
let ProfileLink = () => {
  let user = useUser();
  console.log(user);
  let pic: string = user.user?.picture as string;
  return (
    <div className="w-32">
      <Link href={"api/auth/logout"}>
        <Image
          src={`${pic}`}
          alt=""
          width={50}
          height={50}
          className="h-11 w-11 mx-auto rounded-full border-2 border-accent-700 hover:border-accent transition-colors duration-200"
        />
      </Link>
    </div>
  );
};
export default ProfileLink;
