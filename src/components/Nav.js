import Link from "next/link";
import NavSlide, { navItemMap } from "./NavSlide";
import { useState } from "react";
import HamButton from "./HamButton";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";
export default function Nav() {
  const [navSlide, setNavSlide] = useState(false);
  const handleMenuClick = () => {
    setNavSlide((prev) => !prev);
  };
  return (
    <nav
      aria-label="navigation menu"
      className=" z-50 mt-4 mx-auto w-full h-18 flex justify-between md:justify-evenly items-center p-3 border-b border-stone-500 text-white relative"
    >
      <Link
        href="/"
        className="items-center transition-all  text-stone-200  hover:text-stone-400 hover:opacity-100 opacity-40 "
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
