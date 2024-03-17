import { APP_CARD_DATA } from "../../metadata/AppCardData";
import styles from "./Tags.module.css";

export default function Tags({ issue, category }) {
  // if (issue.milestone === null) {
  //   return;

  // }

  const str = issue.milestone.title;
  const tags = str.slice(1).split("#");

  const img = APP_CARD_DATA.filter((element) => element.id === issue.labels[0].name)[0].img;

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        {category === "all" && (
          <img
            src={`https://2coldok.github.io/react-blog/image/${img}`}
            alt="oh"
            className={styles.icon}
          />
        )}
      </div>
      {tags.map((tag) => (
        <div className={styles.tag}>{tag}</div>
      ))}
    </div>
  );
}
