import AppResult from 'src/modules/AppResult';
export declare class MenuService {
    queryMenu(): Promise<AppResult>;
    updateMenu(id: number): Promise<AppResult>;
    createMenu(id: number): Promise<AppResult>;
    deleteMenu(id: number): Promise<AppResult>;
}
