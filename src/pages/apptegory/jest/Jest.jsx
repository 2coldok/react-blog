import { useOutletContext } from "react-router-dom";
import PostList from "../../../components/post-list/PostList";
// import styles from './Jest.module.css'

export default function Jest() {
  const issues = useOutletContext();

  const jestIssues = issues.filter((issue) => issue.labels[0].name === 'jest');
  return (
    <>
      <PostList issues={jestIssues} />
    </>
  );
}
