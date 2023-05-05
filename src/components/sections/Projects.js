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
      className=" dark:text-stone-200 text-stone-900 flex flex-col justify-center items-center gap-5 overflow-auto "
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
        {projects.map(
          ({ _id, about, imageList, gitHub, deployedUrl, title, slug }, i) => {
            return (
              <div
                key={_id}
                className={`${
                  i === 0 && `md:col-span-2 row-span-2`
                } p-2 mx-4 rounded-xl dark:border-5 dark:border-stone-700 dark:bg-stone-800 dark:bg-opacity-50 border-2 border-stone-300 border-opacity-75 text-stone-900 dark:text-stone-200 bg-stone-200`}
              >
                <header className="flex flex-col gap-2 items-center w-full justify-evenly md:justify-center my-4">
                  <h3
                    tabIndex={0}
                    className="flex font-main font-bold text-2xl md:text-4xl underline-offset-2 underline"
                  >
                    {title}
                  </h3>
                  <div className="flex justify-evenly gap-2 h-auto">
                    <Link
                      href={gitHub}
                      aria-label="Click here to view the source code"
                    >
                      <Github tailwindStyle="h-6 w-6 md:h-8 md:w-8 hover:opacity-100 opacity-40 transition-all duration-200 dark:text-stone-300 text-stone-900"></Github>
                      <span className="text-xs ">Code</span>
                    </Link>
                    {deployedUrl && (
                      <Link
                        href={deployedUrl}
                        aria-label="click here to view the live website demo of the project"
                        className=" items-center hover:opacity-100 opacity-40  transition-all duration-300 dark:text-stone-200 text-stone-900"
                      >
                        <LinkIcon className="h-6 w-6 md:h-8 md:w-8"></LinkIcon>
                        <span className="text-xs">Live</span>
                      </Link>
                    )}
                  </div>
                  <Link
                    href={`/${slug.current}`}
                    className="font-source font-bold text-md md:text-lg inline-flex items-center  dark:text-stone-100 dark:hover:text-stone-300 dark:hover:opacity-100 dark:opacity-40 dark:hover:border-b-stone-300 text-stone-900 hover:text-stone-100 hover:border-b-stone-900 hover:border dark:border-transparent border border-b-transparent transition-all duration-200"
                  >
                    View Details
                    <ArrowRightCircleIcon className="h-6 w-6 md:h-8 md:w-8 ml-1" />
                  </Link>
                </header>
                <div className="flex flex-col justify-center items-center">
                  <Image
                    tabIndex={0}
                    className="rounded-lg  pointer-events-none"
                    src={urlFor(imageList.images[0])
                      .fit("crop")
                      .auto("format")
                      .url()}
                    alt="project image"
                    width={getImageDimensions(imageList.images[0]).width}
                    height={getImageDimensions(imageList.images[0]).height}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                  />
                  <div
                    tabIndex={0}
                    className="text-center p-6 font-main font-normal text-md md:text-xl dark:text-stone-100 text-stone-900"
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
