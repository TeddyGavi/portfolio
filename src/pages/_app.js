import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>M/D</title>

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
        {/* OG tags general */}
        <meta
          property="og:title"
          content="Matt Davis Front-End Web Developer"
        />
        <meta
          property="og:description"
          content="Welcome to the portfolio website of Matt Davis, who was always a skilled web developer with a passion for crafting beautiful and functional websites. In a past life Matt was a juggler, Biologist, and Red Seal Electrician."
        />
        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/m9iwl7mr/production/2522fd2643d0eb781183d06366dec7cb8f5670b5-480x720.jpg?q=100"
        />
        <meta property="og:image:alt" content="Image of Author" />
        <meta property="og:url" content="https://matcdavis.dev" />
        <meta property="og:type" content="profile"></meta>

        {/* OG twitter */}
        <meta
          name="twitter:card"
          content="https://cdn.sanity.io/images/m9iwl7mr/production/2522fd2643d0eb781183d06366dec7cb8f5670b5-480x720.jpg?q=100"
        />
        <meta name="twitter:site" content="@MatcDavis" />
        <meta name="twitter:creator" content="@MatcDavis" />
        <meta
          name="twitter:title"
          content="Matt Davis Front-End Web Developer"
        />
        <meta
          name="twitter:description"
          content="Welcome to the portfolio website of Matt Davis, who was always a skilled web developer with a passion for crafting beautiful and functional websites. In a past life Matt was a juggler, Biologist, and Red Seal Electrician."
        />
        <meta
          name="twitter:image"
          content="https://cdn.sanity.io/images/m9iwl7mr/production/2522fd2643d0eb781183d06366dec7cb8f5670b5-480x720.jpg?q=100"
        />
      </Head>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTHCA_SITE}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
        }}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          // disableTransitionOnChange
          forcedTheme={Component.theme || undefined}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </GoogleReCaptchaProvider>
    </>
  );
}
