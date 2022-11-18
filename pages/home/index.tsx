import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import Flex from "../../components/Flex/Flex";
import ErrorPage from "../../components/Page/ErrorPage";

const Home = () => {

    const session = useSession()

    if(session.data === null || session.data === undefined){
        return <ErrorPage code={409} message={"Oops! something went wrong."}/>
    }

    return <Container m="70px 0">
        <Flex jusCon="space-around">
            <Card>
                <span style={{color : "white"}}>Ken</span>
            </Card>
            <Card>
                <span style={{color : "white"}}>Ken</span>
            </Card>
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