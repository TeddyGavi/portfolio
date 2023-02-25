import { useContext } from "react";
import { themeContext } from "@/context/themeContext";

export default function useTheme() {
  return useContext(themeContext);
}
