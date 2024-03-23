import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { YOUTUBE_DATA } from "../../../metadata/YouTubeData";
import { usePortal } from "../../../context/SmartPortal";
import styles from "./Youtube.module.css";

export default function Youtube() {
  const navigate = useNavigate();
  const { setPortalState } = usePortal();
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!urlValdiate(text)) {
      setText('');
      return alert('유효하지 않은 주소입니다.');
    }
    setPortalState("tail", "movie.png", "/youtubedetail");
    navigate("/youtubedetail", { state: { url: text } });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Any YouTube Video Link"
          value={text}
          onChange={handleChange}
          autoFocus
          className={styles.input}
        />
        <button className={styles.button}><TbPlayerPlayFilled className={styles.icon} /></button>
      </form>

      <ul className={styles.ul}>
        {YOUTUBE_DATA.map((data) => (
          <li
            className={styles.list}
            onClick={() => {
              setPortalState("tail", "movie.png", "/youtubedetail");
              navigate("/youtubedetail", { state: { url: data.url } });
            }}
            key={data.id}
          >
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

function urlValdiate(url) {
  const checkList = ['watch?v=', '/id?si=', 'watch?v=', '&list=', ];
  const checkResult = checkList.some((element) => url.includes(element));

  if (checkResult === true) return true;
  if (checkResult === false) return false; 
}
