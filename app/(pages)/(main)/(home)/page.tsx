import FeaturesSection from "@/app/(pages)/(main)/(home)/components/FeaturesSection/FeaturesSection";
import HeroSection from "@/app/(pages)/(main)/(home)/components/HeroSection/HeroSection";
// HomePage is a Next.js page component representing the main landing page of the application.
// It includes the Title component, Featupres component, and Reviews component.

function Home() {
  return (
    <main className="mb-10 font-inter space-y-20 overflow-hidden h-fit bg-transparent mx-auto box-border w-full">
      <HeroSection />
      <FeaturesSection />{" "}
    </main>
  );
}

export default Home;
