import styles from "./Tags.module.css";

export default function Tags({ issue, category }) {
  const tagBundle = issue.milestone.title;
  const tags = tagBundle.slice(1).split("#");

  return (
    <div className={styles.container}>
      {tags.map((tag) => (
        <div className={styles.tag}>{tag}</div>
      ))}
    </div>
  );
}
