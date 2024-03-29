import { useOutletContext } from "react-router-dom";
import PostList from "../../../components/post-list/PostList";

export default function Laboratory() {
  const issues = useOutletContext();

  const laboratoryIssues = issues.filter(
    (issue) => issue.labels[0].name === "laboratory"
  );

  return (
    <>
      <PostList issues={laboratoryIssues} />
    </>
  );
}
