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

  const TeacherLinks = [
    { link : "/teacher/dashboard", name : "My Dashboard" },
    { link : "/teacher/subject-management", name : "Subject Management" },
    { link : "/teacher/class-management", name : "Class Management" },
    { link : "teacher/class-calendar", name : "Class Calendar" },
    { link : null, name : "Class Monitoring", childs : [
      { link : "/student-logs", name : "Student Logs" },
      { link : "/pending-works", name : "Pending Works" },
    ]},
    { link : null, name : "Online Meetings", childs : [
      { link : "/online-class", name : "Online Class" },
      { link : "/faculty-meeting", name : "Faculty Meeting" },
    ]},
    { link : "/lms-tutorials", name : "LMS Tutorials" },
  ]

  return <>
  <SessionProvider session={session}>
    {isLoading && <Loader icon={<KRMLogo/>}/>}
    <Navbar
      mainLinks={TestLinks}
      isTablet={is768}
      icon={<img src='./favicon.ico' alt='Welcome my friend'
      width={25} height={25}/>}/>
    <Sidebar view={is768} mainLinks={TeacherLinks}/>
    <main className={`${is768 ? "collapsed" : "expanded"}`}>
      <Component {...newProps} />
    </main>
  </SessionProvider>
  </>
}


