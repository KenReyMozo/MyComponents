import { smsAxiosInstanceCreator, smsOriginalInstance } from "../axiosInstance";

export const lmsLogin = async (identifier : string, password : string) => {
    
    const identifiers = identifier.split('.')
    if(identifiers.length !== 2) return null;

    const userName = identifier[1];
    const school = identifier[0];

    const tenantRes = await smsOriginalInstance.get(`api/schools/${school}`)
    
    if(!tenantRes) return null

    const {data} = tenantRes;
    return data
    const schoolBaseUrl = `https://${1}`
    const smsAxiosInstance = await smsAxiosInstanceCreator(schoolBaseUrl);
}