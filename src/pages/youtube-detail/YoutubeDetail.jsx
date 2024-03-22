import { useLocation } from 'react-router-dom';
import styles from "./YoutubeDetail.module.css";

export default function YoutubeDetail() {
  const { state } = useLocation();
  const youtubeURL = state.url;
  console.log(youtubeURL);
  const youtubeEmbedURL = `https://www.youtube.com/embed/${getEmbedURL(youtubeURL)}`;

  return (
    <div className={styles.container}>
      <iframe
        id="player"
        title="youtube player"
        type="text/html"
        width="100%"
        height="100%"
        src={youtubeEmbedURL}
        // style={{ border: "none" }}
        className={styles.youtube}
      ></iframe>
    </div>
  );
}

function getEmbedURL(youtubeURL) {
  if (youtubeURL.includes('?si=')) {
    const videoId = youtubeURL.slice(0, youtubeURL.indexOf('?si=')).split('/').at(-1);
    return videoId;
  }

  if (youtubeURL.includes('&list=')) {
    const videoId = youtubeURL.slice(0, youtubeURL.indexOf('&list=')).split('watch?v=').at(-1);
    return videoId;
  }

  const videoId = youtubeURL.split('watch?v=').at(-1);
  return videoId;
};
