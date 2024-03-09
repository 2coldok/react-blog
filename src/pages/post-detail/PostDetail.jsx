import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";


export default function PostDetail() {
  const { state } = useLocation();
  const issue = state.data;

  console.log(issue.title); 


  return (
    <>
      <p>post detail 페이지에용</p>
      <h1>{issue.title}</h1>
      <ReactMarkdown>{issue.body}</ReactMarkdown>
    </>
  )
}
