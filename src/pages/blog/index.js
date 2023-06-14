/**BLOG PAGE root*/

import { getBlogPosts } from "@/lib/getBlogPosts";

export async function getStaticProps() {
  const blog = await getBlogPosts();

  return { props: { blog }, revalidate: 10 };
}

export default function Blog({ blog }) {
  // create a 3 column layout that is limited to 2 rows, fades in from below when more posts are availabe
  return (
    <section id="blog" className="grid grid-cols-3 md:grid-cols-1"></section>
  );
}
