import { useNavigate } from "react-router-dom";
import { usePortal } from "../../context/SmartPortal";
import styles from "./AppCard.module.css";
import { decryption } from "../../util/Ella";

export default function AppCard({ app }) {
  const { id, name, img, path, type } = app;
  const navigate = useNavigate();
  const { setPortalState } = usePortal();

  const handleClick = () => {
    if (type === 'comingsoon') {
      return alert('준비중입니다.');
    }
    if (type === "link") {
      return window.open(`${path}`);
    }
    if (type === 'privacy') {
      const answer = prompt('비밀번호를 입력하세요');
      if (answer === null) return;

      if (passwordValidator(answer.trim())) {
        setPortalState("middle", img, `/${path}`);
        navigate(`/${path}`);
        return;
      } else {
        alert('비밀번호가 틀렸습니다');
        return;
      } 
    }
    if (type !== 'link' && type !== 'privacy' !== 'comingsoon') {
      setPortalState("middle", img, `/${path}`);
      navigate(`/${path}`);
      return;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.appbox} onClick={handleClick}>
        <img
          src={`https://2coldok.github.io/react-blog/image/${img}`}
          alt="oh"
          className={styles.icon}
        />
      </div>
      <h2 className={styles.name}>{name}</h2>
    </div>
  );
}

function passwordValidator(answer) {
  const password = decryption(process.env.REACT_APP_BLACKBOX);
  
  if (answer === password) return true;

  return false;
}
