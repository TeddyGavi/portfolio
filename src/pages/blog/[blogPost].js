/** specific blog post */

import { getBlogPostPaths, getOneBlogPostData } from "@/lib/getBlogPostPaths";

export const getStaticPaths = async () => {
  const paths = await getBlogPostPaths();

  return {
    paths,
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

export default function BlogPost({ postData }) {
  // console.log(postData);
  return <div>hi</div>;
}
