import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Container from "../../components/Container/Container";
import Flex from "../../components/Flex/Flex";
import ErrorPage from "../../components/Page/ErrorPage";

const Home = () => {

    const session = useSession()

    if(session.data === null || session.data === undefined){
        return <ErrorPage code={409} message={"Oops! something went wrong."}/>
    }

    return <Container m="70px 0">
        <Flex>
            <div style={{ margin : "auto", color : "white"}}>
                Testing : {session.data.user.username}
            </div>
            <div style={{ margin : "auto", color : "white"}}>
                Testing : {session.data.user.username}
            </div>
            <div style={{ margin : "auto", color : "white"}}>
                Testing : {session.data.user.username}
            </div>
            <div style={{ margin : "auto", color : "white"}}>
                Testing : {session.data.user.username}
            </div>
            <div style={{ margin : "auto", color : "white"}}>
                Testing : {session.data.user.username}
            </div>
        </Flex>
    </Container>
}

export default Home;

// export const getServerSideProps : GetServerSideProps = async (ctx) => {

//     return {
//         props : {
//             fallback : ctx.req.headers.referer,
//         }
//     }
// }