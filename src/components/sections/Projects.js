import { urlFor } from "../../../sanity";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon, LinkIcon } from "@heroicons/react/24/outline";
import { getImageDimensions } from "@sanity/asset-utils";
import Github from "@/svgIcons/Github";

export default function Projects({ projects }) {
  return (
    <motion.section
      tabIndex={0}
      aria-label="Projects"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col items-center justify-center gap-5 overflow-auto dark:text-stone-200 text-stone-900"
    >
      <h3
        tabIndex={0}
        className="inline-flex justify-center text-3xl font-bold font-main md:text-6xl"
      >
        Projects
        <ClipboardDocumentListIcon className="w-6 h-6 ml-2 animate-bounce" />
      </h3>
      <article
        id="project_list"
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {" "}
        {projects.map(
          ({ _id, about, imageList, gitHub, deployedUrl, title, slug }, i) => {
            const isFirst = i === 0;
            return (
              <div
                key={_id}
                className={`${
                  isFirst && `md:col-span-2`
                } ${i === projects.length -1 && i % 2 !== 0 && `md:col-span-2`} p-2 mx-4 rounded-xl dark:border-5 dark:border-stone-700 dark:bg-stone-800 dark:bg-opacity-50 border-2 border-stone-300 border-opacity-75 text-stone-900 dark:text-stone-200 bg-stone-200`}
              >
                <header className="flex flex-col items-center w-full gap-2 my-4 justify-evenly md:justify-center">
                  <div className="flex h-auto gap-2 justify-evenly md:gap-3">
                    <h3
                      tabIndex={0}
                      className="text-2xl font-bold underline font-main md:text-4xl underline-offset-2"
                    >
                      {title}
                    </h3>
                    <Link
                      href={gitHub}
                      aria-label="Click here to view the source code"
                      className="transition-all duration-300 opacity-50 inline-flex-col hover:opacity-100 dark:text-stone-200 text-stone-900"
                    >
                      <Github tailwindStyle="h-4 w-4 md:h-8 md:w-8 mx-auto"></Github>
                      <span className="text-xs">Code</span>
                    </Link>
                    {deployedUrl && (
                      <Link
                        href={deployedUrl}
                        aria-label="click here to view the live website demo of the project"
                        className="items-center transition-all duration-300 opacity-50 inline-flex-col hover:opacity-100 dark:text-stone-200 text-stone-900"
                      >
                        <LinkIcon className="w-4 h-4 mx-auto md:h-8 md:w-8"></LinkIcon>
                        <span className="text-xs">Live</span>
                      </Link>
                    )}
                  </div>
                  <Link
                    href={`/${slug.current}`}
                    className="inline-flex items-center font-bold transition-all duration-200 border font-source text-md md:text-lg dark:text-stone-100 dark:hover:text-stone-300 dark:hover:opacity-100 dark:opacity-40 dark:hover:border-b-stone-300 text-stone-900 hover:text-stone-100 hover:border-b-stone-900 hover:border dark:border-transparent border-b-transparent"
                  >
                    View Details
                    <ArrowRightCircleIcon className="w-6 h-6 ml-1 md:h-8 md:w-8" />
                  </Link>
                </header>
                <div className="flex flex-col items-center justify-center">
                  <Image
                    tabIndex={0}
                    className="rounded-lg pointer-events-none"
                    src={urlFor(imageList.images[0])
                      .fit("clip")
                      .auto("format")
                      .quality(100)
                      .url()}
                    alt="project image"
                    width={getImageDimensions(imageList.images[0]).width}
                    height={getImageDimensions(imageList.images[0]).height}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    priority={`${isFirst ? "eager" : "lazy" }`}
                  />
                  <div
                    tabIndex={0}
                    className="p-6 font-normal text-center font-main text-md md:text-xl dark:text-stone-100 text-stone-900"
                  >
                    <p>{about}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </article>
    </motion.section>
  );
}
