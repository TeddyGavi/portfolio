import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", to: "#", id: 0 },
  { name: "Projects", to: "#projects", id: 1 },
  { name: "About", to: "#about", id: 2 },
  { name: "Contact", to: "#contact", id: 3 },
];

export default function NavLinks({ variants }) {
  return navItems.map(({ name, to, id }) => {
    return (
      <motion.div key={id} variants={variants}>
        <a
          aria-label={name}
          href={to}
          className="px-2 font-source font-semibold  transition-all  text-stone-100 hover:text-stone-300 hover:opacity-100 opacity-80"
        >
          [{name}]
        </a>
      </motion.div>
    );
  });
}
