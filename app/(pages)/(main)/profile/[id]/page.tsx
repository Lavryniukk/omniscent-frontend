"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
export default function Profile() {
  const { user } = useUser();
  let pic: string = user?.picture as string;
  console.log(user);
  return (
    <div className="mx-auto w-full font-inter max-w-10xl h-screen text-lg text-text text-center mt-20">
      <div className="flex h-full">
        <div className="w-1/4 h-full border p-5 ">
          <picture>
            <img
              src={`${pic}`}
              width={300}
              height={300}
              className="rounded-full w-full border-2 border-secondary mx-auto  "
              alt="User profile picture"
            />
          </picture>
          <div className=" w-full h-fit p-5">
            <div className="w-fit h-fit mx-auto">
              <p className="text-3xl font-bold text-left w-fit  text-text">
                {user?.name}
              </p>
              <p className="text-accent  w-auto  text-right">
                @{user?.nickname}
              </p>
            </div>
          </div>
          <Link
            href="/api/auth/logout"
            className=" bg-secondary rounded-md py-4 border block p-1 text-accent"
          >
            Logout
          </Link>
        </div>
        <div className="w-3/4 h-full border"></div>
      </div>
    </div>
  );
}
