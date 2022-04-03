import AppResult from 'src/modules/AppResult';
export declare class ActivityService {
    queryActivitys(): Promise<AppResult>;
    queryDetail(id: number): Promise<AppResult>;
    createActivity(): Promise<AppResult>;
    updateActivity(): Promise<AppResult>;
    deleteOrDown(id: number): Promise<AppResult>;
    createOrUpadteTag(): Promise<AppResult>;
    deleteTag(id: number): Promise<AppResult>;
}
