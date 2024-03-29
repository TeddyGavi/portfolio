import Footer from "./Footer";
import Nav from "./Nav";
import { Montserrat, Source_Code_Pro } from "next/font/google";

const main = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-main",
});

// const title = Rubik_Mono_One({
//   weight: "400",
//   style: "normal",
//   subsets: ["latin", "latin-ext"],
//   variable: "--font-title",
// });

const source = Source_Code_Pro({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
});

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={`${main.variable} ${source.variable}`}>{children}</main>
      <Footer />
    </>
  );
}
