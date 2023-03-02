import {IArticle} from "./article.interface";

export interface IUser {
    id: number;
    email: string;
    username: string;
    bio?: string;
    image?: string;
    password: string;
    favorites: IArticle[];
}
