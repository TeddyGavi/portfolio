import Head from "next/head";
import { getAbout } from "../lib/getAbout";
import TypeWriter from "@/components/TypeWriter";
import { motion } from "framer-motion";
import { useRef } from "react";

export async function getStaticProps() {
  const about = await getAbout();
  return { props: { about } };
}

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

export default function Home({ about }) {
  return (
    <>
      <Head>
        <title>M/D</title>
      </Head>
      <section className="max-w-4xl mt-20 grid md:grid-cols-2 md:gap-8 justify-items-center grid-cols-1 gap-0 px-1 mx-auto ">
        <h1 className="font-main text-stone-50 text-7xl font-bold md:mt-48 mt-20">
          {about.name.split(" ").map((word, i) => {
            return (
              <motion.span
                className="inline-block mx-2 whitespace-nowrap"
                key={i}
                variants={words}
                initial="hidden"
                animate="show"
                transition={{ delayChildren: i * 0.25, staggerChildren: 0.05 }}
              >
                {word.split("").map((char, i) => {
                  return (
                    <motion.span
                      className="inline-block cursor-pointer"
                      key={i}
                      variants={letter.letterIn}
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
          <h2>
            <span className="hidden md:inline-block text-4xl text-stone-400">
              You have now met{" "}
            </span>
          </h2>
          <h2 className="font-main font-medium text-stone-400 text-2xl">
            {`${about.short} `}
            <div>
              <TypeWriter
                toType={[...about.pun]}
                textSize={"2xl"}
                color={"stone-50"}
              />
            </div>
            {about.second}
          </h2>
        </article>
      </section>
    </>
  );
}
