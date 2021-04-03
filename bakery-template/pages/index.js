import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Bakery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <div>
            Welcome to The Bakery
          </div>
        </h1>
      </main>

      <footer className={styles.footer}>
        <div>
          Created By Adam Jones
        </div>
      </footer>
    </div>
  )
}
