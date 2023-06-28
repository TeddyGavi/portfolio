import Link from "next/link";
import NavSlide from "./NavSlide";
import { useEffect, useState } from "react";
import HamButton from "./HamButton";
import Image from "next/image";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  motion,
} from "framer-motion";
import NavLinks from "./NavLinks";
import Theme from "./Theme";
import Loading from "./Loading";

export default function Nav() {
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 800);
    // setMounted(true);
  }, []);

  // if (!mounted) {
  //   return (
  //     <motion.nav
  //       initial={{ opacity: 1 }}
  //       animate={{ opacity: 0 }}
  //       transition={{ duration: 0.8 }}
  //       className="fixed top-0 flex items-center justify-center w-full h-16 max-w-4xl mx-auto border-b dark:border-stone-500 border-darkbg"
  //     >
  //       <Loading />
  //     </motion.nav>
  //   );
  // } else {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      duration={{ duration: 0.8 }}
      tabIndex={0}
      id="nav-header"
      className={`fixed z-50 h-16 top-0 ${
        hidden ? "backdrop-blur-md  bg-opacity-10" : ""
      } flex max-w-4xl w-full mx-auto justify-between md:justify-evenly items-center p-3 border-b dark:border-stone-500 border-darkbg `}
    >
      {/* TRY MOVING THIS INTO LAYOUT or */}
      <Theme />

      <div className="hidden text-2xl md:inline-flex">{<NavLinks />}</div>
      <HamButton handleSlide={handleMenuClick} navSlide={navSlide} />
      <AnimatePresence>
        {navSlide && <NavSlide handleSlide={handleMenuClick} />}
      </AnimatePresence>
    </motion.nav>
  );
}
// }
