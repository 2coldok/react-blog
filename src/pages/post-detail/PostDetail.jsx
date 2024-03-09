import { useLocation } from "react-router-dom";
import CustomMarkdown from "../../components/custom-markdown/CustomMarkdown";

export default function PostDetail() {
  const { state } = useLocation();
  const issue = state.data;

  console.log(issue.title); 


  return (
    <>
      <p>post detail 페이지에용</p>
      <h1>{issue.title}</h1>
      <p>포스트 작성일 : {issue.updated_at}</p>
      <CustomMarkdown data={issue.body}/>
    </>
  )
}
