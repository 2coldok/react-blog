import { useOutletContext } from "react-router-dom";
import PostList from "../../../components/post-list/PostList";

export default function Javascript() {
  const issues = useOutletContext();

  const javascriptIssues = issues.filter((issue) => issue.labels[0].name === 'javascript');

  return (
    <>
      <PostList issues={javascriptIssues} />  
    </>
  );
}
