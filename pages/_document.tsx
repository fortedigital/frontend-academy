import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="no-NB">
      <Head>
        <meta name="author" content="Lana Vu og Eric Veliyulin" />
        <meta
          name="description"
          content="Hjemmeside for Forte Frontend Academy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
