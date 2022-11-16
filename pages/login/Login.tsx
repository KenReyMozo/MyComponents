import { signIn } from "next-auth/react";

const Login = () => {

    const HandleLoginSubmit = async () => {
        const res = await signIn('credentials',{
            identifier : "loginData.username",
            password : "loginData.password",
            redirect : false
        })
    }

    return <>
        <div>
            
        </div>
    </>
}

export default Login;