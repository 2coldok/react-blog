import AppCard from "../../components/app-card/AppCard";
import { APP_CARD_DATA } from "../../metadata/AppCardData";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {APP_CARD_DATA.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
}
