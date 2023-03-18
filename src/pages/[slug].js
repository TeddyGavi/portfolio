import { getProjectPaths, getProjectData } from "@/lib/getProjectPaths";
import Image from "next/image";
import { urlFor } from "../../sanity";
import { useRouter } from "next/router";
import PortableText from "react-portable-text";

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

const serializers = {
  // block: ({ children }) => <p className=" h-full">{children}</p>,
  image: (props) => (
    <Image
      className="scale-75"
      src={urlFor(props.asset._ref).width(660).height(440).url()}
      alt={props.alt}
      width={960}
      height={640}
    ></Image>
  ),
  span: ({ children }) => {
    <p className="text-white">{children}</p>;
  },
  h3: ({ children }) => (
    <h3 className="text-3xl flex flex-col justify-center items-center text-stone-100 font-source">
      {children}
    </h3>
  ),
};

export default function Project({ project }) {
  const router = useRouter();
  const { body } = project.detailed;
  console.log(body);

  return (
    <section className="max-h-[calc(90vh)] mt-16 flex flex-col justify-center items-center">
      <header className="font-source text-stone-100 text-3xl">
        {project.title}
      </header>
      {/* <p>{project.about}</p> */}

      <PortableText
        className="max-h-full min-h-fit flex flex-col"
        content={body}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        serializers={serializers}
      />
      {/* <pre className="max-w-2xl">{JSON.stringify(body, null, 6)}</pre> */}
    </section>
  );
}
