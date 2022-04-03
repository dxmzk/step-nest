import AppResult from "src/modules/AppResult";
import { AuthorService } from "./author.service";
export declare class AuthorController {
    private readonly appService;
    constructor(appService: AuthorService);
    queryAuthor(size: number, num: number): Promise<AppResult>;
    authorDetail(): Promise<AppResult>;
    createAuthor(): Promise<AppResult>;
    updateAuthor(id: number): Promise<AppResult>;
    deleteAuthor(id: number): Promise<AppResult>;
}
