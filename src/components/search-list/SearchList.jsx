import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SearchList.module.css";
import { usePortal } from "../../context/SmartPortal";
import getAllBlankCase from "../../util/SearchEngine";

export default function SearchList({ issues, searchToggle, setSearchToggle }) {
  const { setPortalState } = usePortal();
  const searchScreenRef = useRef();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (list.length === 0) {
      return;
    }

    setSearchToggle(false);
    setPortalState('middle', 'searchresult.png', '/search');
    navigate('/search', { state: { searchIssues } });
  };

  const handleClick = (e) => {
    setSearchToggle(false);
    const name = e.target.id;
    setPortalState('middle', `${name}.png`, `/${name}`); //////////////////////// 카테고리 = 이미지.png = path 이름 다 동일하다고 가정한 코드
    setPortalState('tail', 'document.png', '/postdetail');
  }

  const seacrhData = issues.map((issue) => {
    return {
      bunchTitle: issue.title.split(' ').join('').toLowerCase(),
      tags: getTags(issue),
      id: issue.id,
    };
  });

  useEffect(() => {
    if (text.trim().length !== 0) {
      const temp = seacrhData.filter((element) => {
        const { bunchTitle, id } = element;
        return bunchTitle.includes(text.split(' ').join('').toLowerCase());
      });

      const ids = temp.map((element) => {
        const { bunchTitle, id } = element;
        return id;
      });

      setList(
        issues.filter((issue) => {
          return ids.some((id) => id === issue.id);
        }).map((issue) => {
          const lowTitle = issue.title.toLowerCase().trim();
          const lowText = text.toLowerCase().trim();
      
          if (lowTitle.includes(lowText)) {
            const startIndex = lowTitle.indexOf(lowText);
            const length = lowText.length;
            const samePart = issue.title.substr(startIndex, length);

            return ({...issue, title: issue.title.replace(samePart, `<span style="color: blue">${samePart}</span>`) })////////////////   
          }

          if (!lowTitle.includes(lowText)) {
            const sameLowPart = getAllBlankCase(lowText).find((element) => lowTitle.includes(element));
            const startIndex = lowTitle.indexOf(sameLowPart);
            const length = sameLowPart.length;
            const samePart = issue.title.substr(startIndex, length);

            console.log(samePart);
            return ({...issue, title: issue.title.replace(samePart, `<span style="color: blue">${samePart}</span>`) })////////////////   

          }
          
        })
      );
    } else {
      setList([]);
    }
  }, [text]);

  const listIds = list.map((item) => item.id);
  const searchIssues = issues.filter((issue) => listIds.includes(issue.id));
  
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
            <div className={styles.list} onClick={handleClick} id={item.labels[0].name}>
              {/* 제목 : {item.title} 태그 : {item.milestone.title} */}
              <span dangerouslySetInnerHTML={{ __html: item.title}} onClick={handleClick} id={item.labels[0].name}></span>
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

// 가나  aq가 나bc
function replaceToHtml(title, text) {
  

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
