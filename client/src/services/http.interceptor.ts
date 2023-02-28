import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {LocalStorage} from "./localStorage";

const tokenStorage = new LocalStorage<string>('token');

export class HttpInterceptor {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL:  'http://localhost:3000/api',
        });
        this._initializeRequestInterceptor();
        this._initializeResponseInterceptor();
    }

    private _initializeRequestInterceptor = () => {
        this.axiosInstance.interceptors.request.use(
            (config:InternalAxiosRequestConfig) => {
                const token = tokenStorage.get();
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    };

    private _initializeResponseInterceptor = () => {
        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => {
                return response.data;
            },
            (error) => {
                if (error.response) {
                    switch (error.response.status) {
                        case 400:
                            console.log('Bad request');
                            break;
                        case 401:
                            console.log('Unauthorized access');
                            break;
                        case 404:
                            console.log('Resource not found');
                            break;
                        case 500:
                            console.log('Internal server error');
                            break;
                        default:
                            console.log('An error occurred');
                            break;
                    }
                } else {
                    console.log('Network error');
                }
                return Promise.reject(error);
            }
        );
    };

    public get = (url: string, config?: AxiosRequestConfig) => {
        return this.axiosInstance.get(url, config);
    };

    public post = (url: string, data?: any, config?: AxiosRequestConfig) => {
        return this.axiosInstance.post(url, data, config);
    };

    public put = (url: string, data?: any, config?: AxiosRequestConfig) => {
        return this.axiosInstance.put(url, data, config);
    };

    public delete = (url: string, config?: AxiosRequestConfig) => {
        return this.axiosInstance.delete(url, config);
    };
}

export default new HttpInterceptor();