import { getProjectPaths, getProjectData } from "@/lib/getProjectPaths";
import Image from "next/image";
import { urlFor } from "../../sanity";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import Link from "next/link";

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
    ></Image>
  );
};

const component = {
  types: {
    image: ImageParser,
  },
  block: {
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-4xl self-start m-2 p-1 text-stone-100 font-source border-b-2">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-md md:text-lg py-3 font-light w-11/12 text-white font main">
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
  const { body } = project.detailed;
  return (
    <section className="my-16 flex flex-col justify-center items-center">
      <header className="font-source text-stone-100 text-4xl md:text-5xl flex my-4 border-b-2 pb-4">
        {project.title}
        <Link href={gitHub} className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-8 w-8 hover:opacity-100 opacity-40 hover:text-stone-100 transition-all"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </Link>
      </header>
      {/* <p>{project.about}</p> */}

      <PortableText
        className="max-h-full min-h-fit flex flex-col"
        value={body}
        components={component}
      />
      {/* <pre className="max-w-2xl">{JSON.stringify(body, null, 6)}</pre> */}
    </section>
  );
}
