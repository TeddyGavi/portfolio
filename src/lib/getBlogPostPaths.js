import { sanityClient } from "../../sanity";

export const getBlogPostPaths = async () => {
  const query = /* groq */ `*[_type == "posts"]{_id, slug {current}}`;
  const postPaths = await sanityClient.fetch(query);

  return postPaths.map((post) => {
    return {
      params: {
        blogPost: post.slug.current,
      },
    };
  });
};

export const getOneBlogPostData = async (post) => {
  const query = /* groq */ `*[_type == "post" && slug.current == $post][0]`;
  const postData = await sanityClient.fetch(query, { post });
  return postData;
};
