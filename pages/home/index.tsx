import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import ErrorPage from "../../components/Page/ErrorPage";

const Home = () => {

    const session = useSession()
    const router = useRouter()
    if(session.data === null){
        return <ErrorPage code={405} message={"Session expired!"}/>
    }

    return <div style={{marginTop : "30px"}}>
        Testing : {session.data.user.address}
    </div>
}

export default Home;

// export const getServerSideProps : GetServerSideProps = async (ctx) => {

//     return {
//         props : {
//             fallback : ctx.req.headers.referer,
//         }
//     }
// }