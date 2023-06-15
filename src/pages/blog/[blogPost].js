/** specific blog post */

import { getBlogPostPaths, getOneBlogPostData } from "@/lib/getBlogPostPaths";

export const getStaticPaths = async () => {
  const postPaths = await getBlogPostPaths();

  return {
    postPaths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getOneBlogPostData(params.blogPost);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postData,
    },
    revalidate: 10,
  };
};

export default function BlogPost() {
  return <div>hi</div>;
}
