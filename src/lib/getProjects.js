import { sanityClient } from "../../sanity.js";

export const getProjects = async () => {
  const query = `*[_type == "projects"]`;
  const projects = await sanityClient.fetch(query);
  return projects;
};
