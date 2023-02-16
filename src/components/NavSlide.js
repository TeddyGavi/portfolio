import Link from "next/link";

export const navItems = ["Home", "Projects", "Contact"];

export const navItemMap = navItems.map((x, i) => (
  <Link
    key={i}
    href={`/${x.toLowerCase()}`}
    className="font-source font-extrabold py-6 transform transition-all  text-stone-200 hover:text-stone-400 hover:opacity-80"
  >
    {x}
  </Link>
));

export default function NavSlide() {
  return (
    <div className="flex flex-col justify-center items-center text-6xl top-0 left-0 w-full absolute bg-stone-900 mx-auto ">
      {navItemMap}
    </div>
  );
}
