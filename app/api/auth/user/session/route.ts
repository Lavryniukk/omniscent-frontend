import { NextResponse } from "next/server";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

const GET = withApiAuthRequired(async function GET() {
  const { accessToken } = await getAccessToken();
  console.log("got it");
  console.log(accessToken);
  return NextResponse.json(accessToken);
});

export { GET };
