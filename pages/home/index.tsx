import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import Flex from "../../components/Flex/Flex";
import { Is768 } from "../../components/MediaQuery/mediaQuery";
import ErrorPage from "../../components/Page/ErrorPage";
import Table, { TableInfo } from "../../components/Table/Table";
import { testInstance } from "../../utils/baseApi";

// export const BASE_URL = 'http://localhost:1337/';
export const BASE_URL = "https://lms-backend.sandboxprosolutions.com";

const Home = () => {

    const session = useSession()
    const is768 = Is768()

    console.log("Session!",session)

    const Set_SectionSubjectAssessment = async () => {
        await axios.get(`${BASE_URL}/section-subject-assessments`)
        .then((res) => {
            console.log("SSA",res)
        })
        .catch((err) => {
            console.log("ERR",err)
        })
    }

    useEffect(() => {
        Set_SectionSubjectAssessment();
    },[])

    const List = [
        {name : "Kenny", val1 : 500.9, val2 : 14.24, val3 : "Good"},
        {name : "Kenny", val1 : 500.9, val2 : 14.24, val3 : "Good"},
        {name : "Kenny", val1 : 500.9, val2 : 14.24, val3 : "Good"},
        {name : "Kenny", val1 : 500.9, val2 : 14.24, val3 : "Good"},
        {name : "Kenny", val1 : 500.9, val2 : 14.24, val3 : "Good"},
        {name : "Kenny", val1 : 500.9, val2 : 14.24, val3 : "Good"},
        {name : "Kenny", val1 : 500.9, val2 : 14.24, val3 : "Good"},
        {name : "Kenny", val1 : 500.9, val2 : 14.24, val3 : "Good"},
        {name : "Kenny", val1 : 500.9, val2 : 14.24, val3 : "Good"},
        {name : "Kenny", val1 : 500.9, val2 : 14.24, val3 : "Good"},
        {name : "Kenny", val1 : 500.9, val2 : 14.24, val3 : "Good"},
        {name : "Kenny", val1 : 500.9, val2 : 14.24, val3 : "Good"},
    ]

    if(session.data === null){
        return <ErrorPage code={409} message={"Oops! something went wrong."}/>
    }

    return <Container m="70px 0">
        <Flex jusCon="space-around" childGrow>
            <Card mnw="200px" m=".5em" primary>a
            </Card>
            <Card mnw="200px" m=".5em" secondary>b
            </Card>
            <Card mnw="200px" m=".5em" success>c
            </Card>
            <Card mnw="200px" m=".5em" warning>d
            </Card>
            <Card mnw="200px" m=".5em" danger>e
            </Card>
        </Flex>
        <Container m="20px auto" mxw="500px">
            <Table w="100%" primary>
                {List.map((test,i) => {
                    return <TableInfo key={i} secondary colSpan={3} isTablet={is768} data={test}/>
                })}
            </Table>
        </Container>
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