import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {
    Forbidden,
    HttpError, NotFound,
    Unauthorized
} from './api.errors';

import {Headers} from "./api.header.interface";

export class ApiClient {
    constructor(
        private readonly baseUrl: string,
        private readonly headers: Headers,
        private readonly authToken: string = ""
    ) {}

    public async get(endpoint: string = "", params?: any, signal?: AbortSignal): Promise<any> {
        try {
            const client = this.createClient(params);
            const response = await client.get(endpoint, { signal });
            return response.data;
        } catch (error: any) {
            this.handleError(error);
        }
    }

    public async post(endpoint: string = "", data?: any, signal?: AbortSignal): Promise<any> {
        try {
            const client = this.createClient();
            const response = await client.post(endpoint, data, { signal });
            return response.data;
        } catch (error) {
            this.handleError(error);
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
            this.handleError(error);
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

    private handleError(error: any): never {
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