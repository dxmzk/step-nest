import AppResult from "src/modules/AppResult";
import { BookService } from "./book.service";
export declare class BookController {
    private readonly appService;
    constructor(appService: BookService);
    queryBooks(): Promise<AppResult>;
    queryDetail(id: number): Promise<AppResult>;
    createBook(): Promise<AppResult>;
    updateBook(): Promise<AppResult>;
    deleteOrDown(): Promise<AppResult>;
    queryBookUrl(): Promise<AppResult>;
    queryHotBooks(): Promise<AppResult>;
    querySimilarBook(): Promise<AppResult>;
}
