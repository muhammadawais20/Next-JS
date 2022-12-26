import styles from "../styles/CardSection.module.css";
import Card from "./Card";

const CardSection = ({ articlesData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.cardData}>
          {articlesData.map((cardData) => {
            return <Card articlesData={cardData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
