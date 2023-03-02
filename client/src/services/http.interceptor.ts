import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { LocalStorage } from '../utils/localStorage';

const tokenStorage = new LocalStorage<string>('token');

export class HttpInterceptor {
    private static axiosInstance: AxiosInstance = axios.create({
        baseURL: 'http://localhost:3000/api',
    });

    private static _initializeRequestInterceptor = () => {
        HttpInterceptor.axiosInstance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
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

    private static _initializeResponseInterceptor = () => {
        HttpInterceptor.axiosInstance.interceptors.response.use(
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



public static async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const res = await HttpInterceptor.axiosInstance.get(url, config);
    return res as T;
}

public static async post<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const res = await HttpInterceptor.axiosInstance.post(url, data, config);
    return res as T;
}

public static async put<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const res = await HttpInterceptor.axiosInstance.put(url, data, config);
    return res as T;
}

public static async delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const res = await HttpInterceptor.axiosInstance.delete(url, config);
    return res as T;
}
}

export default HttpInterceptor;
