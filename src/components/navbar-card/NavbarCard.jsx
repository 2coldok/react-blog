import { usePortal } from "../../context/SmartPortal";
import styles from "./NavbarCard.module.css";
import { useNavigate } from "react-router-dom";

export default function NavbarCard({ position }) {
  const navigate = useNavigate();
  const { getPortalState, portalData, setPortalState } = usePortal();
  const state = getPortalState(position); // highlight or hide or reveal
  const [img, path] = portalData[position];

  const handleClick = () => {
    setPortalState(position, img, path);
    navigate(path);
  };

  return (
    <>
      <div className={ (state === 'highlight') ? styles.hcontainer : styles.container}>
        <img
          src={`https://2coldok.github.io/react-blog/image/${img}`}
          alt="oh"
          className={styles.icon}
          onClick={handleClick}
        />   
      </div>
      { state === 'reveal' && <div className={styles.line}></div> }
    </>
  );
}
// 
