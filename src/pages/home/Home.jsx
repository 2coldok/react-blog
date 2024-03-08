import { useOutletContext } from "react-router-dom";
import AppCard from "../../components/app-card/AppCard";
import Laboratory from "../apptegory/laboratory/Laboratory";

export default function Home() {
  const issues = useOutletContext();
  
  
  const a = [
    {
      id: 1,
      name: 'Laboratory',
      img: 'laboratory',
      path: 'temp1',
    },
    {
      id: 2,
      name: 'All',
      img: 'all',
      path: 'temp2',
    }
  ]

  return (
    <>
      <div>Home 페이지에용</div>
      {a.map((e) => (
        <AppCard love={e} />
      ))}
    </>
  )
}
