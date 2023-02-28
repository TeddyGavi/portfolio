import { urlFor } from "../../../sanity";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const loadVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, type: "tween" } },
};

export default function Projects({ projects }) {
  return (
    <section
      id="projects"
      className=" text-stone-200 flex flex-col justify-around "
    >
      <h3 className="font-main text-5xl font-bold inline-flex justify-center">
        Work
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 ml-2"
        >
          <path
            fillRule="evenodd"
            d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </h3>
      <article className="overflow-hidden ">
        <motion.div
          drag="x"
          whileTap={{ cursor: "grabbing" }}
          dragConstraints
          className=" flex h-full"
        >
          {projects.map(({ _id, about, gitHub, image, title }) => {
            return (
              <motion.div
                initial="hidden"
                animate="show"
                // drag="x"
                variants={loadVariants}
                key={_id}
                // whileTap={{ cursor: "grabbing" }}
                className=" cursor-grab min-w-full flex flex-col justify-center items-center p-2 mx-4 rounded-lg border border-stone-700  bg-stone-800 bg-opacity-50"
              >
                <header className="flex-row inline-flex items-center w-full justify-evenly md:justify-around my-4">
                  <h3 className="font-main font-bold text-3xl ">{title}</h3>{" "}
                  <Link href={gitHub} className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" h-8 w-8 hover:opacity-100 opacity-40 hover:text-stone-100 transition-all"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </Link>
                </header>
                <section className="grid md:grid-cols-2 grid-cols-1 ">
                  <Image
                    priority
                    className="rounded-md justify-self-center pointer-events-none"
                    src={urlFor(image).height(250).width(250).url()}
                    alt="project image"
                    width={250}
                    height={250}
                  />
                  <div className="flex flex-col items-center text-center w-full mx-auto p-6 font-source text-md ">
                    <p>{about}</p>
                  </div>
                </section>
              </motion.div>
            );
          })}
        </motion.div>
      </article>
    </section>
  );
}
