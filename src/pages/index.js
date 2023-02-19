import Head from "next/head";
import { getAbout } from "../lib/getAbout";
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
      <section className="max-w-4xl grid md:grid-cols-2 md:gap-8 justify-items-center grid-cols-1 gap-0 px-1 mx-auto ">
        <h1 className="font-main text-stone-50 text-7xl font-bold md:mt-48 mt-20">
          {about.name}
        </h1>

        <article className="grid grid-rows-2 md:gap-32 md:my-24 ">
          <h2>
            <span className="hidden md:inline-block text-4xl text-stone-400">
              You have now met{" "}
            </span>
          </h2>
          <h2 className="font-main font-medium text-stone-400 text-2xl">
            {about.short}
            <TypeWriter
              toType={[...about.pun]}
              textSize={"2xl"}
              color={"stone-50"}
            />
          </h2>
        </article>
      </section>
    </>
  );
}
