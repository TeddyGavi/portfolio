import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "../../../sanity";
import { getBlogPostPaths, getOneBlogPostData } from "@/lib/getBlogPostPaths";
import { PortableText } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
const blogPostImageParser = ({ value }) => {
  const { width, height } = getImageDimensions(value);

  return (
    <Image
      className="w-10/12 mx-auto rounded-md h-10/12"
      src={urlFor(value).width(width).fit("min").auto("format").url()}
      alt={value.alt || ""}
      width={width}
      height={height}
      loading="eager"
      priority
    ></Image>
  );
};

const blogCodeParser = ({ value }) => {
  return (
    <SyntaxHighlighter
      language={value.language}
      style={darcula}
      wrapLines={true}
      wrapLongLines={true}
      showLineNumbers
      lineNumberStyle={{
        padding: "0 5px 0 0",
        fontSize: 14,
        borderRight: "1.5px solid darkgray",
        marginRight: "10px",
      }}
    >
      {value.code}
    </SyntaxHighlighter>
  );
};
const blogPostComponent = {
  types: {
    image: blogPostImageParser,
    code: blogCodeParser,
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-xl underline md:text-4xl underline-offset-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="p-1 m-2 text-xl underline underline-offset-2 md:text-3xl dark:text-stone-100 text-stone-800 font-source">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="w-11/12 mx-auto text-lg underline md:text-2xl dark:text-stone-100 text-stone-800">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="w-11/12 py-3 mx-auto font-light text-md md:text-xl dark:text-white text-stone-900 font main">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <q className="w-11/12 mx-auto font-normal text-md md:text-xl">
        {children}
      </q>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="w-10/12 py-2 mx-auto font-normal list-disc">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="list-outside">{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          className="font-bold hover:underline"
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },
  },
};

export default function BlogPost({ postData }) {
  const { author, body, categories, mainImage, title, _createdAt, _id } =
    postData;
  return (
    <section className="flex flex-col items-center w-full mx-auto mt-16">
      <article className="w-11/12">
        <header className="text-xl underline md:text-5xl underline-offset-4 font-title">
          <h1>{title}</h1>
        </header>
        <div className="flex items-center w-full gap-4 my-4 ">
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
          <div className="flex items-center gap-2 font-thin md:font-normal">
            Posted in:
            {categories ? (
              categories.map((cat, i) => {
                return (
                  <div
                    key={i}
                    className="flex px-1 border rounded-full md:border-2 "
                  >
                    {cat}
                  </div>
                );
              })
            ) : (
              <div className="flex px-1 border-2 rounded-full">{""}</div>
            )}
          </div>
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
