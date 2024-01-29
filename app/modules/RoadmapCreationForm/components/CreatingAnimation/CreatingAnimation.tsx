import { motion } from "framer-motion";
export default function CreatingAnimation() {
  return (
    <div
      className={`w-80 bg-secondary flex  text-accent space-y-5 text-xl  rounded-md  h-20`}
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
        className={`bg-gradient-to-r from-primary blur to-primary/90 h-20`}
      ></motion.div>
    </div>
  );
}
