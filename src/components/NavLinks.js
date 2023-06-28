import { useRouter } from "next/router";

const navItems = [
  { name: "Home", to: "#", id: 0 },
  { name: "Projects", to: "#projects", id: 1 },
  { name: "About", to: "#about", id: 2 },
  { name: "Contact", to: "#contact", id: 3 },
  { name: "Blog", to: "/blog", id: 4 },
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
          className="px-2 font-semibold text-black transition-all duration-200 font-source dark:text-stone-100 dark:hover:text-stone-300 opacity-40 hover:opacity-100 md:dark:opacity-40 dark:opacity-40 hover:dark:opacity-100 md:dark:text-lightbg md:dark:hover:text-white"
        >
          [{name}]
        </a>
      </div>
    );
  });
}
