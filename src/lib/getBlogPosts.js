import { sanityClient } from "../../sanity";

export const getBlogPosts = async () => {
  const query = /*groq*/ `*[_type == "post"]`;
  const posts = await sanityClient.fetch(query);
  return posts;
};
