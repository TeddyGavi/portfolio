import Link from "next/link";
import NavSlide from "./NavSlide";
import { useState } from "react";

export default function Nav() {
  const [navSlide, setNavSlide] = useState(false);
  const handleMenuClick = () => {
    setNavSlide((prev) => !prev);
  };
  return (
    <nav className="mt-4 flex justify-between p-3 bg-stone-600 text-white relative">
      <Link href="/" className="font-title">
        Home
      </Link>
      <div
        className="font-title hover:cursor-pointer"
        onClick={handleMenuClick}
      >
        Menu
      </div>
      {navSlide && (
        <div className="font-main text-6xl flex flex-col justify-center items-center max-w-3xl h-screen w-full absolute left-0 top-0 z-100 bg-blue-400 cursor-pointer mx-auto">
          <p>hi</p>
          <p onClick={handleMenuClick}>close</p>
        </div>
      )}
    </nav>
  );
}
