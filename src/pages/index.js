import Head from "next/head";
import Nav from "@/components/Nav";
import { getAbout } from "../lib/getAbout";

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
      <main className="max-w-3xl mx-auto">
        <Nav />
        <section className="flex flex-col justify-center items-center mx-auto">
          <h1 className="font-main text-5xl font-bold py-8">
            Hi, my name is {about.name}
          </h1>
          <h2 className="font-main text-2xl font-semibold py-6">
            {about.short}
          </h2>
        </section>
      </main>
    </>
  );
}
