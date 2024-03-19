import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import SearchList from "../search-list/SearchList";
import styles from "./Navbar.module.css";
import NavbarCard from "../navbar-card/NavbarCard";
import { usePortal } from "../../context/SmartPortal";

export default function Navbar({ issues }) {
  const { getPortalState } = usePortal();
  const [searchToggle, setSearchToggle] = useState(false);

  const handleClick = () => setSearchToggle((prev) => !prev);
  const handlePower = () => window.close();

  return (
    <div className={styles.container}>
      <div className={ searchToggle ? styles.hbutton : styles.button}>
        <button onClick={handleClick} className={styles.search}>
          <BsSearch className={styles.magnify} />
        </button>
      </div>
      {searchToggle && (
        <SearchList
          issues={issues}
          searchToggle={searchToggle}
          setSearchToggle={setSearchToggle}
        />
      )}
      {getPortalState("head") !== "hide" && <NavbarCard position={"head"} />}
      {getPortalState("middle") !== "hide" && (
        <NavbarCard position={"middle"} />
      )}
      {getPortalState("tail") !== "hide" && <NavbarCard position={"tail"} />}
      {/* <button className={styles.powercontainer} onClick={handlePower}>
        <img src={`https://2coldok.github.io/react-blog/image/poweroff.png`} alt="oh" className={styles.power} />
      </button> */}
    </div>

  );
}
