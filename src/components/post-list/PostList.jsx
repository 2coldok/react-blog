import { Link } from "react-router-dom";
import styles from "./PostList.module.css";

export default function PostList({ issues }) {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{issues[0].labels[0].name}</h1>
      <ul className={styles.ulist}>
        {issues.map((issue) => (
          <li key={issue.id} className={styles.list}>
            <Link to={"/postdetail"} state={{ data: issue }}>
              <p>작성일 : {issue.updated_at}</p>
              <h1>제목 : {issue.title}</h1>
              {/* <h3>내용 : {issue.body}</h3> */}
              {issue.milestone && <p>태그 : {issue.milestone.title}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
