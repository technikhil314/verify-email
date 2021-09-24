import fs from "fs";
import Markdown from "markdown-to-jsx";
import Head from "next/head";

export default function Home({ markdownContent }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Verify Email - An open api</title>
        <meta property="og:url" content="https://verifyemail.vercel.app/" />
        <meta
          name="twitter:title"
          content="Open source public api for email verification"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Open source public api for email verification"
        />
        <meta property="og:type" name="og:type" content="website" />
        <meta
          name="description"
          content="Open source public api for email verification"
        />
        <meta
          property="og:description"
          name="og:description"
          content="Open source public api for email verification"
        />
        <meta
          name="twitter:description"
          content="Open source public api for email verification"
        />
        <meta
          property="og:url"
          name="og:url"
          content="https://technikhil314.netlify.app"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@technikhil314" />
        <link rel="canonical" href="https://verifyemail.vercel.app/" />
        <link
          rel="alternate"
          href="https://verifyemail.vercel.app/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://verifyemail.vercel.app/"
          hrefLang="x-default"
        />
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Markdown>{markdownContent}</Markdown>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const markdownContent = await fs.promises.readFile(
    `${process.cwd()}/README.md`
  );
  return {
    props: {
      markdownContent: markdownContent.toString(),
    },
  };
}
