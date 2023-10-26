import { BsGear } from "react-icons/bs";
import Image from "next/image";
let CardSection = () => {
  return (
    // <div className="box-border grid lg:features w-3/4 lg:w-full xl:w-7/12 mx-auto grid-cols-1 gap-2 px-10 h-fit md:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
    //   <div className="lg:features-container--1 features-container"></div>
    //   <div className="lg:features-container--2 features-container">
    //     <div className="w-8/12 border-accent">
    //       <h2 className="font-inter  text-3xl text-text-300">
    //         Customizable learning path
    //       </h2>
    //       <p className="mt-5  text-base text-accent font-light font-inter border-accent text">
    //         Pro plan allowes you to add custom-made technologies to your
    //         learning path.
    //       </p>
    //     </div>
    //     <BsGear
    //       size={"40%"}
    //       className="text-accent opacity-80 animate-spin-slow "
    //     />
    //   </div>
    //   <div className="lg:features-container--3 features-container">
    //     <div className="border-accent">
    //       <h2 className="font-inter text-3xl text-text">
    //         Flexible learning path
    //       </h2>
    //     </div>
    //   </div>
    //   <div className="lg:features-container--4 features-container"></div>
    //   <div className="lg:features-container--5 features-container"></div>
    //   <div className="lg:features-container--6 features-container"></div>
    // </div>
    <div>
      <div className=" max-w-[1200px] lg:flex h-fit hidden items-start justify-center gap-5  mx-auto">
        <div className="flex gap-5 flex-col">
          {/* Feature 1: Strong foundation */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Strong foundation
            </p>
            {/* Image representing the feature */}
            <Image
              alt="foundation"
              className=" border-secondary saturate-0 opacity-70 mx-auto mt-3"
              src="/images/features-foundation.png"
              width={300}
              height={300}
            />
          </div>
          {/* Feature 2: Engaging Knowledge */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Engaging Knowledge
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              We prioritize presenting knowledge in an engaging and intriguing
              manner, ensuring users remain interested and absorbed.
            </p>
          </div>
        </div>
        <div className="flex gap-5 flex-col">
          {/* Feature 3: Personalized Pathways */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Personalized Pathways
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              Experience tailor-made learning journeys designed specifically
              around individual goals and preferred learning styles.
            </p>
          </div>
          {/* Feature 4: Any topic, anytime. Dive in. */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Any topic, anytime. Dive in.
            </p>
            {/* Image representing the feature */}
            <Image
              alt="foundation"
              className=" rounded-lg border-secondary saturate-0 opacity-70 mx-auto mt-3"
              src="/images/features-range.png"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="flex gap-5 flex-col">
          {/* Feature 5: Real-world Application */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Real-world Application
            </p>
            {/* Image representing the feature */}
            <Image
              alt="foundation"
              className=" rounded-lg border-secondary saturate-0 opacity-70 mx-auto mt-3"
              src="/images/features-practical.png"
              width={300}
              height={300}
            />
          </div>
          {/* Feature 6: Access to Artificial Mentor */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Access to Artificial Mentor
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              We provide a virtual mentor for personalized guidance, feedback,
              and support throughout the learning journey.
            </p>
          </div>
        </div>
      </div>

      <div className=" max-w-[1200px] lg:hidden h-fit sm:flex hidden items-start justify-center gap-3  mx-auto">
        <div className="flex gap-3 flex-col">
          {/* Feature 1: Strong foundation */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Strong foundation
            </p>
            {/* Image representing the feature */}
            <Image
              alt="foundation"
              className=" border-secondary saturate-0 opacity-70 mx-auto mt-3"
              src="/images/features-foundation.png"
              width={300}
              height={300}
            />
          </div>
          {/* Feature 2: Engaging Knowledge */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Engaging Knowledge
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              We prioritize presenting knowledge in an engaging and intriguing
              manner, ensuring users remain interested and absorbed.
            </p>
          </div>
          {/* Feature 3: Real-world Application */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Real-world Application
            </p>
            {/* Image representing the feature */}
            <Image
              alt="foundation"
              className=" rounded-lg border-secondary saturate-0 opacity-70 mx-auto mt-3"
              src="/images/features-practical.png"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="flex gap-3 flex-col">
          {/* Feature 4: Personalized Pathways */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Personalized Pathways
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              Experience tailor-made learning journeys designed specifically
              around individual goals and preferred learning styles.
            </p>
          </div>
          {/* Feature 5: Any topic, anytime. Dive in. */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Any topic, anytime. Dive in.
            </p>
            {/* Image representing the feature */}
            <Image
              alt="foundation"
              className=" rounded-lg border-secondary saturate-0 opacity-70 mx-auto mt-3"
              src="/images/features-range.png"
              width={300}
              height={300}
            />
          </div>
          {/* Feature 6: Access to Artificial Mentor */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Access to Artificial Mentor
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              We provide a virtual mentor for personalized guidance, feedback,
              and support throughout the learning journey.
            </p>
          </div>
          {/* Duplicate Feature 4: Personalized Pathways */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Personalized Pathways
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              Experience tailor-made learning journeys designed specifically
              around individual goals and preferred learning styles.
            </p>
          </div>
        </div>
      </div>

      <div className=" max-w-[1200px] sm:hidden h-fit flex items-start justify-center gap-3  mx-auto">
        <div className="flex gap-3 flex-col">
          {/* Feature 1: Strong foundation */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Strong foundation
            </p>
            {/* Image representing the feature */}
            <Image
              alt="foundation"
              className=" border-secondary saturate-0 opacity-70 mx-auto mt-3"
              src="/images/features-foundation.png"
              width={300}
              height={300}
            />
          </div>
          {/* Feature 2: Any topic, anytime. Dive in. */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Any topic, anytime. Dive in.
            </p>
            {/* Image representing the feature */}
            <Image
              alt="foundation"
              className=" rounded-lg border-secondary saturate-0 opacity-70 mx-auto mt-3"
              src="/images/features-range.png"
              width={300}
              height={300}
            />
          </div>
          {/* Feature 3: Real-world Application */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Real-world Application
            </p>
            {/* Image representing the feature */}
            <Image
              alt="foundation"
              className=" rounded-lg border-secondary saturate-0 opacity-70 mx-auto mt-3"
              src="/images/features-practical.png"
              width={300}
              height={300}
            />
          </div>
          {/* Feature 4: Engaging Knowledge */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Engaging Knowledge
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              We prioritize presenting knowledge in an engaging and intriguing
              manner, ensuring users remain interested and absorbed.
            </p>
          </div>
          {/* Feature 5: Personalized Pathways */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Personalized Pathways
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              Experience tailor-made learning journeys designed specifically
              around individual goals and preferred learning styles.
            </p>
          </div>
          {/* Duplicate Feature 5: Personalized Pathways */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Personalized Pathways
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              Experience tailor-made learning journeys designed specifically
              around individual goals and preferred learning styles.
            </p>
          </div>
          {/* Feature 6: Access to Artificial Mentor */}
          <div className="features-container h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Access to Artificial Mentor
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              We provide a virtual mentor for personalized guidance, feedback,
              and support throughout the learning journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
