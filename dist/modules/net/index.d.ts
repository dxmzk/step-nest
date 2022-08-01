export interface Result {
    message: string;
    code: number;
    data: any;
    header?: any;
}
export declare function request({ host, url, method, data, headers }?: {
    host?: string;
    url?: string;
    method?: string;
    data?: {};
    headers?: {};
}): Promise<Result>;
