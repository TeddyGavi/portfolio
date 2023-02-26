import { getProjects } from "../lib/getProjects";
import { urlFor } from "../../sanity";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const projects = await getProjects();
  return { props: { projects } };
}

const loadVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, type: "tween" } },
};

export default function projects({ projects }) {
  return (
    <section className=" mx-auto mt-20 text-stone-100 ">
      <article className="flex overflow-hidden">
        {projects.map(({ _id, about, gitHub, image, title }) => {
          return (
            <motion.div
              initial="hidden"
              animate="show"
              variants={loadVariants}
              key={_id}
              className="h-[calc(90vh)] flex flex-col flex-grow justify-center items-center p-6  border-stone-500 border-b-2"
            >
              <header className="flex-row inline-flex items-center w-full justify-between md:justify-around my-4">
                <h3 className="font-main font-bold text-4xl ">{title}</h3>{" "}
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
                  className="rounded-md justify-self-center"
                  src={urlFor(image).url()}
                  alt="project image"
                  width={480}
                  height={720}
                />
                <div className="flex flex-col items-center text-center w-full p-6 font-source text-md ">
                  <p>{about}</p>
                </div>
              </section>
            </motion.div>
          );
        })}
      </article>
    </section>
  );
}
