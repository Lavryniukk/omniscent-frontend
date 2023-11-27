import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
export default function CreatingAnimation() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/workspace");
  }, 15000);
  return (
    <div
      className={`w-80 bg-secondary flex flex-col text-text text-xl items-center justify-center rounded-md border-secondary border-2 h-20`}
    >
      Loading...
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: 320,
        }}
        transition={{
          duration: 15,
        }}
        className={`bg-gradient-to-r from-primary blur to-primary-700 h-20`}
      ></motion.div>
    </div>
  );
}
