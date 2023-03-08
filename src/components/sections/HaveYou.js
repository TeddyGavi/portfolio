import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useRef, useEffect } from "react";
export default function HaveYou() {
  const { scrollYProgress } = useScroll();
  const container = useRef(null);
  useMotionValueEvent(scrollYProgress, "change", (e) => {
    console.log(e);
  });
  // console.log(container.current.clientHeight);

  useEffect(() => {
    console.log(container.current.clientHeight);
  }, []);

  const text = "Have You?";
  const word = {
    hidden: {},
    show: {},
  };

  const letter = {
    letterIn: {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    },
  };

  return (
    <section
      id="have-you"
      ref={container}
      className="flex flex-col justify-center items-center"
    >
      <h3 className="font-source text-stone-100 font-extrabold drop-shadow-xl shadow-stone-300 text-5xl md:text-7xl ">
        {text.split("").map((word, i) => {
          return (
            <motion.span
              key={i}
              initial="hidden"
              whileInView="show"
              // animate="show"
              variants={word}
              transition={{ staggerChildren: 0.05, delayChildren: i * 0.15 }}
            >
              {word.split("").map((char, i) => {
                return (
                  <motion.span key={i} variants={letter.letterIn}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.span>
          );
        })}
      </h3>
    </section>
  );
}
