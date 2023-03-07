import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {
    Forbidden,
    HttpError, NotFound,
    Unauthorized
} from './api.errors';

import {Headers} from "./api.header.interface";


export const API_URL = process.env.REACT_APP_API_URL
export class ApiClient {
    constructor(
        private readonly baseUrl: string | undefined,
        private readonly headers: Headers,
        private readonly authToken: string = ""
    ) {}

    public async get(endpoint: string = "", params?: any, signal?: AbortSignal): Promise<any> {
        try {
            const client = this.createClient(params);
            const response = await client.get(endpoint, { signal });
            return response.data;
        } catch (error: any) {
            ApiClient.handleError(error);
        }
    }

    public async post(endpoint: string = "", data?: any, signal?: AbortSignal): Promise<any> {
        try {
            const client = this.createClient();
            const response = await client.post(endpoint, data, { signal });
            return response.data;
        } catch (error) {
            ApiClient.handleError(error);
        }
    }

    public async put(endpoint: string = "", data?: any, signal?: AbortSignal): Promise<any> {
        try {
            const client = this.createClient();
            const response = await client.put(endpoint, data, { signal });
            return response.data;
        } catch (error) {
            ApiClient.handleError(error);
        }
    }

    public async delete(endpoint: string = "", params?: any, signal?: AbortSignal): Promise<any> {
        try {
            const client = this.createClient(params);
            const response = await client.delete(endpoint, { signal });
            return response.data;
        } catch (error) {
            ApiClient.handleError(error);
        }
    }

    public async uploadFile(endpoint: string = "", formData: FormData): Promise<any> {
        try {
            const client = this.createClient();
            const response = await client.post(endpoint, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            return response.data;
        } catch (error) {
            ApiClient.handleError(error);
        }
    }

    private createClient(params: object = {}): AxiosInstance {
        const config: AxiosRequestConfig = {
            baseURL: this.baseUrl,
            headers: this.headers,
            params: params
        }
        if (this.authToken) {
            config.headers = {
                Authorization: `Bearer ${this.authToken}`,
            }
        }
        return axios.create(config);
    }

    private static handleError(error: any): never {
        if (!error.response) {
            throw new HttpError(error.message)
        }
        switch (error.response.status) {
            default: {
                throw error
            }
            case 401 :{
                throw new Unauthorized(error.response.data);
            }
            case 403 :{
                throw new Forbidden(error.response.data);
            }
            case 404 :{
                throw new NotFound(error.response.data);
            }
        }
    }
}