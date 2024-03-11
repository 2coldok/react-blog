import styles from './NavbarCard.module.css'

export default function NavbarCard({ data }) {
  const {name, img} = data
  
  
  
  return (
    <div className={styles.container}>    
        <img src={`https://2coldok.github.io/react-blog/image/${img}`} alt="oh" className={styles.icon}/>
      </div>
  )
}
