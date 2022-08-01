import { AxiosRequestConfig } from 'axios';
interface Option<D = any> extends AxiosRequestConfig<any> {
    host?: string;
}
export declare function network(options: Option): Promise<any>;
export {};
