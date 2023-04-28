import { urlFor } from "../../../sanity";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardDocumentListIcon, LinkIcon } from "@heroicons/react/24/solid";
import { getImageDimensions } from "@sanity/asset-utils";

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
      className=" text-stone-200 flex flex-col justify-center gap-5 overflow-auto "
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
        {projects.map(({ _id, about, imageList, title, slug }) => {
          return (
            <div
              key={_id}
              className="justify-center items-center p-2 mx-4 rounded-xl border border-stone-700  bg-stone-800 bg-opacity-50"
            >
              <header className="flex-row inline-flex items-center w-full justify-evenly md:justify-center my-4">
                <Link href={`/${slug.current}`}>
                  <h3
                    tabIndex={0}
                    className="flex font-main font-bold text-2xl md:text-4xl hover:underline-offset-2 hover:underline "
                  >
                    {title}
                    <LinkIcon className="h-4 w-4 ml-2" />
                  </h3>
                </Link>
              </header>
              <section className="grid md:grid-cols-2 grid-cols-1 ">
                <Image
                  tabIndex={0}
                  priority
                  className="rounded-lg justify-self-center pointer-events-none"
                  // className="rounded-full object-contain"
                  src={urlFor(imageList.images[0])
                    .fit("crop")
                    .auto("format")
                    .url()}
                  alt="project image"
                  width={getImageDimensions(imageList.images[0]).width}
                  height={getImageDimensions(imageList.images[0]).height}
                />
                <div
                  tabIndex={0}
                  className="flex flex-col items-center justify-center text-center w-full mx-auto p-6 font-main text-md md:text-xl text-stone-100 "
                >
                  <p>{about}</p>
                </div>
              </section>
            </div>
          );
        })}
      </article>
    </motion.section>
  );
}
