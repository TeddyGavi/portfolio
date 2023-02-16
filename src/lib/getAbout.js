import { sanityClient } from "../../sanity";

export const getAbout = async () => {
  const query = `*[_type == "about"][0]`;
  const about = await sanityClient.fetch(query);
  return about;
};
