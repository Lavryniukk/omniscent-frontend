import { NextApiRequest, NextApiResponse } from "next";
export async function POST(req: Request) {
  console.log("got it");

  const prompt = req.body;

  console.log(prompt);
}
