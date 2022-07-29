import { AxiosRequestConfig } from 'axios';

export const config: AxiosRequestConfig = {
    // baseURL: 'https://mockend.com/AlnKrvchnk/Mockend',
    baseURL: process.env.REACT_APP_API_URL,
    // withCredentials: true
};
