import "@/app/globals.css";
import { Header } from "@/app/widgets";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex  flex-col items-center">
      <Header />
      {children}
    </main>
  );
}
