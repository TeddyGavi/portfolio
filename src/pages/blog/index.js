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
          author,
          excerpt,
          slug,
          body,
          mainImage,
          categories,
          _createdAt,
          _updatedAt,
        }) => {
          const { width, height } = getImageDimensions(mainImage);
          const created = new Date(new Date(_createdAt)).toDateString();

          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.1 }}
              key={_id}
              className="flex flex-col items-center justify-center py-2 font-bold dark:text-white text-stone-900"
            >
              <header className="inline-flex items-center gap-2 hover:underline md:text-4xl hover:underline-offset-4 font-title ">
                <Link href={`blog/${slug.current}`}>{title.toUpperCase()}</Link>
                <ArrowDownCircleIcon className="w-6 h-6 mx-auto md:h-8 md:w-8" />
              </header>

              <div className="flex items-center justify-start w-full gap-4 p-2 text-sm font-thin md:text-lg md:font-normal">
                {created}{" "}
                <div className="flex items-center gap-4 px-6">
                  <Image
                    src={
                      urlFor(author?.picture)
                        .width(96)
                        .height(96)
                        .auto("format")
                        .quality(100)
                        .fit("crop")
                        .url() || "https://source.unsplash.com/96x96/?face"
                    }
                    width={96}
                    height={96}
                    alt={author?.picture?.alt || "Matt"}
                    className="w-10 h-10 rounded-full md:h-14 md:w-14"
                  ></Image>
                  <div className="text-sm font-thin md:text-lg md:font-normal ">
                    {author.name}
                  </div>
                </div>
              </div>
              <Link href={`blog/${slug.current}`}>
                <div className="px-4 md:relative flex justify-center items-center hover:scale-[103%] hover:opacity-70 transition-all duration-300 ease-in-out ">
                  <div className="z-10 items-center justify-center hidden w-full h-full p-4 transition-opacity duration-300 opacity-0 md:absolute md:flex hover:opacity-100 hover:blur-sm">
                    {/* <PortableText value={body} components={blogPreview} /> */}
                    {/* <p className="text-2xl font-medium">read full article...</p> */}
                  </div>
                  <Image
                    className="w-auto h-auto m-4 rounded-md shadow-xl drop-shadow-lg shadow-stone-600 "
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
                </div>
              </Link>
              <div className="w-10/12 mx-auto my-6 text-sm font-thin md:font-normal md:text-lg">
                {" "}
                {/* <PortableText value={body} components={blogPreview} /> */}
                {excerpt}
              </div>
            </motion.div>
          );
        }
      )}
      {/* </div> */}
    </motion.section>
  );
}
