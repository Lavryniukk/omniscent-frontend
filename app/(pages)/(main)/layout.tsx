import "@/app/globals.css";
import { Header } from "@/app/modules";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex  flex-col items-center">
      <Header /> {/* Render the Header component. */}
      {children} {/* Render the children components passed as props. */}
      {/* <Footer /> */}
    </div>
  );
}
