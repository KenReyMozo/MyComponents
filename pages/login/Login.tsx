import { signOut, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { KRMLogo } from "../../components/KR/Logo";
import Modal from "../../components/Modal/Modal";
import { DataHandler } from "../../utils/DataHandler";
import Form, { FormButton, FormInput } from "../../X-components/Form";

const Login = () => {

    const session = useSession();
	const router = useRouter()

    const TestSubmit = (e : React.FormEvent) => {
		e.preventDefault();
		console.log("RESR",session)
	}

	const HandleLoginSubmit = async (e : React.FormEvent) => {
		e.preventDefault()
		const res = await signIn('credentials',{
				username : loginData.email,
				password : loginData.password,
				redirect : false
		})
		if(res?.ok && res.status === 200){
			router.push("/home")
		}
	}

	type LoginDataType = {
		email : string,
		password : string,
	}

	const LoginDataHandler = (e : React.ChangeEvent<Element>) => { DataHandler<LoginDataType>(e,setLoginData) }

	const [loginData, setLoginData] = useState<LoginDataType>({
		email : "",
		password : "",
	})

	const HandleLogoutSubmit = async () => {
		const res = await signOut({
            redirect : false ,
            callbackUrl : "/"
          })
		console.log("Logout",res)
	}

    return <>
        <Modal
            header={[<KRMLogo key={"krm_login_logo"}/>]}
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
                        <FormButton m='0 .1em' primary content={"Login"} type={"submit"}/>
                        <FormButton m='0 .1em' primary content={"TEST"} onClick={TestSubmit}/>
                        <FormButton m='0 .1em' primary content={"Logout"} onClick={HandleLogoutSubmit}/>
                </Form>
            </Modal>
    </>
}

export default Login;