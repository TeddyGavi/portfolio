import Link from "next/link";
import NavSlide from "./NavSlide";
import { useState, useEffect } from "react";
import HamButton from "./HamButton";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import NavLinks from "./NavLinks";

const nav = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  transition: { type: "tween" },
};

const navButton = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
};

export default function Nav() {
  const [navSlide, setNavSlide] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleScrollable = () => {
    navSlide
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden");
  };

  const handleMenuClick = () => {
    setNavSlide((prev) => !prev);
    toggleScrollable();
  };

  return (
    <motion.nav
      variants={nav}
      initial="hidden"
      animate={hidden ? "hidden" : "show"}
      transition={{ delayChildren: 0.5 }}
      aria-label="navigation menu"
      className={`fixed z-50 mx-auto w-full h-18 flex  justify-between md:justify-evenly items-center p-3 border-b border-stone-500 text-white `}
    >
      <Link
        href="/"
        className="items-center transition-all  text-stone-200  hover:text-stone-400 hover:opacity-100 opacity-40 "
      >
        <Image src={`/favicon.ico`} width={32} height={32} alt="site logo" />
      </Link>
      <div className="hidden md:inline-flex text-2xl">{<NavLinks />}</div>
      <motion.div variants={navButton} animate="show">
        <HamButton handleSlide={handleMenuClick} navSlide={navSlide} />
      </motion.div>
      <AnimatePresence>
        {navSlide && <NavSlide handleSlide={handleMenuClick} />}
      </AnimatePresence>
    </motion.nav>
  );
}
