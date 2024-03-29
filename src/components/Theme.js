import { useState, useEffect, useLayoutEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Loading from "./Loading";
const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-6 h-6"></div>;
  }

  if (theme === "light") {
    return (
      <button
        aria-label="Toggle dark and light theme button"
        onClick={() => setTheme("dark")}
        className="rounded-full p-0.5 border border-spacing-2 border-darkbg"
      >
        <MoonIcon className="w-6 h-6 text-darkbg" />
      </button>
    );
  } else {
    return (
      <button
        aria-label="Toggle dark and light theme button"
        onClick={() => setTheme("light")}
        className="rounded-full p-0.5 border border-spacing-2 border-white"
      >
        <SunIcon className="w-6 h-6 dark:text-slate-100" />
      </button>
    );
  }
};

export default Theme;
