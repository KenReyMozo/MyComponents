import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { TestGet } from "../api/test/TestCaller";

type UserType = {
    name : string
    test : any,
}

const User = ({
    name,
    test,
} : UserType) => {
    const router = useRouter()
    const {user_id} = router.query;

    console.log("TEST",test)

    return <>
        <div>
            Test : {user_id}
            Name : {name}
        </div>
    </>
}

export default User;

export const getServerSideProps : GetServerSideProps = async (ctx) => {
    const mouse = await TestGet()
    return {
        props : {
            name : "Ken",
            test : mouse,
        }
    }
}