import AppResult from "src/modules/AppResult";
export declare class BookService {
    queryBooks(): Promise<AppResult>;
    queryDetail(id: number): Promise<AppResult>;
    createBook(): Promise<AppResult>;
    updateBook(): Promise<AppResult>;
    deleteOrDown(id: number): Promise<AppResult>;
    queryBookUrl(id: number): Promise<AppResult>;
    queryHotBooks(id: number): Promise<AppResult>;
    queryAimilarBook(id: number): Promise<AppResult>;
}
