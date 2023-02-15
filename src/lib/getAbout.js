import { sanityClient } from "../../sanity";

const getAbout = async () => {
  const query = `*[_type == "about"]`;
  const about = await sanityClient.fetch(query);
  return about;
};
