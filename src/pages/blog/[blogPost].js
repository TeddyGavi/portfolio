/** specific blog post */

import { getBlogPostPaths, getOneBlogPostData } from "@/lib/getBlogPostPaths";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

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
    revalidate: 10,
  };
};
const ImageParser = ({ value }) => {
  const { width, height } = getImageDimensions(value);

  return (
    <Image
      className="w-10/12 my-4 rounded-md h-10/12"
      src={urlFor(value).width(width).fit("min").auto("format").url()}
      alt={value.alt}
      width={width}
      height={height}
      loading="eager"
      priority
    ></Image>
  );
};
const component = {
  types: {
    image: ImageParser,
  },
  block: {
    h3: ({ children }) => (
      <h3 className="self-start p-1 m-2 text-2xl border-b-2 md:text-4xl dark:text-stone-100 text-stone-800 font-source">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="w-11/12 py-3 font-light text-md md:text-xl dark:text-white text-stone-900 font main">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          className="underline underline-offset-2"
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
  // console.log(postData);
  return (
    <section className="mt-16">
      <PortableText value={postData.body} components={component} />
    </section>
  );
}
