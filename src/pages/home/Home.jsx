import { useOutletContext } from "react-router-dom";
import AppCard from "../../components/app-card/AppCard";
import Laboratory from "../apptegory/laboratory/Laboratory";
import { APP_CARD_DATA } from "../../metadata/AppCardData";
import styles from './Home.module.css'

export default function Home() {
  const issues = useOutletContext();
  
  return (
    <ul className={styles.container}>
      {APP_CARD_DATA.map((e) => (
          <AppCard key={e.id} love={e} />
        ))}
    </ul>
  )
}
