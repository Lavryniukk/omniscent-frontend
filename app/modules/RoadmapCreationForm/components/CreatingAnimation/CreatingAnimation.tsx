import { motion } from "framer-motion";
export default function CreatingAnimation() {
  return (
    <div
      className={`w-80 bg-azure-200 flex dark:bg-azure-700  space-y-5 text-xl  rounded-md  h-20`}
    >
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: 320,
        }}
        transition={{
          duration: 80,
        }}
        className={`bg-gradient-to-r from-azure-400 dark:from-azure-300 blur dark:to-azure-400/50 to-azure-300 h-20`}
      ></motion.div>
    </div>
  );
}
