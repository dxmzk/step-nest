export interface Result {
    message: string;
    code: number;
    data: any;
    header?: any;
}
export declare function request({ host, url, method, data, headers, toast, loading, loadStr }?: {
    host?: string;
    url?: string;
    method?: string;
    data?: {};
    headers?: {};
    toast?: boolean;
    loading?: boolean;
    loadStr?: string;
}): Promise<Result>;
