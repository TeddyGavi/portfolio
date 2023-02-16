import { useState } from "react";
import { motion } from "framer-motion";
export default function HamButton({ handleSlide }) {
  const [active, setActive] = useState(false);

  return (
    <button
      className="relative group z-10"
      onClick={() => {
        setActive((prev) => !prev);
        // handleSlide();
      }}
    >
      <div className="w-8 h-8 flex items-center space-y-2 relative flex-col border border-white p-1 rounded transform transition-all duration-300 hover:ring-4 ring-0 ring-opacity-30 ring-stone-900 ">
        {active ? (
          <div className="absolute items-center justify-center translate-y-[10px] -translate-x-[14px]">
            <div className="w-7 h-0.5 absolute bg-stone-200 -rotate-45 "></div>
            <div className="w-7 h-0.5  absolute bg-stone-200 rotate-45"></div>
          </div>
        ) : (
          <motion.div className="space-y-2">
            <motion.div className="w-6 h-0.5 bg-stone-200"></motion.div>
            <div className="w-6 h-0.5 bg-stone-200"></div>
            <div className="w-6 h-0.5 bg-stone-200"></div>
          </motion.div>
        )}
      </div>
    </button>
  );
}
