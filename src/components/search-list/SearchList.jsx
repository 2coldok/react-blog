import styles from './SearchList.module.css'

export default function SearchList({list}) {
  return (
    <div className={styles.container}>
      search list 자리
      {list.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
}

