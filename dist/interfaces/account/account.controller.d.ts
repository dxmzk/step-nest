import { AccountService } from "./account.service";
import AppResult from "../../modules/AppResult";
import { LoginBody, RegisterBody } from "../../dto/body/index";
export declare class AccountController {
    private readonly appService;
    constructor(appService: AccountService);
    onRegister(body: RegisterBody): Promise<AppResult>;
    onLogin(body: LoginBody): Promise<AppResult>;
    onCode(tag: string): Promise<AppResult>;
    onReset(body: RegisterBody): Promise<AppResult>;
    queryUserInfo(req: any): Promise<AppResult>;
    onLogout(req: any): Promise<AppResult>;
    onDelete(req: any): Promise<AppResult>;
    getUsers(mode: string): Promise<AppResult>;
}
