import style from "./navbar.module.scss"
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ResponsivePage } from "next";
import { useState } from "react";
import Link from "next/link";

type NavbarType = {
    icon? : JSX.Element,
    mainLinks? : RecursiveLinkType[],
} & ResponsivePage

const Navbar = ({
    isTablet,
    icon,
    mainLinks,
} : NavbarType) => {

    const router = useRouter();
    const session = useSession();

	const [open, setOpen] = useState(false);
    const MenuHandler = () => setOpen(prev => !prev)

    const HandleLogoutSubmit = async () => {
		const res = await signOut({
            redirect : false ,
            callbackUrl : "/"
          })
		console.log("Logout",res)
        router.push(res.url)
	}

    if(session.data === null || session.status !== "authenticated"){
        return <></>
    }
    return <>
        <div className={style.navbar}>
            <div className={style.main}>
            { isTablet && <div className={`${style.menuButton} ${open && style.open}`}
                onClick={MenuHandler}>
                <div className={style.top}></div>
                <div className={style.mid}></div>
                <div className={style.down}></div>
            </div>}
            {!isTablet && <div className={style.navbarInfo}>
                {icon}
                <div style={icon && { marginLeft : "15px"}}>
                    {session.data.user.username}
                </div>
            </div>}
            <button
                className={style.logoutBTN}
                onClick={HandleLogoutSubmit}>Logout
            </button>
            </div>
            <div className={style.dropDown} style={open ? {marginLeft : "0px"} : {marginLeft : "-100%"}}>
                {mainLinks?.map((cLink) => {
                    return <RecursiveLink
                        link={cLink.link}
                        name={cLink.name}
                        childs={cLink.childs}/>
                })}
            </div>
        </div>
    </>
}

type RecursiveLinkType = {
    link : string,
    icon? : string,
    name : string,
    childs? : RecursiveLinkType[],
}

const RecursiveLink = ({
    link,
    icon,
    name,
    childs,
} : RecursiveLinkType) => {
    
    const [open, setOpen] = useState(false)

    return <div className={style.linkContainer}>
        {icon}<Link href={link}>{name}</Link>
        <button onClick={()=>{setOpen(prev=>!prev)}}>G</button>
        {(childs && open)&& <div>{childs.map((cLink) => {
            return <RecursiveLink
                    link={cLink.link}
                    name={cLink.name}
                    childs={cLink.childs}/>
        })}</div>
        }
    </div>
}

export default Navbar;