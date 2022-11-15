import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {

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

  return <>
  {isLoading && <Loader hintsOn={true} hintsInterval={7000}/>}
  <Component {...pageProps} />
  </>
}


