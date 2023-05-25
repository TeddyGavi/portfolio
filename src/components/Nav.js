import Link from "next/link";
import NavSlide from "./NavSlide";
import { useState } from "react";
import HamButton from "./HamButton";
import Image from "next/image";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import NavLinks from "./NavLinks";
import Theme from "./Theme";

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
      tabIndex={0}
      id="nav-header"
      className={`fixed z-50 h-16 top-0 ${
        hidden ? "backdrop-blur-md  bg-opacity-10" : ""
      } flex max-w-4xl w-full mx-auto justify-between md:justify-evenly items-center p-3 border-b dark:border-stone-500 border-darkbg transition-all`}
    >
      <Theme />
      {/* <Link
        href="/"
        className="transition-all duration-300 text-stone-100 hover:text-stone-400 hover:opacity-100 opacity-40"
      >
        <Image
          src={`/favicon.ico`}
          width={32}
          height={32}
          alt="site logo"
          className="ml-2"
          priority
        /> 
    </Link> */}
      <div className="hidden text-2xl md:inline-flex">{<NavLinks />}</div>
      <HamButton handleSlide={handleMenuClick} navSlide={navSlide} />
      <AnimatePresence>
        {navSlide && <NavSlide handleSlide={handleMenuClick} />}
      </AnimatePresence>
    </nav>
  );
}
