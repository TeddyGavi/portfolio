import { useRouter } from "next/router";

const navItems = [
  { name: "Home", to: "#", id: 0 },
  { name: "Projects", to: "#projects", id: 1 },
  { name: "About", to: "#about", id: 2 },
  { name: "Contact", to: "#contact", id: 3 },
  { name: "Blog", to: "/blog", id: 3 },
];

export default function NavLinks() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return navItems.map(({ name, to, id }) => {
    return (
      <div key={id}>
        <a
          value={id}
          tabIndex={0}
          aria-label={name}
          href={isHome ? to : to.replace("#", "/#")}
          className="px-2 font-source font-semibold  transition-all duration-200 text-black  dark:text-stone-100 dark:hover:text-stone-300 hover:opacity-40 opacity-100 md:dark:opacity-90 dark:opacity-40 hover:dark:opacity-100 md:dark:text-lightbg md:dark:hover:text-white"
        >
          [{name}]
        </a>
      </div>
    );
  });
}
