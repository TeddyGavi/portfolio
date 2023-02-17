import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", to: "/", id: 0 },
  { name: "Projects", to: "/projects", id: 1 },
  { name: "Contact", to: "/contact", id: 3 },
];

export default function NavLinks({ variants, ...props }) {
  return navItems.map(({ name, to, id }) => {
    return (
      <motion.div key={id} variants={variants}>
        <Link
          href={to}
          className="px-2 font-source font-extrabold  transition-all  text-stone-200 hover:text-stone-400 hover:opacity-100"
        >
          [{name}]
        </Link>
      </motion.div>
    );
  });
}
