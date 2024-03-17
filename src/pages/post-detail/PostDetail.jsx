import { useLocation } from "react-router-dom";
import CustomMarkdown from "../../components/custom-markdown/CustomMarkdown";
import styles from './PostDetail.module.css'

export default function PostDetail() {
  const { state } = useLocation();
  const issue = state.data;

  


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{issue.title}</h1>
        <p>{getDateCreated(issue)}</p>
      </div>
      <div className={styles.markdown}><CustomMarkdown data={issue.body}/></div>
    </div>
  )
}

function getDateCreated(issue) {
  const date = issue.updated_at;
  const yearMonthDay = date.substring(0, date.indexOf('T'));
  const time = date.substring(date.indexOf('T') + 1, date.indexOf('Z'));
  
  return `${yearMonthDay} ${time}`;
}
