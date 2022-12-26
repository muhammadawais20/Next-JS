import Head from "next/head";
import CardSection from "../components/CardSection";

export default function Home({ articlesData }) {
  return (
    <div>
      <Head>
        <title>Next JS</title>
        <meta name="description" content="Start's learning NEXT JS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CardSection articlesData={articlesData} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`
  https://jsonplaceholder.typicode.com/posts?_limit=3
  `);
  const articlesData = await response.json();

  return {
    props: {
      articlesData,
    },
  };
};
