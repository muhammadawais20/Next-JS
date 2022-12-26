import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../../styles/Blogs.module.css";

const Blogs = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <section className={styles.container}>
      <div className={styles.articleNum}>Article# {id}</div>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>Title: {article.title}</div>
        <div className={styles.content}>Content: {article.body}</div>
        <Link href="/">
          <div>Go back</div>
        </Link>
      </div>
    </section>
  );
};

export default Blogs;

// get server side props do not run with static paths,

// export const getServerSideProps = async (context) => {
//   const response = await fetch(`
//     https://jsonplaceholder.typicode.com/posts/${context.params.id}
//     `);
//   const article = await response.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

export const getStaticProps = async (context) => {
  const response = await fetch(`
    https://jsonplaceholder.typicode.com/posts/${context.params.id}
    `);
  const article = await response.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`
  https://jsonplaceholder.typicode.com/posts`);

  const articles = await response.json();
  const getIds = articles.map((data) => data.id);
  const paths = getIds.map((path) => ({ params: { id: path.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
