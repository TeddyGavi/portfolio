import { sanityClient } from "../../sanity";

export const getBlogPosts = async () => {
  const query = /*groq*/ `*[_type == "post"] | order(_createdAt desc)`;
  const posts = await sanityClient.fetch(query);
  return posts;
};
