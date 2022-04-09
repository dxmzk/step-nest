import { ConfigService } from './config.service';
export declare class ConfigController {
    private readonly appService;
    constructor(appService: ConfigService);
    queryBanners(): void;
    queryTabs(): void;
}
