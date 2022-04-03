import AppResult from 'src/modules/AppResult';
export declare class ShopService {
    queryShops(): Promise<AppResult>;
    queryDetail(id: number): Promise<AppResult>;
}
