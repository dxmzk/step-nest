import AppResult from 'src/modules/AppResult';
export declare class ConfigService {
    queryBanners(): Promise<AppResult>;
    queryTabs(): Promise<AppResult>;
    createBanner(): Promise<AppResult>;
    createTab(): Promise<AppResult>;
    deleteBanner(): Promise<AppResult>;
    deleteTab(): Promise<AppResult>;
}
