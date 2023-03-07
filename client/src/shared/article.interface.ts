import {IUser} from "./user.interface";
import {IconType} from "react-icons";

export interface IArticle {
    createdAt?: string;
    _id: string;
    slug: string;
    name: string;
    description?: string;
    text?: string;
    icon: IconType;
    body?: string;
    updatedAt?: string;
    favoritesCount?: number;
    author?: IUser;
}