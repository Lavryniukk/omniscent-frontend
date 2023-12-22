import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/md";

export default function Version010() {
  return (
    <div className="max-w-4xl font-inter  space-y-20 text-text mx-auto p-6 mt-20">
      <Link
        className="text-accent flex items-center space-x-2 decoration-accent underline-offset-4 hover:text-text"
        href="/blog"
      >
        <MdOutlineArrowBack />
        <p>Back to blog</p>
      </Link>
      <p className="text-accent ">Wednesday, December 20th 2023</p>
      <h1 className="text-4xl font-bold mb-6">
        A New Chapter: Shifting Our Focus to Programming Languages
      </h1>

      <div className="h-0.5 w-full bg-secondary" />

      <div>
        <div></div>
        <h3 className="text-2xl font-semibold ">Inroduction</h3>
        <p className="text-text mt-2 text-lg">
          Hello Everyone, We’ve got some important news to share about the
          direction of our platform. After much thought and discussion, we’ve
          decided to make a big change: going forward, we will focus exclusively
          on programming languages. This means we’ll be stepping away from the
          broader spectrum of digital technologies that we used to cover.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold ">
          Why We’re Making This Change:
        </h3>
        <p className="text-text mt-2 text-lg">
          We believe in doing one thing really well. By focusing on programming
          languages, we can pour all our energy and resources into creating the
          best learning experience in this area. We want to offer deeper, more
          thorough courses that truly make a difference in your learning
          journey.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold ">What This Means for You: </h3>
        <ul className="list-disc list-inside text-lg space-y-10  mt-2">
          <li>
            <strong>Deep Dive into Programming:</strong>
            {` We're going all-in on programming
          languages. Expect more comprehensive content, in-depth tutorials, and
          a variety of coding exercises that cater to all skill levels. Saying
          Goodbye to Other Topics: As we shift gears, we’ll be phasing out our
          content on other digital technologies. We know some of you might miss
          these topics, but we’re here to help you transition smoothly and
          explore the exciting world of programming with us.`}
          </li>
          <li>
            <strong>Saying Goodbye to Other Topics: </strong>
            {`As we shift gears, we’ll be phasing out our content 
            on other digital technologies. We know some of you might miss these topics,
             but we’re here to help you transition smoothly and explore the exciting
              world of programming with us.`}
          </li>
          <li>
            <strong>Quality Over Quantity: </strong>
            {`Our goal is to provide you with the 
            highest quality programming language content. 
            This means better courses, more practical examples,
             and a focus on languages that are most relevant in today’s tech landscape.`}
          </li>
        </ul>
      </div>
      <div className="mb-6 flex flex-col justify-center gap-2">
        <h3 className="text-2xl font-semibold ">Looking Forward:</h3>
        <p className="text-text mt-2 text-lg">
          We’re excited about this new direction and we believe it’s the right
          move for our platform and our community. Programming is a vital skill
          in the tech world, and we can’t wait to help you master it.
        </p>
        <p className="text-text mt-2 text-lg">
          Thank you for being part of our community. We’re looking forward to
          starting this new chapter with you. create new blog post
        </p>
      </div>
    </div>
  );
}
