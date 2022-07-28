import { AxiosRequestConfig } from "axios";
const process = require("process");

export const config: AxiosRequestConfig = {
  baseURL: "https://mockend.com/AlnKrvchnk/Mockend",
  //   baseURL: process.env.REACT_APP_API_URL,
  // withCredentials: true
};
