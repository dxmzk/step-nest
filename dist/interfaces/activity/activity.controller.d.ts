import AppResult from 'src/modules/AppResult';
import { ActivityService } from './activity.service';
export declare class ActivityController {
    private readonly appService;
    constructor(appService: ActivityService);
    queryActivitys(): Promise<AppResult>;
    queryDetail(id: number): void;
    createActivity(): void;
    upadteActivity(): void;
    deleteOrDown(id: number): void;
    createTag(): void;
    upadteTag(): void;
    deleteTag(id: number): void;
}
