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

  const TestLinks = [
    {link : "/home", name : "Home", childs : [{
      link : "/home", name : "Link1"
    }]
    },
    {link : "/home", name : "Home2", childs : [{
      link : "/home", name : "Link2"
    }]
    },
    {link : "/home", name : "Home3"},
    {link : "/home", name : "Home4", childs : [{
      link : "/home", name : "Link4" , childs : [{
        link : "/home", name : "Link4.5"
      }]
    }]},
  ]

  return <>
  <SessionProvider session={session}>
    {isLoading && <Loader icon={<KRMLogo/>}/>}
    <Navbar
      mainLinks={TestLinks}
      isTablet={is768}
      icon={<img src='./favicon.ico'
      width={25} height={25}/>}/>
    <Component {...newProps} />
  </SessionProvider>
  </>
}


