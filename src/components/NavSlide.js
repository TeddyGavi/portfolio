import Link from "next/link";

const navItems = ["Home", "Projects", "Contact"];

export default function NavSlide({ handleClose }) {
  return (
    <div className="flex flex-col justify-center items-center text-3xl top-0 left-0 w-full absolute bg-black  mx-auto backdrop-blur-sm">
      {navItems.map((x, i) => (
        <Link key={i} href={`/${x.toLowerCase()}`} className="font-title py-6">
          {x}
        </Link>
      ))}
    </div>
  );
}
