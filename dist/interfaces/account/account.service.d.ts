import { Cache } from "cache-manager";
import { LoginBody, RegisterBody } from "../../dto/body/index";
import AppResult from "../../modules/AppResult";
export declare class AccountService {
    private cache;
    constructor(cache: Cache);
    onLogin(body: LoginBody): Promise<AppResult>;
    onRegister(body: RegisterBody): Promise<AppResult>;
    onReset(body: RegisterBody): Promise<AppResult>;
    onCode(tag: string): Promise<AppResult>;
    queryUserInfo(uid: string): Promise<AppResult>;
    onLogout(uid: string): Promise<AppResult>;
    onDelete(uid: string): Promise<AppResult>;
    getUsers(mode: string): Promise<AppResult>;
}
