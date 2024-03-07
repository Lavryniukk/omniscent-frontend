import { NextApiResponse } from "next";
import { AxiosError } from "axios";
import { axiosWithoutAuth } from "@/app/shared/config";
import { cookies } from "next/headers";

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

export const POST = async (req: Request, res: Response) => {
  try {
    const data: SignUpDto = await req.json();

    const { data: tokens }: TokenPair = await axiosWithoutAuth.post(
      "/auth/sign-up",
      data
    );

    cookies().set("_rt", tokens._rt, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    cookies().set("_at", tokens._at, {
      httpOnly: false,
      secure: true,
      sameSite: "none",
      maxAge: 60 * 60 * 1000,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.log("error:", (error as AxiosError).response?.data);
    return Response.json({
      ...((error as AxiosError).response?.data as {
        message: string;
        error: string;
        statusCode: number;
      }),
      ok: false,
    });
  }
};
export const GET = async (req: Request, res: NextApiResponse) => {
  return Response.json({
    message: "Hello World",
  });
};
