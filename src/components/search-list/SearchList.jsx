import { useEffect, useRef, useState } from 'react';
import styles from './SearchList.module.css'

export default function SearchList({list, setText ,searchScreen ,setSearchScreen}) {
  const searchScreenRef = useRef();

  useEffect(() => {
    const detectClick = (e) => {
      if (searchScreen && searchScreenRef.current && !searchScreenRef.current.contains(e.target)) {
        setSearchScreen(false);
        setText('');
      }
    }
    document.addEventListener("mousedown", detectClick);

    return () => {
      document.removeEventListener('mousedown', detectClick);
    }
  }, [searchScreen]);
  
  
  return (
    <div className={styles.container} ref={searchScreenRef}>
      <button className={styles.close}>창닫기</button>
      <div className={styles.listsbox}>
        {list.map((item) => (
          <div className={styles.list}>{item.title}</div>
        ))}
      </div>
    </div>
  );
}

