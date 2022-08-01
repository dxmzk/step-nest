declare enum ENV_NAME {
    PROD = "prod",
    TEST = "test",
    DEV = "dev"
}
export declare const ENV_CONST: {
    PKEY: string;
    AMAP: string;
    env: ENV_NAME;
};
export declare function requestHost(host?: string): string;
export declare function requestHeader(header?: {}): any;
export declare function requestParams(params?: {}): any;
export {};
