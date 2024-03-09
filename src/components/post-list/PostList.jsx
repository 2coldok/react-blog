import { Link } from "react-router-dom";

export default function PostList({issues}) {

  return (
    <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <Link to={"/postdetail"} state={{ data: issue }}>
              <p>작성일 : {issue.updated_at}</p>
              <h1>제목 : {issue.title}</h1>
              <h3>내용 : {issue.body}</h3>
              { issue.milestone && <p>태그 : {issue.milestone.title}</p>}
            </Link>
          </li>
        ))}
      </ul>
  );
}

