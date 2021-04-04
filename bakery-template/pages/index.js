import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Box from "../components/Box"; //import default
import { Button, Button2 } from "../components/Button"; //import multiepl from 1 file

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
            <Box />
            <Button />
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
