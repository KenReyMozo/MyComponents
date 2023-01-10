import axios from "axios";
import { Section, StudentUser, Subject, TeacherUser, User } from "next-auth";
import { smsAxiosInstanceCreator, smsOriginalInstance } from "../axiosInstance";

import { setCookie } from 'cookies-next';

type APISchools = {
    domains : {domain : string}[];
    name : string;
}

export const lmsLogin = async (identifier : string, password : string) => {
    


    const identifiers = identifier.split('.')
    if(identifiers.length !== 2) return null

    const userName = identifiers[1]
    const school = identifiers[0]

    const tenantRes = await smsOriginalInstance.get(`api/schools/${school}`)
    .then((res) => {
        return res.data as APISchools
    })
    .catch((err) => {
        return null
    })
    
    if(!tenantRes) return null
    if(tenantRes.domains.length <= 0) return null
    const schoolBaseUrl = `https://${tenantRes.domains[0].domain}/`
    const smsAxiosInstance = await smsAxiosInstanceCreator(schoolBaseUrl)

    type LogKeys = {
        username: string;
        password : string;
        grant_type: string;
        client_id: string;
        client_secret: string;
    }

    const logData : LogKeys = {
        username: userName,
        password,
        grant_type: 'password',
        client_id: process.env.NEXT_PUBLIC_SMS_CLIENT_ID ?? "",
        client_secret: process.env.NEXT_PUBLIC_SMS_CLIENT_SECRET ?? "",
    }

    const logDataNew = Object.keys(logData)
    .map((key) => {
        const newKey = key as "username" | "password" | "grant_type" | "client_id" | "client_secret"
        return `${key}=${encodeURIComponent(logData[newKey])}`;
    })
    .join('&');


    const smsLogin = await smsAxiosInstance.post("o/token/",logDataNew,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*'
        }
    })
    .then((res) => {
       return res.data as User
    })
    .catch((err) => {
        return null
    })

    if(smsLogin === null) return null;

    const userRoles = await smsAxiosInstance.get('api/me/roles', {
        headers: {
            'Authorization': `Bearer ${smsLogin.access_token}`,
            'Content-Type': 'applicaton/json'
        }
    })
    .then((res) => {
        return res.data as "Teacher" | "Student"
    })
    .catch((err) => {
        return null
    })

    if(userRoles === null) return null
    if(userRoles.length <= 0) return null
    const userRole = userRoles[0];

    const userInfo = await smsAxiosInstance.get(`api/${userRole.toLowerCase()}/me`, {
        headers: {
            'Authorization': `Bearer ${smsLogin.access_token}`,
            'Content-Type': 'applicaton/json'
        }
    })
    .then((res) => {
        if(userRole === "Teacher")
            return res.data as TeacherUser
        if(userRole === "Student")
            return res.data as StudentUser
        return null
    })
    .catch((err) => {
        return null
    })

    if(userInfo === null) return null

    const processLogData = {
        ...smsLogin,
        ...(userRole === "Teacher" ? {
            type : "Teacher" as "Teacher" | "Student",
            userInfo : userInfo as TeacherUser,
        } : {
            type :  "Student" as "Teacher" | "Student",
            userInfo : userInfo as StudentUser,
        }),
    };

    return processLogData
}

// export const BASE_URL = 'http://localhost:1337/';
export const BASE_URL = "https://lms-backend.sandboxprosolutions.com";

export const getTeacherSubjects = async () => {
    
    await axios.get(`${BASE_URL}/section-subject-assessments`)
        .then((res) => {
            console.log("SSA",res)
        })
        .catch((err) => {
            console.log("ERR",err)
        })
}