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
        slug: x.slug.current,
      },
    };
  });
};

export const getProjectData = async (slug) => {
  const query = /* groq */ `*[_type == "projects" && slug.current == $slug][0]`;

  const res = await sanityClient.fetch(query, { slug });
  return res;
};
