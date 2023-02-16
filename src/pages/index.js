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
        <div>Hi!</div>
        <ul>
          <li>{about.name}</li>
          <li>{about.short}</li>
          <li>{about.pun}</li>
          <li></li>
        </ul>
        <div className=" bg-black"></div>
      </main>
    </>
  );
}
