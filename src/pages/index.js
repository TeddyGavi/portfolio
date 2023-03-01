import Head from "next/head";
import { getAbout } from "../lib/getAbout";
import TypeWriter from "@/components/TypeWriter";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef } from "react";
import { getProjects } from "@/lib/getProjects";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export async function getStaticProps() {
  const about = await getAbout();
  const projects = await getProjects();

  return { props: { about, projects } };
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

export default function Home({ about, projects }) {
  // useEffect(() => {
  //   const navHeight = document.getElementById("nav-header").offsetHeight;
  //   const clientH = document.getElementById("__next").clientHeight;
  //   const windowHeight = window.innerHeight;
  //   console.log(windowHeight - clientH);
  // }, []);

  return (
    <>
      <Head>
        <title>M/D</title>
      </Head>
      <section
        id="home"
        className={`mt-16 grid md:grid-cols-2 md:gap-8 justify-items-center grid-cols-1 gap-0 px-1 `}
      >
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
          <h2 className="hidden md:inline-block">
            <span className="text-4xl text-stone-400">You have now met </span>
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
      <Projects projects={projects} />
      <About about={about} />
      <Contact />
    </>
  );
}
