import Image from "next/image";
import { urlFor } from "../../../sanity";
import PortableText from "react-portable-text";
import { motion } from "framer-motion";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

export default function About({ about }) {
  const { body } = about.body;
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center gap-5 justify-center "
    >
      <h3 className="font-main text-5xl text-stone-200 font-bold inline-flex justify-center md:text-6xl">
        About{" "}
        <ChatBubbleBottomCenterTextIcon className="w-6 h-6 ml-2 animate-bounce" />
      </h3>
      <Image
        priority
        className="flex rounded-full object-contain border-stone-500 border-2 p-4  bg-stone-800 bg-opacity-50 "
        src={urlFor(about.image).width(250).height(250).quality(100).url()}
        alt="profile image"
        width={250}
        height={250}
      />
      <article className="font-main text-md md:text-lg text-stone-100 border-5 rounded-lg  text-center border border-stone-700  bg-stone-800 bg-opacity-50 mx-4">
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
    </motion.section>
  );
}
