"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  const { resolvedTheme } = useTheme();
  let src;
  const router = useRouter();

  switch (resolvedTheme) {
    case "light":
      src = "/images/cleverize-dark.webp";
      break;
    case "dark":
      src = "/images/cleverize.webp";
      break;
    default:
      src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }
  return (
    resolvedTheme && (
      <Image
        className="cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
        priority
        src={src}
        alt="Cleverize logo"
        width={32}
        height={32}
      />
    )
  );
};

export default Logo;
