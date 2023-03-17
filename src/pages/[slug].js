import { getProjectPaths, getProjectData } from "@/lib/getProjectPaths";
import { useRouter } from "next/router";
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

export default function Project({ project }) {
  const router = useRouter();

  return (
    <section className="h-[calc(90vh)] pt-16">
      <header className="font-source text-stone-100">{project.title}</header>
      <p></p>
    </section>
  );
}
