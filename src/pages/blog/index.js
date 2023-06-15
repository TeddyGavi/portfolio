/**BLOG PAGE root*/

import Loading from "@/components/Loading";
import { getBlogPosts } from "@/lib/getBlogPosts";
import Link from "next/link";

export async function getStaticProps() {
  const blog = await getBlogPosts();
  return { props: { blog }, revalidate: 60 };
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
            <div key={_id} className="p-4">
              <p>this is a post</p>{" "}
              <Link href={`/${slug.current}`} className="bg-red">
                click me test
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
