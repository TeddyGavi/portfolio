import { useTyping } from "@/hooks/useTyping";
import { AnimatePresence, motion } from "framer-motion";

export default function TypeWriter() {
  const toType = ["Hello this is a test", "Test 2"];
  const { text, ariaText, phase } = useTyping(toType);

  return (
    <span
      className={`text-white text-4xl ${
        phase === "Typing" || phase === "Deleting" ? "cursor-typing" : "cursor"
      }`}
      aria-label={ariaText}
    >
      {text}
    </span>
  );
}

/*
 const wordAnimation = {
    hidden: {},
    show: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

<AnimatePresence>
      <motion.span className="inline-block text-white text-4xl blink"></motion.span>
      {words.split(" ").map((word, i) => {
        return (
          <motion.span
            className="inline-block mr-2 whitespace-nowrap"
            key={i}
            initial="hidden"
            animate="show"
            variants={wordAnimation}
            transition={{ delayChildren: i * 0.25, staggerChildren: 0.05 }}
          >
            {word.split("").map((char, i) => {
              return (
                <motion.span
                  className="text-white text-4xl will-change-transform"
                  key={i}
                  variants={characterAnimation}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </AnimatePresence> */
