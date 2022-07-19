import axios, {AxiosInstance} from 'axios'
import {config} from "./config";
import TodoApi from "./todo.api";
import AuthApi from "./auth.api";


class Api {
    private readonly client: AxiosInstance
    public readonly todo: TodoApi
    public readonly auth: AuthApi

    constructor() {
        this.client = axios.create(config)
        this.todo = new TodoApi(this)
        this.auth= new AuthApi(this)

        this.client.interceptors.response.use((res) => res.data)
        this.client.interceptors.request.use((config) => ({
            ...config,
            // headers: { Authorization: 'token' },
        }))
    }
    
    public get<Response>(url: string): Promise<Response> {
        return this.client.get<null, Response>(url)
    }

    public post<Request, Response>(url: string, body: Request): Promise<Response> {
        return this.client.post<Request, Response>(url, body)
    }

    public patch<Request, Response>(url: string, body: Request): Promise<Response> {
        return this.client.patch<Request, Response>(url, body)
    }

    public delete<Response>(url: string): Promise<Response> {
        return this.client.delete<null, Response>(url)
    }
}

export default Api

export const api = new Api()