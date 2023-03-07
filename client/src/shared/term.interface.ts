import {IconType} from "react-icons";

export interface ITerm {
    _id: string;
    slug: string;
    description: string;
    name: string;
    text: string;
    icon: IconType
}