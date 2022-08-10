export declare class LoginBody {
    readonly email?: string;
    readonly phone?: string;
    readonly name?: string;
    readonly password?: string;
    readonly mode: number;
}
export declare class RegisterBody {
    readonly email: string;
    readonly password: string;
    readonly code: number;
    readonly name: string;
}
