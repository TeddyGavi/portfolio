import { getProjectPaths, getProjectData } from "@/lib/getProjectPaths";
import Image from "next/image";
import { urlFor } from "../../sanity";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Github from "@/svgIcons/Github";

export const getStaticPaths = async () => {
  const paths = await getProjectPaths();
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const project = await getProjectData(params.project);
  if (!project) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      project,
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

export default function Project({ project }) {
  const { gitHub } = project;
  const { deployedUrl } = project;
  const { body } = project.detailed;
  return (
    <section className="flex flex-col items-center justify-center my-16">
      <header className="flex items-center justify-center gap-4 pb-4 my-4 text-3xl border-b-2 font-source dark:text-stone-100 text-stone-900 md:text-5xl">
        {project.title}
        <Link
          href={gitHub || "/"}
          className="inline-flex flex-col gap-1 transition-all duration-300 opacity-50 hover:opacity-100 dark:text-stone-200 text-stone-900"
        >
          <Github tailwindStyle="h-8 w-8" />
          <span className="text-xs">Code</span>
        </Link>
        {deployedUrl && (
          <Link
            href={deployedUrl}
            className="inline-flex flex-col gap-1 transition-all duration-300 opacity-50 hover:opacity-100 dark:text-stone-200 text-stone-900"
          >
            <LinkIcon className="w-8 h-8 "></LinkIcon>
            <span className="text-xs ">Live</span>
          </Link>
        )}
      </header>

      <PortableText
        className="flex flex-col max-h-full min-h-fit"
        value={body}
        components={component}
      />
      <Link
        href={"/#projects"}
        className="flex items-center justify-center pt-2 text-lg font-semibold underline transition-all duration-300 underline-offset-8 md:text-xl font-source dark:text-stone-100 text-stone-900 dark:hover:text-stone-200 hover:text-stone-900 hover:opacity-100 opacity-40"
      >
        <ArrowLeftCircleIcon className="w-8 h-8" />
        &nbsp;Back
      </Link>
    </section>
  );
}
