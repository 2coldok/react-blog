import { Link } from "react-router-dom"

export default function AppCard({ love }) {
  const { name, img, path } = love;

  return (
    <li>
      <Link to={`/${path}`}>
        <img src={`https://2coldok.github.io/react-blog/image/${img}`} alt="oh"/>
        <h2>{name}</h2>
      </Link> 
    </li>
  );
}
