import { useNavigate } from 'react-router-dom';
import { YOUTUBE_DATA } from '../../../metadata/YouTubeData';
import styles from './Youtube.module.css'


export default function Youtube() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/youtubedetail');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>YouTube: 밥친구 저장소</h1>
      <ul className={styles.ul}>
        {YOUTUBE_DATA.map((data) => (
          <li className={styles.list} onClick={handleClick}>
            <h1 className={styles.title}>🍿 {data.videoTitle}</h1>
            <div className={styles.tagcontainer}>
              <div className={styles.tag}>{data.type}</div>
              <div className={styles.tag}>{data.genre}</div>
              <div className={styles.tag}>{data.runtime}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
