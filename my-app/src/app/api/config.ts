import {AxiosRequestConfig} from 'axios'

export const config: AxiosRequestConfig = {
    baseURL: 'http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true',
    withCredentials: true
}