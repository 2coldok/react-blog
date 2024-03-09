import { useOutletContext } from "react-router-dom";
import PostList from "../../../components/post-list/PostList";

export default function ReactList() {
  const issues = useOutletContext();
  const reactIssues = issues.filter(
    (issue) => issue.labels[0].name === "react"
  );

  return (
    <>
      <PostList issues={reactIssues} />
    </>
  );
}
