import Link from "next/link";
import styles from "../styles/Card.module.css";

const Card = ({ articlesData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h3>{articlesData.title}</h3>
          <p>{articlesData.body}</p>
          <Link
            className={styles.link}
            href="blogs/[id]"
            as={`/blogs/${articlesData.id}`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
