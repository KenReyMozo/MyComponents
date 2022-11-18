import style from "./navbar.module.scss"
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = () => {

    const router = useRouter();
    const session = useSession();

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
            <div>{session.data.user.username}</div>
            <button
                className={style.logoutBTN}
                onClick={HandleLogoutSubmit}>Logout
            </button>
        </div>
    </>
}

export default Navbar;