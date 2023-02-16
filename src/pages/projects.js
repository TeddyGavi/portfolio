import { getProjects } from "../lib/getProjects";
export async function getStaticProps() {
  const projects = await getProjects();
  return { props: { projects } };
}

export default function projects({ projects }) {
  return (
    <>
      <div>Hi!</div>
      <ul>
        <li>{projects.name}</li>
        <li>{projects.short}</li>
        <li>{projects.pun}</li>
        <li></li>
      </ul>
    </>
  );
}
