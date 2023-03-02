import {IUser} from "./user.interface";
import {IconType} from "react-icons";

export interface IArticle {
    id: number;
    slug: string;
    title: string;
    description: string;
    icon: IconType;
    body?: string;
    createdAt?: string;
    updatedAt?: string;
    favoritesCount?: number;
    author?: IUser;
}