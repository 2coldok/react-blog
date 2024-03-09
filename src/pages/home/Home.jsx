import { useOutletContext } from "react-router-dom";
import AppCard from "../../components/app-card/AppCard";
import Laboratory from "../apptegory/laboratory/Laboratory";
import { APP_CARD_DATA } from "../../metadata/AppCardData";

export default function Home() {
  const issues = useOutletContext();
  
  
  

  return (
    <>
      <div>Home 페이지에용</div>
      <ul>
        {APP_CARD_DATA.map((e) => (
          <AppCard key={e.id} love={e} />
        ))}
      </ul>

    </>
  )
}
