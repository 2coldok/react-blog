import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SearchList.module.css";
import { usePortal } from "../../context/SmartPortal";
import { BsSearch } from "react-icons/bs";


export default function SearchList({ issues, searchToggle, setSearchToggle }) {
  const { setPortalState } = usePortal();
  const searchScreenRef = useRef();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  // console.log(getAllBlankCase(text)); ///////////////////////

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
          const singleLowerTitle = issue.title.toLowerCase().split(' ').join('');
          const singleLowerText = text.toLowerCase().split(' ').join('');
          
          if (singleLowerTitle.includes(singleLowerText)) {
            const samePart = getAccentBundle(singleLowerText, issue.title);
            return ({...issue, title: issue.title.replace(samePart, `<span style="color: #ffe74d;">${samePart}</span>`) });
          }
          return issue;
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
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="search.."
          value={text}
          onChange={handleChange}
          className={styles.input}
        />
        <button className={styles.button}><BsSearch /></button>
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

function getAccentBundle(text, title) {
  const array = text.split('').map((element, index) => {
    if (index !== text.length - 1) {
      return element + `\\s*`;
    }
    return element;
  });

  const regPrep =  array.join('');
  const re = new RegExp(regPrep, 'i')

  return title.match(re)[0];
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
