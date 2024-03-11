import { Link } from "react-router-dom"
import styles from './AppCard.module.css'

export default function AppCard({ love }) {
  const { name, img, path } = love;

  return (
    <div>
      <li className={styles.appbox}>
        <Link to={`/${path}`}>
          <img src={`https://2coldok.github.io/react-blog/image/${img}`} alt="oh" className={styles.icon}/>
        </Link> 
      </li>
      <h2 className={styles.name}>{name}</h2>
    </div>
  );
}
