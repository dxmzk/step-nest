import AppResult from "src/modules/AppResult";
export declare class AuthorService {
    queryAuthor(): Promise<AppResult>;
    authorDetail(): Promise<AppResult>;
    createAuthor(): Promise<AppResult>;
    updateAuthor(): Promise<AppResult>;
    deleteAuthor(id: number): Promise<AppResult>;
}
