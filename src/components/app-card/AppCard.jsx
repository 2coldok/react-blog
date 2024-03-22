import { useNavigate } from "react-router-dom";
import { usePortal } from "../../context/SmartPortal";
import styles from "./AppCard.module.css";

export default function AppCard({ app }) {
  const { id, name, img, path, type } = app;
  const navigate = useNavigate();
  const { setPortalState } = usePortal();

  const handleClick = () => {
    if (type === "link") {
      return window.open(`${path}`);
    }
    setPortalState("middle", img, `/${path}`);
    navigate(`/${path}`);
  };

  return (
    <ul className={styles.container}>
      <li key={id} className={styles.appbox} onClick={handleClick}>
        <img
          src={`https://2coldok.github.io/react-blog/image/${img}`}
          alt="oh"
          className={styles.icon}
        />
      </li>
      <h2 className={styles.name}>{name}</h2>
    </ul>
  );
}
