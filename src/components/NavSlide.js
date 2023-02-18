import { motion } from "framer-motion";
import NavLinks from "./NavLinks";

const slide = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      type: "tween",
      delay: 0.5,
      delayChildren: 0.2,
    },
  },
  show: {
    height: 825,
    opacity: 1,
    transition: {
      type: "tween",
      velocity: 100,
      delay: 0.2,
      delayChildren: 0.5,
    },
  },
};

const slideItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function NavSlide({ handleSlide }) {
  return (
    <motion.div
      onClick={() => handleSlide()}
      variants={slide}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="md:hidden flex flex-col w-full  justify-evenly items-center text-6xl top-0 left-0 absolute bg-stone-900  "
    >
      <NavLinks variants={slideItem} />
    </motion.div>
  );
}
