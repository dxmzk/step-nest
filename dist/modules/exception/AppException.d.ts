import { HttpException } from "@nestjs/common";
export default class AppException extends HttpException {
    constructor(msg: string, code: number);
    static init(msg: string, code: number): AppException;
}
