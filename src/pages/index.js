import Head from "next/head";
import Nav from "@/components/Nav";
import { getAbout } from "../lib/getAbout";
import { urlFor } from "../../sanity";
import { AnimatePresence, motion } from "framer-motion";
import TypeWriter from "@/components/TypeWriter";

export async function getStaticProps() {
  const about = await getAbout();
  return { props: { about } };
}

export default function Home({ about }) {
  return (
    <>
      <Head>
        <title>M/D</title>
      </Head>
      <section className="max-w-3xl mx-auto max-h-screen">
        <article className="flex flex-col justify-center items-center mx-auto">
          <h1 className="font-main text-stone-100 text-5xl font-bold py-8">
            Hi, my name is {about.name}{" "}
            {/* <TypeWriter toType={[about.name]} textSize={"5xl"} /> */}
          </h1>
          <h2 className="font-main text-stone-400 text-2xl font-semibold py-6">
            {about.short}
            <TypeWriter toType={[...about.pun]} textSize={"2xl"} />
          </h2>
        </article>
        {/* <img src={urlFor(about.image).url()} alt="profile image" /> */}
      </section>
    </>
  );
}
