import { useOutletContext } from "react-router-dom";
import PostList from "../../../components/post-list/PostList";

export default function Profile() {
  const issues = useOutletContext();

  const profileIssues = issues.filter((issue) => issue.labels[0].name === 'profile');

  return (
    <>
      <PostList issues={profileIssues} />  
    </>
  );
}