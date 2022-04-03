import AppResult from "src/modules/AppResult";
import { ShopService } from "./shop.service";
export declare class ShopController {
    private readonly appService;
    constructor(appService: ShopService);
    queryShops(): Promise<AppResult>;
    queryDetail(id: number): Promise<AppResult>;
}
