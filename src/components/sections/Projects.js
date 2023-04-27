import { urlFor } from "../../../sanity";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";

export default function Projects({ projects }) {
  return (
    <motion.section
      tabIndex={0}
      aria-label="Projects"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.5 }}
      className=" text-stone-200 flex flex-col justify-center gap-5 "
    >
      <h3
        tabIndex={0}
        className="font-main text-3xl font-bold inline-flex justify-center md:text-6xl"
      >
        Projects
        <ClipboardDocumentListIcon className="h-6 w-6 ml-2 animate-bounce" />
      </h3>
      <article id="project_list" className="flex flex-col gap-4">
        {" "}
        {projects.map(({ _id, about, gitHub, image, title, slug }) => {
          return (
            <Link key={_id} href={`/${slug.current}`}>
              <div className="justify-center items-center p-2 mx-4 rounded-xl border border-stone-700  bg-stone-800 bg-opacity-50">
                <header className="flex-row inline-flex items-center w-full justify-evenly md:justify-center my-4">
                  <h3
                    tabIndex={0}
                    className="font-main font-bold text-2xl md:text-4xl "
                  >
                    {title}
                  </h3>{" "}
                </header>
                <section className="grid md:grid-cols-2 grid-cols-1 ">
                  <Image
                    tabIndex={0}
                    priority
                    className="rounded-md justify-self-center pointer-events-none h-auto w-auto"
                    src={urlFor(image).height(720).width(480).url()}
                    alt="project image"
                    width={250}
                    height={250}
                  />
                  <div
                    tabIndex={0}
                    className="flex flex-col items-center text-center w-full mx-auto p-6 font-source text-md md:text-xl text-stone-100 "
                  >
                    <p>{about}</p>
                  </div>
                </section>
              </div>
            </Link>
          );
        })}
      </article>
    </motion.section>
  );
}
