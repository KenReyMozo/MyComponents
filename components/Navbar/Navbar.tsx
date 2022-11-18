import style from "./navbar.module.scss"
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ResponsivePage } from "next";
import { useState } from "react";

type NavbarType = {
    icon? : JSX.Element,
} & ResponsivePage

const Navbar = ({
    isTablet,
    icon,
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
            { isTablet && <div className={`${style.menuButton} ${open && style.open}`}
                onClick={MenuHandler}>
                <div className={style.top}></div>
                <div className={style.mid}></div>
                <div className={style.down}></div>
            </div>}
            {!isTablet && <div className={style.navbarInfo}>{icon}{session.data.user.username}</div>}
            <button
                className={style.logoutBTN}
                onClick={HandleLogoutSubmit}>Logout
            </button>
        </div>
    </>
}

export default Navbar;