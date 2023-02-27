import Image from "next/image";
import { urlFor } from "../../../sanity";
import PortableText from "react-portable-text";

export default function About({ about }) {
  const { body } = about.body;
  return (
    <section
      id="about"
      className="max-w-4xl grid md:grid-cols-2 md:gap-8 justify-items-center grid-cols-1 gap-0 px-1 mx-auto"
    >
      <Image
        priority
        className="rounded-md"
        src={urlFor(about.image).url()}
        alt="profile image"
        width={480}
        height={720}
      />
      <article className="font-main text-lg text-stone-100">
        <PortableText
          content={body.slice(2, body.length)}
          serializers={{
            li: ({ children }) => (
              <p aria-label="paragraph about author" className="py-6 my-auto">
                {children}
              </p>
            ),
          }}
        />
      </article>
    </section>
  );
}
