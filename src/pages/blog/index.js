import { getBlogPosts } from "@/lib/getBlogPosts";
import { motion } from "framer-motion";
import { urlFor } from "../../../sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import Link from "next/link";

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
      className="grid grid-cols-1 gap-4 my-16 auto-rows-fr md:grid-cols-2"
    >
      {/* <div className="grid grid-cols-1 gap-3 "> */}
      {blog.map(
        (
          {
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
          },
          i
        ) => {
          const { width, height } = getImageDimensions(mainImage);
          const created = new Date(new Date(_createdAt)).toDateString();

          return (
            <motion.article
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.1 }}
              key={_id}
              className={`flex flex-col justify-between px-4 py-2 h-full dark:text-white text-stone-900 ${
                i === 0 ? `md:col-span-2` : ``
              }`}
            >
              <header className=" self-start gap-2 text-lg md:text-4xl hover:underline hover:scale-[103%] transition-transform duration-300 underline-offset-4 font-title ">
                <Link href={`blog/${slug.current}`}>{title}</Link>
              </header>

              <div className="flex items-center justify-start w-full gap-4 py-4 text-sm font-thin md:text-lg md:font-normal">
                {created}{" "}
              </div>
              <Link href={`blog/${slug.current}`}>
                <div className="px-4 md:relative flex justify-center items-center hover:scale-[103%] hover:opacity-70 transition-all duration-300 ease-in-out ">
                  <div className="z-10 items-center justify-center hidden w-full h-full p-4 transition-opacity duration-300 opacity-0 md:absolute md:flex hover:opacity-100 hover:blur-sm"></div>
                  <Image
                    className="w-auto m-4 rounded-md shadow-xl max-h-min drop-shadow-lg shadow-stone-600 "
                    src={urlFor(mainImage)
                      .width(width)
                      .height(height)
                      .fit("min")
                      .auto("format")
                      .url()}
                    alt={mainImage.alt}
                    width={`${width > 550 ? 550 : width}`}
                    height={`${height > 550 ? 550 : width}`}
                    sizes=""
                    loading="eager"
                    priority
                  />
                </div>
              </Link>
              <div className="w-11/12 mx-auto my-6 text-sm font-light md:font-normal md:text-lg">
                {" "}
                {excerpt}
              </div>
              <div className="flex items-center w-auto gap-4">
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
                  className="w-10 h-10 rounded-full md:h-12 md:w-12"
                ></Image>
                <div className="text-sm font-thin md:text-lg md:font-normal ">
                  {author.name}
                </div>
              </div>
            </motion.article>
          );
        }
      )}
    </motion.section>
  );
}
