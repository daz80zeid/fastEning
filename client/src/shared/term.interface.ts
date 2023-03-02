import {IconType} from "react-icons";

export interface ITerm {
    id: number;
    slug: string;
    description: string;
    title: string;
    text: string;
    icon: IconType
}