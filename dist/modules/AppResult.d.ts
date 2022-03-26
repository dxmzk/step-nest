export default class AppResult {
    code: number;
    message: string;
    data: any;
    static succee(data: any): AppResult;
    static list(list: Array<any>, total: number, pageSize: number, pageNum: number): AppResult;
    static fail(code: number, message: string): AppResult;
    static error(code: number, message: string): AppResult;
    constructor(code: number, message: string, data: any);
}
