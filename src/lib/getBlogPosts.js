import { sanityClient } from "../../sanity";

export const getBlogPosts = async () => {
  const query = /*groq*/ `*[_type == "post"] {_id, excerpt, title, slug, body, mainImage, _createdAt, _updatedAt, "categories": categories[]->title, "author": author->{name, picture},
} | order(_createdAt desc)`;
  const posts = await sanityClient.fetch(query);
  return posts;
};
