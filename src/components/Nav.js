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

export default function Nav() {
  const [navSlide, setNavSlide] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
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
    <nav
      id="nav-header"
      aria-label="navigation menu"
      className={`fixed z-50 h-16 top-0 ${
        hidden ? "backdrop-blur-md  bg-opacity-10" : ""
      } flex max-w-4xl w-screen mx-auto justify-between md:justify-evenly items-center p-3 border-b border-stone-500 text-white transition-all`}
    >
      <Link
        href="/"
        className="items-center transition-all  text-stone-100  hover:text-stone-400 hover:opacity-100 opacity-80 "
      >
        <Image src={`/favicon.ico`} width={32} height={32} alt="site logo" />
      </Link>
      <div className="hidden md:inline-flex text-2xl">{<NavLinks />}</div>
      <HamButton handleSlide={handleMenuClick} navSlide={navSlide} />
      <AnimatePresence>
        {navSlide && <NavSlide handleSlide={handleMenuClick} />}
      </AnimatePresence>
    </nav>
  );
}
