import { useOutletContext } from "react-router-dom";
import PostList from "../../../components/post-list/PostList";

export default function Typescript() {
  const issues = useOutletContext();
  const typescriptIssues = issues.filter(
    (issue) => issue.labels[0].name === "typescript"
  );

  return (
    <>
      <PostList issues={typescriptIssues} />
    </>
  );
}
