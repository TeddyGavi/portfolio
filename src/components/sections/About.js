import Image from "next/image";
import { urlFor } from "../../../sanity";
import PortableText from "react-portable-text";

export default function About({ about }) {
  const { body } = about.body;
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-5 justify-center "
    >
      <Image
        priority
        className="rounded-full object-contain border-stone-500 border-2 p-4   bg-stone-800 bg-opacity-50 "
        src={urlFor(about.image).width(250).height(250).quality(100).url()}
        alt="profile image"
        width={250}
        height={250}
      />
      <article className="font-main text-md md:text-lg text-stone-100 border-5 rounded-lg  text-center border border-stone-700  bg-stone-800 bg-opacity-50 mx-2">
        <PortableText
          content={body.slice(2, body.length)}
          serializers={{
            li: ({ children }) => (
              <p aria-label="paragraph about author" className="p-3 my-auto">
                {children}
              </p>
            ),
          }}
        />
      </article>
    </section>
  );
}
