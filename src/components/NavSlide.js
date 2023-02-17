import Link from "next/link";
import { motion } from "framer-motion";

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

export default function NavSlide({ handleSlide }) {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: 700 }}
      className="flex flex-col justify-around items-center text-6xl top-0 left-0 w-full absolute bg-stone-900 mx-auto "
    >
      {navItemMap}
    </motion.div>
  );
}
