import { useEffect } from "react"
import { testInstance } from "../../../utils/baseApi"

const TeacherDashboard = () => {

    useEffect(()=> {
        GetComments();
    },[])
    
    const GetComments = async () => {
        await testInstance.get('/comments')
        .then((res) => {
            console.log("res",res)
        })
        .catch((err)=> {
            console.log("err",err)
        })
    }

    return <div>
        <h2>Teacher Dashboard</h2>
    </div>
}

export default TeacherDashboard;