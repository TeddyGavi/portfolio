import Head from "next/head";
import { getAbout } from "../lib/getAbout";
import TypeWriter from "@/components/TypeWriter";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef } from "react";
import { getProjects } from "@/lib/getProjects";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import HaveYou from "@/components/sections/HaveYou";
import Hero from "@/components/sections/Hero";

export async function getStaticProps() {
  const about = await getAbout();
  const projects = await getProjects();

  return { props: { about, projects } };
}



export default function Home({ about, projects }) {
  // useEffect(() => {
  //   const navHeight = document.getElementById("nav-header").offsetHeight;
  //   const clientH = document.getElementById("__next").clientHeight;
  //   const windowHeight = window.innerHeight;
  //   console.log(windowHeight - clientH);
  // }, []);

  return (
    <>
      <Hero about={about} />
      <HaveYou />
      <About about={about} />
      <Projects projects={projects} />
      <Contact />
    </>
  );
}
