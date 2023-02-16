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
    <nav className="mt-4 flex justify-between items-center p-3 border-b border-stone-500 text-white relative">
      <Link
        href="/"
        className=" font-source font-extrabold transform transition-all  text-stone-200  hover:text-stone-400 hover:opacity-80 md:hidden lg:hidden "
      >
        Home
      </Link>
      <div className="invisible md:visible  space-x-4">{navItemMap}</div>

      <HamButton handleSlide={handleMenuClick} />
      {navSlide && <NavSlide />}
    </nav>
  );
}
