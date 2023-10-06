import { NextResponse } from "next/server";
import {
  Session,
  getAccessToken,
  getSession,
  withApiAuthRequired,
} from "@auth0/nextjs-auth0";

const GET = withApiAuthRequired(async function GET(req) {
  const res = new NextResponse();
  const { user } = (await getSession(req, res)) as Session;
  const { accessToken } = await getAccessToken(req, res);
  console.log(accessToken);
  return NextResponse.json(accessToken);
});

export { GET };
