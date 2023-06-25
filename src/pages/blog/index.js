import { getBlogPosts } from "@/lib/getBlogPosts";
import { motion } from "framer-motion";
import { urlFor } from "../../../sanity";
import { blogPreview } from "@/utils/portableText";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

export async function getStaticProps() {
  const blog = await getBlogPosts();
  return { props: { blog }, revalidate: 60 };
}

export default function Blog({ blog }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="blog"
      className="my-16"
    >
      {/* <div className="grid grid-cols-1 gap-3 "> */}
      {blog.map(
        ({
          _id,
          title,
          slug,
          body,
          mainImage,
          categories,
          _createdAt,
          _updatedAt,
        }) => {
          const { width, height } = getImageDimensions(mainImage);
          const created = new Date(new Date(_createdAt)).toLocaleDateString();
          const updated = new Date(new Date(_updatedAt)).toLocaleDateString();

          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.1 }}
              key={_id}
              className="flex flex-col items-center justify-center py-2 font-bold dark:text-white text-stone-900"
            >
              <header className="inline-flex items-center gap-2 underline md:text-4xl underline-offset-4 font-title ">
                {title.toUpperCase()}
                <ArrowDownCircleIcon className="w-6 h-6 mx-auto md:h-8 md:w-8" />
              </header>

              <div className="flex w-full gap-4 font-normal">
                Created: {created}
                <div>Updated: {updated}</div>
              </div>
              <Link href={`blog/${slug.current}`}>
                <div className="p-4 md:relative flex justify-center items-center hover:scale-[103%] hover:opacity-70 transition-all duration-300 ease-in-out ">
                  <div className="z-10 items-center justify-center hidden w-full h-full p-4 transition-opacity duration-300 opacity-0 md:absolute md:flex hover:opacity-100 hover:blur-sm">
                    {/* <PortableText value={body} components={blogPreview} /> */}
                    {/* <p className="text-2xl font-medium">read full article...</p> */}
                  </div>
                  <Image
                    className="m-4 rounded-md shadow-xl drop-shadow-lg shadow-stone-600 "
                    src={urlFor(mainImage)
                      .width(width)
                      .fit("min")
                      .auto("format")
                      .url()}
                    alt={mainImage.alt}
                    width={640 || width}
                    height={640 || height}
                    loading="eager"
                    priority
                  />
                </div>
                <div className="">
                  {" "}
                  <PortableText value={body} components={blogPreview} />
                </div>
              </Link>
            </motion.div>
          );
        }
      )}
      {/* </div> */}
    </motion.section>
  );
}
