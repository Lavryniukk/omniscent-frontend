import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";
import { serialize } from "cookie";
import { axiosWithoutAuth } from "@/app/shared/config";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
type TokenPair = {
  data: {
    _rt: string;
    _at: string;
  };
};
type SignUpDto = {
  email: string;
  password: string;
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const data: SignUpDto = await req.json();

    const { data: tokens }: TokenPair = await axiosWithoutAuth.post(
      "/auth/sign-up",
      data
    );

    const cookiesStore = cookies().getAll();

    console.log(cookiesStore);
    res.cookies.set({
      name: "_rt",
      value: tokens._rt,
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.cookies.set({
      name: "_at",
      value: tokens._at,
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 60 * 60 * 1000,
    });
    // res.headers.set(
    //   "Set-Cookie",
    //   serialize("_rt", tokens._rt, {
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: "none",
    //     maxAge: 7 * 24 * 60 * 60 * 1000,
    //   })
    // );
    // res.headers.set(
    //   "Set-Cookie",
    //   serialize("_at", tokens._at, {
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: "none",
    //     maxAge: 60 * 60 * 1000,
    //   })
    // )
    console.log(res.cookies.getAll());
    return res.json();
  } catch (error) {
    console.log((error as AxiosError).response?.data);
    return Response.json({ data: (error as AxiosError).response?.data });
  }
};
export const GET = async (req: Request, res: NextApiResponse) => {
  return Response.json({
    message: "Hello World",
  });
};
