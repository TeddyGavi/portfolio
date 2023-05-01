import { sanityClient } from "../../sanity";
export const getProjectPaths = async () => {
  const query = /* groq */ `
  *[_type == "projects"] {
    _id,
    slug {
      current
    }
  }`;

  const res = await sanityClient.fetch(query);

  return res.map((x) => {
    return {
      params: {
        project: x.slug.current,
      },
    };
  });
};

export const getProjectData = async (project) => {
  const query = /* groq */ `*[_type == "projects" && slug.current == $project][0]`;

  const res = await sanityClient.fetch(query, { project });
  return res;
};
