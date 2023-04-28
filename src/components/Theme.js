import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (theme === "light") {
    return (
      <button
        onClick={() => setTheme("dark")}
        className="rounded-full p-0.5 border border-spacing-2 border-darkbg"
      >
        <MoonIcon className="h-6 w-6 text-darkbg" />
      </button>
    );
  } else if (theme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        className="rounded-full p-0.5 border border-spacing-2 border-white"
      >
        <SunIcon className="h-6 w-6 dark:text-slate-100" />
      </button>
    );
  }
};

export default Theme;
