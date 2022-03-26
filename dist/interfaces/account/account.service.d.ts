import { Connection } from 'typeorm';
import { LoginBody, RegisterBody } from '../../dto/body/index';
import AppResult from '../../modules/AppResult';
export declare class AccountService {
    onLogin(body: LoginBody): Promise<AppResult>;
    onRegister(body: RegisterBody): Promise<AppResult>;
    onReset(body: RegisterBody): Promise<AppResult>;
    queryUserInfo(uid: string): Promise<AppResult>;
    onLogout(uid: string): Promise<AppResult>;
    onDelete(uid: string): Promise<AppResult>;
    getUsers(mode: string): Promise<AppResult>;
    _getUser(con: Connection, value: object, key?: string): Promise<any>;
}
