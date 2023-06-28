import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "../../sanity";
import Image from "next/image";

const projectImageParser = ({ value }) => {
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

export const ProjectComponent = {
  types: {
    image: projectImageParser,
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

export const blogPreview = {
  block: {
    normal: ({ children, value }) => {
      const preview = children.toString().slice(0, 50);
      return (
        <p className="py-3 font-light text-center md:font-medium text-md font-main md:text-lg">
          {preview}...
        </p>
      );
    },
  },
};
