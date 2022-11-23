import Head from "next/head";
import type { AppProps } from "next/app";
import "styles/globals.css";

import Layout from "components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Forte Frontend Academy</title>
        <meta name="description" content="Hjemmeside for Frontend-akademiet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
