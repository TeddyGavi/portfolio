import { getProjectPaths, getProjectData } from "@/lib/getProjectPaths";
import Image from "next/image";
import { urlFor } from "../../sanity";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { LinkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import Github from "@/svgIcons/Github";

export const getStaticPaths = async () => {
  const paths = await getProjectPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const project = await getProjectData(params.slug);
  if (!project) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      project,
    },
    revalidate: 60,
  };
};

const ImageParser = ({ value }) => {
  const { width, height } = getImageDimensions(value);

  return (
    <Image
      className="rounded-md h-10/12 w-10/12 my-4"
      src={urlFor(value)
        .width(width)
        // .height(height)
        .fit("min")
        .auto("format")
        .url()}
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
      <h3 className="text-2xl md:text-4xl self-start m-2 p-1 dark:text-stone-100 text-stone-800 font-source border-b-2">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-md md:text-lg py-3 font-light w-11/12 dark:text-white text-stone-900 font main">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      // const whereTo = value || "";
      // return (
      //   <a className="text-4xl underline" rel="/#" href={whereTo}>
      //     {children}
      //   </a>
      // );
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
  console.log(deployedUrl);
  const { body } = project.detailed;
  return (
    <section className="my-16 flex flex-col justify-center items-center">
      <header className="font-source dark:text-stone-100 text-stone-900 text-4xl md:text-5xl flex my-4 border-b-2 pb-4">
        {project.title}
        <Link href={gitHub || "/"} className="ml-4">
          <Github tailwindStyle=" h-8 w-8 hover:opacity-100 opacity-40  transition-all duration-300 dark:text-stone-400 text-stone-900" />
        </Link>
        {deployedUrl && (
          <Link
            href={deployedUrl}
            className=" hover:opacity-100 opacity-40  transition-all duration-300 dark:text-stone-400 text-stone-900"
          >
            <LinkIcon className="h-8 w-8 ml-4 relative"></LinkIcon>
            <span className="text-xs absolute ">&nbsp; Live</span>
          </Link>
        )}
      </header>

      <PortableText
        className="max-h-full min-h-fit flex flex-col"
        value={body}
        components={component}
      />
      <Link
        href={"/#projects"}
        className="px-2 underline-offset-8 underline text-lg md:text-xl flex justify-center items-center font-source font-semibold dark:text-stone-100 text-stone-900 dark:hover:text-stone-200 hover:text-stone-900 hover:opacity-100 opacity-40 transition-all duration-300"
      >
        <ArrowLeftCircleIcon className="h-8 w-8" />
        &nbsp;Back Home
      </Link>
    </section>
  );
}
