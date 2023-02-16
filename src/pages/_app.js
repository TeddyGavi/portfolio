import "@/styles/globals.css";
import { Montserrat, Rubik_Mono_One } from "@next/font/google";

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

export default function App({ Component, pageProps }) {
  return (
    <main className={`${main.variable} ${title.variable} `}>
      <Component {...pageProps} />
    </main>
  );
}
