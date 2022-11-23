import Head from "next/head";

export default function Home() {
  return (
    <div className="px-4">
      <Head>
        <title>Forte Frontend Academy</title>
        <meta name="description" content="Hjemmeside for Frontend-akademiet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Innhold</p>

      <footer>Footer</footer>
    </div>
  );
}
