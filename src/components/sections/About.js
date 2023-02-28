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
      <h3 className="font-main text-5xl text-stone-200 font-bold inline-flex justify-center">
        About{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 ml-2"
        >
          <path
            fillRule="evenodd"
            d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
            clipRule="evenodd"
          />
        </svg>
      </h3>
      <Image
        priority
        className="flex rounded-full object-contain border-stone-500 border-2 p-4  bg-stone-800 bg-opacity-50 "
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
