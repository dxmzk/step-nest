import AppResult from "src/modules/AppResult";
import { ConfigService } from "./config.service";
export declare class ConfigController {
    private readonly appService;
    constructor(appService: ConfigService);
    queryBanners(): Promise<AppResult>;
    queryTabs(): Promise<AppResult>;
    createBanner(): Promise<AppResult>;
    createTab(): Promise<AppResult>;
    deleteBanner(): Promise<AppResult>;
    deleteTab(): Promise<AppResult>;
}
