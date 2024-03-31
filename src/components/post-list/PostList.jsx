import { Link } from "react-router-dom";
import { usePortal } from "../../context/SmartPortal";
import { useLocation } from "react-router-dom";
import Tags from "./Tags";
import styles from "./PostList.module.css";
import { useBlur } from "../../context/Blur";

export default function PostList({ issues }) {
  const { blur } = useBlur();
  const { setPortalState } = usePortal();
  const location = useLocation();
  const category = location.pathname.substr(1); // all

  const handleClick = () => setPortalState("tail", "document.png", "/postdetail");

  return (
    <div className={`${styles["container"]} ${blur && styles["blur"]}`}>
      <h1 className={styles.header}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <ul className={styles.ulist}>
        {issues.map((issue) => (
          <Link to={"/postdetail"} state={{ data: issue }}>
            <li
              key={issue.id}
              className={styles.list}
              onClick={handleClick}
              id={issue}
            >
              <p>{getDateCreated(issue)}</p>
              <div className={styles.middle}>
                <img
                  src={`https://2coldok.github.io/react-blog/image/${issue.labels[0].name}.png`}
                  alt="oh"
                  className={styles.img}
                />
                <h1 className={styles.title}>{issue.title}</h1>
              </div>
              {/* <h3>내용 : {issue.body}</h3> */}
              {issue.milestone && <Tags issue={issue} category={category} />}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

function getDateCreated(issue) {
  const date = issue.updated_at;
  const yearMonthDay = date.substring(0, date.indexOf("T"));
  const time = date.substring(date.indexOf("T") + 1, date.indexOf("Z"));

  return `${yearMonthDay} ${time}`;
}
