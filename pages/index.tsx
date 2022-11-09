import Head from 'next/head'
import Image from 'next/image'
import { BaseSyntheticEvent, MouseEvent, useState } from 'react'
import Switch from '../components/Checkbox/checkbox'
import Modal from '../components/Modal/Modal'
import styles from '../styles/Home.module.css'
import Form, { FormDataType } from '../X-components/Form'

export default function Home() {
  
  const [test, setTest] = useState(false)

  const newFormData : FormDataType[] = [
    { label : "Name", type : "text"},
    { label : "Julio", type : "text"},
    { label : "Bday", type : "date"},
    { label : "Password", type : "password"},
    { label : "Re Password", type : "password"},
    { label : "bruh?", type : "checkbox"},
    { label : "bruh?", type : "checkbox"},
    { label : "bruh?", type : "checkbox"},
  ]

  const [modals, setModals] = useState({
    test1 : false,
    test2 : false,
  })

  const ModalOpenHandler = ({target : { name }} : BaseSyntheticEvent) => setModals(prev => ({...prev,[name] : true}))
	const ModalCloseHandler = ({target : { name }} : BaseSyntheticEvent) => setModals(prev => ({...prev,[name] : false}))

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Switch setState={setTest} state={test}/>
      <main className={styles.main}>
        <button name='test1' onClick={ModalOpenHandler}>OPEN</button>
        <Modal 
        width='500px'
        success show={modals.test1} onClose={ModalCloseHandler} name={'test1'}>
          
          <Form formData={newFormData}/>
        </Modal>

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
