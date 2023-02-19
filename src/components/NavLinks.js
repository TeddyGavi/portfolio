import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", to: "/", id: 0 },
  { name: "Projects", to: "/projects", id: 1 },
  { name: "Contact", to: "/contact", id: 2 },
  { name: "About", to: "/about", id: 3 },
];

export default function NavLinks({ variants }) {
  return navItems.map(({ name, to, id }) => {
    return (
      <motion.div key={id} variants={variants}>
        <Link
          href={to}
          className="px-2 font-source font-semibold  transition-all  text-stone-100 hover:text-stone-400 hover:opacity-100 opacity-40"
        >
          [{name}]
        </Link>
      </motion.div>
    );
  });
}
