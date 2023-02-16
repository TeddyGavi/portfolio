import Link from "next/link";
import NavSlide, { navItemMap } from "./NavSlide";
import { useState } from "react";
import HamButton from "./HamButton";

export default function Nav() {
  const [navSlide, setNavSlide] = useState(false);
  const handleMenuClick = () => {
    setNavSlide((prev) => !prev);
  };
  return (
    <nav className="mt-4 flex justify-between items-center p-3 bg-stone-600 text-white relative">
      <Link
        href="/"
        className="font-title transform transition-all hover:text-stone-900 hover:opacity-80 md:hidden lg:hidden "
      >
        Home
      </Link>
      <div className="invisible md:visible  space-x-4">{navItemMap}</div>

      <HamButton handleSlide={handleMenuClick} />
      {navSlide && <NavSlide />}
    </nav>
  );
}
