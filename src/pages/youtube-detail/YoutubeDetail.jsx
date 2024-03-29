import { useLocation } from 'react-router-dom';
import styles from "./YoutubeDetail.module.css";

export default function YoutubeDetail() {
  const { state } = useLocation();
  const youtubeURL = state.url;
  const youtubeEmbedURL = `https://www.youtube.com/embed/${getVideoId(youtubeURL)}`;

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

function getVideoId(youtubeURL) {
  if (youtubeURL.includes('?si=')) {
    const array = youtubeURL.slice(0, youtubeURL.indexOf('?si=')).split('/');
    const videoId = array[array.length - 1];
    return videoId;
  }

  if (youtubeURL.includes('&list=')) {
    const array = youtubeURL.slice(0, youtubeURL.indexOf('&list=')).split('watch?v=');
    const videoId = array[array.length - 1];
    return videoId
  }

  const array = youtubeURL.split('watch?v=');
  const videoId = array[array.length - 1];
  
  if (videoId?.includes('&')) {
    return videoId.split('&')[0];
  }
  return videoId;
}
