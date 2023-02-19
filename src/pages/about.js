import Image from "next/image";
import { urlFor } from "../../sanity";
import { getAbout } from "../lib/getAbout";
import PortableText from "react-portable-text";

export async function getStaticProps() {
  const about = await getAbout();
  return { props: { about } };
}

export default function About({ about }) {
  console.log(about.body);
  const { body } = about.body;
  return (
    <section className="max-w-4xl grid md:grid-cols-2 md:gap-8 justify-items-center grid-cols-1 gap-0 px-1 mx-auto ">
      <Image
        priority
        className="mt-8 rounded-md"
        src={urlFor(about.image).url()}
        alt="profile image"
        width={480}
        height={720}
      />
      <article className="font-main text-lg text-stone-100">
        <PortableText
          content={body}
          // projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          // dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          serializers={{}}
        />
      </article>
    </section>
  );
}
