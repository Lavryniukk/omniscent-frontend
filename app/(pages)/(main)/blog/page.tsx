import Link from "next/link";

export default function Blog() {
  return (
    <div className="w-full max-w-10xl items-center textblack 950 dark:textblack 100 flex flex-col h-screen pt-14 mx-auto">
      <h1 className="text-5xl mt-20  text-center font-bold ">
        Here you will find our latest updates
      </h1>
      <div className="w-full flex flex-col md:flex-row items-center justify-center mt-20 gap-4">
        <div className="w-full sm:w-[400px] p-5 relative h-[400px] shadow-xl dark:border dark:border-azure-800 rounded-lg">
          <Link
            href="/blog/v0.2.0"
            className="bottom-5 hover:opacity-70 left-1/4 rounded-lg border absolute  flex items-center justify-center w-1/2 py-2"
          >
            Read more
          </Link>
          <p className="">December 20th 2023</p>
          <h1 className="text-2xl">Cleverize v0.2.0</h1>
          <p className="mt-4">
            {`We are excited to introduce Cleverize, version V0.2.0, 
            where we've shifted our focus towards programming languages!`}
          </p>
          <ul className=" mt-4">
            <li>-Gradually improved programming language support</li>
            <li>-Cut out framework support (temporarily)</li>
            <li>-Cut out professions support (temporarily)</li>
          </ul>
        </div>

        <div className="w-full sm:w-[400px] p-5 relative  h-[400px] shadow-xl dark:border dark:border-azure-800 rounded-lg">
          <Link
            href="/blog/v0.1.0"
            className="bottom-5 hover:opacity-70 left-1/4 rounded-lg  border absolute  flex items-center justify-center w-1/2 py-2"
          >
            Read more
          </Link>
          <p className=" ">November 25th 2023</p>
          <h1 className="text-2xl text-text ">Cleverize v0.1.0</h1>
          <p className="mt-4">
            We are thrilled to announce the launch of Cleverize, version V0.1.0
            (MVP).
          </p>
          <ul className="text-text mt-4">
            <li>-Roadmaps (customizable learning path)</li>
            <li>-Lessons (learning chat with ai)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
