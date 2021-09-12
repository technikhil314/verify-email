import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="y76XmjuKHC8FEC0Mzf7SbK1235K4KzHHAHOVZfvLXwk"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
