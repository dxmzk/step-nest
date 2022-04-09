import AppResult from 'src/modules/AppResult';
export declare class SystemService {
    queryConfig(id: number): Promise<AppResult>;
    queryUpdate(id: number): Promise<AppResult>;
}
