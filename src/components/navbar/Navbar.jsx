import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchList from "../search-list/SearchList";
import styles from './Navbar.module.css'

export default function Navbar({issues}) {
  const seacrhData = issues.map((issue) => {
    return {bunchTitle: issue.title.trim().toLowerCase(), id: issue.id};
  });
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [searchScreen, setSearchScreen] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

  }

  useEffect(() => {
    if (text.trim().length !== 0) {
      setSearchScreen(true);

      const temp = seacrhData.filter((element) => {
        const {bunchTitle, id} = element;
        return bunchTitle.includes(text);
      });
  
      const ids = temp.map((element) => {
        const {bunchTitle, id} = element;
        return id;
      })
  
      setList(issues.filter((issue) => {
        return ids.some((id) => id === issue.id)
      }))
    } else {
      setList([]);
    }
  }, [text])

  const handleClick = () => {
    if (searchScreen) {
      setSearchScreen(false);
      setText('');
    } else {
      navigate(-1);
    }
    
  }
  

  return (
    <div className={styles.container}>
      {searchScreen && <SearchList list={list} />}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search.." value={text} onChange={handleChange} />
        <button onClick={handleClick}>서치창닫기</button>
      </form>
    </div>
  );
}

