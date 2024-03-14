import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SearchList.module.css";
import { usePortal } from "../../context/SmartPortal";

export default function SearchList({ issues, searchToggle, setSearchToggle }) {
  const { setPortalState } = usePortal();
  const searchScreenRef = useRef();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchToggle(false);
    
    setPortalState('middle', 'searchresult', '/search');
    navigate('/search', { state: { list } });

  };

  const handleClick = () => {
    setSearchToggle(false);
  }

  const seacrhData = issues.map((issue) => {
    return {
      bunchTitle: issue.title.trim().toLowerCase(),
      tags: getTags(issue),
      id: issue.id,
    };
  });

  useEffect(() => {
    if (text.trim().length !== 0) {
      const temp = seacrhData.filter((element) => {
        const { bunchTitle, id } = element;
        return bunchTitle.includes(text);
      });

      const ids = temp.map((element) => {
        const { bunchTitle, id } = element;
        return id;
      });

      setList(
        issues.filter((issue) => {
          return ids.some((id) => id === issue.id);
        })
      );
    } else {
      setList([]);
    }
  }, [text]);

  return (
    <div className={styles.container} ref={searchScreenRef}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search.."
          value={text}
          onChange={handleChange}
        />
        <button>이동하기</button>
      </form>

      <div className={styles.listsbox}>
        {list.map((item) => (
          <Link to={`/postdetail`} state={{ data: getIssue(issues, item.id) }}>
            <div className={styles.list} onClick={handleClick}>
              제목 : {item.title} 태그 : {item.milestone.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function getTags(issue) {
  return issue.milestone.title.split("#").filter((tag) => tag !== "");
}

function getIssue(issues, id) {
  return issues.find((issue) => issue.id === id);
}

// 외부 클릭시 자동 닫기 할려했는데 자꾸 토글이랑 충돌해서 제외
// useEffect(() => {
//   console.log('useEffect');
//   const detectClick = (e) => {
//     console.log('detect outside click');
//     if (outsideSensor && searchScreenRef.current && !searchScreenRef.current.contains(e.target)) {
//       setOutsideSensor(false);
//       setText('');

//       console.log(`searchToggle(detect) : ${searchToggle}`);
//       console.log(`outsideSensor(detect) : ${outsideSensor}`);
//     }
//   }
//   document.addEventListener("mousedown", detectClick);
//   console.log(`searchToggle : ${searchToggle}`);
//   console.log(`outsideSensor : ${outsideSensor}`);

//   return () => {
//     document.removeEventListener('mousedown', detectClick);

//   }
// }, [outsideSensor]);
