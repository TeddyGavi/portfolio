import Head from "next/head";
import { Inter } from "@next/font/google";
import { getPets } from "@/lib/getPets";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const pets = await getPets();
  return {
    props: { pets },
  };
};

export default function Home({ pets }) {
  return (
    <>
      <Head>
        <title>M.D</title>
        <meta name="description" content="web developer Matt Davis portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>pets</h2>
        {pets.length > 0 && (
          <ul>
            {pets.map((pet) => (
              <li key={pet._id}>{pet?.name}</li>
            ))}
          </ul>
        )}
        {!pets.length > 0 && <p>No pets to show</p>}
        {pets.length > 0 && (
          <div>
            <pre>{JSON.stringify(pets, null, 2)}</pre>
          </div>
        )}
        {!pets.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}
      </main>
    </>
  );
}
