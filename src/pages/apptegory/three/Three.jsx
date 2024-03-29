import { useOutletContext } from "react-router-dom";
import PostList from "../../../components/post-list/PostList";
// import styles from './Three.module.css'

export default function Three() {
  const issues = useOutletContext();

  const threeIssues = issues.filter((issue) => issue.labels[0].name === 'three');

  return (
    <>
      <PostList issues={threeIssues} />
    </>
  );
}
