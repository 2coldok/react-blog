import { useOutletContext } from "react-router-dom";
import PostList from "../../../components/post-list/PostList";

export default function Next() {
  const issues = useOutletContext();
  const nextIssues = issues.filter(
    (issue) => issue.labels[0].name === "next"
  );

  return (
    <>
      <PostList issues={nextIssues} />
    </>
  );
}
