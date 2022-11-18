import axios from "axios";

// export const BASE_URL = process.env.NEXT_PUBLIC_LMS_API_URL;
export const BASE_URL = "https://lms-backend.sandboxprosolutions.com/";
export const BASE_SMS_URL = process.env.NEXT_PUBLIC_SMS_API_URL;

export const smsOriginalInstance = axios.create({
    baseURL: BASE_SMS_URL,
    timeout: 30000,
})

export const smsAxiosInstanceCreator = (baseURL: string) => {
    return axios.create({
      baseURL,
      timeout: 30000,
    })
  }