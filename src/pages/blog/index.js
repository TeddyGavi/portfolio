/**BLOG PAGE root*/

// import Loading from "@/components/Loading";
import { getBlogPosts } from "@/lib/getBlogPosts";
import { motion } from "framer-motion";
import { urlFor } from "../../../sanity";

import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export async function getStaticProps() {
  const blog = await getBlogPosts();
  return { props: { blog }, revalidate: 60 };
}

const blogPreview = () => {};

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
      className="flex flex-col items-center justify-center my-16"
    >
      <div className="grid items-center grid-cols-1 gap-3 md:grid-cols-3">
        {blog.map(({ _id, title, slug, body, mainImage }) => {
          const { width, height } = getImageDimensions(mainImage);
          return (
            <div key={_id}>
              <Link href={`blog/${slug.current}`}>
                {title}
                <Image
                  className="w-10/12 my-4 rounded-md h-10/12"
                  src={urlFor(mainImage)
                    .width(width)
                    .fit("min")
                    .auto("format")
                    .url()}
                  alt={mainImage.alt}
                  width={width}
                  height={height}
                  loading="eager"
                  priority
                />
                <PortableText value={body} components={blogPreview} />
              </Link>
            </div>
          );
        })}
      </div>
      {/* <div className="grid gap-3 gid-cols-3 md:grid-cols-1">
        {blog.map(({ _id, slug, title, mainImage, categories, body }) => {
          // const { width, height } = getImageDimensions(mainImage);
          return (
            <div key={_id} className="p-4">
              <Link href={`/${slug.current}`} className="bg-red hover:scale-1">
                <div className=" font-source dark:text-stone-100 text-stone-900 md:text-5xl">
                  {title}
                </div>
                <Image
                  className="w-10/12 my-4 rounded-md h-10/12"
                  src={urlFor(mainImage)
                    .width(width)
                    .fit("min")
                    .auto("format")
                    .url()}
                  alt={mainImage.alt}
                  width={width}
                  height={height}
                  loading="eager"
                  priority
                />
                <p>this is the post preview</p>
                <PortableText value={body} components={blogParse} />
                <footer className="bg-pink">{categories}</footer>
              </Link>
            </div>
          );
        })}
      </div> */}
    </motion.section>
  );
}
