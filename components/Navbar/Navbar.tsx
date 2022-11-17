import style from "./navbar.module.scss"
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = () => {

    const router = useRouter();

    const HandleLogoutSubmit = async () => {
		const res = await signOut({
            redirect : false ,
            callbackUrl : "/"
          })
		console.log("Logout",res)
        // router.push(res.url)
	}

    return <>
        <div className={style.navbar}>
            <button onClick={HandleLogoutSubmit}>Logout</button>
        </div>
    </>
}

export default Navbar;