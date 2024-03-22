import { useOutletContext } from "react-router-dom";
import PostList from "../../../components/post-list/PostList";

export default function All() {
  const issues = useOutletContext();

  return (
    <>
      <PostList issues={issues} />
    </>
  );
}
