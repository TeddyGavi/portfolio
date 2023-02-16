import Link from "next/link";

export const navItems = ["Home", "Projects", "Contact"];

export const navItemMap = navItems.map((x, i) => (
  <Link
    key={i}
    href={`/${x.toLowerCase()}`}
    className="font-title py-6 transform transition-all hover:text-stone-100 hover:opacity-80"
  >
    {x}
  </Link>
));

export default function NavSlide() {
  return (
    <div className="flex flex-col justify-center items-center text-3xl top-0 left-0 w-full absolute bg-stone-900 text-stone-400  mx-auto backdrop-blur-sm ">
      {navItemMap}
    </div>
  );
}
