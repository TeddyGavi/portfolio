/**BLOG PAGE root*/

import Loading from "@/components/Loading";
import { getBlogPosts } from "@/lib/getBlogPosts";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export async function getStaticProps() {
  const blog = await getBlogPosts();
  return { props: { blog }, revalidate: 60 };
}

const blogParse = () => {};

export default function Blog({ blog }) {
  // create a 3 column layout that is limited to 2 rows, fades in from below when more posts are available

  if (!blog) {
    return <Loading />;
  }
  return (
    <section
      id="blog"
      className="flex flex-col items-center justify-center my-16"
    >
      <div className="grid gid-cols-3 md:grid-cols-1 gap-3">
        {blog.map(({ _id, slug, title, mainImage, categories, body }) => {
          const { width, height } = getImageDimensions(mainImage);
          return (
            <div key={_id} className="p-4">
              <Link href={`/${slug.current}`} className="bg-red hover:scale-1">
                <header className=" font-source dark:text-stone-100 text-stone-900 md:text-5xl">
                  {title}
                </header>
                <Image
                  className="w-10/12 my-4 rounded-md h-10/12"
                  src={urlFor(mainImage)
                    .width(width)
                    .fit("min")
                    .auto("format")
                    .url()}
                  alt={mainImage.alt}
                  width={width}
                  height={height}
                  loading="eager"
                  priority
                />
                <p>this is the post preview</p>
                <PortableText value={body} components={blogParse} />
                <footer className="bg-pink">{categories}</footer>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
