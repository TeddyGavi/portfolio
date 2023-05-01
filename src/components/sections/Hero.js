import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import TypeWriter from "../TypeWriter";
import { useEffect, useState } from "react";

const words = {
  hidden: {},
  show: {},
};

const letter = {
  letterIn: {
    hidden: {
      opacity: 0,
      y: `calc(50vh)`,
    },
    show: {
      opacity: 1,
      y: `0vh`,
      transition: {
        type: "tween",
        duration: 1,
      },
    },
  },
  letterOut: {
    hidden: {
      opacity: 1,
      y: `0vh`,
    },
    show: {
      opacity: 0,
      y: `calc(50vh)`,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  },
};

export default function Hero({ about }) {
  return (
    <section
      id="home"
      className={`mt-16 grid md:grid-cols-2 md:gap-8 justify-items-center grid-cols-1 gap-0 px-1 `}
    >
      <h1
        tabIndex={0}
        className="font-main dark:text-stone-50 text-stone-900 text-7xl font-bold md:mt-48 mt-20"
      >
        <div
          tabIndex={0}
          className="md:hidden inline-block items-center text-2xl dark:text-stone-400 text-stone-800"
        >
          You have now met
        </div>
        {about.name.split(" ").map((word, i) => {
          return (
            <motion.span
              tabIndex={0}
              className="inline-flex mx-2 whitespace-nowrap cursor-pointer"
              key={i}
              variants={words}
              initial="hidden"
              animate="show"
              transition={{ delayChildren: i * 0.25, staggerChildren: 0.05 }}
            >
              {word.split("").map((char, i) => {
                return (
                  <motion.span
                    tabIndex={-1}
                    className="inline-block"
                    key={i}
                    variants={letter.letterIn}
                    whileHover={{
                      scale: 1.5,
                      rotate: Math.floor(Math.random() * (-150 - 10) + 10),
                    }}
                    whileTap={{
                      scale: 1.5,
                      rotate: Math.floor(Math.random() * (-150 - 10) + 10),
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.span>
          );
        })}
      </h1>

      <article className="grid grid-rows-2 md:gap-32 md:my-24 ">
        <h2 className="hidden md:inline-block">
          <span
            tabIndex={0}
            className="text-2xl md:text-4xl  dark:text-stone-400 text-stone-800"
          >
            You have now met{" "}
          </span>
        </h2>
        <h2
          tabIndex={0}
          className="font-main font-medium text-stone-500 dark:text-stone-400 text-2xl"
        >
          {`${about.short} `}
          <div>
            <TypeWriter
              toType={[...about.pun]}
              textSize={"2xl"}
              color={"dark:text-stone-50 text-black"}
            />
          </div>
          {about.second}
        </h2>
      </article>
    </section>
  );
}
