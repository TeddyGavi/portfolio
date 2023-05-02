import Image from "next/image";
import { urlFor } from "../../../sanity";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import { getImageDimensions } from "@sanity/asset-utils";

export default function About({ about }) {
  const { body } = about.body;
  const { width, height } = getImageDimensions(about.image);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.1 }}
      tabIndex={0}
      id="about"
      className="flex flex-col items-center gap-5 justify-center "
    >
      <motion.h3
        tabIndex={0}
        // initial={{ opacity: 0, x: 100 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{ duration: 1, type: "tween" }}
        // viewport={{ once: false, amount: 0.1 }}
        className="font-main text-3xl dark:text-stone-200 text-stone-900 font-bold inline-flex justify-center md:text-6xl "
      >
        About{" "}
        <ChatBubbleBottomCenterTextIcon className="w-6 h-6 ml-2 animate-bounce" />
      </motion.h3>
      <Image
        tabIndex={0}
        priority
        className="flex rounded-full h-36 w-36 md:h-72 md:w-72 object-cover dark:border-stone-500 border-2 p-1 md:p-4 dark:bg-stone-800 bg-opacity-50 "
        src={urlFor(about.image)
          .width(width)
          .height(height)
          .auto("format")
          .quality(100)
          .url()}
        alt="profile picture of Matt Davis"
        width={width}
        height={height}
      />
      <motion.article
        tabIndex={0}
        // initial={{ opacity: 0, x: -100 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{ duration: 1, type: "tween" }}
        // viewport={{ once: false, amount: 0.1 }}
        className="font-main h-[calc(50svh)] overflow-y-auto md:h-fit md:overflow-auto text-md md:text-lg dark:text-stone-100  dark:border-5 rounded-lg  text-center dark:border-stone-700 dark:bg-stone-800 dark:bg-opacity-50 border-stone-300 border-opacity-75 text-stone-900 bg-stone-200 border-2  mx-4 p-1"
      >
        <PortableText
          value={body}
          components={{
            listItem: ({ children }) => <p className="py-2">{children}</p>,
          }}
        />
      </motion.article>
    </motion.section>
  );
}
