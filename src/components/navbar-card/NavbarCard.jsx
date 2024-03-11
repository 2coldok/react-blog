import styles from './NavbarCard.module.css'

export default function NavbarCard({ img }) {
  const handleClick = () => {
    window.close();
  }  
  return (
    <div className={styles.container}>    
        <img src={`https://2coldok.github.io/react-blog/image/${img}`} alt="oh" className={styles.icon} onClick={handleClick} />
    </div>
  )
}