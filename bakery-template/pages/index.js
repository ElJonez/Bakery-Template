import styles from '../styles/Home.module.css'
import Nav from "../components/nav";

export default function Home() {
  return (
  <div className={styles.container}>
    <title>The Bakery</title>
    <link rel="icon" href="/favicon.ico" />
    <div className={styles.nav} >
      <Nav />
    </div>
  </div>
  )
}
