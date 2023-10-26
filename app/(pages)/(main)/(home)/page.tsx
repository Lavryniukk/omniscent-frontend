import Features from "@/app/modules/Features/Features";
import Title from "@/app/modules/Hero/components/Title/Title";
import Reviews from "@/app/modules/Reviews/Reviews";
import { NextPage } from "next";

// HomePage is a Next.js page component representing the main landing page of the application.
// It includes the Title component, Features component, and Reviews component.
let HomePage: NextPage = () => {
  return (
    <main className="mb-10 mt-14 overflow-hidden pt-40  h-fit bg-transparent mx-auto box-border max-w-10xl w-full">
      <Title /> {/* Renders the title section of the landing page. */}
      <Features /> {/* Renders the features section of the landing page. */}
      <Reviews /> {/* Renders the reviews section of the landing page. */}
    </main>
  );
};

export default HomePage;
