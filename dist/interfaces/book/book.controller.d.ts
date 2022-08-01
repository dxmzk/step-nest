import { BookBody } from "src/dto/body/book";
import { ListBody } from "src/dto/body/list_body";
import AppResult from "src/modules/AppResult";
import { BookService } from "./book.service";
export declare class BookController {
    private readonly appService;
    constructor(appService: BookService);
    queryBooks(body: ListBody): Promise<AppResult>;
    queryDetail(id: number): Promise<AppResult>;
    createBook(body: BookBody): Promise<AppResult>;
    updateBook(): Promise<AppResult>;
    changeStatus(id: number): Promise<AppResult>;
    queryBookUrl(param: any): Promise<AppResult>;
    queryHotBooks(): Promise<AppResult>;
    querySimilarBook(type: number): Promise<AppResult>;
}
