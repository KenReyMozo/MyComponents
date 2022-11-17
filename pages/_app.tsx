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
config.autoAddCss = false

interface CustomProps extends AppProps {
  session : Session
}

export default function App({
  Component,
  pageProps,
  session }: CustomProps) {

  const [isLoading, setIsLoading] = useState(false);

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
    <Navbar/>
    <Component {...newProps} />
  </SessionProvider>
  </>
}


