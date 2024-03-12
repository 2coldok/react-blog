import { useLocation } from "react-router-dom";
import CustomMarkdown from "../../components/custom-markdown/CustomMarkdown";
import styles from './PostDetail.module.css'

export default function PostDetail() {
  const { state } = useLocation();
  const issue = state.data;

  console.log(issue.title); 


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{issue.title}</h1>
        <p>포스트 작성일 : {issue.updated_at}</p>
      </div>
      <div className={styles.markdown}><CustomMarkdown data={issue.body}/></div>
    </div>
  )
}
