import { AxiosRequestConfig } from 'axios';

export const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URL,
    // withCredentials: true
};
