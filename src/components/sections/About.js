import Image from "next/image";
import { urlFor } from "../../../sanity";
import PortableText from "react-portable-text";
import { motion } from "framer-motion";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

export default function About({ about }) {
  const { body } = about.body;
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-5 justify-center"
    >
      <motion.h3
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "tween" }}
        viewport={{ once: false, amount: 0.1 }}
        className="font-main text-5xl text-stone-200 font-bold inline-flex justify-center md:text-6xl "
      >
        About{" "}
        <ChatBubbleBottomCenterTextIcon className="w-6 h-6 ml-2 animate-bounce" />
      </motion.h3>
      <Image
        priority
        className="flex rounded-full object-contain border-stone-500 border-2 p-4  bg-stone-800 bg-opacity-50 "
        src={urlFor(about.image).width(250).height(250).quality(100).url()}
        alt="profile image"
        width={250}
        height={250}
      />
      <motion.article
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "tween" }}
        viewport={{ once: false, amount: 0.1 }}
        className="max-h-[40vh] overflow-scroll md:overflow-auto md:max-h-none font-main text-md md:text-lg text-stone-100 border-5 rounded-lg  text-center border border-stone-700  bg-stone-800 bg-opacity-50 mx-4"
      >
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
      </motion.article>
    </section>
  );
}
