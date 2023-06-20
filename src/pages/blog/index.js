/**BLOG PAGE root*/

// import Loading from "@/components/Loading";
import { getBlogPosts } from "@/lib/getBlogPosts";
import { motion } from "framer-motion";
import { urlFor } from "../../../sanity";

import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export async function getStaticProps() {
  const blog = await getBlogPosts();
  return { props: { blog }, revalidate: 60 };
}

const blogPreview = {
  block: {
    normal: ({ children, value }) => {
      const preview = children.toString().slice(0, 50);
      return (
        <p className="py-3 font-light text-center md:font-medium text-md font-main md:text-lg dark:text-white text-stone-900">
          {preview}...
        </p>
      );
    },
  },
};

export default function Blog({ blog }) {
  // console.log(blog);
  // create a 3 column layout that is limited to 2 rows, fades in from below when more posts are available

  // if (!blog) {
  //   return <Loading />;
  // }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="blog"
      className="my-16"
    >
      <div className="grid grid-cols-1 gap-3 ">
        {blog.map(({ _id, title, slug, body, mainImage }) => {
          const { width, height } = getImageDimensions(mainImage);
          console.log(width, height);
          return (
            <div
              key={_id}
              className="flex flex-col items-center justify-center py-2 font-bold dark:text-white text-stone-900"
            >
              <Link
                href={`blog/${slug.current}`}
                className="flex justify-between gap-2 text-xl underline transition-opacity duration-300 md:text-2xl underline-offset-4 font-title opacity-40 hover:opacity-100 shadow-stone-600"
              >
                {title.toUpperCase()}
                <ArrowRightCircleIcon className="w-6 h-6 ml-1 md:h-8 md:w-8" />
              </Link>
              <div className="relative max-w-fit h-full flex justify-center items-center hover:scale-[103%] hover:opacity-70 transition-all duration-300 ease-in-out ">
                <div className="absolute z-10 items-center justify-center hidden w-full h-full transition-opacity duration-300 opacity-0 dark:bg-darkbg bg-lightbg md:flex md:flex-col hover:opacity-50">
                  <PortableText value={body} components={blogPreview} />
                </div>
                <Image
                  className="m-4 rounded-md shadow-xl drop-shadow-lg shadow-stone-600 -z-10"
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
              <div className="visible md:hidden">
                {" "}
                <PortableText value={body} components={blogPreview} />
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}