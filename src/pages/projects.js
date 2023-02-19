import { getProjects } from "../lib/getProjects";
export async function getStaticProps() {
  const projects = await getProjects();
  return { props: { projects } };
}

export default function projects({ projects }) {
  return (
    <section className="max-w-4xl mx-auto grid grid-cols-1 justify-items-center">
      {projects.map(({ _id, about, gitHub, image, title }) => {
        return (
          <div key={_id} className="">
            {title}
          </div>
        );
      })}
    </section>
  );
}
