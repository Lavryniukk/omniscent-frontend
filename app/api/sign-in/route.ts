import { NextApiResponse } from "next";
import { AxiosError, AxiosResponse } from "axios";
import { axiosWithoutAuth } from "@/app/shared/config";
import { cookies } from "next/headers";
import { JwtTokenPair } from "@/app/shared/types";
import { NextResponse } from "next/server";

type SignInDto = {
  email: string;
  password: string;
};

export const POST = async (req: Request) => {
  try {
    const data: SignInDto = await req.json();
    const { data: tokens }: AxiosResponse<JwtTokenPair> =
      await axiosWithoutAuth.post("/auth/sign-in", data);
    const response = new NextResponse(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
    response.cookies.set("_rt", tokens._rt, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: Number(process.env.REFRESH_TOKEN_MAX_AGE),
    });
    response.cookies.set("_at", tokens._at, {
      httpOnly: false,
      secure: true,
      sameSite: "strict",
      maxAge: Number(process.env.ACCESS_TOKEN_MAX_AGE),
    });
    return response;
  } catch (error) {
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
    return response;
  }
};
