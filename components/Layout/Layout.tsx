import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

type LayoutType = {
    is768 : boolean,
}

const Layout = ({
    is768,
} : LayoutType) => {

    const session = useSession();

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

      const StudentLinks = [
        { link : "/student/dashboard", name : "Dashboard" },
        { link : "/student/subject-management", name : "My Classes" },
        { link : "/student/class-calendar", name : "Class Calendar" },
        { link : "/student-logs", name : "My Logs" },
        { link : "/student-online/", name : "Online Meeting" },
        { link : "/lms-tutorials", name : "LMS Tutorials" },
      ]

    if(!session.data)
        return <></>

    return <>
        {session.data.user.type === "Teacher" &&
            <>
            <Navbar
                mainLinks={TeacherLinks}
                isTablet={is768}
                icon={<img src='./favicon.ico' alt='Welcome my friend'
                width={25} height={25}/>}/>
            <Sidebar view={is768} mainLinks={TeacherLinks}/>
            </>
        }
        {session.data.user.type === "Student" &&
            <>
            <Navbar
                mainLinks={StudentLinks}
                isTablet={is768}
                icon={<img src='./favicon.ico' alt='Welcome my friend'
                width={25} height={25}/>}/>
            <Sidebar view={is768} mainLinks={StudentLinks}/>
            </>
        }
    </>
}

export default Layout;