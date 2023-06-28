import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "../../sanity";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
    <div className="w-full px-2">
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
    </div>
  );
};
export const blogPostComponent = {
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
          className="font-bold break-words hover:underline"
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
