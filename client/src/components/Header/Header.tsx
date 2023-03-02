import { FC } from "react";
import InlineSVG from "react-inlinesvg";

import Logo from "../../assets/icons/logo.svg"
import UserIcon from "../../assets/icons/userIcon.svg"

export const Header: FC = () => {
    return (
        <header className="bg-gray-700 text-white text-center py-4 flex justify-between items-center py-8 px-12">
            <div className="flex items-center">
                <InlineSVG src={Logo} className="h-10 w-10 mb-2" />
                <h2 className="ml-2">FastEning</h2>
            </div>
            <InlineSVG src={UserIcon} className="h-10 w-10 mb-2" />
        </header>
    );
};
