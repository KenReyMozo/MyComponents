import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCookie, setCookie, setCookies } from "cookies-next";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { KRMLogo, KRMLogo2 } from "../../components/KR/Logo";
import Modal from "../../components/Modal/Modal";
import ValidateSession from "../../utils/auth/sessionHandler";
import { lmsLogin } from "../../utils/auth/testAuth";
import { DataHandler } from "../../utils/DataHandler";
import Form, { FormButton, FormInput } from "../../X-components/Form";

const Login = () => {

    const session = useSession();
	const router = useRouter()

	type LoginType = {
		uname : string,
		pass : string,
	}
	type LoginType2 = {
		email : string,
		key : string,
	}
		
	function isLog(log : unknown) : log is LoginType{
		return (log as LoginType) !== undefined
	}

	function isLog2(log : unknown) : log is LoginType2{
		return (log as LoginType2) !== undefined
	}

	type RGB = readonly [red: number, green: number, blue: number];
	type Color = RGB | string;


	const Test2 = () => {
		let log : unknown;

		log = {
			uname : "ken",
			
		}

		const testing = {
			uname : "d",
			pass : "d",}
		// } satisfies LoginType

		if(isLog(log)){
			console.log("SADGE1: ",log.uname) 
		}

		if(isLog2(log)){
			console.log("SADGE2: ",log.key) 
		}
		
	}

	const HandleLoginSubmit = async (e : React.FormEvent) => {
		
		e.preventDefault()
		// const temp = getCookie("AAAAAA")
		// console.log("BBBB",temp)
		// let none : any= null
		
		// if(temp !== undefined && temp !== null)
		// 	none = JSON.parse(temp.toString())

		// console.log("CCCC",none.test2)
		// const Test = {
		// 	test1 : "asd",
		// 	test2 : "zxc",
		// 	test3 : "qwe",
		// }
		// setCookie('AAAAAA',JSON.stringify(Test) );

		Test2()

		return
		// const res = await signIn('credentials',{
		// 		username : loginData.email,
		// 		password : loginData.password,
		// 		redirect : false
		// })
		// console.log("Login",res)
		// if(res?.ok && res.status === 200){
		// 	router.push("/home")
		// }
		// const res = await lmsLogin(loginData.email , loginData.password)
		await signIn('credentials',{
			username : loginData.email,
			password : loginData.password,
		})
	}

	useEffect(() => {
		if(ValidateSession(session)) {
			const userType = session.data?.user.type
			if(userType === "Student"){
				console.log("Is a Student")
				router.push("/student/dashboard")
			}
			if(userType === "Teacher"){
				console.log("Is a Teacher")
				router.push("/teacher/dashboard")
			}
		}
	},[session])

	type LoginDataType = {
		email : string,
		password : string,
	}

	const LoginDataHandler = (e : React.ChangeEvent<Element>) => { DataHandler<LoginDataType>(e,setLoginData) }

	const [loginData, setLoginData] = useState<LoginDataType>({
		email : "",
		password : "",
	})


    return <>
        <Modal
            // header={[<KRMLogo2 key={"krm_login_logo"}/>]}
            // header={[<FontAwesomeIcon icon={faEye} />]}
            show={true} name={''} background={"#2d3436"}>
                <Form onSubmit={HandleLoginSubmit}>
					<FormInput name={'email'} m='0 0 1em 0'
						placeHolder={"sample@email.com"}
						onChange={LoginDataHandler}
						value={loginData.email}/>
					<FormInput name={'password'} m='0 0 1em 0'
						type={"password"}
						placeHolder={"password"}
						onChange={LoginDataHandler}
						value={loginData.password}/>
					<FormButton primary content={"Login"} type={"submit"}/>
                </Form>
            </Modal>
    </>
}

export default Login;