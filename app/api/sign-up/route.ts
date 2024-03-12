import { NextApiResponse } from "next";
import { AxiosError, AxiosResponse } from "axios";
import { axiosWithoutAuth } from "@/app/shared/config";
import { cookies } from "next/headers";
import { JwtTokenPair } from "@/app/shared/types";
import { NextRequest, NextResponse } from "next/server";

type SignUpDto = {
  email: string;
  password: string;
};

export const POST = async (req: NextRequest, res: Response) => {
  console.log("call");
  try {
    const data: SignUpDto = await req.json();
    const { data: tokens }: AxiosResponse<JwtTokenPair> =
      await axiosWithoutAuth.post("/auth/sign-up", data);
    let response = new NextResponse(JSON.stringify({ ok: true }));
    response.cookies.set({
      value: tokens._rt,
      name: "_rt",
      httpOnly: true,
      sameSite: "strict",
      maxAge: Number(process.env.REFRESH_TOKEN_MAX_AGE),
    });
    response.cookies.set({
      value: tokens._at,
      name: "_at",
      httpOnly: false,
      sameSite: "strict",
      maxAge: Number(process.env.ACCESS_TOKEN_MAX_AGE),
    });
    return response;
  } catch (error) {
    console.log(error);
    const response = new Response(
      JSON.stringify({
        ...((error as AxiosError).response?.data as {
          message: string;
          error: string;
          statusCode: number;
        }),
        ok: false,
      }),
      {
        status: (error as AxiosError).response?.status || 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response; //TODO remove this and throw error
  }
};
