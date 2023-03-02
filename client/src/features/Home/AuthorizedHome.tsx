import { FC } from "react";
import {navItems} from "../../utils/navLinks";
import {NavItem} from "./NavigationMenu/NavItem";

export const AuthorizedHome: FC = () => {
    return (
        <div>
            <ul className="flex flex-col justify-center">
                {navItems.map((item) => (
                    <NavItem key={item.to} {...item} />
                ))}
            </ul>
        </div>
    );
};
