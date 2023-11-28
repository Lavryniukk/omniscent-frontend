import "@/app/globals.css";

import Header from "@/app/modules/Header/Header";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header /> {/* Render the Header component. */}
      {children} {/* Render the children components passed as props. */}
      {/* <Footer /> */}
    </>
  );
}
