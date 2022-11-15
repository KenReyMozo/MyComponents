import axiosInstance from "../../../utils/baseApi"

export const TestGet = async () => {
    return await axiosInstance.get(`/api/mice`)
    .then((res) => {
        return res.data
    })
}