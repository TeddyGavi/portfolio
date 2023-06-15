/**BLOG PAGE root*/

import Loading from "@/components/Loading";
import { getBlogPosts } from "@/lib/getBlogPosts";
import Link from "next/link";

export async function getStaticProps() {
  const blog = await getBlogPosts();
  //revalidate might not be needed?
  return { props: { blog } };
}

export default function Blog({ blog }) {
  // create a 3 column layout that is limited to 2 rows, fades in from below when more posts are availabe

  if (!blog) {
    return <Loading />;
  }
  return (
    <section
      id="blog"
      className="flex flex-col items-center justify-center my-16"
    >
      <div className="grid gid-cols-3 md:grid-cols-1 gap-3">
        {blog.map(({ _id, slug }) => {
          return (
            <div key={_id}>
              <p>this is a post</p>{" "}
              <Link href={`/${slug.current}`}>click me test</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
