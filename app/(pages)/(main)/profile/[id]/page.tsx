"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
export default function () {
  const { user } = useUser();
  let pic: string = user?.picture as string;

  return (
    <div className="mx-auto w-full font-inter max-w-10xl h-screen text-lg text-text text-center mt-20">
      <div className="flex h-full">
        <div className="w-1/4 h-full border p-5 ">
          <img
            src={`${pic}`}
            width={300}
            height={300}
            className="rounded-full w-full border-2 border-secondary mx-auto  "
            alt="User profile picture"
          />
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
        </div>
        <div className="w-3/4 h-full border"></div>
      </div>
    </div>
  );
}
