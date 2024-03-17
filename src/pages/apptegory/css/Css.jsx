import { useOutletContext } from "react-router-dom";
import PostList from "../../../components/post-list/PostList";

export default function Css() {
  const issues = useOutletContext();

  const cssIssues = issues.filter((issue) => issue.labels[0].name === 'css');

  return (
    <>
      <PostList issues={cssIssues} />  
    </>
  );
}