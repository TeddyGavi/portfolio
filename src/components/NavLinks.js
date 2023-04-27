import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const navItems = [
  { name: "Home", to: "#", id: 0 },
  { name: "Projects", to: "#projects", id: 1 },
  { name: "About", to: "#about", id: 2 },
  { name: "Contact", to: "#contact", id: 3 },
];

export default function NavLinks() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return navItems.map(({ name, to, id }) => {
    return (
      <div key={id}>
        <a
          tabIndex={0}
          aria-label={name}
          href={isHome ? to : to.replace("#", "/#")}
          className="px-2 font-source font-semibold  transition-all  text-stone-100 hover:text-stone-300 hover:opacity-100 opacity-80"
        >
          [{name}]
        </a>
      </div>
    );
  });
}
