import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { Montserrat, Rubik_Mono_One, Source_Code_Pro } from "@next/font/google";
import Head from "next/head";

const main = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-main",
});

const title = Rubik_Mono_One({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext"],
  variable: "--font-title",
});

const source = Source_Code_Pro({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="web developer Matt Davis portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Nav />
      <main className={`${main.variable} ${source.variable} `}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
