import { Link } from "react-router-dom";
import styles from "./PostList.module.css";
import { usePortal } from "../../context/SmartPortal";
import { useLocation } from "react-router-dom";
import Tags from "./Tags";

export default function PostList({ issues }) {
  const { setPortalState } = usePortal();
  const location = useLocation();
  console.log(`location : ${location.pathname}`);
  
  const handleClick = () => setPortalState('tail', 'document.png', '/postdetail');
  const category = location.pathname.substr(1); // all
  

  
  

  
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <ul className={styles.ulist}>
        {issues.map((issue) => (
          <li key={issue.id} className={styles.list} onClick={handleClick}>
            <Link to={"/postdetail"} state={{ data: issue }}>
              <p>{getDateCreated(issue)}</p>
              <h1>{issue.title}</h1>
              {/* <h3>내용 : {issue.body}</h3> */}
              {issue.milestone && <Tags issue={issue} category={category} />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getDateCreated(issue) {
  const date = issue.updated_at;
  const yearMonthDay = date.substring(0, date.indexOf('T'));
  const time = date.substring(date.indexOf('T') + 1, date.indexOf('Z'));
  
  return `${yearMonthDay} ${time}`;
}