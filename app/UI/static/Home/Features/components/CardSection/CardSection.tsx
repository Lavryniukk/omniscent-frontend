import Image from "next/image";
let CardSection = () => {
  return (
    <div>
      <div className=" max-w-[1200px] lg:flex h-fit hidden items-start justify-center gap-2  mx-auto">
        <div className="flex gap-2 flex-col">
          {/* Feature 1: Strong foundation */}
          <div className="features-container observe h-fit observe p-6">
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
          <div className="features-container observe h-fit observe p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Engaging Knowledge
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              We prioritize presenting knowledge in an engaging and intriguing
              manner, ensuring users remain interested and absorbed.
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          {/* Feature 3: Any topic, anytime. Dive in. */}
          <div className="features-container observe h-fit p-6">
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
          <div className="features-container observe h-fit p-6">
            {/* Feature 4: Personalized Pathways */}
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Personalized Pathways
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              Experience tailor-made learning journeys designed specifically
              around individual goals and preferred learning styles.
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          {/* Feature 5: Real-world Application */}
          <div className="features-container observe h-fit p-6">
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
          <div className="features-container observe h-fit p-6">
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

      <div className=" max-w-[1200px]  lg:hidden h-fit sm:flex hidden items-start justify-center gap-2  mx-auto">
        <div className="flex gap-2 flex-col">
          {/* Feature 1: Strong foundation */}
          <div className="features-container observe h-fit p-6">
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
          <div className="features-container observe h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Engaging Knowledge
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              We prioritize presenting knowledge in an engaging and intriguing
              manner, ensuring users remain interested and absorbed.
            </p>
          </div>
          {/* Feature 3: Real-world Application */}
          <div className="features-container observe h-fit p-6">
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

        <div className="flex gap-2 flex-col">
          {/* Feature 4: Personalized Pathways */}
          <div className="features-container observe h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Personalized Pathways
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              Experience tailor-made learning journeys designed specifically
              around individual goals and preferred learning styles.
            </p>
          </div>
          {/* Feature 5: Any topic, anytime. Dive in. */}
          <div className="features-container observe h-fit p-6">
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
          <div className="features-container observe h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Access to Artificial Mentor
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              We provide a virtual mentor for personalized guidance, feedback,
              and support throughout the learning journey.
            </p>
          </div>
          {/* Duplicate Feature 4: Personalized Pathways */}
          <div className="features-container observe h-fit p-6">
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

      <div className=" max-w-[1200px]  sm:hidden h-fit flex items-start justify-center gap-3  mx-auto">
        <div className="flex gap-3 flex-col">
          {/* Feature 1: Strong foundation */}
          <div className="features-container observe h-fit p-6">
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
          <div className="features-container observe h-fit p-6">
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
          <div className="features-container observe h-fit p-6">
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
          <div className="features-container observe h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Engaging Knowledge
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              We prioritize presenting knowledge in an engaging and intriguing
              manner, ensuring users remain interested and absorbed.
            </p>
          </div>
          {/* Feature 5: Personalized Pathways */}
          <div className="features-container observe h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Personalized Pathways
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              Experience tailor-made learning journeys designed specifically
              around individual goals and preferred learning styles.
            </p>
          </div>
          {/* Duplicate Feature 5: Personalized Pathways */}
          <div className="features-container observe h-fit p-6">
            <p className="text-text-300 text-2xl whitespace-nowrap font-bold tracking-tighter">
              Personalized Pathways
            </p>
            <p className="text-accent-500 font-normal mt-3 text-md tracking-tight">
              Experience tailor-made learning journeys designed specifically
              around individual goals and preferred learning styles.
            </p>
          </div>
          {/* Feature 6: Access to Artificial Mentor */}
          <div className="features-container observe h-fit p-6">
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
