import AppResult from 'src/modules/AppResult';
import { MenuService } from './menu.service';
export declare class MenuController {
    private readonly appService;
    constructor(appService: MenuService);
    queryMenu(): Promise<AppResult>;
    updateMenu(id: number): Promise<AppResult>;
    createMenu(id: number): Promise<AppResult>;
    deleteMenu(id: number): Promise<AppResult>;
    delete3Menu(id: number): Promise<AppResult>;
}
