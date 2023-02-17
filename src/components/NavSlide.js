import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const navItems = [
  { name: "Home", to: "/", id: 0 },
  { name: "Projects", to: "/projects", id: 1 },
  { name: "Contact", to: "/contact", id: 3 },
];

export const navItemMap = navItems.map(({ name, to, id }) => (
  <Link
    key={id}
    href={to}
    className=" px-2 font-source font-extrabold  transition-all  text-stone-200 hover:text-stone-400 hover:opacity-100"
  >
    [{name}]
  </Link>
));
/* const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

return (
  <motion.ul
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.li variants={item} />
    <motion.li variants={item} />
  </motion.ul>
) */

const slide = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { delay: 0.5, delayChildren: 0.2 },
  },
  show: {
    height: 700,
    opacity: 1,
    transition: {
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
      className="flex flex-col justify-around items-center text-6xl top-0 left-0 absolute bg-stone-900  "
    >
      <motion.div className="" variants={slideItem}>
        {navItemMap}
      </motion.div>
    </motion.div>
  );
}
