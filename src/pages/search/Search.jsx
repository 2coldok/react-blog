import { useLocation } from "react-router-dom";
import PostList from "../../components/post-list/PostList";

// sessionStorage
export default function Search() {
  const { state } = useLocation();
  const issues = [];
  if (state === null) {
    const state = JSON.parse(sessionStorage.getItem("state"));
    state.searchIssues.forEach((element) => {
      issues.push(element);
    });
  }

  if (state !== null) {
    sessionStorage.setItem("state", JSON.stringify(state));

    state.searchIssues.forEach((element) => {
      issues.push(element);
    });
  }

  return (
    <>
      <PostList issues={issues} />
    </>
  );
}
