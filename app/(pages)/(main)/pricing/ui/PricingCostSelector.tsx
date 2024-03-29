"use client";
import { SignedIn, SignedOut } from "@/app/processes/auth";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { fetchPaymentAction } from "../actions/fetch-payment-action";
import { useFormState } from "react-dom";

export default function PricingCostSelector() {
  const [price, setPrice] = useState(20);
  let currentCard: PriceDescriptionProps = {
    title: (
      <>
        The <>`Those are rookie numbers`</> kit
      </>
    ),
    description:
      "This amount of credits will do for completing one full roadmap. E.g. Javascript or Python. But it will be tough.",
  };

  if (price <= 10)
    currentCard = {
      title: (
        <>
          The <i>`Those are rookie numbers`</i> kit
        </>
      ),
      description:
        "This amount of credits will do for completing one template roadmap. E.g. Javascript or Python. But it will be tough.",
    };
  else if (price <= 20)
    currentCard = {
      title: (
        <>
          The <i>`Learning fella`</i> kit
        </>
      ),
      description:
        "This is the perfect amount of credits for a completing full roadmap with great experience. Really recommend choosing this one.",
    };
  else if (price <= 30)
    currentCard = {
      title: (
        <>
          The <i>`Smooth operator`</i> kit
        </>
      ),
      description:
        "This is suitable for those, who want to learn a new language, and a few frameworks in addition. Recommend this for those who have already tried learning something. ",
    };
  else if (price <= 40)
    currentCard = {
      title: (
        <>
          The <i>`Jedi master`</i> kit
        </>
      ),
      description:
        "Lifetime supply of credits. If you want to learn a whole industry, this is the way to go. E.g. Frontend development.",
    };
  else if (price <= 50)
    currentCard = {
      title: (
        <>
          The <i>`Madman`</i> kit
        </>
      ),
      description:
        "The kit name says it all. This is for those who want to learn everything. Something i would do if i had a load of time. ",
    };
  const [state, action] = useFormState(fetchPaymentAction, null);
  return (
    <section className="flex transition-all flex-col py-10 mt-10 gap-10 items-center w-full max-w-7xl">
      <h1 className="text-5xl text-center font-bold">
        ${price} =
        <span className="drop-shadow-primary"> {price * 10} credits</span>
      </h1>
      <div className="flex flex-col gap-2 items-center justify-center">
        <Slider
          max={50}
          onValueChange={(val) => {
            setPrice(val[0]);
          }}
          value={[price]}
          min={5}
          className="w-96 max-md:w-80"
          step={1}
        />
      </div>
      <PriceDescription {...currentCard} />
      <SignedIn>
        <form action={action}>
          <Button size={"lg"}>Purchase {price * 12} credits</Button>
        </form>
      </SignedIn>
      <SignedOut>
        <Link className="link link-primary link-size-md" href="sign-in">
          Log in
        </Link>
      </SignedOut>
    </section>
  );
}

interface PriceDescriptionProps {
  title: string | ReactNode;
  description: string | ReactNode;
}

function PriceDescription({ title, description }: PriceDescriptionProps) {
  return (
    <div className="price-description-article">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
