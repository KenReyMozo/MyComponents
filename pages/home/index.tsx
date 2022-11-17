import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import ErrorPage from "../../components/Page/ErrorPage";

const Home = () => {

    const session = useSession()

    if(session.data === null || session.data === undefined){
        return <ErrorPage code={409} message={"Oops! something went wrong."}/>
    }

    return <div style={{marginTop : "30px"}}>
        Testing : {session.data.user.username}
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