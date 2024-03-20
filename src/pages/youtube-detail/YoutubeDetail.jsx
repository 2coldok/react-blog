import { usePortal } from "../../context/SmartPortal";
import styles from "./YoutubeDetail.module.css";

export default function YoutubeDetail() {
  const { setPortalState } = usePortal();
  setPortalState('tail', 'movie.png', '/youtubedetail');

  return (
    <div className={styles.container}>
      <iframe
        id="player"
        title="youtube player"
        type="text/html"
        width="100%"
        height="100%"
        src={"http://www.youtube.com/embed/UUvBhqma9fI"}
        // style={{ border: "none" }}
        className={styles.youtube}
      ></iframe>
    </div>
  );
}

{
  /* <iframe
        id="player"
        title="youtube player"
        type="text/html"
        width="30%"
        height="30%"
        src={'http://www.youtube.com/embed/UUvBhqma9fI'}
        style={{border : 'none' }}
      ></iframe> */
}
