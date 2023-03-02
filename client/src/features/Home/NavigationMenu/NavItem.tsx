import { FC } from "react";
import { NavLink } from "react-router-dom";
import InlineSVG from "react-inlinesvg";

type NavItemProps = {
    to: string;
    icon: string;
    label: string;
};

export const NavItem: FC<NavItemProps> = ({ to, icon, label }) => (
    <li className="mb-4">
        <NavLink
            to={to}
            className="text-white hover:text-gray-300 underline flex items-center"
        >
            <div className="flex items-center">
                <InlineSVG src={icon} className="w-8 h-8 mr-6" />
                <span className="px-4 text-lg border-l-2">{label}</span>
            </div>
        </NavLink>
    </li>
);
