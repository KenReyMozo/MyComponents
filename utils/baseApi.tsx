import axios from "axios";
import qs from 'querystring';

const BASE_URL = process.env.NEXT_APP_BASE_URL

const axiosInstance = axios.create({
	baseURL : BASE_URL,
	paramsSerializer: {
		serialize: (params) => qs.stringify(params)
	}
})

const baseURL = "https://jsonplaceholder.typicode.com";

export const testInstance = axios.create({
	baseURL,
	paramsSerializer: {
		serialize: (params) => qs.stringify(params)
	}
})

export default axiosInstance;