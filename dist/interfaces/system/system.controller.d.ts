import AppResult from "src/modules/AppResult";
import { SystemService } from "./system.service";
export declare class SystemController {
    private readonly appService;
    constructor(appService: SystemService);
    queryConfig(): Promise<AppResult>;
    queryUpdate(): Promise<AppResult>;
}
