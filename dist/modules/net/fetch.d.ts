interface Option extends RequestInit {
    env: String;
    host?: String;
    url: string;
    files?: Array<String>;
    type?: String;
}
export declare function network(options: Option): Promise<any>;
export declare function download(options: Option): Promise<any>;
declare const _default: {
    network: typeof network;
    download: typeof download;
};
export default _default;
