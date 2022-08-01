import { BookBody } from "src/dto/body/book";
import { ListBody } from "src/dto/body/list_body";
import AppResult from "src/modules/AppResult";
export declare class BookService {
    queryBooks(body: ListBody): Promise<AppResult>;
    queryDetail(id: number): Promise<AppResult>;
    createBook(body: BookBody): Promise<AppResult>;
    updateBook(): Promise<AppResult>;
    deleteOrDown(id: number): Promise<AppResult>;
    queryBookUrl(param: any): Promise<AppResult>;
    queryHotBooks(): Promise<AppResult>;
    querySimilarBook(id: number): Promise<AppResult>;
}
