import { ListBody } from "src/dto/body/list_body";
import AppResult from "src/modules/AppResult";
export declare class BookService {
    queryBooks(body: ListBody): Promise<AppResult>;
    queryDetail(id: number): Promise<AppResult>;
    createBook(): Promise<AppResult>;
    updateBook(): Promise<AppResult>;
    deleteOrDown(id: number): Promise<AppResult>;
    queryBookUrl(id: number): Promise<AppResult>;
    queryHotBooks(): Promise<AppResult>;
    querySimilarBook(id: number): Promise<AppResult>;
}
