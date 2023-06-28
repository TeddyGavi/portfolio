import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "../../../sanity";
import { getBlogPostPaths, getOneBlogPostData } from "@/lib/getBlogPostPaths";
import { PortableText } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { blogPostComponent } from "@/utils/blogPortableText";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

export const getStaticPaths = async () => {
  const paths = await getBlogPostPaths();

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getOneBlogPostData(params.blogPost);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postData,
    },
    revalidate: 60,
  };
};

export default function BlogPost({ postData }) {
  const { author, body, categories, mainImage, title, _createdAt, _id } =
    postData;
  return (
    <section className="mt-16 ">
      <article className="flex flex-col items-center mx-auto">
        <header className="px-1 text-xl underline md:text-5xl underline-offset-4 font-title">
          <h1>{title}</h1>
        </header>
        <div className="flex items-center w-full gap-4 px-2 my-4 ">
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
        <div className="flex flex-wrap items-center w-full gap-2 px-2 text-sm font-thin md:font-normal">
          Posted in:
          {categories ? (
            categories.map((cat, i) => {
              return (
                <div
                  key={i}
                  className="flex px-2 border rounded-full md:border-2 "
                >
                  {cat}
                </div>
              );
            })
          ) : (
            <div className="flex px-2 border-2 rounded-full">{""}</div>
          )}
        </div>
        <PortableText value={body} components={blogPostComponent} />
      </article>
      <Link
        href={"/blog"}
        className="flex items-center justify-center pt-2 text-lg font-semibold underline transition-all duration-300 underline-offset-8 md:text-xl font-source dark:text-stone-100 text-stone-900 dark:hover:text-stone-200 hover:text-stone-900 hover:opacity-100 opacity-40"
      >
        <ArrowLeftCircleIcon className="w-8 h-8" />
        &nbsp;Back
      </Link>
    </section>
  );
}
