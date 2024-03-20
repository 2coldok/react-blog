import { Link, useNavigate } from "react-router-dom"
import styles from './AppCard.module.css'
import { usePortal } from "../../context/SmartPortal";
import { useEffect } from "react";


export default function AppCard({ love }) {
  const navigate = useNavigate();
  const { name, img, path, type } = love;

  const { setPortalState } = usePortal();

  const handleClick = () => {
    if (type === 'link') {
      return window.open(`${path}`);
    }
    setPortalState('middle', img, `/${path}`);
    navigate(`/${path}`);
  }

  return (
    <div className={styles.container}>
      <li className={styles.appbox} onClick={handleClick}>
        <img src={`https://2coldok.github.io/react-blog/image/${img}`} alt="oh" className={styles.icon}/>
      </li>
      <h2 className={styles.name}>{name}</h2>
    </div>
  );
}

/*{ <Link to={`/${path}`}>
          <img src={`https://2coldok.github.io/react-blog/image/${img}`} alt="oh" className={styles.icon}/>
        </Link>  */