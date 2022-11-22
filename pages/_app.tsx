import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader'
import { KRMLogo } from '../components/KR/Logo'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import Navbar from '../components/Navbar/Navbar'
import { Is768 } from '../components/MediaQuery/mediaQuery'
import Sidebar from '../components/Sidebar/Sidebar'
import Layout from '../components/Layout/Layout'
config.autoAddCss = false

interface CustomProps extends AppProps {
  session : Session
}

export default function App({
  Component,
  pageProps,
  session }: CustomProps) {

  const [isLoading, setIsLoading] = useState(false);

  const is768 = Is768();

  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      setIsLoading(true)
    });

    Router.events.on("routeChangeComplete", (url)=>{
      setIsLoading(false)
    });

    Router.events.on("routeChangeError", (url) =>{
      setIsLoading(false)
    });

  }, [Router])
  
  const newProps = {session, ...pageProps}

  

  return <>
  <SessionProvider session={session}>
    {isLoading && <Loader icon={<KRMLogo/>}/>}
    <Layout is768={is768}/>
    <main className={`${is768 ? "collapsed" : "expanded"}`}>
      <Component {...newProps} />
    </main>
  </SessionProvider>
  </>
}


