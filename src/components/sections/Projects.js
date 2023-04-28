import { urlFor } from "../../../sanity";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
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
      className=" text-stone-200 flex flex-col justify-center items-center gap-5 overflow-auto "
    >
      <h3
        tabIndex={0}
        className="font-main text-3xl font-bold inline-flex justify-center md:text-6xl"
      >
        Projects
        <ClipboardDocumentListIcon className="h-6 w-6 ml-2 animate-bounce" />
      </h3>
      <article
        id="project_list"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {" "}
        {projects.map(({ _id, about, imageList, title, slug }) => {
          return (
            <div
              key={_id}
              className="p-2 mx-4 rounded-xl border border-stone-700 bg-stone-800 bg-opacity-50"
            >
              <header className="flex flex-col gap-2 items-center w-full justify-evenly md:justify-center my-4">
                <h3
                  tabIndex={0}
                  className="flex font-main font-bold text-2xl md:text-4xl underline-offset-2 underline"
                >
                  {title}
                </h3>
                <Link
                  href={`/${slug.current}`}
                  className="font-source font-bold text-md md:text-lg inline-flex items-center  text-stone-100 hover:text-stone-300 hover:opacity-100 opacity-40 transition-all duration-200"
                >
                  View Project
                  <ArrowRightCircleIcon className="h-6 w-6 md:h-8 md:w-8 ml-2" />
                </Link>
              </header>
              <div className="flex flex-col justify-center items-center">
                <Image
                  tabIndex={0}
                  priority
                  className="rounded-lg  pointer-events-none"
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
                  className="text-center p-6 font-main font-normal text-md md:text-xl text-stone-100 "
                >
                  <p>{about}</p>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </motion.section>
  );
}
