import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import AppCard from "../../components/app-card/AppCard";
import { APP_CARD_DATA } from "../../metadata/AppCardData";
import styles from "./Home.module.css";
import { useState, useRef } from "react";

export default function Home() {
  const slideRef = useRef();
  const FIRST_PAGE = 1, LAST_PAGE = 3;
  const [page, setPage] = useState(1);
  const [vw, setVw] = useState(0);
  
  const handleRightClick = () => {
    if (page === LAST_PAGE) {
      return;
    }
    slideRef.current.style.setProperty('transform', `translateX(${vw - 70}vw)`);
    setPage((prev) => prev + 1);
    setVw((prev) => prev - 70);
  }

  const handleLeftClick = () => {
    if (page === FIRST_PAGE) {
      return;
    }
    slideRef.current.style.setProperty('transform', `translateX(${vw + 70}vw)`);
    setPage((prev) => prev - 1);
    setVw((prev) => prev + 70);
    
  }

  return (
    <div className={styles.container}>
      {page !== 1 && <button className={styles.buttonleft} onClick={handleLeftClick}><FaChevronLeft className={styles.icon} /></button>}

      <div className={styles.middlecontainer}>
        <div className={styles.slidecontainer} ref={slideRef}>
          <div className={styles.appcontainer}>
            {APP_CARD_DATA.filter((app) => app.page === '1').map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
          <div className={styles.appcontainer}>
            {APP_CARD_DATA.filter((app) => app.page === '2').map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
          <div className={styles.appcontainer}>
            {APP_CARD_DATA.filter((app) => app.page === '3').map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </div>

      {page !== 3 && <button className={styles.buttonright} onClick={handleRightClick}><FaChevronRight className={styles.icon} /></button>}
    </div>
  )
}

/*
return (
  <div className={styles.container} ref={screenRef}>
    <button className={styles.buttonleft} onClick={handleLeftClick}><FaChevronLeft className={styles.icon} /></button>
    <div className={styles.appcontainer}>
      {APP_CARD_DATA.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
    <button className={styles.buttonright} onClick={handleRightClick}><FaChevronRight className={styles.icon} /></button>
  </div>
)
*/