// pages/api/checkout.ts

import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1OGmHjCCMdYQSDIP4kMU1ovr",
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `https://www.cleverize.co/stripe/?success=true`,
      cancel_url: `https://www.cleverize.cog/stripe/?canceled=true`,
    });

    return res.redirect(session.url as string);
  } catch (err) {
    return new Error("error");
  }
}
